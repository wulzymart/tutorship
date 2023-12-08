// pages/index.tsx

import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-main text-white">
      {/* Intro Section */}
      <header className="text-center mb-8 w-full">
        <div className="navbar bg-main px-10 py-4">
          <div className="flex-1">
            <Link href="/" className="">
              <div className=" flex w-full justify-center rounded-lg">
                <Image
                  className="rounded-full"
                  alt="tutorship logo"
                  src="/logo.png"
                  width={50}
                  height={50}
                />
              </div>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                {" "}
                <Link
                  className="hover:text-gray-300 mb-2 lg:mb-0"
                  href="#features"
                >
                  Features
                </Link>
              </li>
              <li>
                {" "}
                <Link href="#about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[url('https://images.freeimages.com/images/large-previews/2a0/open-book-1417491.jpg')] bg-cover relative w-full h-[600px] lg:h-80 xl:h-96 mb-4 flex justify-center items-center">
          <div className="w-full h-full bg-black absolute top-0 right-0 z-4 opacity-[50%]"></div>
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Tutorship
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl mb-4">
              Enriching minds, developing skills: Tutorship, Learn today, Stand
              tomorrow
            </p>
            <Link
              href="/tutor/register"
              className="bg-white text-main2 text-lg font-medium px-4 py-2 rounded-md mt-4 inline-block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Feature Section */}
      <section id="features" className="text-center mb-8 mt-10">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-10">
          Key Features
        </h2>
        {/* Feature 1 */}
        <div className="flex gap-10 w-[80%] mx-auto mt-20">
          <div className="mb-8 basis-1/3">
            <div className="relative w-full h-48 lg:h-60 xl:h-72 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                fill={true}
                alt="Feature 1"
                className="rounded-md"
              />
            </div>
            <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4">
              On Demand Courses
            </h3>
            <p className="text-gray-300">
              We have tons of courses from experienced tutors to help you start
              or progress in your career
            </p>
          </div>
          {/* Feature 2 */}
          <div className="mb-8 basis-1/3">
            <div className="relative w-full h-48 lg:h-60 xl:h-72 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1616596871445-bb8290a7a2c2?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                fill={true}
                alt="Feature 2"
                className="rounded-md"
              />
            </div>
            <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4">
              Mentor & Mentee{" "}
            </h3>
            <p className="text-gray-300">
              Tutorship gives you a platform to subscribed to mentoring from our
              different tutors giving you opportunities to connect on live
              learning sessions
            </p>
          </div>
          {/* Feature 3 */}
          <div className="mb-8 basis-1/3">
            <div className="relative w-full h-48 lg:h-60 xl:h-72 mb-6">
              <Image
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                fill={true}
                alt="Feature 3"
                className="rounded-md"
              />
            </div>
            <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold mb-4">
              Assessments
            </h3>
            <p className="text-gray-300">
              Track your progress, by taking course and subject assessments, and
              challenge yourself to grow in your own path
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="text-center w-[80%] mx-auto mb-20">
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-10">
          About Us
        </h2>
        <p className="mb-4">
          Knowing there are so many websites offering learning services with
          good learning management system, We discovered that only few or no
          webssites actually create an effective means of interaction between
          tutors and learers.
        </p>
        <p className="mb-4">
          Tutorship promotes true mntorship, in which tutors can sell curses,
          and learners can buy, with the opportunity to subscribe to a tutor for
          mentorship and the tutor will have a live sesssions with full
          partcipant of the learners.
        </p>
        <p>
          This is a Portfolio Project for{" "}
          <a className="text-blue-50" href="https://www.alxafrica.com/">
            Holberton School (ALX Africa)
          </a>
          . Project implementation started November 2023 and still in progresss
        </p>

        <h4 className="text-lg font-bold my-8">Team Members</h4>
        <div className="flex flex-col lg:flex-row lg:justify-center space-y-4 lg:space-y-0 lg:gap-x-10 md:gap-x-10my-8">
          {/* Team Member 1 */}
          <div>
            <p className="font-semibold mb-2">Adekunle Adetunji</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/adetunji-adekunle-835755233/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/AdekunleAdetunji"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
          {/* Team Member 2 */}
          <div>
            <p className="font-semibold mb-2">Olawole Olawale</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/olawale-olawole-2a5990270/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/wulzymart"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/wulzymart"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <p className="mt-4">
          <a
            href="https://github.com/wulzymart/tutorship"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            GitHub Repository
          </a>
        </p>
      </section>
    </div>
  );
};

export default HomePage;
