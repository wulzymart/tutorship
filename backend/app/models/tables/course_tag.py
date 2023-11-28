#!/usr/bin/python3
"""
This module contains the secondary table used to establish a many-to-many
relationship between the course and tag table
"""
from models.basemodel import Base
from sqlalchemy import Column
from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy import Table


course_tag = Table("course_tag", Base.metadata,
                   Column("course_id", String(36), ForeignKey("courses.id"),
                          primary_key=True, nullable=False),
                   Column("tag_id", String(36), ForeignKey("tags.id"),
                          primary_key=True, nullable=False)
                   )
