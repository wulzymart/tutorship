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
      next: { tags: ["course"] },
      headers: {
        authorization: `bearer ${access_token}`,
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  ).then((res) => res.json());
  console.log(courseData);

  return (
    <div>
      <CourseHeader
        title={courseData.title}
        id={courseData.id}
        course={courseData}
      />
      <div className="flex gap-10">
        <section className="w-2/3">
          <div>
            <Header3 text="About" />
            <div className="flex flex-col gap-6">
              <p>{courseData.about}</p>
              <div>
                {courseData.free ? (
                  <p className="px-2 rounded bg-green-400 text-white w-fit">
                    free
                  </p>
                ) : (
                  <p className="font-medium">Price: {courseData.price}</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <Header3 text="Reviews" />
            <ReviewList />
          </div>
        </section>
        <VideoLogic
          courseId={course_id}
          tutorId={tutorId as string}
          access_token={access_token as string}
        />
      </div>
    </div>
  );
};

export default SingleCourse;
