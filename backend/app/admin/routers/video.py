#!/usr/bin/python3
"""
This module contains operations that controls the input and output of data from
the videos table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi import UploadFile
from fastapi.responses import FileResponse
from models.video import Video
from models.course import Course
from routers.method_tags import Tags
from schemas.comment import CommentRes
from schemas.video import VideoReq
from schemas.video import VideoRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(prefix="/video")


@router.get("/", response_model=List[VideoRes], tags=[Tags.get])
async def get_videos(db: Session = Depends(get_db)):
    """ Operation to get all the videos in a database """
    videos = db.all(Video)

    return videos


@router.get("/{video_id}", response_model=VideoRes, tags=[Tags.get])
async def get_video(video_id: str, db: Session = Depends(get_db)):
    """ Operation to get a video with given id from database"""
    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    return video


@router.get("/{video_id}/comments", tags=[Tags.get],
            response_model=List[CommentRes])
async def get_video_comments(video_id: str, db: Session = Depends(get_db)):
    """ Operation to get all the comments linked to a video """
    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="Video not found", status_code=404)

    return video.comments


@router.get("/{video_id}/video_file", tags=[Tags.get],
            response_class=FileResponse)
async def get_video_file(video_id: str,
                         db: Session = Depends(get_db)):
    """ Operation to get the video file linked to a video id """
    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="Video not found", status_code=404)

    return f"/tmp/uploads/{video.id}"


@router.post("/{video_id}/save-file", tags=[Tags.post])
async def save_video_file(video_id: str, video_file: UploadFile,
                          db: Session = Depends(get_db)):
    """ Operation to save a new video file associated with a course """
    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    with open(f"/tmp/uploads/{video_id}", "wb") as vidObj:
        while chunk := await video_file.read(1024):
            vidObj.write(chunk)
    return {"video_url": f"{video_id}"}


@router.post("/{course_id}/save-info", tags=[Tags.post],
             response_model=VideoRes)
async def create_video_data(req: VideoReq, course_id: str,
                            db: Session = Depends(get_db)):
    """ Operation to save a new video info into the database """
    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = Video(**dict(req))
    video.course_id = course_id
    video.tutor_id = course.tutor_id
    video.video_url = video.id
    db.new(video)
    course.videos.append(video)
    db.save()

    return video


@router.put("/{course_id}/{video_id}", tags=[Tags.put],
            response_model=VideoRes)
async def update_video(req: VideoReq, course_id: str, video_id: str,
                       db: Session = Depends(get_db)):
    """ Operation to update a video detail """
    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video or video not in course.videos:
        raise HTTPException(detail="video not found", status_code=404)

    db.update(video, **dict(req))
    db.save()

    return video


@router.delete("/{course_id}/{video_id}", tags=[Tags.delete])
async def delete_video(course_id: str, video_id: str,
                       db: Session = Depends(get_db)):
    """ operation to remove a video from the video table """
    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video or video not in course.videos:
        raise HTTPException(detail="Video not found", status_code=404)

    # Deletion of video file not implemented
    db.delete(video)
    return {}
