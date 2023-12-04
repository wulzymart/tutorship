#!/usr/bin/python3
"""
This module contains the response model for the generated OAuth token
"""
from pydantic import BaseModel
from typing import Union


class Token(BaseModel):
    """Model for authentication token"""
    access_token: str
    token_type: str
