import React from "react";
import { SidebarEntry } from "../../interfaces/Interfaces";
import { FaBeer } from "react-icons/fa";
import Link from "next/link";

const Entry = ({ Icon, name, link }: SidebarEntry) => {
  return (
    <Link
      href={link}
      className="flex gap-x-4 items-center pl-10  hover:bg-main2 text-front p-4"
    >
      <Icon />
      <p>{name}</p>
    </Link>
  );
};

export default Entry;
