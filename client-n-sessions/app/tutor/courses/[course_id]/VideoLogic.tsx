"use client";
import Button from "@/app/components/utils/Button";
import Header3 from "@/app/components/utils/Header3";
import VideoList from "./VideoList";

const VideoLogic = () => {
  return (
    <section className="w-1/3">
      <div className="flex justify-between items-center mb-4">
        <Header3 text="Videos" />
        <Button text="Add" handleClick={() => console.log("Add video")} />
      </div>
      <VideoList />
      {/* <AddVideo /> */}
    </section>
  );
};

export default VideoLogic;
