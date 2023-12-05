import Button from "@/app/components/utils/Button";
import Header5 from "@/app/components/utils/Header5";
import AddCourseUtil from "./AddCourse";

const AddCourse = () => {
  return (
    <div>
      <div className="mb-20">
        <h2 className="text-2xl text-center capitalize">New Course</h2>
      </div>
      <div className="flex flex-col gap-10">
        <Header5 text="Please provide all course details" />
        <AddCourseUtil />
      </div>
    </div>
  );
};

export default AddCourse;
