"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    tabName: "skills",
    content: (
      <div className="md:grid md:grid-cols-2 items-start">
        <ul className="list-disc pl-2">
          <li>Python</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>C/C++</li>
          <li>Swift</li>
          <li>React</li>
          <li>Angular</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Django</li>
          <li>Flask</li>
          <li>Vue</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Git/Github</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Experience",
    tabName: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <span className="font-bold">Slack, Salesforce - </span>Software
          Engineer Intern (Summer 2023)
        </li>
        <li>
          <span className="font-bold">JP Morgan Chase & Co. - </span>Code for
          Good Hackathon
        </li>
        <li>Teaching Assistant - Calculus I, Statistics and Probability</li>
      </ul>
    ),
  },
  {
    title: "Education",
    tabName: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science & Math, Trinity Christian College</li>
        <li>Codepath, Web and iOS Development</li>
        <li>Dority International Secondary School</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [currentTab, setCurrentTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tabName) => {
    startTransition(() => {
      setCurrentTab(tabName);
    });
  };

  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap16 sm:py-16 xl:px-16">
        <Image
          src="/images/workspace4.png"
          alt="workspace"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsam
            facere quo repellat expedita doloremque deserunt pariatur
            voluptatibus, dolore tempora, eveniet temporibus quis iusto
            laudantium itaque magnam ipsa culpa. Dolorum?
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={currentTab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={currentTab === "experience"}
            >
              Experience
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={currentTab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((tab) => tab.tabName === currentTab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
