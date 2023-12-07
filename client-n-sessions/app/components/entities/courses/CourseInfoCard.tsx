import React from "react";
import Thumbnail from "../../utils/Thumbnail";
import Header5 from "../../utils/Header5";
import { CourseInfoCardInterface } from "@/app/interfaces/Interfaces";

const CourseInfoCard = ({
  id,
  title,
  tutor_name,
  registeredCourse = false,
  thumbnail_url,
  rating,
  sales,
  link,
}: CourseInfoCardInterface) => {
  return (
    <div className="p-5 text-main2">
      <Thumbnail
        alt={title}
        src={thumbnail_url}
        height={356}
        width={200}
        link={link}
      />
      <Header5 text={title} />
      <p className="font-medium text-[16px]">{tutor_name}</p>
      <div className="text-sm flex justify-between">
        <p className="">{registeredCourse ? "Your Rating" : "Rating"}</p>
        <p className="">{rating}/5</p>
      </div>
      {sales && (
        <div className="text-sm flex justify-between">
          <p className="">Sales</p>
          <p className="">{sales}</p>
        </div>
      )}
    </div>
  );
};

export default CourseInfoCard;
