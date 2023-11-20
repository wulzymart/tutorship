import React from "react";
import Thumbnail from "../../utils/Thumbnail";
import Header5 from "../../utils/Header5";
import { CourseInfoCardInterface } from "@/app/interfaces/Interfaces";

const CourseInfoCard = ({
  course_name,
  tutor_name,
  registeredCourse,
  thumbnail_url,
}: CourseInfoCardInterface) => {
  return (
    <div>
      <Thumbnail alt={course_name} src={thumbnail_url} className="" />
      <Header5 text={course_name} />
      <p>Tutor: {tutor_name}</p>
      <div>
        <p>{registeredCourse ? "Your Rating" : "Course Rating"}</p>
        <p></p>
      </div>
    </div>
  );
};

export default CourseInfoCard;
