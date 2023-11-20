import { CourseInfoCardInterface } from "@/app/interfaces/Interfaces";
import CourseInfoCard from "./CourseInfoCard";

const Courses = ({ courses }: { courses: CourseInfoCardInterface[] }) => {
  return (
    <div className="flex ">
      {courses.map((course, i) => {
        const {
          id,
          course_name,
          tutor_name,
          registeredCourse,
          thumbnail_url,
          rating,
        } = course;
        return (
          <CourseInfoCard
            key={id}
            id={id}
            course_name={course_name}
            tutor_name={tutor_name}
            registeredCourse={registeredCourse}
            thumbnail_url={thumbnail_url}
            rating={rating}
          />
        );
      })}
    </div>
  );
};

export default Courses;
