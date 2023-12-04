#!/usr/bin/python3
"""
This module contains the operations used to control input and output of
comments into the comments table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
from models.comment import Comment
from models.student import Student
from models.video import Video
from routers.method_tags import Tags
from schemas.comment import CommentReq
from schemas.comment import CommentRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()


@router.get("/{tutor_id}/{course_id}/{video_id}/comments",
            response_model=List[CommentRes],
            tags=[Tags.get])
async def get_comments(tutor_id: str, course_id: str, video_id: str,
                       db: Session = Depends(get_db),
                       token: str = Depends(oauth2_scheme)):
    """ Operation to get all comments linked to a tutors video """
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course or course not in tutor.courses:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    return video.comments
