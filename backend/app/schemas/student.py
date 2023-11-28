#!/usr/bin/python3
"""
This module contains the pydantic models for validating data in and out of
the student database
"""
from schemas.basemodel import Base
from schemas.profile import Profile
from pydantic import BaseModel
from schemas.course import CourseRes
from schemas.comment import CommentRes
from schemas.review import ReviewRes
from typing import List


class StudentReq(Profile, BaseModel):
    """
    The pydantic model for validating data input into the student table
    """


class StudentRes(Base, StudentReq):
    """
    The pydantic model to use in validating data output from the student
    table
    """
