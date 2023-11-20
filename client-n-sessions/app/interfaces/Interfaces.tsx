import { IconType } from "react-icons";
export interface SidebarEntry {
  Icon: IconType;
  name: string;
}
export interface TextInputInterface {
  type: "text" | "password";
  name: string;
  value: string;
  placeholder?: string;
  Icon?: IconType;
  handleChange: (e: any) => void;
}

export interface ButtonInterface {
  text: string;
  handleClick: () => void;
}

export interface RoundImageInterface {
  src: string;
  height: number;
  width: number;
  alt: string;
}

export interface BasicTutorInfoInterface {
  name: string;
  subject: string;
  imgUrl: string;
}

export interface ImageThumbNailInterface {
  alt: string;
  src: string;
  className: string;
}

export interface CourseInfoCardInterface {
  course_name: string;
  tutor_name: string;
  registeredCourse: string;
  thumbnail_url: string;
}
