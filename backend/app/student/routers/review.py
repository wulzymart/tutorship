#!/usr/bin/python3
"""
This module contains the operations that controls input and output of review
intor hte reviews table
"""
from dependencies.engine import get_db
from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from models.course import Course
from models.review import Review
from models.student import Student
from routers.method_tags import Tags
from schemas.review import ReviewReq
from schemas.review import ReviewRes
from sqlalchemy.orm import Session
from typing import List

router = APIRouter()


@router.get("/", response_model=List[ReviewRes], tags=[Tags.get])
async def get_reviews(db: Session = Depends(get_db)):
    """ Operation to list all revies in the reviews """
    reviews = db.all(Review)

    return reviews


@router.get("/{id}", response_model=ReviewRes, tags=[Tags.get])
async def get_review(id: str, db: Session = Depends(get_db)):
    """
    Operation to get a review with a given id from the reviews table
    """
    review = db.get(Review, id)
    if not review:
        raise HTTPException(detail="review not found", status_code=404)

    return review


@router.post("/{student_id}/{course_id}", tags=[Tags.post],
             response_model=ReviewRes)
async def create_review(req: ReviewReq, student_id: str,
                        course_id: str,  db: Session = Depends(get_db)):
    """ Operation to add a new review made by a student """
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)
    review = Review(**dict(req))
    review.student_id = student_id
    review.course_id = course_id
    db.new(review)
    student.reviews.append(review)
    course.reviews.append(review)
    db.save()

    return review


@router.put("/{student_id}/{course_id}/{review_id}", tags=[Tags.put],
            response_model=ReviewRes)
async def update_couse_review(req: ReviewReq,
                              student_id: str, course_id: str, review_id: str,
                              db: Session = Depends(get_db)):
    """ Operation to update a course review left by a student """
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    review = db.get(Review, review_id)
    if not review:
        raise HTTPException(detail="review not found", status_code=404)

    db.update(review, **dict(req))
    db.save()
    return review


@router.delete("/{student_id}/{course_id}/{review_id}", tags=[Tags.delete],
               response_model=ReviewRes)
async def delete_course_review(req: ReviewReq,
                               student_id: str, course_id: str, review_id: str,
                               db: Session = Depends(get_db)):
    """ Operation to delete a review linked to a course """
    student = db.get(Student, student_id)
    if not student:
        raise HTTPException(detail="student not found", status_code=404)

    course = db.get(Course, course_id)
    if not course:
        raise HTTPException(detail="course not found", status_code=404)

    review = db.get(Review, review_id)
    if not review or review not in course.reviews:
        raise HTTPException(detail="review not found", status_code=404)

    db.delete(review)
    return {}
