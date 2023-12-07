import { ImageThumbNailInterface } from "@/app/interfaces/Interfaces";
import Image from "next/image";
import Link from "next/link";
const Thumbnail = ({
  alt,
  src,
  width,
  height,
  link,
}: ImageThumbNailInterface) => {
  return (
    <Link href={link ? link : ""} className={`${!link ? "disabled" : ""}`}>
      <Image
        alt={alt}
        src={src}
        style={{ objectFit: "cover" }}
        className="border-2 border-solid border-front rounded-lg"
        width={width}
        height={height}
      />
    </Link>
  );
};

export default Thumbnail;
