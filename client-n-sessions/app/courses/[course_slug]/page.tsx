"use client";
import Header2 from "@/app/components/utils/Header2";
import Thumbnail from "@/app/components/utils/Thumbnail";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import { FaGlobe } from "react-icons/fa";
import Header3 from "@/app/components/utils/Header3";
import { Accordion } from "@ark-ui/react";
import { FaChevronDown } from "react-icons/fa";
import Collapse, { CollapseProps } from "rc-collapse";
import Header6 from "@/app/components/utils/Header6";

const page = () => {
  const course = {
    title: "The Complete 2023 Web Development Bootcamp",
    summary:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps",
    cartegories: ["Development", "web development"],
    tutor_name: "Angela Yu",
    rating: 4.7,
    language: "English",
    course_imgurl:
      "https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg",
    objectives: ` This is an example it will be saved as html
    <ul>
    <li>Understand the fundamentals of HTML markup.</li>
    <li>Learn the basics of CSS styling for web pages.</li>
    <li>Create well-structured and semantically meaningful HTML documents.</li>
    <li>Apply CSS rules to enhance the visual presentation of web content.</li>
    <li>Explore responsive web design principles using media queries.</li>
    <li>Understand the importance of web accessibility and implement accessible design practices.</li>
    <li>Utilize CSS frameworks for efficient web development.</li>
    <li>Integrate multimedia elements such as images and videos into web pages.</li>
    <li>Implement basic interactivity with HTML forms.</li>
    <li>Collaborate on a small project to showcase acquired skills.</li>
</ul>`,
    description: `<p>Embark on a journey into the exciting world of web development with our Web Development Fundamentals Course. This comprehensive course is designed for beginners who are eager to learn the essentials of building and styling web pages.</p>

<p>Throughout this course, you will gain hands-on experience with HTML and CSS, the building blocks of the web. From understanding the basics of HTML markup to crafting visually appealing designs with CSS styling, you'll develop a solid foundation in web development.</p>

<p>Topics covered include creating well-structured HTML documents, applying CSS rules for layout and presentation, and exploring responsive design principles for a seamless user experience across devices.</p>

<p>Our experienced instructors will guide you through the principles of web accessibility, ensuring your websites are inclusive and user-friendly. You'll also have the opportunity to work on a small project, applying your newfound skills to create a showcase portfolio piece.</p>

<p>By the end of this course, you'll be equipped with the knowledge and skills needed to kickstart your journey in web development and pursue more advanced topics in this dynamic field.</p>`,
    requirements: `<p>No prior experience in web development is required. This course is suitable for beginners, as well as individuals looking to refresh their skills.</p>`,
    videos: [
      {
        id: "1",
        topic: "this is the topic",
        videoList: [
          { id: "2333", title: "this is a test", duration: 700 },
          { id: "2334", title: "this is a test", duration: 700 },
          { id: "2336", title: "this is a test", duration: 700 },
        ],
      },
      {
        id: "2",
        topic: "this is the topic",
        videoList: [
          { id: "2345", title: "this is a test", duration: 700 },
          { id: "2344", title: "this is a test", duration: 700 },
          { id: "2346", title: "this is a test", duration: 700 },
        ],
      },
    ],
  };

  const items: CollapseProps["items"] = course.videos.map((video) => {
    return {
      label: <div className="bg-slate-50 px-[2%] py-4 mb-2 w-full"><Header6 text={video.topic} /></div>,
      key: video.id,
      children: (
        <div>
          {video.videoList.map((vid) => (
            <div key={vid.id} className="flex justify-between mb-2">
              <p>{vid.title}</p>
              <p>
                {Math.floor(vid.duration / 60)}:{vid.duration % 60}
              </p>
            </div>
          ))}
        </div>
      ),
      className: "bg-slate-50 px-5"
    };
  });
  return (
    <div>
      <div className="flex bg-main py-10 px-20 items-center">
        <div className=" text-white p-10">
          <div>
            <Header2 text={course.title} />
          </div>
          <div className="text-sm flex gap-4 font-light text-front">
            {course.cartegories.map((cartegory) => (
              <Link key={cartegory} href="">
                {cartegory}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-lg font-medium">{course.summary}</p>
          </div>
          <div>
            <p className="font font-medium">Tutor: {course.tutor_name}</p>
          </div>
          <div className=" flex gap-4">
            <StarRatings
              starRatedColor="yellow"
              rating={course.rating}
              starDimension="18px"
              starSpacing="5px"
            />
            <p>{course.rating}</p>
          </div>
          <div className="flex gap-4 py-2 items-center">
            <FaGlobe />
            <p>{course.language}</p>
          </div>
        </div>
        <div>
          <Thumbnail
            alt={course.title}
            src={course.course_imgurl}
            width={500}
            height={400}
          />
        </div>
      </div>
      <div className="flex py-20">
        <div className="w-[80%] px-32  flex flex-col gap-10">
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
        <div className="w-[20%]">
          <Header3 text="Content"/>
          <div className="px-5 w-full">
            <Collapse
              accordion={true}
              items={items}
              destroyInactivePanel={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
