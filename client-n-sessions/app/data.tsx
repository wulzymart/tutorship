import { CollapseProps } from "rc-collapse";
import Header6 from "./components/utils/Header6";
import { ReviewCardInterface, SidebarEntry } from "./interfaces/Interfaces";
import { MdAssessment, MdDashboard, MdVideoCameraFront } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

export const course = {
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

export const items: CollapseProps["items"] = course.videos.map((video: any) => {
  return {
    label: (
      <div className="bg-slate-50 px-[2%] py-4 mb-2 w-full">
        <Header6 text={video.topic} />
      </div>
    ),
    key: video.id,
    children: (
      <div>
        {video.videoList.map((vid: any) => (
          <div key={vid.id} className="flex justify-between mb-2">
            <p>{vid.title}</p>
            <p>
              {Math.floor(vid.duration / 60)}:{vid.duration % 60}
            </p>
          </div>
        ))}
      </div>
    ),
    className: "bg-slate-50 px-5",
  };
});

export const learnersSidebarEntries: SidebarEntry[] = [
  {
    Icon: MdDashboard,
    name: "Dashboard",
    link: "/learner/dashboard",
  },
  {
    Icon: IoVideocam,
    name: "Courses",
    link: "/learner/courses",
  },
  {
    Icon: MdVideoCameraFront,
    name: "Sessions",
    link: "/learner/sessions",
  },
  {
    Icon: MdAssessment,
    name: "Assessments",
    link: "/learner/assessments",
  },
  {
    Icon: FaWallet,
    name: "Wallet",
    link: "/learner/wallet",
  },
  {
    Icon: IoMdSettings,
    name: "Settings",
    link: "/learner/settings",
  },
];

export const tutorsSidebarEntries: SidebarEntry[] = [
  {
    Icon: MdDashboard,
    name: "Dashboard",
    link: "/tutor/dashboard",
  },
  {
    Icon: IoVideocam,
    name: "My Courses",
    link: "/tutor/courses",
  },
  {
    Icon: SlCalender,
    name: "Calender",
    link: "/tutor/calender",
  },
  // {
  //   Icon: MdVideoCameraFront,
  //   name: "Session",
  //   link: "/tutor/calender",
  // },
  {
    Icon: MdAssessment,
    name: "Assessments",
    link: "/tutor/assessments",
  },
  {
    Icon: FaWallet,
    name: "Earnings",
    link: "/tutor/earnings",
  },
  {
    Icon: IoMdSettings,
    name: "Settings",
    link: "/tutor/settings",
  },
];

export const reviews: ReviewCardInterface[] = [
  {id: "1",rating: 4, review: "this is a test review. itshows how a review will likelh look, this is for testing purpose alone", learner: "Jane Foster"},

  {id: "2", rating: 4, review: "this is a test review. itshows how a review will likelh look, this is for testing purpose alone", learner: "Jane Foster"},

{id:"3", rating: 4, review: "this is a test review. itshows how a review will likelh look, this is for testing purpose alone", learner: "Jane Foster"},
]