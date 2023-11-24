import Accordion from "@/app/components/utils/Accordion";
import Header3 from "@/app/components/utils/Header3";
import Player from "@/app/components/utils/Player";
import { items } from "@/app/data";
import React from "react";

const page = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { videoId: string };
}) => {
  return (
    <section>
      <div className="w-full h-[500px] mb-10">
        <Player url="https://www.youtube.com/watch?v=ru3U8MHbFFI&ab_channel=KevinPowell" />
      </div>
      <div>{children}</div>
    </section>
  );
};

export default page;
