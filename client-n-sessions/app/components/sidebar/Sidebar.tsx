import React from "react";
import Image from "next/image";
import { MdDashboard, MdAssessment } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { MdVideoCameraFront } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { SidebarEntry, UserType } from "@/app/interfaces/Interfaces";
import { IoMdSettings } from "react-icons/io";
import Entry from "./Entry";
import SignOut from "./SignOut";

const Sidebar = ({
  sidebarEntries,
  userType,
}: {
  sidebarEntries: SidebarEntry[];
  userType: UserType;
}) => {
  return (
    <div className="relative bottom-4 w-[20%]  overflow-y-scroll scrollbar bg-main flex flex-col h-screen  overflow-x-hidden">
      {/* <div className="text-right px-5">
        <button className="text-white">
          <FaBars />
        </button>
      </div> */}

      <div className="my-10 flex w-full justify-center rounded-lg">
        <Image
          className="rounded-full"
          alt="tutorship logo"
          src="/logo.png"
          width={100}
          height={100}
        />
      </div>
      {sidebarEntries.map((entry, index) => (
        <div key={index}>
          <Entry {...entry} />
        </div>
      ))}
      <SignOut userType={userType} />
    </div>
  );
};

export default Sidebar;
