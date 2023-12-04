#!/usr/bin/python3
"""
This module contains the base class containing the pydantic fields to be
inherited by the tutor and student pydantic models
"""
from datetime import date
from pydantic import EmailStr


class Profile():
    """
    Profile pydantic class to be inherited by the tutor and student model
    """
    email: EmailStr
    firstname: str
    lastname: str
    password: str
    address: str
    state: str
    country: str
    dob: date
