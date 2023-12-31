import React from "react";
import { text } from "stream/consumers";

const Header5 = ({ text }: { text: string }) => {
  return <h5 className="text-[18px] font-medium">{text}</h5>;
};

export default Header5;
