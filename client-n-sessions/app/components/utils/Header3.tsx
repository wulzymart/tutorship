import React from "react";
import { text } from "stream/consumers";

const Header3 = ({ text }: { text: string }) => {
  return <h3 className="text-2xl font-medium my-4">{text}</h3>;
};

export default Header3;
