#!/usr/bin/python3
"""
This is a router used to generate access token for a fresh user login
"""
from datetime import datetime
from datetime import timedelta
from fastapi import Depends
from fastapi import HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from jose import JWTError
from typing import Union

ALGORITHM = "HS256"
SECRET_KEY = "fef6215b5db0f467c507278cc3fd8cf006182e67db27638299267a13aaa2f3ff"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def create_access_token(data: dict,
                        expires_delta: Union[timedelta, None] = None):
    """
    Function to create access token for user after successful authentication
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_token(user_id: str, token: str):
    """
    Function to ensure that a user token is not expired
    """
    credentials_exception = HTTPException(
        detail="Could not validate credentials", status_code=401,
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        token_id: str = payload.get("sub")
        if token_id is None or user_id != token_id:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
