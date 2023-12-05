"use client";
import Button from "@/app/components/utils/Button";
import Link from "next/link";
import React from "react";

const AddCourseButton = () => {
  return (
    <div className="flex justify-end">
      <Link href="/tutor/courses/add-course">
        <Button text="Add a Course" handleClick={() => {}} />
      </Link>
    </div>
  );
};

export default AddCourseButton;
