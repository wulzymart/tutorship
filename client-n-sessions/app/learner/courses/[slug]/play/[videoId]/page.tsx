import Accordion from "@/app/components/utils/Accordion";
import Header3 from "@/app/components/utils/Header3";
import { course, items } from "@/app/data";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <div className="w-[70%] flex flex-col gap-10">
        <div>
          <Header3 text="Objectives" />
          <div dangerouslySetInnerHTML={{ __html: course.objectives }} />
        </div>
        <div>
          <Header3 text="Descriptions" />
          <div dangerouslySetInnerHTML={{ __html: course.description }} />
        </div>
        <div>
          <Header3 text="Requirements" />
          <div dangerouslySetInnerHTML={{ __html: course.requirements }} />
        </div>
      </div>
      <div className="w-[30%]">
        <Header3 text="Content" />
        <Accordion items={items} className="px-5 w-full" />
      </div>
    </div>
  );
};

export default page;
