"use server"
import Button from "@/app/components/utils/Button";
import Header2 from "@/app/components/utils/Header2";

const SingleCourse = () => {
  return (
    <div>
      <section className="flex justify-between">
        <Header2 text="Course title" />
        <Button text= "Publish" handleClick={()=>{}}/>
      </section>
    </div>
  );
};

export default SingleCourse;
