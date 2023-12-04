#!/usr/bin/python3
"""
This module is the main module that fun the fastapi application
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from admin.routers import comment
from admin.routers import course
from admin.routers import review
from admin.routers import session
from admin.routers import student
from admin.routers import tutor
from admin.routers import video

app = FastAPI()

app.include_router(comment.router)
app.include_router(course.router)
app.include_router(review.router)
app.include_router(session.router)
app.include_router(student.router)
app.include_router(tutor.router)
app.include_router(video.router)
