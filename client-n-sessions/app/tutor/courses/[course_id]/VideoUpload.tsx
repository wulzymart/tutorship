import { useState } from 'react';

const VideoUpload = () => {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (e) => {
    setVideoTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setVideoDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Perform upload logic here (e.g., using a file upload API)
    console.log('Uploading:', videoTitle, videoDescription, selectedFile);

    // Reset form fields after upload
    setVideoTitle('');
    setVideoDescription('');
    setSelectedFile(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Video</h2>

      <div className="mb-4">
        <label htmlFor="videoTitle" className="block text-gray-600 text-sm font-medium mb-2">
          Video Title
        </label>
        <input
          type="text"
          id="videoTitle"
          name="videoTitle"
          value={videoTitle}
          onChange={handleTitleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="videoDescription" className="block text-gray-600 text-sm font-medium mb-2">
          Video Description
        </label>
        <textarea
          id="videoDescription"
          name="videoDescription"
          value={videoDescription}
          onChange={handleDescriptionChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="videoFile" className="block text-gray-600 text-sm font-medium mb-2">
          Video File
        </label>
        <input
          type="file"
          id="videoFile"
          name="videoFile"
          onChange={handleFileChange}
          className="w-full"
        />
      </div>

      <button
        onClick={handleUpload}
        className="bg-main2 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Upload Video
      </button>
    </div>
  );
};

export default VideoUpload;
