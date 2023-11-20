import React from "react";
import Thumbnail from "../../utils/Thumbnail";
import Header5 from "../../utils/Header5";
import { CourseInfoCardInterface } from "@/app/interfaces/Interfaces";

const CourseInfoCard = ({
  id,
  course_name,
  tutor_name,
  registeredCourse,
  thumbnail_url,
  rating,
}: CourseInfoCardInterface) => {
  return (
    <div className="p-5 text-main2">
      <Thumbnail
        alt={course_name}
        src={thumbnail_url}
        height={356}
        width={200}
      />
      <Header5 text={course_name} />
      <p className="font-medium text-[16px]">{tutor_name}</p>
      <div className="text-sm flex justify-between">
        <p className="">{registeredCourse ? "Your Rating" : "Course Rating"}</p>
        <p className="">{rating}/5</p>
      </div>
    </div>
  );
};

export default CourseInfoCard;
