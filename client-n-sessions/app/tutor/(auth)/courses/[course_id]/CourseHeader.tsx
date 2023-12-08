"use client";

import Button from "@/app/components/utils/Button";
import Header2 from "@/app/components/utils/Header2";
import Modal from "@/app/components/utils/Modal";
import AddCourseUtil from "../add-course/AddCourse";
import {
  publishCourse,
  unpublishCourse,
  deleteCourse,
  editCourse,
} from "./functions";
import { useState, useTransition } from "react";
import TextInput from "@/app/components/utils/TextInput";
import TextArea from "@/app/components/utils/TextArea";

const EditCourse = ({
  course,
  removeEdit,
}: {
  course: any;
  removeEdit: () => void;
}) => {
  const [edittedCourse, setEditedCourse] = useState(course);
  const [isEditing, startEditing] = useTransition();
  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;

    setEditedCourse({
      ...edittedCourse,
      [name]: name === "price" ? +value : value,
    });
  };
  const setFreeChange = () => {
    if (!edittedCourse.free) {
      setEditedCourse({ ...edittedCourse, price: 0, free: true });
    } else setEditedCourse({ ...edittedCourse, free: false });
  };

  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        if (edittedCourse.free) edittedCourse.price = 0;
        startEditing(() => editCourse(edittedCourse));
        removeEdit();
        (document.getElementById("edit-course") as HTMLDialogElement).close();
      }}
    >
      <div className="flex gap-10 items-center mb-10">
        <label className="font-medium" htmlFor="title">
          Title
        </label>
        <TextInput
          type={"text"}
          name="title"
          value={edittedCourse.title}
          handleChange={(e) =>
            handleEditChange(e as React.ChangeEvent<HTMLInputElement>)
          }
        />
      </div>
      <div className="flex flex-col gap-4 mb-10">
        <label className="font-medium" htmlFor="about">
          About
        </label>
        <TextArea
          className="bg-white w-full h-40 rounded-xl "
          name="about"
          value={edittedCourse.about}
          handleChange={(e) =>
            handleEditChange(e as React.ChangeEvent<HTMLTextAreaElement>)
          }
        />
      </div>
      {/* <div className="flex flex-col gap-4 mb-10">
          <label className="font-medium" htmlFor="tags">
            Tags
          </label>
          <TagInput />
        </div> */}
      <div className="flex flex-wrap gap-10">
        <div className="flex gap-4 items-center">
          <label className="font-medium" htmlFor="free">
            Free Course
          </label>
          <input
            className="bg-white w-5 h-5"
            type="checkbox"
            name="free"
            onChange={() => setFreeChange()}
            checked={edittedCourse.free}
          />
        </div>
        {!edittedCourse.free && (
          <div className="flex gap-4 items-center w-[300px]">
            <label className="font-medium" htmlFor="Price">
              Price($)
            </label>
            <TextInput
              type="number"
              name="price"
              value={edittedCourse.price}
              handleChange={(e) =>
                handleEditChange(e as React.ChangeEvent<HTMLInputElement>)
              }
            />
          </div>
        )}
      </div>
      <div className="text-right">
        <Button text="Save" type="submit" />
      </div>
    </form>
  );
};

const CourseHeader = ({
  title,
  id,
  course,
}: {
  title: string;
  id: string;
  course: any;
}) => {
  const [edit, setEdit] = useState(true);
  const [isPublishing, startPublishing] = useTransition();
  const [isUnpublishing, startUnpublishing] = useTransition();
  const [isDeleting, startDeleting] = useTransition();
  const removeEdit = () => setEdit(false);

  return (
    <section className="flex justify-between items-center mb-20">
      <Header2 text={title} />
      <div className="flex gap-5">
        {!course.published ? (
          <Button
            text="Publish"
            handleClick={() =>
              (
                document.getElementById("publish-course") as HTMLDialogElement
              ).showModal()
            }
          />
        ) : (
          <Button
            text="Unpublish"
            handleClick={() =>
              (
                document.getElementById("unpublish-course") as HTMLDialogElement
              ).showModal()
            }
          />
        )}
        <Button
          text="Edit"
          handleClick={() => {
            setEdit(true);
            (
              document.getElementById("edit-course") as HTMLDialogElement
            ).showModal();
          }}
        />
        {!course.published && (
          <Button
            text="Delete"
            handleClick={() =>
              (
                document.getElementById("delete-course") as HTMLDialogElement
              ).showModal()
            }
          />
        )}
      </div>
      <Modal id="publish-course">
        <div className="flex flex-col items-center gap-5 pt-10">
          <p className="text-lg font-bold">Confirm publish!</p>
          <div>
            <Button
              text="Ok"
              handleClick={() => {
                startPublishing(() => publishCourse(course));

                (
                  document.getElementById("publish-course") as HTMLDialogElement
                ).close();
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal id="unpublish-course">
        <div className="flex flex-col items-center gap-5 pt-10">
          <p className="text-lg font-bold">Confirm unpublish!</p>
          <div>
            <Button
              text="Ok"
              handleClick={() => {
                startUnpublishing(() => unpublishCourse(course));
                (
                  document.getElementById(
                    "unpublish-course"
                  ) as HTMLDialogElement
                ).close();
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal id="delete-course">
        <div className="flex flex-col items-center gap-5 pt-10">
          <p className="text-lg font-bold">Confirm delete!</p>
          <div>
            <Button
              text="Ok"
              handleClick={() => {
                startDeleting(() => deleteCourse(course.id));
                (
                  document.getElementById("delete-course") as HTMLDialogElement
                ).close();
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal id="edit-course" className="bg-yellow-50">
        {edit && <EditCourse course={course} removeEdit={removeEdit} />}
      </Modal>
    </section>
  );
};

export default CourseHeader;
