"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../ProjectCard";
import ProjectTag from "../ProjectTag";
import { motion, useInView } from "framer-motion";
import { URLPattern } from "next/server";

const projects = [
  {
    id: 1,
    title: "NextJS Portfolio Website",
    description: "Project 1 description",
    image: "images/projects/Project1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harrynwosu/portfolio",
  },
  {
    id: 2,
    title: "Konverse Real-time Chat App",
    description: "Project 2 description",
    image: "images/projects/Project2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harrynwosu/konverse-chat-app",
  },
  {
    id: 3,
    title: "Ramp Coding Challenge",
    description: "Project 3 description",
    image: "images/projects/Project3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/harrynwosu/ramp-frontend-challenge",
  },
  {
    id: 4,
    title: "Wordle iOS App",
    description: "Project 4 description",
    image: "images/projects/Project4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/harrynwosu/iOS-Project-2",
  },
];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setActiveTag(newTag);
  };

  const filteredProjects = projects.filter((project) =>
    project.tag.includes(activeTag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={activeTag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={activeTag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={activeTag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.3 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
