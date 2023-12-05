#!/usr/bin/python3
"""
This module is the main module that fun the fastapi application
"""
from admin import admin
from student import student
from tutor import tutor
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_headers=["*"],
    allow_methods=["*"],
    allow_credentials=["*"]
    )

app.mount("/admin", admin.app)
app.mount("/student", student.app)
app.mount("/tutor", tutor.app)
