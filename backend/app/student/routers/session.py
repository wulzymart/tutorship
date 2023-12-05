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


@router.get("/{student_id}/session", tags=[Tags.get],
            response_model=List[SessionRes])
async def get_sessions(student_id: str,
                               db: Session = Depends(get_db),
                               token: str = Depends(oauth2_scheme)):
    """ Operation to get all the sessin a student is enrolled in """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found",
                            status_code=404)

    return student.sessions


@router.get("/{student_id}/session/{session_id}", tags=[Tags.get],
            response_model=SessionRes)
async def get_session(student_id: str, session_id: str,
                              db: Session = Depends(get_db),
                              token: str = Depends(oauth2_scheme)):
    """ Operation to get a session from the database collection """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found",
                            status_code=404)

    session = db.get(Session, session_id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)

    return session


@router.post("/{student_id}/session/{session_id}", tags=[Tags.post],
             response_model=SessionRes)
async def add_student_session(student_id: str, session_id: str,
                              db: Session = Depends(get_db),
                              token: str = Depends(oauth2_scheme)):
    """ Operation to add a session to a students session collection """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found",
                            status_code=404)

    session = db.get(Session, session_id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)

    if session not in student.sessions:
        student.sessions.append(session)
        db.save()

    return session


@router.delete("/{student_id}/session/{session_id}", tags=[Tags.delete])
async def delete_session(student_id: str, session_id: str,
                         db: SS = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """
    Operation to remove a session from a students sessions repository
    """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found",
                            status_code=404)

    session = db.get(Session, session_id)
    if not session or session not in student.sessions:
        raise HTTPException(detail="session not found", status_code=404)

    student.sessions.remove(session)
    db.save()

    return {}
