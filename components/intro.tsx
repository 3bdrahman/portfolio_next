"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import profile from '@/public/profile.jpg'
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload, HiEye} from 'react-icons/hi';
import { FaArrowLeft, FaCross, FaGithubSquare, FaTimes } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import Modal from 'react-modal'
import { useTheme } from '@/context/theme-context';
export default function Intro() {
    const {ref} = useSectionInView("Home", 0.5);
    const {setTimeLastClick, setActiveSection} = useActiveSectionContext();
    const [modalOpen, setModalOpen] = useState(false)
    const {theme}= useTheme()
    const toggleModal = () =>{
        setModalOpen(!modalOpen);
    }
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
                className=' h-[13.7rem] w-[13.7rem] rounded-full border-[0.25rem] border-white object-cover shadow-xl select-none'/>
                </motion.div>
                <motion.span className='text-4xl select-none absolute bottom-5 right-5' initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{
                    type:"spring",
                    stiffness:125,
                    delay: 0.1,
                    duration: 0.7

                }}>
                    👋
                </motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-10 px-4 text-1xl font-medium !leading-[1.5] sm:text-2xl' 
        initial = {{opacity:0, y:100}}
        animate={{opacity:1, y:0}}>
        <span className="font-bold">Hello, I'm Youssef.</span> I'm a{" "}
        <span className="font-bold">Computer Science </span>student with{" "}
        <span className="font-bold">3 years</span> of experience developing Web Applications. My current role is a <span className="italic"> <span className='font-bold'>MERN Developer</span> at the  <span className='font-bold'>University of Rochester</span></span>. My focus is{" "}
        <span className="underline">React & Front-end Development</span>. I'm actively looking for an entry-level, full-time developer position.
        </motion.h1>
        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{
            delay:0.1,
        }}>
            <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full 
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition' onClick={()=>{
                setActiveSection("Contact");
                setTimeLastClick(Date.now());
            }}>Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
            <a 
                className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:hover:text-white'
                onClick={toggleModal}
                >View Resume <HiEye className='opacity-60 group-hover:translate-y-1 transition'/></a>
                <Modal   isOpen={modalOpen} onRequestClose={toggleModal}  
                style={{
                    
                    overlay: {
                        position:'fixed',
                        top:0,
                        left:0,
                        right:0,
                        bottom:0,
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        zIndex:999
                    },
                    content: {
                        overflow:'auto',
                        top: '10%',
                        left: '10%',
                        right: '10%',
                        bottom: '10%',
                        padding:0,
                        backgroundColor: theme === 'light'? 'rgba(0, 0, 0, 0.75)' : 'lightgray'
                    },
                    
                }}>
                    <div className='h-full relative p-0'>
                    <iframe className='w-full h-full' src='/resume.pdf' width="100%" height="100%"></iframe>
                    <button className='absolute bottom-3 right-5 p-2  rounded-full hover:scale-105 text-gray-100 bg-gray-950 dark:text-gray-100 hover:bg-gray-100 hover:text-gray-950 dark:hover:text-gray-950 transition-all ' onClick={toggleModal}><FaTimes/></button>
                    </div>
                    
                </Modal>
            <div className='flex gap-2'>
            <a className='bg-white p-4 flex items-center gap-2 rounded-full 
            text-gray-700 outline-none focus:scale-[1.15] hover:scale-110 
            active:scale-[1.15] transition cursor-pointer border border-black/10 
            hover:text-gray-950 dark:bg-white/10 dark:text-white/80 dark:hover:text-white' href='https://www.linkedin.com/in/ayosef/' target='_blank'>
                <BsLinkedin />  
            </a>
            
            <a className='bg-white p-4 flex items-center gap-2 rounded-full 
            text-gray-700 text-[1.35rem] outline-none focus:scale-[1.15] 
            hover:scale-[1.15] active:scale-105 transition cursor-pointer border 
            border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/80 dark:hover:text-white' href='https://github.com/3bdrahman' target='_blank'>
                <FaGithubSquare />  
            </a>
            </div>
            
        </motion.div>
    </section>
    )
}
