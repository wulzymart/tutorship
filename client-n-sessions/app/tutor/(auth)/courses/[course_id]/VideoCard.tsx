import Header6 from "@/app/components/utils/Header6";
import Player from "@/app/components/utils/Player";
import React from "react";

const VideoCard = ({
  id,
  title,
  description,
  free,
  commentCount,
  video_url,
  published,
}: {
  id: string;
  title: string;
  description: string;
  free: boolean;
  commentCount: number;
  video_url: string;
  published: boolean;
}) => {
  return (
    <div className="bg-slate-50 p-5 ">
      <div className="text-right">
        <button className="text-sm px-2 bg-cyan-200 rounded mb-2">edit</button>
      </div>
      <div className="flex flex-col gap-4 ">
        <Player url={video_url} width="100%" height="100%" />
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
                <button className="px-2 rounded text-sm font-medium  bg-front">
                  exclude
                </button>
              ) : (
                <button className="px-2 rounded text-sm font-medium  bg-blue-100">
                  Add
                </button>
              )}
              <button className="px-2 rounded text-sm font-medium bg-red-100">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
