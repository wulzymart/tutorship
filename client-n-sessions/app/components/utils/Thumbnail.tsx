import { ImageThumbNailInterface } from "@/app/interfaces/Interfaces";
import Image from "next/image";
const Thumbnail = ({ alt, src, className }: ImageThumbNailInterface) => {
  return (
    <div className={className}>
      <Image alt={alt} src={src} fill style={{ objectFit: "cover" }} />
    </div>
  );
};

export default Thumbnail;
