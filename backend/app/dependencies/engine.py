#!/usr/bin/python3
"""
This module contains the database engine dependency used to communicate
with the database
"""
from databases.engine import Engine


def get_db():
    """
    Dependency to initialize a database object and close the connection
    to the database
    """
    try:
        db = Engine()
        db.reload()
        yield db
    finally:
        db.close()
