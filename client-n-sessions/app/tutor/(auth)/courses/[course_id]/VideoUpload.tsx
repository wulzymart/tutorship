import Modal from "@/app/components/utils/Modal";
import { headers } from "next/headers";
import { useState } from "react";

export const FileInput = ({
  value,
  onChange,
  ...rest
}: {
  value: any;
  onChange: any;
  rest?: any;
}) => (
  <div>
    <label className="bg-gray-200 p-2 text-sm font-medium rounded-lg">
      Select File
      <input
        {...rest}
        style={{ display: "none" }}
        type="file"
        onChange={(e: any) => {
          onChange(e.target.files[0]);
        }}
      />
    </label>
    {Boolean(value) && <div>{value.name}</div>}
  </div>
);

const VideoUpload = ({
  access_token,
  tutorId,
  courseId,
}: {
  access_token: string;
  tutorId: string;
  courseId: string;
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [free, setFree] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorUploading, setErrorUploading] = useState(false);
  const reset = () => {
    setTitle("");
    setDescription("");
    setFree(false);
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    // Perform upload logic here (e.g., using a file upload API)
    if (!title || !description || !selectedFile) return;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("free", String(free));
    formData.append("video_file", selectedFile);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/save-video`,
      {
        cache: "no-cache",
        method: "POST",
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
      setFree(false);
      reset();
      (document.getElementById("add-video") as HTMLDialogElement).close();
    } else {
      setFree(false);
      reset();
      (
        document.getElementById("error-uploading") as HTMLDialogElement
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
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
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
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
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
            checked={free}
            onChange={() => setFree(!free)}
            className=" px-3 py-2 border rounded-md focus:outline-none focus:border-main2"
          />
        </div>

        <div className="mb-4">
          <FileInput
            value={selectedFile}
            onChange={(e: any) => setSelectedFile(e)}
          />
          {/* <label
            htmlFor="videoFile"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Video File
          </label>
          <input
            type="file"
            id="videoFile"
            name="videoFile"
            value={""}
            onChange={(e) => {
              const files = e.currentTarget.files as FileList;
              setSelectedFile(files[0]);
            }}
            className="w-full"
          /> */}
        </div>

        <button
          onClick={handleUpload}
          className="bg-main2 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Upload Video
        </button>
      </div>
      <Modal id="error-uploading" className="text-center">
        <p className="text-red-500">There was an error uploading</p>
      </Modal>
    </>
  );
};

export default VideoUpload;
