#!/usr/bin/python3
"""
This module contains the operation that controls data input and output from the
session table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from models.session import Session
from models.student import Student
from models.tutor import Tutor
from schemas.session import SessionReq
from schemas.session import SessionRes
from schemas.student import StudentRes
from sqlalchemy.orm import Session as SS
from typing import List

router = APIRouter(prefix="/session")


@router.get("/", response_model=List[SessionRes])
async def get_sessions(db: SS = Depends(get_db)):
    """ Operation to retrieve all sessions in the sessions table """
    sessions = db.all(Session)

    return sessions


@router.get("/{id}", response_model=SessionRes)
async def get_session(id: str, db: SS = Depends(get_db)):
    """ Operation to retrieve a session with a given id """
    session = db.get(Session, id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)

    return session


@router.get("/{session_id}/students", response_model=List[StudentRes])
async def get_session_students(session_id: str, db: SS = Depends(get_db)):
    session = db.get(Session, session_id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)
    return session.students


@router.post("/{tutor_id}", response_model=SessionRes)
async def create_session(req: SessionReq, tutor_id: str,
                         db: SS = Depends(get_db)):
    """ Operation for an author to create a new session """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    session = Session(**dict(req))
    session.tutor_id = tutor_id
    tutor.sessions.append(session)
    db.new(session)
    db.save()

    return session


@router.put("/{tutor_id}/{session_id}", response_model=SessionRes)
async def update_session(req: SessionReq, tutor_id: str, session_id: str,
                         db: SS = Depends(get_db)):
    """ Operation to update a session information """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    session = db.get(Session, session_id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)

    db.update(session, **dict(req))
    db.save()

    return session


@router.delete("/{tutor_id}/{session_id}")
async def delete_session(tutor_id: str, session_id: str,
                         db: SS = Depends(get_db)):
    """ Operation to delete a session from the sessions table """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    session = db.get(Session, session_id)
    if not session or session not in tutor.sessions:
        raise HTTPException(detail="session not found", status_code=404)

    db.delete(session)
    db.save()

    return {}
