'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from '../ProjectCard';
import ProjectTag from '../ProjectTag';
import { motion, useInView } from 'framer-motion';
import { URLPattern } from 'next/server';

const projects = [
    {
        id: 1,
        title: 'HarryShorter - URL Shortener',
        description:
            'URL shortener and QR code generator services with backend built in Go using Redis for efficient data storage and retrieval, consumed by a minimal frontend. Still in the works 🚧',
        image: 'images/projects/HarryShorter.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/harrynwosu/harry-shorter',
    },
    {
        id: 2,
        title: 'Portfolio',
        description:
            'The website you are currently on! Built in NextJS mainly using Typescript, Node.js, React, and Tailwind CSS. A responsive and mobile-friendly site designed to showcase my relevant skills and experience.',
        image: 'images/projects/Project1.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/harrynwosu/portfolio',
    },
    {
        id: 3,
        title: 'Konverse Real-time Chat App',
        description:
            'My first go at a chat application. Built with React, SCSS, and Chatengine API, using web sockets under the hood. Currently supports group chats. Still a work in progress!',
        image: 'images/projects/Konverse.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/harrynwosu/konverse-chat-app',
    },
    {
        id: 4,
        title: 'Ramp Coding Challenge',
        description:
            'A frontend coding challenge in a React + TypeScript codebase. Involved fixing a variety of bugs ranging from incorrect state management, rendering issues and styling issues.',
        image: 'images/projects/Project3.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/harrynwosu/ramp-frontend-challenge',
    },
    {
        id: 5,
        title: 'Wordle iOS App',
        description:
            "My implementation of the famous Wordle game on iOS devices! Developed using Swift and UI Kit. Implemented settings that allows players change the length of the goal word, number of guesses allowed, and an insane difficulty level 'alien wordle'. Feel free to try on your devices and let me know your thoughts!",
        image: 'images/projects/WordleProject.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/harrynwosu/iOS-Project-2',
    },
];

const ProjectsSection = () => {
    const [activeTag, setActiveTag] = useState('All');
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
        <section
            id='projects'
            ref={ref}
            className='z-20'
        >
            <h2 className='text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12'>
                Projects
            </h2>
            <div className='flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag
                    name='All'
                    onClick={handleTagChange}
                    isSelected={activeTag === 'All'}
                />
                <ProjectTag
                    name='Web'
                    onClick={handleTagChange}
                    isSelected={activeTag === 'Web'}
                />
                <ProjectTag
                    name='Mobile'
                    onClick={handleTagChange}
                    isSelected={activeTag === 'Mobile'}
                />
            </div>
            <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial='initial'
                        animate={isInView ? 'animate' : 'initial'}
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
