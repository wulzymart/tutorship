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
from models.student import Student
from routers.method_tags import Tags
from schemas.course import CourseReq
from schemas.course import CourseRes
from schemas.review import ReviewRes
from schemas.student import StudentRes
from schemas.video import VideoRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()


@router.get("/{student_id}/courses", tags=[Tags.get],
            response_model=List[CourseRes])
async def get_student_courses(student_id: str, db: Session = Depends(get_db),
                              token: str = Depends(oauth2_scheme)):
    """
    Operation to get all the courses that a student is enrolled in
    """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    return student.courses


@router.get("/{student_id}/course/{course_id}",
            response_model=CourseRes, tags=[Tags.get])
async def get_course(student_id: str, course_id: str,
                     db: Session = Depends(get_db),
                     token: str = Depends(oauth2_scheme)):
    """ Operation to get a single course a student is enrolled in """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course


@router.post("/{student_id}/course/{course_id}", response_model=CourseRes,
             tags=[Tags.post])
async def add_course(student_id: str, course_id: str,
                     db: Session = Depends(get_db),
                     token: str = Depends(oauth2_scheme)):
    """ Operation to add a new course to a students course repository"""
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    if course not in student.courses:
        student.courses.append(course)
        db.save()

    return course


@router.delete("/{student_id}/course/{course_id}", tags=[Tags.delete])
async def remove_course(student_id: str, course_id: str,
                        db: Session = Depends(get_db),
                        token: str = Depends(oauth2_scheme)):
    """
    Operation to remove a course from an students course repository
    """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    student.courses.remove(course)
    db.save()

    return {}
