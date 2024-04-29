import React from "react";
import Image from "next/image";

type ExperienceCardProps = {
    id: number,
    name: string,
    date: string,
    description: string
    logo: any
}

const ExperienceCard = ({id, name, date, description, logo}: ExperienceCardProps) => {
    return (
        <div className={`relative w-full md:w-1/2 py-2 px-4 md:px-12  ${id % 2 === 0 ? "left-exp" : "right-exp"}`}>
            {/* <Image src={logo} alt={name} className={`absolute rounded-full top-8 z-10 ${id % 2 === 0 ? 'md:-right-5' : 'md:-left-5'}`}/> */}
            <Image src={logo} alt={name} className={`absolute rounded-full top-8 z-10 ${id % 2 === 0 ? 'left-logo' : 'right-logo'}`}/>
            <div className="textbox relative left-10 md:left-0 md:w-full py-5 px-7 m-4 md:m-0 rounded-lg text-sm bg-[#18191E] border border-[#33353F]">
                <h2 className="text-xl font-bold mb-1">{name}</h2>
                <p className="italic mb-2">{date}</p>
                <p className="text-[#ADB7BE]">{description}</p>
                <span className={`${id % 2 === 0 ? "left-exp-arrow" : "right-exp-arrow"}`}></span>
            </div>
        </div>
    )
}

export default ExperienceCard;