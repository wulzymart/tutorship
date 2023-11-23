import React from "react";
import { text } from "stream/consumers";

const Header2 = ({ text }: { text: string }) => {
  return <h2 className="text-3xl font-semibold my-4">{text}</h2>;
};

export default Header2;
