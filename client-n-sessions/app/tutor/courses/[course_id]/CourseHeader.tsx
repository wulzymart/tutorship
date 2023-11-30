"use client";

import Button from "@/app/components/utils/Button";
import Header2 from "@/app/components/utils/Header2";

const CourseHeader = () => {
  return (
    <section className="flex ">
      <Header2 text="Course title" />
      <div>
        <Button
          text="Publish"
          handleClick={() => {
            console.log("publish");
          }}
        />
      </div>
    </section>
  );
};

export default CourseHeader;
