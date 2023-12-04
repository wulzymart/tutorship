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
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
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


@router.get("/{tutor_id}", response_model=TutorRes, tags=[Tags.get],
            response_model_exclude=["password"])
async def get_tutor(tutor_id: str, token: str = Depends(oauth2_scheme),
                    db: Session = Depends(get_db)):
    """ Operation to get a tutor with given id """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor


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
                       db: Session = Depends(get_db),
                       token: str = Depends(oauth2_scheme)):
    """ Operation to update the content of an existing tutor """
    verify_token(tutor_id, token)
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
async def delete_tutor(tutor_id: str, db: Session = Depends(get_db),
                       token: str = Depends(oauth2_scheme)):
    """ Operation to delete a tutor from the database"""
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    db.delete(tutor)

    return {}
