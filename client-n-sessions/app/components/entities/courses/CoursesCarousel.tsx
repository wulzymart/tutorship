"use client";
import { useState, useCallback, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { CourseInfoCardInterface } from "@/app/interfaces/Interfaces";
import CourseInfoCard from "./CourseInfoCard";

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};
const CoursesCarousel = ({
  courses,
}: {
  courses: CourseInfoCardInterface[];
}) => {
  const isMobile = useMediaQuery(768);
  const isMedium = useMediaQuery(1024);
  const viewNumber = isMobile ? 1 : isMedium ? 3 : 4;
  return (
    <Swiper
      slidesPerView={viewNumber}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {courses.map((course, i) => {
        const {
          id,
          course_name,
          tutor_name,
          registeredCourse,
          thumbnail_url,
          rating,
        } = course;
        return (
          <SwiperSlide key={id}>
            <CourseInfoCard
              id={id}
              course_name={course_name}
              tutor_name={tutor_name}
              registeredCourse={registeredCourse}
              thumbnail_url={thumbnail_url}
              rating={rating}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CoursesCarousel;
