"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Shopify Pro E-Commerce Website",
    description: "Crafted an e-commerce platform with React front-end,Node.js, Express back-end, and MongoDB, enabling smooth order placement and streamlined administration.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/meenakshiiyer2531/Shopify-E-Commerce-Website",
    
  },
  {
    id: 2,
    title: "Cloth Store Management System",
    description: "Streamline cloth store operations with this .NET full-stack app, featuring seamless inventory tracking, robust sales management, and secure customer data management.",
    image: "/images/projects/2.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/meenakshiiyer2531/Cloth-Store-Management-System",
 
  },
  {
    id: 3,
    title: "Agrigoals Application",
    description: "Collaborated on design, implementation, and optimization of a cross platform Flutter Android app for farmers, ensuring compatibility, scalability, and code quality",
    image: "/images/projects/3.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/meenakshiiyer2531/AgriGoals",
    
  },
  {
    id: 4,
    title: "Attendance Application",
    description: "Designed and developed an Android native app for automating attendance marking, featuring intuitive UI/UX for enhanced user experience and improved efficiency and accuracy in tracking.",
    image: "/images/projects/4.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/meenakshiiyer2531/Attendance_App",

  },
  {
    id: 5,
    title: "SiNet Application",
    description: "SiNET is an advanced data model explorer leveraging Linux, Flask, and React to allow users to efficiently manage, edit, and export data models, ensuring secure handling of sensitive information for IoT and compliance. It provides a dynamic, user-friendly platform that combines cutting-edge technology with robust data protection.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/South-Bay-Area-Research-Institute/SiNET",
 
  },
  {
    id: 6,
    title: "Swiggy Clone Application",
    description: "This project is a clone of Swiggy, a popular online food ordering and delivery platform. It is a full-stack application built using ReactJS, TypeScript, Tailwind CSS, and Firebase. The project aims to replicate some of the core features and functionalities of the original Swiggy application.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/meenakshiiyer2531/swiggy-clone",
 
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    
    <section id="projects">
         <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      </div>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
