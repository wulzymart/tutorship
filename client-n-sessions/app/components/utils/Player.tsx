"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const Player = ({
  url,
  width,
  height,
}: {
  url: string;
  width?: string;
  height?: string;
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return hasWindow ? (
    <ReactPlayer
      width={width ? width : "100%"}
      height={width ? width : "100%"}
      url={url}
    />
  ) : (
    <div></div>
  );
};

export default Player;
