#!/usr/bin/python3
"""
This module contains the router that controls the operations that enable
input and output from the courses table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from models.course import Course
from models.tutor import Tutor
from schemas.course import CourseReq
from schemas.course import CourseRes
from schemas.review import ReviewRes
from schemas.video import VideoRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(prefix="/course")


@router.get("/", response_model=List[CourseRes])
async def get_courses(db: Session = Depends(get_db)):
    """ Operation to get all courses in the courses table """
    courses = db.all(Course)

    return courses


@router.get("/{id}", response_model=CourseRes)
async def get_course(id: str, db: Session = Depends(get_db)):
    """ Operation to get a course with a given id """
    course = db.get(Course, id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course


@router.get("/{course_id}/reviews", response_model=List[ReviewRes])
async def get_course_reviews(course_id: str, db: Session = Depends(get_db)):
    """ Operation to get all course reviews """
    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course.reviews


@router.get("/{course_id}/videos", response_model=List[VideoRes])
async def get_course_videos(course_id: str, db: Session = Depends(get_db)):
    """ Operation to get all the courses linked to a course """
    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course.videos


@router.post("/{tutor_id}", response_model=CourseRes)
async def create_course(req: CourseReq, tutor_id: str,
                        db: Session = Depends(get_db)):
    """ Operation to allow an author create a new course """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    course = Course(**dict(req))
    course.tutor_id = tutor_id
    tutor.courses.append(course)
    db.save()

    return course


@router.put("/{tutor_id}/{course_id}", response_model=CourseRes)
async def update_course(req: CourseReq, tutor_id: str, course_id: str,
                        db: Session = Depends(get_db)):
    """ Operation to update a course information by an author """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    course = db.get(Course, course_id)
    if not course or course not in tutor.courses:
        raise HTTPException(detail="course not found", status_code=404)
    db.update(course, **dict(req))
    db.save()

    return course


@router.delete("{tutor_id}/{course_id}")
async def delete_course(tutor_id: str, course_id: str,
                        db: Session = Depends(get_db)):
    """
    Operation to delete a course from an authors course repository
    """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    course = db.get(Course, course_id)
    if not course or course not in tutor.courses:
        raise HTTPException(detail="course not found", status_code=404)
    db.delete(course)

    return {}
