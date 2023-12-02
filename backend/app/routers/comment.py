#!/usr/bin/python3
"""
This module contains the operations used to control input and output of
comments into the comments table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from models.comment import Comment
from models.student import Student
from models.video import Video
from routers.method_tags import Tags
from schemas.comment import CommentReq
from schemas.comment import CommentRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter(prefix="/comment")


@router.get("/", response_model=List[CommentRes], tags=[Tags.get])
async def get_comments(db: Session = Depends(get_db)):
    """ Operation to get all comments in the database """
    comments = db.all(Comment)

    return comments


@router.get("/{comment_id}", response_model=CommentRes, tags=[Tags.get])
async def get_comment(comment_id: str, db: Session = Depends(get_db)):
    """ Operation to get a comment with the id supplied in the path """
    commment = db.get(Comment, comment_id)
    if not comment:
        raise HTTPException(detail="comment not found", status_code=404)

    return comment


@router.post("/{student_id}/{video_id}", tags=[Tags.post],
             response_model=CommentRes)
async def create_comment(req: CommentReq, student_id: str, video_id: str,
                         db: Session = Depends(get_db)):
    """ Operation to create a new comment for a new video """
    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    comment = Comment(**dict(req))
    comment.video_id = video_id
    comment.student_id = student_id
    video.comments.append(comment)
    student.comments.append(comment)
    db.new(comment)
    db.save()

    return comment


@router.put("/{video_id}/{comment_id}", tags=[Tags.put],
            response_model=CommentRes)
async def update_video_comment(req: CommentReq, video_id: str,
                               comment_id: str, db: Session = Depends(get_db)):
    """ Operation that controls the udpating of a comment """
    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    comment = db.get(Comment, comment_id)
    if not comment or comment not in video.comments:
        raise HTTPException(detail="comment not found", status_code=404)

    db.update(comment, **dict(req))
    db.save()

    return comment


@router.delete("/{video_id}/{comment_id}", tags=[Tags.delete])
async def delete_comment(video_id: str, comment_id: str,
                         db: Session = Depends(get_db)):
    """ Operaton to delete a comment from the comments database """
    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    comment = db.get(Comment, comment_id)
    if not comment or comment not in video.comments:
        raise HTTPException(detail="comment not found", status_code=404)

    db.delete(comment)
    db.save()

    return {}
