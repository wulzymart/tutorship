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
from models.course import Course
from models.student import Student
from models.video import Video
from routers.method_tags import Tags
from schemas.comment import CommentReq
from schemas.comment import CommentRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()


@router.get("/{student_id}/course/{course_id}/video/{video_id}/comments",
            response_model=List[CommentRes], tags=[Tags.get])
async def get_comments(student_id: str, course_id: str, video_id: str,
                       token: str = Depends(oauth2_scheme),
                       db: Session = Depends(get_db)):
    """ Operation to get all comments linked to a video """
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

    return video.comments


@router.get("/{student_id}/course/{course_id}/video/{video_id}/"
            "comment/{comment_id}",
            response_model=CommentRes, tags=[Tags.get])
async def get_comment(student_id: str, course_id: str, video_id: str,
                      comment_id: str, db: Session = Depends(get_db),
                      token: str = Depends(oauth2_scheme)):
    """ Operation to get a comment with the id supplied in the path """
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

    comment = db.get(Comment, comment_id)
    if not comment:
        raise HTTPException(detail="comment not found", status_code=404)

    return comment


@router.post("/{student_id}/course/{course_id}/video/{video_id}/new_comment",
             tags=[Tags.post], response_model=CommentRes)
async def create_comment(req: CommentReq, student_id: str, course_id: str,
                         video_id: str, db: Session = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operation to allow student comment on a video """
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

    comment = Comment(**dict(req))
    comment.video_id = video_id
    comment.student_id = student_id
    video.comments.append(comment)
    student.comments.append(comment)
    db.new(comment)
    db.save()

    return comment


@router.put("/{student_id}/course/{course_id}/video/{video_id}/edit_comment"
            "{comment_id}",
            tags=[Tags.put],
            response_model=CommentRes)
async def update_video_comment(req: CommentReq, student_id: str,
                               course_id: str, video_id: str,
                               comment_id: str,
                               db: Session = Depends(get_db),
                               token: str = Depends(oauth2_scheme)):
    """ Operation that controls the udpating of a comment """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    comment = db.get(Comment, comment_id)
    if not comment or comment not in video.comments:
        raise HTTPException(detail="comment not found", status_code=404)

    db.update(comment, **dict(req))
    db.save()

    return comment


@router.delete("/{student_id}/course/{course_id}/video/{video_id}/comment/"
               "{comment_id}",
               tags=[Tags.delete])
async def delete_comment(student_id: str,course_id: str,
                         video_id: str, comment_id: str,
                         db: Session = Depends(get_db),
                         token: str = Depends(oauth2_scheme)):
    """ Operaton to delete a comment from the comments database """
    verify_token(student_id, token)
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    video = db.get(Video, video_id)
    if not video:
        raise HTTPException(detail="video not found", status_code=404)

    comment = db.get(Comment, comment_id)
    if not comment or comment not in video.comments:
        raise HTTPException(detail="comment not found", status_code=404)

    db.delete(comment)
    return {}
