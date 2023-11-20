import React from "react";
import Image from "next/image";
import { RoundImageInterface } from "@/app/interfaces/Interfaces";

const RoundImage = ({ alt, src, height, width }: RoundImageInterface) => {
  return (
    <div
      className={`rounded-full relative border-4 border-solid border-front`}
      style={{
        height: `${height}px`,
        width: `${width}px`,
      }}
    >
      <Image
        alt={alt}
        src={src}
        fill
        className="rounded-full"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default RoundImage;
