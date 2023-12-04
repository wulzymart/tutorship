#!/usr/bin/python3
"""
This module contains the profile ORM for all users of the platform
"""

from models.basemodel import Basemodel
from sqlalchemy import Column
from sqlalchemy import Date
from sqlalchemy import String


class Profile(Basemodel):
    """ The base class for both users, tutor and students """
    email = Column(String(256), nullable=False, unique=True)
    firstname = Column(String(256), nullable=False)
    lastname = Column(String(256), nullable=False)
    password = Column(String(256), nullable=False)
    address = Column(String(256), nullable=False)
    state = Column(String(256), nullable=False)
    country = Column(String(256), nullable=False)
    dob = Column(Date, nullable=False)
