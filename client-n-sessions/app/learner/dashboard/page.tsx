import AssessmentsList from "@/app/components/entities/assessment/AssessmentsList";
import RecommendedCourses from "@/app/components/entities/courses/RecommendedCourses";
import RegisteredCourses from "@/app/components/entities/courses/RegisteredCourses";
import SessionsList from "@/app/components/entities/sessions/SessionsList";
import RecommendedTutors from "@/app/components/entities/tutors/RecommendedTutors";
import Header3 from "@/app/components/utils/Header3";
import Search from "@/app/components/utils/Search";

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
