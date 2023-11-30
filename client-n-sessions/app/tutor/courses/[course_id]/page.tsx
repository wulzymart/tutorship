import Button from "@/app/components/utils/Button";
import Header2 from "@/app/components/utils/Header2";
import CourseHeader from "./CourseHeader";
import VideoList from "./VideoList";

const SingleCourse = () => {
  return (
    <div>
      <CourseHeader />
      <section>
        <VideoList />
        {/* <AddVideo /> */}
      </section>
    </div>
  );
};

export default SingleCourse;
