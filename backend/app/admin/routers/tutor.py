#!/usr/bin/python3
"""
This module contains the router that controls the operations used to send data
to and from the tutor database
"""
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from dependencies.engine import get_db
from misc.safesphere import encrypt
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

router = APIRouter(prefix="/tutor")


@router.get("/", response_model=List[TutorRes], tags=[Tags.get])
async def get_tutors(db: Session = Depends(get_db)):
    """ Operation to get all list of authors in a database """
    tutors = db.all(Tutor)

    return tutors


@router.get("/{tutor_id}", response_model=TutorRes, tags=[Tags.get],
            response_model_exclude=["password"])
async def get_tutor(tutor_id: str, db: Session = Depends(get_db)):
    """ Operation to get a tutor with given id """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor


@router.get("/{tutor_id}/courses", response_model=List[CourseRes],
            tags=[Tags.get])
async def get_tutors_courses(tutor_id: str, db: Session = Depends(get_db)):
    """ Operation to get all courses linked to a tutor """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.courses


@router.get("/{tutor_id}/sessions", tags=[Tags.get],
            response_model=List[SessionRes])
async def get_tutor_sessions(tutor_id: str, db: Session = Depends(get_db)):
    """ Operation to get the session linked to an author """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.sessions


@router.get("/{tutor_id}/students", tags=[Tags.get],
            response_model=List[StudentRes])
async def get_tutor_student(tutor_id: str, db: Session = Depends(get_db)):
    """ Operation to get all students learning from a tutor """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.students


@router.post("/", response_model=TutorRes, tags=[Tags.post],
             response_model_exclude=["password"])
async def create_tutor(req: TutorReq, db: Session = Depends(get_db)):
    """ Operation to create a new tutor """
    try:
        req.password = encrypt(req.password)
        tutor = Tutor(**dict(req))
        db.new(tutor)
        db.save()

        return tutor
    except IntegrityError as e:
        raise HTTPException(detail="Email already exists", status_code=409)


@router.put("/{tutor_id}", response_model=TutorRes, tags=[Tags.put],
            response_model_exclude=["password"])
async def update_tutor(req: TutorReq, tutor_id: str,
                       db: Session = Depends(get_db)):
    """ Operation to update the content of an existing tutor """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    try:
        req.password = encrypt(req.password)
        db.update(tutor, **dict(req))
        db.save()

        return tutor
    except IntegrityError as e:
        raise HTTPException(detail="Email already exists", status_code=409)


@router.delete("/{tutor_id}", tags=[Tags.delete])
async def delete_tutor(tutor_id: str, db: Session = Depends(get_db)):
    """ Operation to delete a tutor from the database"""
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    db.delete(tutor)

    return {}
