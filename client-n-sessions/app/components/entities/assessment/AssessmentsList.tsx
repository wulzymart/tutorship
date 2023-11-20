import { AssessmentCardInterface } from "@/app/interfaces/Interfaces";
import AssessmentCard from "./AssessmentCard";

const AssessmentsList = () => {
  const assessments: AssessmentCardInterface[] = [
    {
      id: "1",
      course_title: "Python is fun",
      topic: "Zen of Python",
      score: 80,
    },
    {
      id: "1",
      course_title: "Python is fun",
      topic: "Python Lists",
      score: 90,
    },
    {
      id: "1",
      course_title: "JavaScript is fun",
      topic: "Variable naming",
      score: 100,
    },
    {
      id: "4",
      course_title: "C is fun",
      topic: "Preprocessor",
      score: 87,
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full max-h-[400px] overflow-scroll scrollbar">
      {assessments.map((assessment) => (
        <AssessmentCard key={assessment.id} {...assessment} />
      ))}
    </div>
  );
};

export default AssessmentsList;
