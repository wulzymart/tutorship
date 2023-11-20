"use client";
import { AssessmentCardInterface } from "@/app/interfaces/Interfaces";
import Header6 from "../../utils/Header6";

const AssessmentCard = ({
  course_title,
  topic,
  score,
  id,
}: AssessmentCardInterface) => {
  return (
    <div
      className="flex justify-between items-center border-2 border-solid border-front text-main w-full px-10 py-2"
      onClick={() => console.log(id)}
    >
      <div className="">
        <Header6 text={course_title} />
        <p>{topic}</p>
      </div>
      <p className="text-main2 text-xl font-semibold">{score}%</p>
    </div>
  );
};

export default AssessmentCard;
