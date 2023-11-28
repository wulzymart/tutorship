"use client";
import { SessionCardInterface } from "@/app/interfaces/Interfaces";
import Header6 from "../../utils/Header6";

const SessionCard = ({ id, title, tutor_name, date }: SessionCardInterface) => {
  return (
    <div
      className="border-2 border-solid border-front text-main w-full px-10 py-2"
      onClick={() => console.log(id)}
    >
      <Header6 text={title} />
      <div className="flex justify-between w-full">
        {tutor_name && <p>{tutor_name}</p>}
        <p>{date}</p>
      </div>
    </div>
  );
};

export default SessionCard;
