#!/usr/bin/python3
"""
This module contains the ORM for the tutor table
"""


from models.basemodel import Base
from models.profile import Profile
from models.tables.tutor_student import tutor_student
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy.orm import relationship


class Tutor(Profile, Base):
    """
    ORM for the tutor table
    """
    __tablename__ = "tutors"
    bio = Column(String(1027), nullable=True)
    experience = Column(String(256), nullable=True)
    certifications = Column(String(256), nullable=True)
    links = Column(String(400), nullable=True)
    contact = Column(String(400), nullable=True)
    subjects = Column(String(1027), nullable=False)
    students = relationship("Student", backref="tutors",
                            secondary=tutor_student, viewonly=False)
    courses = relationship("Course", backref="tutor", cascade="all, delete")
    sessions = relationship("Session", backref="tutor", cascade="all, delete")
