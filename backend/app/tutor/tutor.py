#!/usr/bin/python3
"""
This module contains the tutor app
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from tutor.routers import comment
from tutor.routers import course
from tutor.routers import review
from tutor.routers import session
from tutor.routers import student
from tutor.routers import token
from tutor.routers import tutor
from tutor.routers import video

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["*"],
    allow_methods=["*"],
    allow_credentials=["*"]
    )

app.include_router(token.router)
app.include_router(comment.router)
app.include_router(course.router)
app.include_router(review.router)
app.include_router(session.router)
app.include_router(student.router)
app.include_router(tutor.router)
app.include_router(video.router)
