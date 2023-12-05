"use client";
import CourseInfoCard from "@/app/components/entities/courses/CourseInfoCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseCarousel = ({
  courses,
}: {
  courses: {
    id: string;
    title: string;
    thumbnail_url: string;
    rating: number;
    sales: number;
  }[];
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {courses.map((course) => (
          <CourseInfoCard key={course.id} {...course} />
        ))}
      </Slider>
    </div>
  );
};

export default CourseCarousel;
