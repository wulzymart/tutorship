import { SessionCardInterface } from "@/app/interfaces/Interfaces";
import SessionCard from "./SessionCard";

const SessionsList = () => {
  const sessions: SessionCardInterface[] = [
    {
      id: "1",
      title: "Python is fun",
      tutor_name: "Johm Doe",
      date: new Date().toDateString(),
    },
    {
      id: "1",
      title: "Python is fun",
      tutor_name: "Johm Doe",
      date: new Date().toDateString(),
    },
    {
      id: "1",
      title: "Python is fun",
      tutor_name: "Johm Doe",
      date: new Date().toDateString(),
    },
    {
      id: "1",
      title: "Python is fun",
      tutor_name: "Johm Doe",
      date: new Date().toDateString(),
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full max-h-[400px] overflow-scroll scrollbar">
      {sessions.map((assessment) => (
        <SessionCard key={assessment.id} {...assessment} />
      ))}
    </div>
  );
};

export default SessionsList;
