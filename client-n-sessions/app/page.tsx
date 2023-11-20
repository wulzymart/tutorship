import Image from "next/image";
import Search from "./components/utils/Search";
import Header3 from "./components/utils/Header3";
import RoundImage from "./components/utils/RoundImage";
import RecommendedTutors from "./components/entities/tutors/RecommendedTutors";

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
      <section className="flex justify-between items-center bg-slate-50 p-10 rounded-lg">
        <div>
          <Header3 text="Registered Courses" />
          <div></div>
        </div>
      </section>
      <section></section>
    </div>
  );
}
