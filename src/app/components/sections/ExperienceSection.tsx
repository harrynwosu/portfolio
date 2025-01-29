'use client';
import React from 'react';
import ExperienceCard from '../ExperienceCard';
import SlackIcon from '../../../../public/slack-icon.svg';
import GoogleIcon from '../../../../public/google-icon.svg';
import SalesforceIcon from '../../../../public/salesforce-icon.svg';
import ChaseIcon from '../../../../public/chase-icon.svg';
import BloombergIcon from '../../../../public/bloomberg-icon.svg';
import TreeHacksIcon from '../../../../public/treehacks.svg';
import { motion } from 'framer-motion';

interface Experience {
    id: number;
    name: string;
    date: string;
    description: string;
    logo: any;
}

const experiences: Experience[] = [
    {
        id: 0,
        name: 'Slack',
        date: 'Virtual HQ',
        description: 'Incoming Software Engineer',
        logo: SlackIcon,
    },
    {
        id: 1,
        name: 'TreeHacks',
        date: 'February 2025',
        description: 'Building cool stuff @ Stanford.',
        logo: TreeHacksIcon,
    },
    {
        id: 2,
        name: 'Slack',
        date: 'Virtual HQ - Summer 2024',
        description:
            'Developed a user feedback system for audio/video transcripts at Slack, collaborating with PMs, designers, and data scientists using AWS, Hack, React, and TypeScript. Optimized transcription performance by 30% and implemented video features like noise suppression, picture-in-picture, and interactive reactions to boost user engagement.',
        logo: SlackIcon,
    },
    {
        id: 3,
        name: 'Google',
        date: 'Software Engineering Program',
        description:
            'Selected from 400+ applicants for an exclusive 1:1 mentorship with a Google Software Engineer, gaining tailored insights into industry best practices. Participated in advanced workshops to strengthen technical skills, problem-solving, and interview performance for high-impact roles in tech.',
        logo: GoogleIcon,
    },
    {
        id: 4,
        name: 'Salesforce Inc.',
        date: 'Canvas EditorXP - Summer 2023',
        description:
            'Architected and launched an interactive Canvas header image feature for 1.3 million users, boosting engagement by 15% and enhancing creative workflows. Improved platform interactivity and responsiveness using React, TypeScript, Protocol Buffers, and LESS for a seamless user experience.',
        logo: SalesforceIcon,
    },
    {
        id: 5,
        name: 'J.P Morgan Chase & Co.',
        date: 'Code for Good Hackathon - October 2023',
        description:
            'Collaborated with a cross-functional team to enhance visibility, online presence, and volunteer recruitment for Rebuilding Together Aurora. Developed user-friendly web interfaces using React, Tailwind, Flask, and MongoDB, optimizing volunteer engagement and training efficiency.',
        logo: ChaseIcon,
    },
    {
        id: 6,
        name: 'Bloomberg',
        date: 'Engineering Accelerator - June 2023 - July 2023',
        description:
            'Collaborated on high-impact projects and developing advanced technical skills. Engaged in hands-on learning to enhance problem-solving abilities and gain industry insights in a fast-paced engineering environment.',
        logo: BloombergIcon,
    },
];

const ExperienceSection = () => {
    return (
        <section
            id='experience'
            className='text-white z-20'
        >
            {/* <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                Experience
            </h2> */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className='z-20'
            >
                <div className="relative pt-6 pb-16 after:content-[''] after:absolute after:w-1.5 after:h-full after:bg-[#18191E] after:top-0 after:left-7 md:after:left-1/2 after:-ml-1.5 after:-z-0">
                    {experiences.map(
                        (experience: Experience, index: number) => (
                            <ExperienceCard
                                key={experience.id}
                                id={experience.id}
                                name={experience.name}
                                date={experience.date}
                                description={experience.description}
                                logo={experience.logo}
                            />
                        )
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default ExperienceSection;
