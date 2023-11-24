"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const Player = ({ url }: { url: string }) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return hasWindow ? (
    <ReactPlayer width="100%" height="100%" url={url} />
  ) : (
    <div></div>
  );
};

export default Player;
