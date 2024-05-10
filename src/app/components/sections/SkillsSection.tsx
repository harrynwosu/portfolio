import {
    skillsData,
    backendSkills,
    frontendSkills,
    fullstackSkills,
    otherSkills,
  } from "../../../../constants/index";
import React from 'react'
import SkillDataProvider from "../SkillsDataProvider";

const SkillsSection = () => {
  return (
    <section 
        id="skills" 
        className='flex flex-col items-center justify-center gap-3 h-full relative pt-14 z-20'
        style={{transform: 'scale(0.9'}}
    >
        <h2 className="text-center text-4xl font-bold text-white mt-2 mb-8 md:mb-12">
            Tech Stack
        </h2>

        <div className='flex flex-row justify-around flex-wrap mt-2 gap-5 items-center'>
            {skillsData.map((image, index) => (
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {frontendSkills.map((image, index) => (
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {backendSkills.map((image, index) => (
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {fullstackSkills.map((image, index) => (
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>

        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {otherSkills.map((image, index) => (
                <SkillDataProvider
                    key={index}
                    src={image.Image}
                    name={image.skill_name}
                    width={image.width}
                    height={image.height}
                    index={index}
                />
            ))}
        </div>



    </section>
  )
}

export default SkillsSection