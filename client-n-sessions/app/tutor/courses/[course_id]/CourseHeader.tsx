"use client";

import Button from "@/app/components/utils/Button";
import Header2 from "@/app/components/utils/Header2";

const CourseHeader = () => {
  return (
    <section className="flex justify-between items-center mb-20">
      <Header2 text="Course title" />
      <div className="flex gap-5">
        <Button
          text="Publish"
          handleClick={() => {
            console.log("publish");
          }}
        />
        <Button
          text="Edit"
          handleClick={() => {
            console.log("Edit");
          }}
        />
        <Button
          text="Delete"
          handleClick={() => {
            console.log("Delete");
          }}
        />
      </div>
    </section>
  );
};

export default CourseHeader;
