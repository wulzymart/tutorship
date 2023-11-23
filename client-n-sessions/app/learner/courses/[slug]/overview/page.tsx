import CourseOverview from '@/app/components/entities/courses/CourseOverview';
import React from 'react'

const Overview = () => {
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
  return (
    <CourseOverview course={course} />
  )
}

export default Overview