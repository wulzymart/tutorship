import React from "react";
import { text } from "stream/consumers";

const Header5 = ({ text }: { text: string }) => {
  return <h5 className="text-lg font-medium my-2">{text}</h5>;
};

export default Header5;
