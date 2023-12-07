import CourseInfoCard from "@/app/components/entities/courses/CourseInfoCard";
import { logout } from "@/app/functions";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const CoursesPage = async () => {
  const headersList = headers();
  const tutorId = headersList.get("tutor_id");
  const access_token = headersList.get("tutor_token");
  const res = await fetch(`http://127.0.0.1:8000/tutor/${tutorId}/courses`, {
    cache: "no-cache",
    headers: {
      authorization: `bearer ${access_token}`,
    },
  });
  if (res.status < 500 && res.status >= 400) {
    logout("tutor");
    redirect("/tutor/login");
  }
  const tutorCourses = await res.json();

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
        {tutorCourses.map((course: any) => (
          <CourseInfoCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
