import CourseInfoCard from "./CourseInfoCard";
import Courses from "./Courses";
import CoursesCarousel from "./CoursesCarousel";

const RegisteredCourses = () => {
  const courses = [
    {
      id: "1",
      course_name: "Python In 24hrs",
      tutor_name: "John Doe",
      registeredCourse: true,
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 4,
    },
    {
      id: "2",
      course_name: "Python In 24hrs",
      tutor_name: "John Doe",
      registeredCourse: true,
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 3,
    },
    {
      id: "3",
      course_name: "Python In 24hrs",
      tutor_name: "John Doe",
      registeredCourse: true,
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 5,
    },
    {
      id: "4",
      course_name: "Python In 24hrs",
      tutor_name: "John Doe",
      registeredCourse: true,
      thumbnail_url:
        "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp",
      rating: 5,
    },
  ];
  return <Courses courses={courses} />;
};

export default RegisteredCourses;
