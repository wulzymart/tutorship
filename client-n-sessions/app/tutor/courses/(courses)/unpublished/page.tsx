import CourseInfoCard from "@/app/components/entities/courses/CourseInfoCard";
import React from "react";

const CoursesPage = () => {
  const courses = [
    {
      id: "1",
      course_name: "Python is cool",
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 4.9,
      sales: 567,
    },
    {
      id: "2",
      course_name: "Python is cool",
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 4.9,
      sales: 567,
    },
    {
      id: "3",
      course_name: "Python is cool",
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 4.9,
      sales: 567,
    },
    {
      id: "4",
      course_name: "Python is cool",
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 4.9,
      sales: 567,
    },
    {
      id: "5",
      course_name: "Python is cool",
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 4.9,
      sales: 567,
    },
    {
      id: "6",
      course_name: "Python is cool",
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 4.9,
      sales: 567,
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {courses.map((course) => (
          <CourseInfoCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
