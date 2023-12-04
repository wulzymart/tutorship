#!/usr/bin/python3
"""
This module contains operations that controls the input and output of data from
the videos table
"""
import os
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import File
from fastapi import Form
from fastapi import HTTPException
from fastapi import UploadFile
from fastapi.responses import FileResponse
from misc.gen_tok import verify_token
from misc.gen_tok import oauth2_scheme
from models.course import Course
from models.tutor import Tutor
from models.video import Video
from routers.method_tags import Tags
from schemas.comment import CommentRes
from schemas.video import VideoReq
from schemas.video import VideoRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()


@router.get("/{tutor_id}/course/{course_id}/video/{video_id}",
            response_model=VideoRes, tags=[Tags.get])
async def get_video(tutor_id: str, course_id: str, video_id: str,
                    db: Session = Depends(get_db),
                    token: str = Depends(oauth2_scheme)):
    """ Operation to get a video with given id from database"""
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    return video


@router.get("/{tutor_id}/course/{course_id}/video/{video_id}/comments",
            tags=[Tags.get], response_model=List[CommentRes])
async def get_video_comments(course_id: str, tutor_id: str,
                             video_id: str, db: Session = Depends(get_db),
                             token: str = Depends(oauth2_scheme)):
    """ Operation to get all the comments linked to a video """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="Video not found", status_code=404)

    return video.comments


@router.get("/{tutor_id}/course/{course_id}/video_file/{video_id}",
            tags=[Tags.get], response_class=FileResponse)
async def get_video_file(tutor_id: str, course_id: str, video_id: str,
                         db: Session = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operation to get the video file linked to a video id """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="Video not found", status_code=404)

    return f"/tmp/uploads/{video.id}"


@router.post("/{tutor_id}/course/{course_id}/save-video",
             tags=[Tags.post], response_model=VideoRes)
async def save_video_file(tutor_id: str, course_id: str,
                          title: str = Form(), description: str = Form(),
                          free: bool = Form(default=False),
                          published: bool = Form(default=False),
                          video_file: UploadFile = File(),
                          db: Session = Depends(get_db),
                          token: str = Depends(oauth2_scheme)):
    """ Operation to save a new video file associated with a course """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    req = VideoReq(title=title, description=description,
                   free=free, published=published)

    video = Video(**dict(req))
    video.course_id = course_id
    video.tutor_id = course.tutor_id
    video.video_url = video.id
    db.new(video)
    course.videos.append(video)
    db.save()

    with open(f"/tmp/uploads/{video.id}", "wb") as vidObj:
        while chunk := await video_file.read(1024):
            vidObj.write(chunk)

    return video


@router.put("/{tutor_id}/course/{course_id}/update-vid/{video_id}",
            tags=[Tags.put],
            response_model=VideoRes)
async def update_video(tutor_id: str, course_id: str, video_id: str,
                       title: str = Form(), description: str = Form(),
                       free: bool = Form(default=False),
                       published: bool = Form(default=False),
                       video_file: UploadFile = File(None),
                       db: Session = Depends(get_db),
                       token: str = Depends(oauth2_scheme)):
    """ Operation to update a video detail """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video or video not in course.videos:
        raise HTTPException(detail="video not found", status_code=404)

    req = VideoReq(title=title, description=description,
                   free=free, published=published)
    db.update(video, **dict(req))
    db.save()

    if video_file:
        with open(f"/tmp/uploads/{video.id}", "wb") as vidObj:
            while chunk := await video_file.read(1024):
                vidObj.write(chunk)

    return video


@router.delete("/{tutor_id}/course/{course_id}/delete-video/{video_id}",
               tags=[Tags.delete])
async def delete_video(tutor_id: str, course_id: str, video_id: str,
                       db: Session = Depends(get_db),
                       token: str = Depends(oauth2_scheme)):
    """ operation to remove a video from the video table """
    verify_token(tutor_id, token)
    tutor = db.get(Tutor, tutor_id)
    if not tutor:
        raise HTTPException(detail="tutor not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video or video not in course.videos:
        raise HTTPException(detail="Video not found", status_code=404)

    os.unlink(f"/tmp/uploads/{video.id}")
    db.delete(video)
    return {}
