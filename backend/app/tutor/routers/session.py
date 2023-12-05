#!/usr/bin/python3
"""
This module contains the operation that controls data input and output from the
session table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
from models.session import Session
from models.student import Student
from models.tutor import Tutor
from routers.method_tags import Tags
from schemas.session import SessionReq
from schemas.session import SessionRes
from schemas.student import StudentRes
from sqlalchemy.orm import Session as SS
from typing import List

router = APIRouter()


@router.get("/{tutor_id}/sessions", response_model=List[SessionRes],
            tags=[Tags.get])
async def get_sessions(tutor_id: str, db: SS = Depends(get_db),
                       token: str = Depends(oauth2_scheme)):
    """
    Operation to retrieve all sessions linked to a tutor in the sessions table
    """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    return tutor.sessions


@router.get("/{tutor_id}/sessions/{session_id}", response_model=SessionRes,
            tags=[Tags.get])
async def get_session(tutor_id: str, session_id: str,
                      db: SS = Depends(get_db),
                      token: str = Depends(oauth2_scheme)):
    """ Operation to retrieve a session with a given id """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    session = db.get(Session, session_id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)

    return session


@router.get("/{tutor_id}/session/{session_id}/students", tags=[Tags.get],
            response_model=List[StudentRes])
async def get_session_students(tutor_id: str, session_id: str,
                               db: SS = Depends(get_db),
                               token: str = Depends(oauth2_scheme)):
    """ Operation to get all student session attendees """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    session = db.get(Session, session_id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)
    return session.students


@router.post("/{tutor_id}/new_session", response_model=SessionRes,
             tags=[Tags.post])
async def create_session(req: SessionReq, tutor_id: str,
                         db: SS = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operation for an author to create a new session """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    session = Session(**dict(req))
    session.tutor_id = tutor_id
    tutor.sessions.append(session)
    db.new(session)
    db.save()

    return session


@router.put("/{tutor_id}/session/{session_id}/update_session", tags=[Tags.put],
            response_model=SessionRes)
async def update_session(req: SessionReq, tutor_id: str, session_id: str,
                         db: SS = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operation to update a session information """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    session = db.get(Session, session_id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)

    db.update(session, **dict(req))
    db.save()

    return session


@router.delete("/{tutor_id}/session/{session_id}", tags=[Tags.delete])
async def delete_session(tutor_id: str, session_id: str,
                         db: SS = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operation to delete a session from the sessions table """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    session = db.get(Session, session_id)
    if not session or session not in tutor.sessions:
        raise HTTPException(detail="session not found", status_code=404)

    db.delete(session)

    return {}
