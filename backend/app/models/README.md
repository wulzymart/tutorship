# Description of modules
The Models package contains the modules housing the various SQLAlchemy ORM used to define our DB tables

1. Tutor

This module contains the tutor ORM. The table inherits from the profile class which defines the basic info from a user of the application.
To know more about the profile kindly visit the profile section of this documentation
Additional fields defined in this table are;
 * bio
   This field holds a brief of an author
 * experience
   This field holds information about the authors experience
 * certifications
   This field holds the various certification owned by the author
 * links
   This field contains external links where more can be read about the author
 * contact
   This field contains the authors contact
 * subjects
   This field holds information about the various subject that the author teaches
 * students
   This field establishes a many-to-many relationship with the students table and contains the students subscribed to a particular author
 * courses
   This field establishes a one to many relationship with the courses table and contains a list of all courses that the author have put out
 * sessions
   This field establishes a one-to-many relationship with the sessions table and contains a list of all session held or to be held by an author

2. Student


This module contains the student ORM. The table inherits from the profile class with the following additional fields.
 * courses
   This field establishes a relationship with the with the courses table and indicates the courses that a student is enrolled in

3. Course

This module contains the course ORM. The fields defined in the table are as follows
 * tutor_id
   This field is constrained to the id field of the tutor table and contains the id of the tutor who owns the course
 * description
   This field contains information about the course and what it is all about
 * payment_stat
   This field contains information about the status of the course wether it is paid or free
 * price
   This field contains the price that the course is going for if paid
 * reviews
   This field contains user reviews for a particular course
 * videos
   This field contains a list of videos linked to a course

4. Comment

This module contains the comments on a video ORM. The fields defined in the table are as follows;
 * text
   This field contains the content of the comment by a student
 * student_id
   This field is constrained to the student table and holds the id of the student that own the comment

5. Review

This module contains the review on a course ORM. The fields defined in the table are as follows;
 * text
   This field contains the actual review by a student
 * tutor_id
   This field is constrained to the id field of the tutor table and holds the id of the tutor who owns the course being reviewed
 * student_id
   This field is contrained to the id field of the student table and holds the id of the student who made the review


6. Session

This module contains the ORM for the session table. The fields defined in this table are as follows;
 * tutor_id
   This field is constrained to the id field of the tutor table and holds the id of the tutor who is conducting the session
 * datetime
   This field contains the date and time in which the session is to be held
 * description
   This field contains the description of the session to be held

7. Student
This module contains the ORM for the students table. The class inherits from the Profile class which contains the basic info about a user. The other fields defined in the ORM are as follows;
 * courses
   This field establishes a many-to-many relationship between the course table and the student table and holds the courses offered by a particular student
 * comments
   This fields establishes a one-to-many relationship between a student and a comments. It contains the comments made by a student on a course
 * reviews
   This fields establishes a one-to-many relationship between a student and the reviews table. It contains a reviews made by students on a course

8. Video

This module contains the ORM for course videos. The fields defined in this class are as follows;
 * title
   This fields contains the title of the video
 * tutor_id
   This field is constrained to the id column of the tutor table and holds the id of the tutor who owns the course
 * comments
   This field establishes a relationship between a video and a comment. It holds all of the comments made on a particular video.

## Meta Packages
1. Tables
This package contains modules housing classes containing secondary table for establishing many-to-many relationships

## Meta Modules
1. basemodel
This module contains class Basemodel that contains all of the basic class attributes and methods shared by all of the ORMs described above

2. profile
This module contains the Profile class that defines all of the common filed owned by user (Student and Tutors)