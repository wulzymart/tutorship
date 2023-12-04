#!/usr/bin/python3
"""
This module contains the pydantic model for validating data input and
out from the session table
"""
from schemas.basemodel import Base
from datetime import datetime
from pydantic import BaseModel
from pydantic import HttpUrl


class SessionReq(BaseModel):
    """
    This model validates the session request data
    """
    about: str
    datetime: datetime
    link: HttpUrl


class SessionRes(Base, SessionReq):
    """
    This model validates the session response data retrieved from the session
    table
    """
    tutor_id: str
