import Button from "@/app/components/utils/Button";
import Header5 from "@/app/components/utils/Header5";
import AddCourseUtil from "./AddCourse";
import { headers } from "next/headers";

const AddCourse = () => {
  const tutorId = headers().get("tutor_id");
  return (
    <div>
      <div className="mb-20">
        <h2 className="text-2xl text-center capitalize">New Course</h2>
      </div>
      <div className="flex flex-col gap-10">
        <Header5 text="Please provide all course details" />
        <AddCourseUtil id={tutorId as string} />
      </div>
    </div>
  );
};

export default AddCourse;
