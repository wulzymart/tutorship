#!/usr/bin/python3
"""
This module contains the ORM for the sessions table
"""

from models.basemodel import Base
from models.basemodel import Basemodel
from models.tables.student_session import student_session
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import DateTime
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship


class Session(Basemodel, Base):
    """
    ORM for the session table
    """
    __tablename__ = "sessions"
    tutor_id = Column(String(36), ForeignKey("tutors.id"), nullable=False)
    datetime = Column(DateTime, nullable=False)
    about = Column(String(1027), nullable=False)
    link = Column(String(255), nullable=False)
    students = relationship("Student", backref="sessions", viewonly=False,
                            secondary=student_session)
