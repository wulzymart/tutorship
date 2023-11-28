#!/usr/bin/python3
"""
This module contains the router that controls the operations used to send data
to and from the tutor database
"""
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from dependencies.engine import get_db
from models.tutor import Tutor
from schemas.course import CourseRes
from schemas.session import SessionRes
from schemas.student import StudentRes
from schemas.tutor import TutorReq
from schemas.tutor import TutorRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(prefix="/tutor")


@router.get("/", response_model=List[TutorRes])
async def get_tutors(db: Session = Depends(get_db)):
    """ Operation to get all list of authors in a database """
    tutors = db.all(Tutor)

    return tutors


@router.get("/{id}", response_model=TutorRes,
            response_model_exclude=["password"])
async def get_tutor(id: str, db: Session = Depends(get_db)):
    """ Operation to get a tutor with given id """
    tutor = db.get(Tutor, id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor


@router.get("/{id}/courses", response_model=List[CourseRes])
async def get_tutors_courses(id: str, db: Session = Depends(get_db)):
    """ Operation to get all courses linked to a tutor """
    tutor = db.get(Tutor, id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.courses


@router.get("/{tutor_id}/sessions", response_model=List[SessionRes])
async def get_tutor_sessions(tutor_id: str, db: Session = Depends(get_db)):
    """ Operation to get the session linked to an author """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.sessions


@router.get("/{tutor_id}/students", response_model=List[StudentRes])
async def get_tutor_student(tutor_id: str, db: Session = Depends(get_db)):
    """ Operation to get all students learning from a tutor """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.students


@router.post("/", response_model=TutorRes,
             response_model_exclude=["password"])
async def create_tutor(req: TutorReq, db: Session = Depends(get_db)):
    """ Operation to create a new tutor """
    tutor = Tutor(**dict(req))
    db.new(tutor)
    db.save()

    return tutor


@router.put("/{id}", response_model=TutorRes,
            response_model_exclude=["password"])
async def update_tutor(req: TutorReq, id: str, db: Session = Depends(get_db)):
    """ Operation to update the content of an existing tutor """
    tutor = db.get(Tutor, id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    db.update(tutor, **dict(req))
    db.save()

    return tutor


@router.delete("/{id}")
async def delete_tutor(id: str, db: Session = Depends(get_db)):
    """ Operation to delete a tutor from the database"""
    tutor = db.get(Tutor, id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    db.delete(tutor)

    return {}
