#!/usr/bin/python3
"""
This module contains the pydantic model for validation of data to be sent
to or retrieved from the tutor table
"""
from pydantic import BaseModel
from pydantic import HttpUrl
from schemas.basemodel import Base
from schemas.course import CourseRes
from schemas.profile import Profile
from schemas.session import SessionRes
from schemas.student import StudentRes
from typing import List


class TutorReq(Profile, BaseModel):
    """
    The pydantic model to validate tutor request data
    """
    bio: str
    experience: str
    certifications: str
    links: HttpUrl
    contact: str
    subjects: str


class TutorRes(Base, TutorReq):
    """
    The pydantic model to validate tutor response data
    """
    # students: List[Student]
    # courses: List[Course]
    # sessions: List[Session]
