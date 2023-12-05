"use client";
import Button from "@/app/components/utils/Button";
import Header3 from "@/app/components/utils/Header3";
import VideoList from "./VideoList";
import VideoUpload from "./VideoUpload";
import Modal from "@/app/components/utils/Modal";

const VideoLogic = () => {
  return (
    <section className="w-1/3">
      <div className="flex justify-between items-center mb-4">
        <Header3 text="Videos" />
        <Button
          text="Add"
          handleClick={() =>
            (
              document.getElementById("add-video") as HTMLFormElement
            ).showModal()
          }
        />
      </div>
      <VideoList />
      {/* <AddVideo /> */}
      <Modal id="add-video">
        <VideoUpload />
      </Modal>
    </section>
  );
};

export default VideoLogic;
