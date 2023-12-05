#!/usr/bin/python3
"""
This module contains the endpoint for crud operations for the student table
"""
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from dependencies.engine import get_db
from misc.safesphere import encrypt
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
from models.course import Course
from models.student import Student
from models.session import Session as SS
from models.tutor import Tutor
from routers.method_tags import Tags
from schemas.comment import CommentRes
from schemas.course import CourseRes
from schemas.review import ReviewRes
from schemas.session import SessionRes
from schemas.student import StudentReq
from schemas.student import StudentRes
from schemas.tutor import TutorRes
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from typing import List

router = APIRouter()


@router.get("/{tutor_id}/students", tags=[Tags.get],
            response_model=List[StudentRes])
async def get_tutor_students(tutor_id: str, db: Session = Depends(get_db),
                             token: str = Depends(oauth2_scheme)):
    """ Operation to get all students learning from a tutor """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.students


@router.get("/{tutor_id}/student/{student_id}", response_model=StudentRes,
            tags=[Tags.get],
            response_model_exclude=["password"])
async def get_student(tutor_id: str, student_id: str,
                      db: Session = Depends(get_db),
                      token: str = Depends(oauth2_scheme)):
    """ Operation to get a student with given id """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    return student


@router.delete("/{tutor_id}/student/{student_id}", tags=[Tags.delete])
async def remove_student(tutor_id: str, student_id: str,
                         db: Session = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operation to delete a student from a tutors list of students """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found", status_code=404)

    tutor.students.remove(student)
    db.save()
    return {}
