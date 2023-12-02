import { ImageThumbNailInterface } from "@/app/interfaces/Interfaces";
import Image from "next/image";
const Thumbnail = ({ alt, src, width, height }: ImageThumbNailInterface) => {
  return (
    <Image
      alt={alt}
      src={src}
      style={{ objectFit: "cover" }}
      className="border-2 border-solid border-front rounded-lg"
      width={width}
      height={height}
    />
  );
};

export default Thumbnail;
