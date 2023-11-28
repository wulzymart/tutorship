#!/usr/bin/python3
"""
This module contains the pydantic model to use in validating data to be sent to
and from the courses table
"""
from schemas.basemodel import Base
from pydantic import BaseModel
from typing import List


class CourseReq(BaseModel):
    """
    This model controls data validation from the Course request data
    """
    title: str
    about: str


class CourseRes(Base, CourseReq):
    """
    This model controls validation of data gotten from the comment table
    """
    tutor_id: str
