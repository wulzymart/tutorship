import ReviewList from "@/app/components/entities/reviews/ReviewList";
import SessionsListTutor from "@/app/components/entities/sessions/SessionsListTutor";
import Header3 from "@/app/components/utils/Header3";
import RoundImage from "@/app/components/utils/RoundImage";
import React from "react";
import CourseCarousel from "./CourseCarousel";
import { jwtDecode } from "jwt-decode";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import AddCourseButton from "@/app/components/utils/AddCourseButton";

function log<T>(item: T) {
  console.log(item);
}
const TutorsDashboard = async () => {
  const id = headers().get("tutor_id");
  const access_token = headers().get("tutor_token");
  const tutorResponse = await fetch(
    `${process.env.SERVERADDRESS}/tutor/${id}`,
    {
      cache: "no-cache",
      headers: {
        authorization: `bearer ${access_token}`,
      },
    }
  );
  const tutorFromServer = await tutorResponse.json();
  const tutorCourses = await fetch(
    `${process.env.SERVERADDRESS}/tutor/${id}/courses`,
    {
      cache: "no-cache",
      headers: {
        authorization: `bearer ${access_token}`,
      },
    }
  ).then((res) => res.json());
  tutorCourses.forEach(function <T extends (typeof tutor.courses)[0]>(
    element: T
  ) {
    element.thumbnail_url =
      "https://idreamcareer.com/wp-content/uploads/2023/06/BE-Courses.webp";
    element.rating = 4.9;
    element.sales = 567;
  });
  log(tutorCourses);

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
            {tutorFromServer.firstname} {tutorFromServer.lastname}
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
        <div className="flex justify-between">
          <Header3 text="My courses" />
          <AddCourseButton />
        </div>
        <CourseCarousel courses={tutorCourses} />
        {/* <div className="flex flex-wrap">
          {tutor.courses.map((course) => (
            <CourseInfoCard key={course.id} {...course} />
          ))}
        </div> */}
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
