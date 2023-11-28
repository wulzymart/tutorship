#!/usr/bin/python3
"""
This module contains the endpoint for crud operations for the student table
"""
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from dependencies.engine import get_db
from models.student import Student
from models.session import Session as SS
from models.tutor import Tutor
from schemas.comment import CommentRes
from schemas.review import ReviewRes
from schemas.session import SessionRes
from schemas.student import StudentReq
from schemas.student import StudentRes
from schemas.tutor import TutorRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(prefix="/student")


@router.get("/", response_model=List[StudentRes])
async def get_students(db: Session = Depends(get_db)):
    """ Operation to get all students in the database """
    students = db.all(Student)
    return students


@router.get("/{id}", response_model=StudentRes,
            response_model_exclude=["password"])
async def get_student(id: str, db: Session = Depends(get_db)):
    """ Operation to get an existing student from the databases """
    student = db.get(Student, id)
    if not student:
        raise HTTPException(detail="Student not found",
                            status_code=404)

    # To be worked on
    return student


@router.get("/{student_id}/reviews", response_model=List[ReviewRes])
async def get_student_reviews(student_id: str,
                              db: Session = Depends(get_db)):
    """ Operation to get all reviews linked to a student """
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found",
                            status_code=404)

    return student.reviews


@router.get("/{student_id}/sessions", response_model=List[SessionRes])
async def get_student_sessions(student_id: str,
                               db: Session = Depends(get_db)):
    """ Operation to get all the sessin a student is enrolled in """
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="Student not found",
                            status_code=404)

    return student.sessions


@router.get("{student_id}/tutors", response_model=List[TutorRes])
async def get_student_tutors(student_id: str, db: Session = Depends(get_db)):
    """ Operation to get all the tutors a student is learning from """
    student = db.get(Student, student_id)
    print("here")
    if not student:
        raise HTTPException(detail="student not found",
                            status_code=404)

    return student.tutors


@router.get("/{student_id}/session/{session_id}", response_model=SessionRes)
async def add_student_session(student_id: str, session_id: str,
                              db: Session = Depends(get_db)):
    """ Operation to add a session to a students session collection """
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found",
                            status_code=404)

    session = db.get(SS, session_id)
    if not session:
        raise HTTPException(detail="session not found", status_code=404)
    student.sessions.append(session)
    session.students.append(student)
    db.save()

    return session


@router.get("/{student_id}/comments", response_model=List[CommentRes])
async def get_student_comments(student_id: str, db: Session = Depends(get_db)):
    """ Operation to get all the comments linked to a student """
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    return student.comments


@router.post("/", response_model=StudentRes,
             response_model_exclude=["password"])
async def create_new_student(req: StudentReq, db: Session = Depends(get_db)):
    """ Operation to add new student to the database """
    student = Student(**dict(req))
    db.new(student)
    db.save()

    return student


@router.post("/{student_id}/tutors/{tutor_id}",
             response_model=TutorRes,
             response_model_exclude=["password"])
async def add_student_tutor(student_id: str, tutor_id: str,
                            db: Session = Depends(get_db)):
    """ Operation to add a tutor to students list of tutors """
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    student.tutors.append(tutor)
    tutor.students.append(student)
    db.save()

    return tutor


@router.put("/{id}", response_model=StudentRes,
            response_model_exclude=["password"])
def update_student(req: StudentReq, id: str, db: Session = Depends(get_db)):
    """ Operation to update a student data in the student table """
    student = db.get(Student, id)  # Optional pydantic fields to be worked on
    if not student:
        raise HTTPException(detail="Student not found",
                            status_code=404)

    db.update(student, **dict(req))
    db.save()
    db.reload()

    return student


@router.delete("/{id}")
async def delete_student(id: str, db: Session = Depends(get_db)):
    """ Operation to delete a student from the database """
    student = db.get(Student, id)
    if not student:
        raise HTTPException(detail="Student not found",
                            status_code=404)
    db.delete(student)

    return {}
