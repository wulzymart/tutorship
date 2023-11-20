import Image from "next/image";
import Search from "./components/utils/Search";
import Header3 from "./components/utils/Header3";
import RoundImage from "./components/utils/RoundImage";
import RecommendedTutors from "./components/entities/tutors/RecommendedTutors";
import RegisteredCourses from "./components/entities/courses/RegisteredCourses";
import RecommendedCourses from "./components/entities/courses/RecommendedCourses";
import AssessmentsList from "./components/entities/assessment/AssessmentsList";
import SessionsList from "./components/entities/sessions/SessionsList";

export default function Home() {
  return (
    <div>
      <section className="flex justify-between items-center bg-slate-50 p-10 rounded-lg mb-16">
        <div className="w-1/2 px-10">
          <div className="mb-10">
            <Header3 text="Search Courses" />
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div className="w-1/2 px-10">
          <Header3 text="Recommended Tutors" />
          <div className="mt-10">
            <RecommendedTutors />
          </div>
        </div>
      </section>
      <section className="bg-slate-50 p-10 rounded-lg mb-16">
        <div>
          <Header3 text="Registered Courses" />
          <RegisteredCourses />
        </div>
        <div>
          <Header3 text="Recommended Courses" />
          <RecommendedCourses />
        </div>
      </section>
      <section className="flex justify-between items-start bg-slate-50 p-10 rounded-lg mb-16">
        <div className="w-1/2 flex flex-col gap-10 pr-10">
          <Header3 text="Past Assessments" />
          <AssessmentsList />
        </div>
        <div className="w-1/2 flex flex-col gap-10 pl-10">
          <Header3 text="Upcoming Sessions" />
          <SessionsList />
        </div>
      </section>
    </div>
  );
}
