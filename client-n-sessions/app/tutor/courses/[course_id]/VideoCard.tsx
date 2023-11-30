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
}: {
  id: string;
  title: string;
  description: string;
  free: boolean;
  commentCount: number;
  video_url: string;
}) => {
  return (
    <div className="flex gap-8">
      <Player url={video_url} width="30%" height="20%" />
      <div>
        <Header6 text={title} />
        <p>{description}</p>
        <div>
            <div>
            <p>{free ? "Free": "Paid"}</p>
            {commentCount && <button>{commentCount > 1 ? "Comments": "Comment"}</button>}
            </div>
            <div>
                <button>exclude</button>
                <button>delete</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
