"use client"
import React from "react";
import ExperienceCard from "../ExperienceCard";
import SlackIcon from "../../../../public/slack-icon.svg";
import SalesforceIcon from "../../../../public/salesforce-icon.svg";
import ChaseIcon from "../../../../public/chase-icon.svg";
import BloombergIcon from "../../../../public/bloomberg-icon.svg";
import { motion } from "framer-motion";

interface Experience {
    id: number,
    name: string,
    date: string,
    description: string
    logo: any
}

const experiences: Experience[] = [
    {
        id: 0,
        name: "Slack",
        date: "Summer 2024",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum eius corrupti aliquid inventore dicta, quo natus necessitatibus sed obcaecati cumque sint doloribus ut accusantium magni fugit, nisi tenetur voluptatibus.",
        logo: SlackIcon
    },
    {
        id: 1,
        name: "Salesforce Inc.",
        date: "Summer 2023",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum eius corrupti aliquid inventore dicta, quo natus necessitatibus sed obcaecati cumque sint doloribus ut accusantium magni fugit, nisi tenetur voluptatibus.",
        logo: SalesforceIcon
    },
    {
        id: 2,
        name: "J.P Morgan Chase & Co.",
        date: "October 2023",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum eius corrupti aliquid inventore dicta, quo natus necessitatibus sed obcaecati cumque sint doloribus ut accusantium magni fugit, nisi tenetur voluptatibus.",
        logo: ChaseIcon
    },
    {
        id: 3,
        name: "Bloomberg",
        date: "June 2023 - July 2023",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident eum eius corrupti aliquid inventore dicta, quo natus necessitatibus sed obcaecati cumque sint doloribus ut accusantium magni fugit, nisi tenetur voluptatibus.",
        logo: BloombergIcon
    },
]

const ExperienceSection = () => {
    
    return (
        <section id="experience" className="text-white z-20">
            {/* <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Experience
            </h2> */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="z-20"
            >
                <div className="relative pt-6 pb-16 after:content-[''] after:absolute after:w-1.5 after:h-full after:bg-[#18191E] after:top-0 after:left-7 md:after:left-1/2 after:-ml-1.5 after:-z-0">
                    {experiences.map((experience: Experience, index: number) => (
                        <ExperienceCard
                            key={experience.id}
                            id={experience.id}
                            name={experience.name}
                            date={experience.date}
                            description={experience.description}
                            logo={experience.logo}
                        />
                    ))}
                </div>
            </motion.div>
            
        </section>
    )
}

export default ExperienceSection;