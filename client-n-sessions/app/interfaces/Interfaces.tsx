import { IconType } from "react-icons";
export interface SidebarEntry {
  Icon: IconType;
  name: string;
  link: string;
}
export interface TextInputInterface {
  type: "text" | "password" | "number";
  name: string;
  value: ValueByType[this["type"]];
  placeholder?: string;
  Icon?: IconType;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

type ValueByType = {
  text: string;
  password: string;
  number: number;
};

export interface ButtonInterface {
  text: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export interface RoundImageInterface {
  src: string;
  height: number;
  width: number;
  alt: string;
  border: number;
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
  title: string;
  tutor_name?: string;
  registeredCourse?: boolean;
  thumbnail_url: string;
  rating: number;
  sales?: number;
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
  tutor_name?: string;
  date: string;
}

export interface ReviewCardInterface {
  rating: number;
  review: string;
  learner: string;
  id: string;
}

export type UserType = "tutor" | "admin" | "learner";
