#!/usr/bin/python3
"""
This module contains the tag table that holds all the tags for different
courses
"""
from models.basemodel import Base
from models.basemodel import Basemodel
from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import String


class Tag(Basemodel, Base):
    """
    Tag table ORM
    """
    __tablename__ = "tags"
    name = Column(String(36), nullable=False)
    course_id = Column(String(36), ForeignKey("courses.id"), nullable=False)
