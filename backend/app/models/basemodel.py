#!/usr/bin/python3
"""
This module contains the base class for all the database ORM
"""

from datetime import datetime
from sqlalchemy import Column
from sqlalchemy import DateTime
from sqlalchemy import String
from sqlalchemy.orm import declarative_base
from uuid import uuid4

Base = declarative_base()


class Basemodel():
    """
    This is the basemodel that contains all common fields for the
    database tables
    """
    id = Column(String(36), nullable=False, primary_key=True)
    created_at = Column(DateTime, nullable=False)
    updated_at = Column(DateTime, nullable=False)

    def __init__(self, *args, **kwargs):
        """
        Initialize a new object based on the presence or absence of kwargs
        """
        self.id = str(uuid4())
        self.created_at = datetime.now()
        self.updated_at = datetime.now()
        if kwargs:
            for k, v in kwargs.items():
                if k not in ["id", "created_at", "updated_at"]:
                    setattr(self, k, v)

    def to_dict(self):
        """
        A dictionary representaion of the object
        """
        dict_rep = self.__dict__.copy()
        dict_rep.pop('_sa_instance_state')
        dict_rep["created_at"] = dict_rep["created_at"].strftime(
            "%Y-%m-%dT%H:%M:%S")
        dict_rep["updated_at"] = dict_rep["updated_at"].strftime(
            "%Y-%m-%dT%H:%M:%S")
        return dict_rep

    def __str__(self):
        """
        A human readable representation of the object
        """
        return f"{type(self).__name__}{self.to_dict()}"
