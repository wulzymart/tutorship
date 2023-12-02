import Button from "@/app/components/utils/Button";
import TextArea from "@/app/components/utils/TextArea";
import TextInput from "@/app/components/utils/TextInput";
import { useState } from "react";
import TagInput from "./TagInput";
import { redirect } from "next/navigation";

const AddCourseUtil = async () => {
  const [courseName, setCourseName] = useState("");
  const [about, setAbout] = useState("");
  const [free, setFree] = useState(false);
  const [price, setPrice] = useState(0);
  const [categories, setCategorie] = useState([]);
  const handleAddCourse = async () => {
    const res = await fetch(
      "http://127.0.0.1/course/40f2ba49-6684-4a01-8cef-f5c6f91f2563",
      {
        method: "POST",
        body: JSON.stringify({ title: courseName, about, price, free }),
      }
    );
    const courseInfo = await res.json();
    redirect(`/tutor/coures/${courseInfo.id}`);
  };
  return (
    <div className="mb-10">
      <form action="">
        <div className="flex gap-10 items-center mb-10">
          <label className="font-medium" htmlFor="title">
            Title
          </label>
          <TextInput
            type={"text"}
            name="title"
            value={courseName}
            handleChange={(e) => setCourseName(e.currentTarget.value)}
          />
        </div>
        <div className="flex flex-col gap-4 mb-10">
          <label className="font-medium" htmlFor="about">
            About
          </label>
          <TextArea
            className="bg-white w-full h-40 rounded-lg"
            name="about"
            value={about}
            handleChange={(e) => setAbout(e.currentTarget.value)}
          />
        </div>
        <div className="flex flex-col gap-4 mb-10">
          <label className="font-medium" htmlFor="tags">
            Tags
          </label>
          <TagInput />
        </div>
        <div className="flex flex-wrap gap-10">
          <div className="flex gap-4 items-center">
            <label className="font-medium" htmlFor="free">
              Free Course
            </label>
            <input
              className="bg-white w-5 h-5"
              type="checkbox"
              onChange={() => setFree(!free)}
              checked={free}
            />
          </div>
          {!free && (
            <div className="flex gap-4 items-center w-[300px]">
              <label className="font-medium" htmlFor="Price">
                Price($)
              </label>
              <TextInput
                type="number"
                name="price"
                value={price}
                handleChange={(e) => setPrice(+e.currentTarget.value)}
              />
            </div>
          )}
        </div>
        <div className="text-right">
          <Button text="Add" handleClick={handleAddCourse} />
        </div>
      </form>
    </div>
  );
};
export default AddCourseUtil;
