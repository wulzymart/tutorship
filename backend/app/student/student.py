#!/usr/bin/python3
"""
This module contains the student app
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from student.routers import comment
from student.routers import course
from student.routers import review
from student.routers import session
from student.routers import student
from student.routers import token
from student.routers import tutor
from student.routers import video

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
