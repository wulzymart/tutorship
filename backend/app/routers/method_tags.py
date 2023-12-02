#!/usr/bin/python3
"""
This module contains the class that defines the tags used to categorize all of
the paths defined in all router modules
"""
from enum import Enum


class Tags(Enum):
    """
    Defines the various tags to be used in categorizing similar path operations
    """
    get = "Get-Operations"
    post = "Post-Operations"
    put = "Put-Operations"
    delete = "Delete-Operations"
