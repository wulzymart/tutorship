import CourseHeader from "./CourseHeader";
import Header3 from "@/app/components/utils/Header3";
import ReviewList from "@/app/components/entities/reviews/ReviewList";
import VideoLogic from "./VideoLogic";

const SingleCourse = async ({ params }: { params: { course_id: string } }) => {
  const { course_id } = params;
  const courseData = await fetch(`http://127.0.0.1:8000/course/${course_id}`, {
    next: { revalidate: 24 * 60 * 60 },
  }).then((res) => res.json());
  return (
    <div>
      <CourseHeader title={courseData.title} id={courseData.id} />
      <div className="flex gap-10">
        <section className="w-2/3">
          <div>
            <Header3 text="About" />
            <div>
              <p>{courseData.about}</p>
            </div>
          </div>
          <div>
            <Header3 text="Reviews" />
            <ReviewList />
          </div>
        </section>
        <VideoLogic />
      </div>
    </div>
  );
};

export default SingleCourse;
