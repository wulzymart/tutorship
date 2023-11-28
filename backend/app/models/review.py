#!/usr/bin/python3
"""
This module contains the ORM for course reviews
"""

from models.basemodel import Base
from models.basemodel import Basemodel
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import ForeignKey


class Review(Basemodel, Base):
    """
    Review ORM
    """
    __tablename__ = "reviews"
    text = Column(String(36), nullable=False)
    student_id = Column(String(36), ForeignKey("students.id"), nullable=False)
    course_id = Column(String(36), ForeignKey("courses.id"), nullable=False)
