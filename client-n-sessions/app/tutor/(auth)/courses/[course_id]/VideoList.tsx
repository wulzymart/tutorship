import React from "react";
import VideoCard from "./VideoCard";
const videos = [
  {
    id: "1",
    title: "this is a test",
    description:
      "this is a test description this is a test description this is a test description",
    commentCount: 12,
    video_url:
      "https://www.youtube.com/watch?v=KUKyTRYGrnU&ab_channel=EstebanCodes",
    free: true,
    published: true,
  },
  {
    id: "2",
    title: "this is a test",
    description:
      "this is a test description this is a test description this is a test description",
    commentCount: 0,
    video_url:
      "https://www.youtube.com/watch?v=KUKyTRYGrnU&ab_channel=EstebanCodes",
    free: false,
    published: false,
  },
  {
    id: "3",
    title: "this is a test",
    description:
      "this is a test description this is a test description this is a test description",
    commentCount: 1,
    video_url:
      "https://www.youtube.com/watch?v=KUKyTRYGrnU&ab_channel=EstebanCodes",
    free: false,
    published: true,
  },
];

const VideoList = () => {
  return (
    <div className="flex flex-col gap-10">
      {videos.map((video) => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default VideoList;
