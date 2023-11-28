#!/usr/bin/python3
"""
This module contains the ORM for the video table
"""
from models.basemodel import Base
from models.basemodel import Basemodel
from sqlalchemy import Column
from sqlalchemy import Enum
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.orm import relationship


class Video(Basemodel, Base):
    """
    Video ORM
    """
    __tablename__ = "videos"
    title = Column(String(256), nullable=False)
    tutor_id = Column(String(36), ForeignKey("tutors.id"), nullable=False)
    pay_cat = Column(Enum("Free", "Paid", name="status"), nullable=False)
    price = Column(Integer, nullable=False, default=0)
    comments = relationship("Comment", cascade="all, delete", backref="video")
    course_id = Column(String(36), ForeignKey("courses.id"), nullable=False)
    video_url = Column(String(255), nullable=False)
