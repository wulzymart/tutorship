"use client";
import Button from "@/app/components/utils/Button";
import Header3 from "@/app/components/utils/Header3";
import VideoList from "./VideoList";
import VideoUpload from "./VideoUpload";

const VideoLogic = () => {
  return (
    <section className="w-1/3">
      <div className="flex justify-between items-center mb-4">
        <Header3 text="Videos" />
        <Button
          text="Add"
          handleClick={() => {
            (
              document.getElementById("my_modal_1") as HTMLFormElement
            ).showModal();
          }}
        />
      </div>
      <VideoList />
      {/* <AddVideo /> */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box scrollbar">
          <VideoUpload />
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default VideoLogic;
