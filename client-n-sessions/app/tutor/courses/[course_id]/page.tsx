import Button from "@/app/components/utils/Button";
import Header2 from "@/app/components/utils/Header2";

const SingleCourse = () => {
  return (
    <div>
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
      <section>
        <VideoList />
        <AddVideo />
      </section>
    </div>
  );
};

export default SingleCourse;
