#!/usr/bin/python3
"""
This module contains the operations that controls input and output of review
intor hte reviews table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
from models.course import Course
from models.review import Review
from models.student import Student
from routers.method_tags import Tags
from schemas.review import ReviewReq
from schemas.review import ReviewRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()


@router.get("{tutor_id}/course/{course_id}/course_reviews", tags=[Tags.get],
            response_model=List[ReviewRes])
async def get_course_reviews(tutor_id: str, course_id: str,
                             db: Session = Depends(get_db),
                             token: str = Depends(oauth2_scheme)):
    """ Operation to get all course reviews """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)
    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course.reviews
