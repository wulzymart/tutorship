"use client";
import Header6 from "@/app/components/utils/Header6";
import Modal from "@/app/components/utils/Modal";
import Player from "@/app/components/utils/Player";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { publishVideo, deleteVideo, unpublishVideo } from "./functions";
import Button from "@/app/components/utils/Button";
import { jwtDecode } from "jwt-decode";
import { FileInput } from "./VideoUpload";

const EditVideo = ({
  id,
  title,
  description,
  free,
  published,
  thumbnail_url,
  access_token,
  courseId,
}: {
  id: string;
  title: string;
  description: string;
  free: boolean;
  published: boolean;
  thumbnail_url?: string;
  access_token: string;
  courseId: string;
}) => {
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editfree, setEditFree] = useState(free);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const reset = () => {
    setEditTitle(title);
    setEditDescription(description);
    setEditFree(free);
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    // Perform upload logic here (e.g., using a file upload API)
    if (!title || !description) return;
    const formData = new FormData();
    formData.append("title", editTitle);
    formData.append("description", editDescription);
    formData.append("free", String(editfree));
    formData.append("published", String(published));
    selectedFile && formData.append("video_file", selectedFile);
    const tutorId = jwtDecode(access_token)?.sub;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/update-video/${id}`,
      {
        cache: "no-cache",
        method: "PUT",
        headers: {
          authorization: `bearer ${access_token}`,
          // "Content-Type": "multipart/form-data",
          // // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData,
      }
    );
    if (res.status < 300) {
      const video = await res.json();
      setEditFree(free);
      reset();
      (document.getElementById(`edit_${id}`) as HTMLDialogElement).close();
    } else {
      setEditFree(free);
      reset();
      (
        document.getElementById("error-editting") as HTMLDialogElement
      ).showModal();
    }
  };

  return (
    <>
      <div
        onSubmit={handleUpload}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Upload Video</h2>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Video Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.currentTarget.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-main2"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Video Description
          </label>
          <textarea
            id="description"
            name="description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.currentTarget.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-main2"
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="free"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Make video Available for free
          </label>
          <input
            id="free"
            name="free"
            type="checkbox"
            checked={editfree}
            onChange={() => setEditFree(!editfree)}
            className=" px-3 py-2 border rounded-md focus:outline-none focus:border-main2"
          />
        </div>

        <div className="mb-4">
          <FileInput
            value={selectedFile}
            onChange={(e: File) => setSelectedFile(e)}
          />
        </div>

        <button
          onClick={handleUpload}
          className="bg-main2 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Edit Video
        </button>
      </div>
      <Modal id="error-editting" className="text-center">
        <p className="text-red-500">There was an error uploading</p>
      </Modal>
    </>
  );
};

const VideoCard = ({
  id,
  title,
  description,
  free,
  commentCount,
  video_url,
  published,
  thumbnail_url,
  access_token,
  courseId,
}: {
  id: string;
  title: string;
  description: string;
  free: boolean;
  commentCount: number;
  video_url: string;
  published: boolean;
  thumbnail_url?: string;
  access_token: string;
  courseId: string;
}) => {
  const [ispending, startTransition] = useTransition();
  const [openVideo, setOpenVideo] = useState(false);
  const [editVideo, setEditVideo] = useState(false);
  return (
    <div className="bg-slate-50 p-5 ">
      <div className="text-right">
        <button
          className="text-sm px-2 bg-cyan-200 rounded mb-2"
          onClick={() => {
            setEditVideo(true);
            (
              document.getElementById(`edit_${id}`) as HTMLDialogElement
            ).showModal();
          }}
        >
          edit
        </button>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="w-full h-40 cursor-pointer">
          <Image
            onClick={() => {
              setOpenVideo(true);
              (
                document.getElementById(`play_${id}`) as HTMLDialogElement
              ).showModal();
            }}
            src={
              thumbnail_url
                ? thumbnail_url
                : "https://www.keytechinc.com/wp-content/uploads/2022/01/video-thumbnail.jpg"
            }
            alt={title}
            width={500}
            height={500}
          />
        </div>
        <div>
          <Header6 text={title} />
          <p className="text-sm font-light">{description}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <p className="text-sm font-medium">{free ? "Free" : "Paid"}</p>
              {commentCount ? (
                <button className="text-sm font-medium">
                  {commentCount > 1 ? `${commentCount} comments` : `1 comment`}
                </button>
              ) : (
                <p className="text-sm font-medium">0 Comment</p>
              )}
            </div>
            <div className="flex gap-2">
              {published ? (
                <button
                  onClick={() => {
                    (
                      document.getElementById(
                        `remove_${id}`
                      ) as HTMLDialogElement
                    ).showModal();
                  }}
                  className="px-2 rounded text-sm font-medium  bg-front"
                >
                  exclude
                </button>
              ) : (
                <button
                  onClick={() => {
                    (
                      document.getElementById(`add_${id}`) as HTMLDialogElement
                    ).showModal();
                  }}
                  className="px-2 rounded text-sm font-medium  bg-blue-100"
                >
                  Add
                </button>
              )}
              {!published && (
                <button
                  onClick={() => {
                    (
                      document.getElementById(
                        `delete_${id}`
                      ) as HTMLDialogElement
                    ).showModal();
                  }}
                  className="px-2 rounded text-sm font-medium bg-red-100"
                >
                  delete
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal id={`play_${id}`} onClose={() => setOpenVideo(false)}>
        <div className="bg-slate-50 p-5 ">
          <div className="flex flex-col gap-4 ">
            {openVideo && (
              <Player
                token={access_token}
                url={video_url}
                width="100%"
                height="100%"
              />
            )}
          </div>
        </div>
      </Modal>
      <Modal className="flex flex-col gap-6 items-center" id={`add_${id}`}>
        <p>Are you sure you want to publish video</p>
        <Button
          text="publish"
          handleClick={() => {
            startTransition(() =>
              publishVideo(courseId, {
                id,
                title,
                description,
                free,
                video_url,
                published,
              })
            );
            (document.getElementById(`add_${id}`) as HTMLDialogElement).close();
          }}
        />
      </Modal>
      <Modal className="flex flex-col gap-6 items-center" id={`remove_${id}`}>
        <p>Are you sure you want to unpublish video</p>
        <Button
          text="Unpublish"
          handleClick={() => {
            startTransition(() =>
              unpublishVideo(courseId, {
                id,
                title,
                description,
                free,
                video_url,
                published,
              })
            );
            (
              document.getElementById(`remove_${id}`) as HTMLDialogElement
            ).close();
          }}
        />
      </Modal>
      <Modal className="flex flex-col gap-6 items-center" id={`delete_${id}`}>
        <p>Are you sure you want to delete video</p>
        <Button
          text="Delete"
          handleClick={() => {
            startTransition(() => deleteVideo(courseId, id));
            (
              document.getElementById(`delete_${id}`) as HTMLDialogElement
            ).close();
          }}
        />
      </Modal>
      <Modal id={`edit_${id}`} onClose={() => setEditVideo(false)}>
        {editVideo && (
          <EditVideo
            courseId={courseId}
            id={id}
            description={description}
            free={free}
            published={published}
            title={title}
            thumbnail_url={thumbnail_url}
            access_token={access_token}
          />
        )}
      </Modal>
    </div>
  );
};

export default VideoCard;
