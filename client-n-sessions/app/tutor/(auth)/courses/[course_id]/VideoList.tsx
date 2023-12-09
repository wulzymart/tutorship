import VideoCard from "./VideoCard";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
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

const VideoList = ({
  courseId,
  tutorId,
  access_token,
}: {
  courseId: string;
  tutorId: string;
  access_token: string;
}) => {
  const fetchVideos = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/videos`,
      {
        next: { tags: ["videos"] },
        headers: {
          authorization: `bearer ${access_token}`,
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return res.json();
  };

  const { data, status, isLoading, isError, isSuccess } = useQuery(
    "videos",
    fetchVideos
  );
  if (videos)
    videos.forEach((file: any) => {
      const id = file.id;
      file.video_url = `${process.env.SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/video_file/${id}`;
    });
  return (
    <div className="flex flex-col gap-10">
      {isError ? (
        <p>Error Getting videos</p>
      ) : isLoading ? (
        <p>Getting video list</p>
      ) : (
        isSuccess &&
        data.map((video: any) => {
          video.video_url = `${process.env.NEXT_PUBLIC_SERVERADDRESS}/tutor/${tutorId}/course/${courseId}/video_file/${video.id}`;
          return (
            <VideoCard
              courseId={courseId}
              access_token={access_token}
              key={video.id}
              {...video}
            />
          );
        })
      )}
    </div>
  );
};

export default VideoList;
