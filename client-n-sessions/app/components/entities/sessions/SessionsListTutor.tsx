import { SessionCardInterface } from "@/app/interfaces/Interfaces";
import SessionCard from "./SessionCard";

const SessionsListTutor = () => {
  const sessions: SessionCardInterface[] = [
    {
      id: "1",
      title: "Python is fun",
      date: new Date().toDateString(),
    },
    {
      id: "2",
      title: "Python is fun",
      date: new Date().toDateString(),
    },
    {
      id: "3",
      title: "Python is fun",
      date: new Date().toDateString(),
    },
    {
      id: "4",
      title: "Python is fun",
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

export default SessionsListTutor;
