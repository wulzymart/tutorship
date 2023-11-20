import React from "react";
import Image from "next/image";
import { MdDashboard, MdAssessment } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { MdVideoCameraFront } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { SidebarEntry } from "@/app/interfaces/Interfaces";
import { IoMdSettings } from "react-icons/io";
import Entry from "./Entry";

const sidebarEntries: SidebarEntry[] = [
  {
    Icon: MdDashboard,
    name: "Dashboard",
  },
  {
    Icon: IoVideocam,
    name: "Courses",
  },
  {
    Icon: MdVideoCameraFront,
    name: "Sessions",
  },
  {
    Icon: MdAssessment,
    name: "Assessment",
  },
  {
    Icon: FaWallet,
    name: "Wallet",
  },
  {
    Icon: IoMdSettings,
    name: "Settings",
  },
];

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen overflow-y-scroll scrollbar bg-main flex flex-col">
      {/* <div className="text-right px-5">
        <button className="text-white">
          <FaBars />
        </button>
      </div> */}

      <div className="my-10 flex w-full justify-center">
        <Image alt="tutorship logo" src="/logo.png" width={100} height={100} />
      </div>
      {sidebarEntries.map(({ name, Icon }, index) => (
        <div key={index}>
          <Entry name={name} Icon={Icon} />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
