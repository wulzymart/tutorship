#!/usr/bin/python3
"""
This module contains the secondary table for establishing many-to-many
relationship between the student and course ORM
"""

from models.basemodel import Base
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import Table
from sqlalchemy import ForeignKey


student_course = Table("student_course", Base.metadata,
                       Column("student_id", String(36),
                              ForeignKey("students.id"),
                              primary_key=True,
                              nullable=False),
                       Column("course_id", String(36),
                              ForeignKey("courses.id"),
                              primary_key=True,
                              nullable=False)
                       )
