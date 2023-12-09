"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const Player = ({
  url,
  width,
  height,
  token,
}: {
  url: string;
  width?: string;
  height?: string;
  token?: string;
}) => {
  const [use_url, setUrl] = useState("");
  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(url, options)
      .then((response) => response.blob())
      .then((blob) => {
        setUrl(URL.createObjectURL(blob));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  console.log(use_url);

  return hasWindow ? (
    <ReactPlayer
      width={width ? width : "100%"}
      height={width ? width : "100%"}
      url={use_url}
      controls
    />
  ) : (
    <div></div>
  );
};

export default Player;
