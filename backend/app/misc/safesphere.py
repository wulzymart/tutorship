#!/usr/bin/python3
"""
This module contains the functions used to ensure security measures for users
"""
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def encrypt(pwd):
    """ Function to hash a password """
    return pwd_context.hash(pwd)


def verify(pwd, hashed):
    """ Function to decrypt an encrypted password """
    return pwd_context.verify(pwd, hashed)


def authenticate(db, app_cls, username, password):
    """ Function to authenticate a user for generation of token """
    user = db.get_user_by_email(app_cls, username)
    if not user:
        return False
    if not verify(password, user.password):
        return False

    return user
