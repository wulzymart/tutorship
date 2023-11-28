#!/usr/bin/python3
"""
This module contiains the pydantic model for validating the comment data
going in and out of the comment table
"""
from schemas.basemodel import Base
from pydantic import BaseModel


class CommentReq(BaseModel):
    """
    This model validates the data to be inserted into the comment table
    """
    text: str


class CommentRes(Base, CommentReq):
    """
    This model validates the data to be gotten from the comment table
    """
    video_id: str
    student_id: str
