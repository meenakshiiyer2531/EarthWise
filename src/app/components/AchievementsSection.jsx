"use client";
import React, { useState } from "react";
import { FaAward, FaLinkedin, FaUserGraduate, FaSchool } from "react-icons/fa";

const achievementsList = [
  {
    title: "UiPath Student Developer Champion",
    icon: <FaUserGraduate />,
    info: "Recognized as a leading student developer champion by UiPath for contributions in automation and robotic process automation (RPA).",
  },
  {
    title: "Selected for LinkedIn Live",
    icon: <FaLinkedin />,
    info: "Selected for LinkedIn Live out of several students across the globe.",
  },
  {
    title: "Department Rank 2 Holder",
    icon: <FaSchool />,
    info: "Department Rank 2 holder in KJC with a 9.4 GPA (overall).",
  },
  {
    title: "Cleared CA Foundation",
    icon: <FaAward />,
    info: "Cleared CA Foundation in the 1st Attempt.",
  },
];

const AchievementsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIconClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleHoverEnter = (index) => {
    setActiveIndex(index);
  };

  const handleHoverLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="flex flex-wrap justify-center p-4 bg-gradient-to-br from-navy-blue to-white rounded-lg border border-navy-blue">
      {achievementsList.map((achievement, index) => (
        <div
          key={index}
          className={`relative flex items-center m-2 p-2 bg-navy-blue rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:scale-105 ${
            activeIndex === index ? "bg-opacity-100" : "bg-opacity-80"
          }`}
          onClick={() => handleIconClick(index)}
          onMouseEnter={() => handleHoverEnter(index)}
          onMouseLeave={handleHoverLeave}
        >
          <span className="text-white text-2xl">{achievement.icon}</span>
          <span className="ml-2 text-white text-lg font-semibold cursor-pointer">
            {achievement.title}
          </span>
          {activeIndex === index && (
            <div className="absolute left-0 bottom-full bg-gray-900 p-2 rounded-md shadow-md mt-2 w-full opacity-100 transition-opacity duration-300">
              <p className="text-white text-base">{achievement.info}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AchievementsSection;
