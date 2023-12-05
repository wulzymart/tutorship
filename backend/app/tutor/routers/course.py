#!/usr/bin/python3
"""
This module contains the router that controls the operations that enable
input and output from the courses table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
from models.course import Course
from models.tutor import Tutor
from routers.method_tags import Tags
from schemas.course import CourseReq
from schemas.course import CourseRes
from schemas.review import ReviewRes
from schemas.student import StudentRes
from schemas.video import VideoRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()


@router.get("/{tutor_id}/course/{course_id}",
            response_model=CourseRes, tags=[Tags.get])
async def get_course(tutor_id: str, course_id: str,
                     db: Session = Depends(get_db),
                     token: str = Depends(oauth2_scheme)):
    """ Operation to get a course with a given id """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course


@router.get("/{tutor_id}/courses", response_model=List[CourseRes],
            tags=[Tags.get])
async def get_tutors_courses(tutor_id: str, db: Session = Depends(get_db),
                             token: str = Depends(oauth2_scheme)):
    """ Operation to get all courses linked to a tutor """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.courses


@router.get("/{tutor_id}/course/{course_id}/students", tags=[Tags.get],
            response_model=List[StudentRes])
async def get_course_students(tutor_id: str, course_id: str,
                              db: Session = Depends(get_db),
                              token: str = Depends(oauth2_scheme)):
    """ Operation to get all the students enrolled in a course """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course.students


@router.get("/{tutor_id}/course/{course_id}/videos", tags=[Tags.get],
            response_model=List[VideoRes])
async def get_course_videos(tutor_id: str, course_id: str,
                            db: Session = Depends(get_db),
                            token: str = Depends(oauth2_scheme)):
    """ Operation to get all the courses linked to a course """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course.videos


@router.post("/{tutor_id}/add_course",
             response_model=CourseRes, tags=[Tags.post])
async def create_course(req: CourseReq, tutor_id: str,
                        db: Session = Depends(get_db),
                        token: str = Depends(oauth2_scheme)):
    """ Operation to allow an author create a new course """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    course = Course(**dict(req))
    course.tutor_id = tutor_id
    tutor.courses.append(course)
    db.save()

    return course


@router.put("/{tutor_id}/{course_id}/update_course", tags=[Tags.put],
            response_model=CourseRes)
async def update_course(req: CourseReq, tutor_id: str, course_id: str,
                        db: Session = Depends(get_db),
                        token: str = Depends(oauth2_scheme)):
    """ Operation to update a course information by an author """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    db.update(course, **dict(req))
    db.save()

    return course


@router.delete("/{tutor_id}/{course_id}/delete_course", tags=[Tags.delete])
async def delete_course(tutor_id: str, course_id: str,
                        db: Session = Depends(get_db),
                        token: str = Depends(oauth2_scheme)):
    """
    Operation to delete a course from an authors course repository
    """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    course = db.get(Course, course_id)
    if not course or course not in tutor.courses:
        raise HTTPException(detail="course not found", status_code=404)
    db.delete(course)

    return {}
