import React from "react";
import Image from "next/image";
import { SidebarEntry, UserType } from "@/app/interfaces/Interfaces";
import Entry from "./Entry";
import Link from "next/link";

const Sidebar = ({
  sidebarEntries,
  userType,
}: {
  sidebarEntries: SidebarEntry[];
  userType: UserType;
}) => {
  return (
    <div className="relative w-[20%]  overflow-y-scroll scrollbar bg-main flex flex-col h-screen  overflow-x-hidden">
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
      <div className="absolute w-full bottom-4  pl-10 flex gap-4">
        <Link
          className="text-white hover:text-front text-sm"
          href={{
            pathname: "/logout",
            query: `usertype=${userType}`,
          }}
        >
          sign out
        </Link>
        <Link href="/" className="text-white hover:text-front text-sm">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
