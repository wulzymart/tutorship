#!/usr/bin/python3
"""
This module contains the ORM for the student table
"""

from models.basemodel import Base
from models.profile import Profile
from models.tables.student_course import student_course
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class Student(Profile, Base):
    """
    ORM for the student table
    """
    __tablename__ = "students"
    courses = relationship("Course", secondary="student_course",
                           viewonly=False, backref="students")
    comments = relationship("Comment", backref="student",
                            cascade="all, delete")
    reviews = relationship("Review", backref="student",
                           cascade="all, delete")
