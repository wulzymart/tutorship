"use client";
import CourseInfoCard from "@/app/components/entities/courses/CourseInfoCard";
import Slider from "react-slick";

const CourseCarousel = ({
  courses,
}: {
  courses: {
    id: string;
    title: string;
    description: string;
    commentCount: number;
    video_url: string;
    free: boolean;
    published: boolean;
  }[];
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {courses.map((course) => (
          <CourseInfoCard
            course_name={""}
            thumbnail_url={""}
            rating={0}
            key={course.id}
            {...course}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CourseCarousel;
