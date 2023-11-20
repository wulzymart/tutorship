import React from "react";
import RoundImage from "../../utils/RoundImage";
import { BasicTutorInfoInterface } from "@/app/interfaces/Interfaces";

const TutorInfo = ({ name, subject, imgUrl }: BasicTutorInfoInterface) => {
  return (
    <button className="flex flex-col text-center items-center">
      <RoundImage alt={name} src={imgUrl} height={50} width={50} />
      <p className="text-main text-sm mt-2">{name}</p>
      <p className="text-sm text-front">{subject}</p>
    </button>
  );
};

export default TutorInfo;
