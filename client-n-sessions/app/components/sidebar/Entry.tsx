import React from "react";
import { SidebarEntry } from "../../interfaces/Interfaces";
import { FaBeer } from "react-icons/fa";

const Entry = ({ Icon, name }: SidebarEntry) => {
  return (
    <div className="flex gap-x-4 items-center pl-10  hover:bg-main2 text-front p-4">
      <Icon />
      <p>{name}</p>
    </div>
  );
};

export default Entry;
