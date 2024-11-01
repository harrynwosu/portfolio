'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className='py-12 lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12 z-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className='col-span-7 place-self-center text-center sm:text-left z-20'
                >
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400'>
                            Hi, I&apos;m{' '}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Harold!',
                                1000,
                                'a Software Engineer',
                                1000,
                                'a Web Developer',
                                1000,
                                'an iOS Developer',
                                1000,
                                'a Data Scientist',
                                1000,
                                'an avid learner.',
                                1000,
                            ]}
                            wrapper='span'
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl'>
                        Aspiring Software Engineer. Born and raised in Nigeria;
                        striving to make the world a better place one line of
                        code at a time.
                    </p>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Imperfect, aware, and ever changing with each new
                        experience.
                    </p>
                    <div className='z-20'>
                        <Link
                            href='https://www.linkedin.com/in/harold-nwosu/'
                            target='_blank'
                            className='z-50'
                        >
                            <button className='px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-primary-500 to-cyan-500 hover:bg-slate-800 text-white z-30'>
                                <span className='block bg-[121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                    Hire Me
                                </span>
                            </button>
                        </Link>
                        <Link
                            href='https://drive.google.com/file/d/1r_A8Uc4XAT485FoqcPKwghvUcX8YJrgN/view?usp=sharing'
                            target='_blank'
                        >
                            <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-primary-500 to-cyan-500 hover:bg-slate-800 text-white mt-3 z-30'>
                                <span className='block bg-[121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                    Download Resume
                                </span>
                            </button>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className='col-span-5 place-self-center mt-12 lg:mt-0'
                >
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/images/back.png'
                            alt='profile image'
                            className='absolute mx-auto w-full h-full rounded-full object-cover z-20'
                            fill
                            draggable={false}
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
