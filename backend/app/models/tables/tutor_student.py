#!/usr/bin/python3
"""
This module contains the secondary table for forming a many-to-many
relationship between the student and tutor ORM
"""
from models.basemodel import Base
from sqlalchemy import Column
from sqlalchemy import String
from sqlalchemy import Table
from sqlalchemy import ForeignKey


tutor_student = Table("tutor_student", Base.metadata,
                      Column("tutor_id", String(36),
                             ForeignKey("tutors.id"),
                             primary_key=True,
                             nullable=False),
                      Column("student_id", String(36),
                             ForeignKey("students.id"),
                             primary_key=True,
                             nullable=False)
                      )
