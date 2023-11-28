#!/usr/bin/python3
"""
This model controls the validation of data going in and out of the review
table
"""
from pydantic import BaseModel
from schemas.basemodel import Base


class ReviewReq(BaseModel):
    """
    This model controls the validation of review request data
    """
    text: str


class ReviewRes(Base, ReviewReq):
    """
    This model controls the validation of review response data
    """
    student_id: str
    course_id: str
