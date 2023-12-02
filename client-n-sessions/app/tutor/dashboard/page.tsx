import CourseInfoCard from "@/app/components/entities/courses/CourseInfoCard";
import ReviewList from "@/app/components/entities/reviews/ReviewList";
import SessionsListTutor from "@/app/components/entities/sessions/SessionsListTutor";
import Header3 from "@/app/components/utils/Header3";
import Header5 from "@/app/components/utils/Header5";
import RoundImage from "@/app/components/utils/RoundImage";
import { course } from "@/app/data";
import React from "react";

const TutorsDashboard = () => {
  const tutor = {
    first_name: "John",
    last_name: "Doe",
    image_url:
      "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
    subject: "Python",
    courses: [
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
    ],
  };
  return (
    <div>
      <section className="flex justify-end items-center gap-4 bg-slate-50 p-10 rounded-lg mb-16">
        <p>
          Welcome{" "}
          <span className="italic font-medium">
            {tutor.first_name} {tutor.last_name}
          </span>
        </p>
        <RoundImage
          src={tutor.image_url}
          alt={tutor.first_name}
          height={35}
          width={35}
          border={2}
        />
      </section>
      <section className=" bg-slate-50 p-10 rounded-lg mb-16">
        <Header3 text="My courses" />
        <div className="flex flex-wrap">
          {tutor.courses.map((course) => (
            <CourseInfoCard key={course.id} {...course} />
          ))}
        </div>
      </section>
      <div className="bg-slate-50 p-10 rounded-lg mb-16 flex">
        <section className="w-1/2 px-5">
          <Header3 text="Reviews" />
          <div>
            <ReviewList />
          </div>
        </section>
        <section className="w-1/2 px-5">
          <Header3 text="Scheduled Sessions" />
          <div>
            <SessionsListTutor />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TutorsDashboard;
