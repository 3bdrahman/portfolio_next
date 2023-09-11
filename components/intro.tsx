"use client";
import Image from 'next/image'
import React from 'react'
import profile from '@/public/profile.jpg'
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
    const {ref} = useSectionInView("Home", 0.5)
    return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}>
                <Image src={profile} 
                alt='profile picture' 
                width="192" 
                height="192" 
                quality="95" 
                priority={true}
                className=' h-[6.7rem] w-[6.7rem] rounded-full border-[0.25rem] border-white object-cover shadow-xl select-none'/>
                </motion.div>
                <motion.span className='text-3xl select-none absolute bottom-0 right-0' initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{
                    type:"spring",
                    stiffness:125,
                    delay: 0.1,
                    duration: 0.7

                }}>
                    👋
                </motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-1xl font-medium !leading-[1.5] sm:text-2xl' 
        initial = {{opacity:0, y:100}}
        animate={{opacity:1, y:0}}>
        <span className="font-bold">Hello, I'm Youssef.</span> I'm a{" "}
        <span className="font-bold">Computer Science </span>student with{" "}
        <span className="font-bold">3 years</span> of experience developing Web Applications. My current role is a <span className="italic"> <span className='font-bold'>MERN Developer</span> at the  <span className='font-bold'>University of Rochester</span></span>. My focus is{" "}
        <span className="underline">React & Front-end Development</span>.
        </motion.h1>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{
            delay:0.1,
        }}>
            <Link href="/contanct" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
            <a 
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
                href='/resume.pdf' download
                >Download Resume <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
            <div className='flex gap-2'>
            <a className='bg-white p-4 flex items-center gap-2 rounded-full 
            text-gray-700 outline-none focus:scale-[1.15] hover:scale-110 
            active:scale-[1.15] transition cursor-pointer border border-black/10 
            hover:text-gray-950' href='https://www.linkedin.com/in/ayosef/' target='_blank'>
                <BsLinkedin />  
            </a>
            
            <a className='bg-white p-4 flex items-center gap-2 rounded-full 
            text-gray-700 text-[1.35rem] outline-none focus:scale-[1.15] 
            hover:scale-[1.15] active:scale-105 transition cursor-pointer border 
            border-black/10 hover:text-gray-950' href='https://github.com/3bdrahman' target='_blank'>
                <FaGithubSquare />  
            </a>
            </div>
            
        </motion.div>
    </section>
    )
}
