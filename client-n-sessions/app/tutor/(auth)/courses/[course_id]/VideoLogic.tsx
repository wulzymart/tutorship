"use client";
import Button from "@/app/components/utils/Button";
import Header3 from "@/app/components/utils/Header3";
import VideoList from "./VideoList";
import VideoUpload from "./VideoUpload";
import Modal from "@/app/components/utils/Modal";
import { QueryClient, QueryClientProvider } from "react-query";

const VideoLogic = ({
  courseId,
  tutorId,
  access_token,
}: {
  courseId: string;
  tutorId: string;
  access_token: string;
}) => {
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
      <QueryClientProvider client={new QueryClient()}>
        <VideoList
          courseId={courseId}
          tutorId={tutorId}
          access_token={access_token}
        />
      </QueryClientProvider>
      {/* <AddVideo /> */}
      <Modal id="add-video">
        <VideoUpload
          courseId={courseId}
          tutorId={tutorId}
          access_token={access_token}
        />
      </Modal>
    </section>
  );
};

export default VideoLogic;
