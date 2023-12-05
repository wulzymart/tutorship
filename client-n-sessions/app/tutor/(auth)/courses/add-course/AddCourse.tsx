"use client"
import Button from "@/app/components/utils/Button";
import TextArea from "@/app/components/utils/TextArea";
import TextInput from "@/app/components/utils/TextInput";
import { useState } from "react";
import TagInput from "./TagInput";

import { useRouter } from 'next/navigation'


const AddCourseUtil =  () => {
  const [courseName, setCourseName] = useState("");
  const [about, setAbout] = useState("");
  const [free, setFree] = useState(false);
  const [price, setPrice] = useState(0);
  const [categories, setCategorie] = useState([]);
  const router = useRouter()

  const handleAddCourse = async () => {
    
    
    const res = await fetch(
      "https://bookish-potato-j9vqw47rxg5h5pw6-8000.app.github.dev/course/40f2ba49-6684-4a01-8cef-f5c6f91f2563",
      {
        method: "POST",
        mode: "cors",
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ title: courseName, about, price, free }),
      }
    );
    const courseInfo = await res.json();
    console.log(`/tutor/courses/${courseInfo.id}`);
    router.push(`/tutor/courses/${courseInfo.id}`);
  };
  return (
    <div className="mb-10">
      <form onSubmit={async (e) => {
        e.preventDefault()
        await handleAddCourse()
      }}>
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
          <Button text="Add" type="submit" handleClick={handleAddCourse} />
        </div>
      </form>
    </div>
  );
};
export default AddCourseUtil;
