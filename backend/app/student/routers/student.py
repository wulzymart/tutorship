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
from models.session import Session as SS
from models.student import Student
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


@router.get("/{student_id}", response_model=StudentRes, tags=[Tags.get],
            response_model_exclude=["password"])
async def get_student(student_id: str, token: str = Depends(oauth2_scheme),
                      db: Session = Depends(get_db)):
    """ Operation to get an existing student from the databases """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found", status_code=404)

    return student


@router.post("/", response_model=StudentRes, tags=[Tags.post],
             response_model_exclude=["password"])
async def create_new_student(req: StudentReq, db: Session = Depends(get_db)):
    """ Operation to add new student to the database """
    try:
        req.password = encrypt(req.password)
        student = Student(**dict(req))
        db.new(student)
        db.save()

        return student
    except IntegrityError as e:
        raise HTTPException(detail="Email already exist", status_code=409)


@router.put("/{student_id}", response_model=StudentRes, tags=[Tags.put],
            response_model_exclude=["password"])
def update_student(req: StudentReq, student_id: str,
                   db: Session = Depends(get_db),
                   token: str = Depends(oauth2_scheme)):
    """ Operation to update a student data in the student table """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found",
                            status_code=404)

    try:
        req.password = encrypt(req.password)
        db.update(student, **dict(req))
        db.save()
        db.reload()

        return student
    except IntegrityError as e:
        raise HTTPException(detail="Email already exists", status_code=409)


@router.delete("/{student_id}", tags=[Tags.delete])
async def delete_student(student_id: str, db: Session = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operation to delete a student from the database """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found",
                            status_code=404)
    db.delete(student)

    return {}
