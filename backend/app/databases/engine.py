#!/usr/bin/python3
"""
This module contains the class that is used to establish control
 interaction between the ORMs and the database
"""
import os
from models.basemodel import Base
from models.comment import Comment
from models.course import Course
from models.review import Review
from models.session import Session
from models.student import Student
from models.tag import Tag
from models.tutor import Tutor
from models.video import Video
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


class Engine():
    """
    Engine to control transactions with the database
    """
    host = os.getenv("HOST")
    port = os.getenv("PORT")
    user = os.getenv("USER")
    pwd = os.getenv("DB_PWD")
    db = os.getenv("DB")
    __url = f'mysql+mysqldb://{user}:{pwd}@{host}:{port}/{db}'

    def __init__(self):
        """Initialize a new engine instance"""
        self.__engine = create_engine(self.__url, echo=False,
                                      pool_pre_ping=False)
        Session = sessionmaker(bind=self.__engine)
        self.__session = Session()

    def all(self, cls=None):
        """
        get all the rows for all classes in the table if no cls is explicitely
        provide else return all the rows in the class __tablename__
        """
        if cls:
            objs = self.__session.query(cls).all()
        else:
            __classes = {"Comment": Comment, "Course": Course,
                         "Profile": Profile, "Review": Review,
                         "Session": Session, "Student": Student,
                         "Tutor": Tutor, "Video": Video}
            objs = []
            for cls in __classes:
                objs + self.__session.query(__classes[cls]).all()
        return objs

    def get(self, cls, id):
        """get a single element from a table with given id"""
        return self.__session.query(cls).filter_by(id=id).first()

    def delete(self, obj):
        """ Delete an object from a table """
        if obj:
            self.__session.delete(obj)
            self.save()

    def save(self):
        """ Write changes to the database """
        self.__session.commit()
        self.reload()

    def reload(self):
        """ Update the session object """
        Base.metadata.create_all(bind=self.__engine)
        Session = sessionmaker(self.__engine, expire_on_commit=False)
        self.__session = Session()

    def close(self):
        """ Close connection to the database """
        self.__session.close()

    def update(self, obj, *args, **kwargs):
        """ Update the field for an object """
        if kwargs:
            for k, v in kwargs.items():
                if k not in ["id", "created_at", "updated_at"] and\
                   hasattr(obj, k):
                    setattr(obj, k, v)

    def new(self, obj):
        """ Add an object to the current database session """
        self.__session.add(obj)

    def get_user_by_email(self, cls, username):
        """ Method to query the database and filter using email """
        return self.__session.query(cls).filter_by(email=username).first()
