#!/usr/bin/python3
"""
This module contains operations that controls the input and output of data from
the videos table
"""
import json
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi import Response
from fastapi import UploadFile
from fastapi.responses import FileResponse
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
from models.video import Video
from models.course import Course
from models.student import Student
from routers.method_tags import Tags
from schemas.video import VideoReq
from schemas.video import VideoRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(prefix="/video")


@router.get("{student_id}/course/{course_id}/videos", tags=[Tags.get],
            response_model=List[VideoRes])
async def get_videos(student_id: str, course_id: str,
                     db: Session = Depends(get_db),
                     token: str = Depends(oauth2_scheme)):
    """ Operation to get all video associated with a course"""
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    return course.videos


@router.get("{student_id}/course/{course_id}/video-data/{video_id}",
            response_model=VideoRes,
            tags=[Tags.get])
async def get_video(student_id: str, course_id: str, video_id: str,
                    db: Session = Depends(get_db),
                    token: str = Depends(oauth2_scheme)):
    """ Operation to get a video associated with a course"""
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="Video not found", status_code=404)

    return video


@router.get("{student_id}/course/{course_id}/video-file/{video_id}",
            tags=[Tags.get], response_class=FileResponse)
async def get_video_file(response: Response, student_id: str,
                         course_id: str, video_id: str,
                         db: Session = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operation to get the video file linked to a video id """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="Video not found", status_code=404)

    header_model = VideoRes(**(video.to_dict()))
    response.headers["X-metadata"]  = header_model.model_dump_json()

    return f"/tmp/uploads/{video.id}"
