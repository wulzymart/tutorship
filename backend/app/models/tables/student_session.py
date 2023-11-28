#!/usr/bin/python3
"""
This module contains the secondary table for establishing many-to-many
relationship between the student and the session ORM
"""

from models.basemodel import Base
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import Table
from sqlalchemy import ForeignKey

student_session = Table("student_session", Base.metadata,
                        Column("student_id", String(36),
                               ForeignKey("students.id"),
                               primary_key=True, nullable=False),
                        Column("session_id", String(36),
                               ForeignKey("sessions.id"),
                               primary_key=True, nullable=False))
