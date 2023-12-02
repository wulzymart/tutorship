"use client";

import Button from "@/app/components/utils/Button";
import Header2 from "@/app/components/utils/Header2";
import Modal from "@/app/components/utils/Modal";
import AddCourseUtil from "../add-course/AddCourse";

const CourseHeader = () => {
  return (
    <section className="flex justify-between items-center mb-20">
      <Header2 text="Course title" />
      <div className="flex gap-5">
        <Button
          text="Publish"
          handleClick={() =>
            (
              document.getElementById("publish-course") as HTMLFormElement
            ).showModal()
          }
        />
        <Button
          text="Edit"
          handleClick={() =>
            (
              document.getElementById("edit-course") as HTMLFormElement
            ).showModal()
          }
        />
        <Button
          text="Delete"
          handleClick={() =>
            (
              document.getElementById("delete-course") as HTMLFormElement
            ).showModal()
          }
        />
      </div>
      <Modal id="publish-course">
        <div className="flex flex-col items-center gap-5 pt-10">
          <p className="text-lg font-bold">Confirm Publish!</p>
          <div>
            <Button text="Ok" handleClick={() => console.log("publih")} />
          </div>
        </div>
      </Modal>
      <Modal id="delete-course">
        <div className="flex flex-col items-center gap-5 pt-10">
          <p className="text-lg font-bold">Confirm delete!</p>
          <div>
            <Button text="Ok" handleClick={() => console.log("delete")} />
          </div>
        </div>
      </Modal>
      <Modal id="edit-course">
        <AddCourseUtil />
      </Modal>
    </section>
  );
};

export default CourseHeader;
