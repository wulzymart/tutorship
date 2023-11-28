#!/usr/bin/python3
"""
This module is the main module that fun the fastapi application
"""
from fastapi import FastAPI
from routers import comment
from routers import course
from routers import review
from routers import session
from routers import student
from routers import tutor
from routers import video


app = FastAPI()

app.include_router(comment.router)
app.include_router(course.router)
app.include_router(review.router)
app.include_router(session.router)
app.include_router(student.router)
app.include_router(tutor.router)
app.include_router(video.router)
