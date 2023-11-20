import React from "react";
import TutorInfo from "./TutorInfo";

const RecommendedTutors = () => {
  const tutors = [
    {
      id: "1",
      first_name: "John",
      last_name: "Doe",
      image_url:
        "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
      subject: "Python",
    },
    {
      id: "2",
      first_name: "Micheal",
      last_name: "Scofield",
      image_url:
        "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
      subject: "Node Js",
    },
    {
      id: "3",
      first_name: "Jason",
      last_name: "Borne",
      image_url:
        "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
      subject: "Django",
    },
    {
      id: "4",
      first_name: "Jane",
      last_name: "Doe",
      image_url:
        "https://www.stryx.com/cdn/shop/articles/man-looking-attractive.jpg?v=1666662774",
      subject: "Reactjs",
    },
  ];
  return (
    <div className="flex justify-between">
      {tutors.map((tutor) => (
        <TutorInfo
          key={tutor.id}
          name={`${tutor.first_name} ${tutor.last_name}`}
          imgUrl={tutor.image_url}
          subject={tutor.subject}
        />
      ))}
    </div>
  );
};

export default RecommendedTutors;
