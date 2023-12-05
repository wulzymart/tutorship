#!/usr/bin/python3
"""
This module contains the router that controls the operations used to send data
to and from the tutor database
"""
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from dependencies.engine import get_db
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
from models.student import Student
from models.tutor import Tutor
from routers.method_tags import Tags
from schemas.course import CourseRes
from schemas.session import SessionRes
from schemas.student import StudentRes
from schemas.tutor import TutorReq
from schemas.tutor import TutorRes
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from typing import List

router = APIRouter()


@router.get("/{student_id}/tutors", response_model=List[TutorRes],
            tags=[Tags.get])
async def get_tutors(student_id: str, db: Session = Depends(get_db),
                     token: str = Depends(oauth2_scheme)):
    """ Operation to get all list of authors in a students repository """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found", status_code=404)

    return student.tutors


@router.get("/{student_id}/tutor/{tutor_id}", response_model=TutorRes,
            tags=[Tags.get],
            response_model_exclude=["password"])
async def get_tutor(student_id: str, tutor_id: str,
                    db: Session = Depends(get_db),
                    token: str = Depends(oauth2_scheme)):
    """ Operation to get a tutor with given id """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor


@router.post("/{student_id}/tutor/{tutor_id}/add_tutor",
             response_model=TutorRes, tags=[Tags.post],
             response_model_exclude=["password"])
async def add_tutor(student_id: str, tutor_id: str,
                    db: Session = Depends(get_db),
                    token: str = Depends(oauth2_scheme)):
    """ Operation to add a new tutor to a students list of tutors"""
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found", status_code=404)

    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    if tutor not in student.tutors:
        student.tutors.append(tutor)
        db.save()

    return tutor


@router.delete("/{student_id}/tutor/{tutor_id}", tags=[Tags.delete])
async def remove_tutor(student_id: str, tutor_id: str,
                       db: Session = Depends(get_db),
                       token: str = Depends(oauth2_scheme)):
    """ Operation to delete a tutor from a students list of tutors """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found", status_code=404)

    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    student.tutors.remove(tutor)
    db.save()
    return {}
