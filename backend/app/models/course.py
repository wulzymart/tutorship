#!/usr/bin/python3
"""
This module contains the ORM for the course table
"""

from models.basemodel import Base
from models.basemodel import Basemodel
from sqlalchemy import Boolean
from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.orm import relationship
from models.tables.course_tag import course_tag


class Course(Basemodel, Base):
    """
    Course ORM
    """
    __tablename__ = "courses"
    tutor_id = Column(String(36), ForeignKey("tutors.id"), nullable=False)
    title = Column(String(256), nullable=False)
    about = Column(String(1027), nullable=False)
    price = Column(Integer, nullable=False, default=0)
    free = Column(Boolean, nullable=False, default=False)
    published = Column(Boolean, nullable=False, default=False)
    reviews = relationship("Review", backref="course", cascade="all, delete")
    videos = relationship("Video", backref="course", cascade="all, delete")
    tags = relationship("Tag", backref="courses", secondary=course_tag,
                        cascade="all, delete", viewonly=False)
