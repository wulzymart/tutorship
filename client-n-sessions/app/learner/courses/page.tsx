"use client";
import RecommendedCourses from "@/app/components/entities/courses/RecommendedCourses";
import RegisteredCourses from "@/app/components/entities/courses/RegisteredCourses";
import React, { useState } from "react";

const Courses = () => {
  const [element, setElement] = useState("registered");
  return (
    <div>
      <div className="flex justify-center gap-10">
        <button onClick={() => setElement("registered")}>My Courses</button>
        <button onClick={() => setElement("recommended")}>
          Recommended Courses
        </button>
        {/* <Link href="">Wish List</Link>
        <Link href="">My Notes</Link> */}
      </div>
      {element == "registered" && <RegisteredCourses />}
      {element == "recommended" && <RecommendedCourses />}
    </div>
  );
};

export default Courses;
