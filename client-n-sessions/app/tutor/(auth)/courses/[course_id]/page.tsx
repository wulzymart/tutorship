import CourseHeader from "./CourseHeader";
import Header3 from "@/app/components/utils/Header3";
import ReviewList from "@/app/components/entities/reviews/ReviewList";
import VideoLogic from "./VideoLogic";
import { headers } from "next/headers";

const SingleCourse = async ({ params }: { params: { course_id: string } }) => {
  const { course_id } = params;
  const tutorId = headers().get("tutor_id");
  const access_token = headers().get("tutor_token");
  const courseData = await fetch(
    `${process.env.SERVERADDRESS}/tutor/${tutorId}/course/${course_id}`,
    {
      cache: "no-cache",
      headers: {
        authorization: `bearer ${access_token}`,
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  ).then((res) => res.json());
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
