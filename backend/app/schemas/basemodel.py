#!/usr/bin/python3
"""
This module contains the Basemodel class that contains the most common
pydantic model fields for all other pydantic models
"""
from datetime import datetime


class Base():
    """Base pydantic model"""
    id: str
    created_at: datetime
    updated_at: datetime

    class Config():
        from_attributes = True
