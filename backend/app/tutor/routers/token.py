#!/usr/bin/python3
"""
This module contains the router for generating the access token
"""
from datetime import timedelta
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from misc.gen_tok import create_access_token
from misc.safesphere import authenticate
from models.tutor import Tutor
from routers.method_tags import Tags
from schemas.token import Token
from sqlalchemy.orm import Session

ACCESS_TOKEN_EXPIRE_MINUTES = 30

router = APIRouter()


@router.post("/token", response_model=Token, tags=[Tags.post])
async def get_user_token(db: Session = Depends(get_db),
                         login_info: OAuth2PasswordRequestForm = Depends()):
    """
    Operation to generate access token for a user on sign in
    """
    user = authenticate(db, Tutor, login_info.username, login_info.password)
    if not user:
        raise HTTPException(detail="Incorrect Username or Password",
                            status_code=401)

    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.id},
        expires_delta=access_token_expires)

    return {"access_token": access_token, "token_type": "bearer"}
