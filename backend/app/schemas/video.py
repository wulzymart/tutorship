#!/usr/bin/python3
"""
This module contains the pydantic models for validating input and output data
from the videos table
"""
from schemas.basemodel import Base
from schemas.comment import CommentRes
from pydantic import BaseModel
from typing import List


class VideoReq(BaseModel):
    """
    This model validates the video request data
    """
    title: str
    description: str
    free: bool = False
    published: bool = False


class VideoRes(Base, VideoReq):
    """
    This model validates the video response data from the video table
    """
    course_id: str
    tutor_id: str
    video_url: str
