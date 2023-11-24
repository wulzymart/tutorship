import Header2 from "@/app/components/utils/Header2";
import Thumbnail from "@/app/components/utils/Thumbnail";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import Header3 from "@/app/components/utils/Header3";
import Collapse, { CollapseProps } from "rc-collapse";
import Header6 from "@/app/components/utils/Header6";
import Rating from "../../utils/Rating";
import Accordion from "../../utils/Accordion";
const CourseOverview = ({ course }: { course: any }) => {
  const items: CollapseProps["items"] = course.videos.map((video: any) => {
    return {
      label: (
        <div className="bg-slate-50 px-[2%] py-4 mb-2 w-full">
          <Header6 text={video.topic} />
        </div>
      ),
      key: video.id,
      children: (
        <div>
          {video.videoList.map((vid: any) => (
            <div key={vid.id} className="flex justify-between mb-2">
              <p>{vid.title}</p>
              <p>
                {Math.floor(vid.duration / 60)}:{vid.duration % 60}
              </p>
            </div>
          ))}
        </div>
      ),
      className: "bg-slate-50 px-5",
    };
  });
  return (
    <div>
      <div className="flex bg-main py-10 px-20 items-center">
        <div className=" text-white p-10">
          <div>
            <Header2 text={course.title} />
          </div>
          <div className="text-sm flex gap-4 font-light text-front">
            {course.cartegories.map((cartegory: any) => (
              <Link key={cartegory} href="">
                {cartegory}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-lg font-medium">{course.summary}</p>
          </div>
          <div>
            <p className="font font-medium">Tutor: {course.tutor_name}</p>
          </div>
          <Rating rating={course.rating} />
          <div className="flex gap-4 py-2 items-center">
            <FaGlobe />
            <p>{course.language}</p>
          </div>
        </div>
        <div>
          <Thumbnail
            alt={course.title}
            src={course.course_imgurl}
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="flex py-20">
        <div className="w-[80%] px-32  flex flex-col gap-10">
          <div>
            <Header3 text="Objectives" />
            <div dangerouslySetInnerHTML={{ __html: course.objectives }} />
          </div>
          <div>
            <Header3 text="Descriptions" />
            <div dangerouslySetInnerHTML={{ __html: course.description }} />
          </div>
          <div>
            <Header3 text="Requirements" />
            <div dangerouslySetInnerHTML={{ __html: course.requirements }} />
          </div>
        </div>
        <div className="w-[20%]">
          <Header3 text="Content" />
          <Accordion items={items} className="px-5 w-full" />
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
