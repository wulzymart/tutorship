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
  width: number;
  height: number;
}

export interface CourseInfoCardInterface {
  id: string;
  course_name: string;
  tutor_name: string;
  registeredCourse: boolean;
  thumbnail_url: string;
  rating: number;
}

export interface AssessmentCardInterface {
  id: string;
  course_title: string;
  topic: string;
  score: number;
}

export interface SessionCardInterface {
  id: string;
  title: string;
  tutor_name: string;
  date: string;
}