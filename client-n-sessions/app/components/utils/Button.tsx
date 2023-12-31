"use client"
import { ButtonInterface } from "@/app/interfaces/Interfaces";

const Button = ({ text, handleClick, type }: ButtonInterface) => {
  return (
    <button
      className=" bg-main2 text-front font-medium px-4 py-2 rounded"
      type={type}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
