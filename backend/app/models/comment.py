#!/usr/bin/python3
"""
This module contains the comment ORM for a table
"""
from models.basemodel import Base
from models.basemodel import Basemodel
from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import String


class Comment(Basemodel, Base):
    """
    Video comment ORM
    """
    __tablename__ = "comments"
    text = Column(String(1027), nullable=False)
    student_id = Column(String(36), ForeignKey("students.id"), nullable=False)
    video_id = Column(String(36), ForeignKey("videos.id"), nullable=False)
