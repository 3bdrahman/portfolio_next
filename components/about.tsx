"use client";
import React, {useEffect} from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
export default function About() {
  const {ref} = useSectionInView("About");
  return (
    <motion.section ref = {ref} id='about' className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' 
    initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:1.75}}>
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
        Graduating from the University of Rochester with a degree in
        <span className="font-medium">Computer Science</span>,  
        I worked as a Full-Stack Lead Developer and delved deeper into the world {" "}
        <span className="font-medium">web development</span>.{" "}
        <span className="italic">What I cherish most about programming is the thrill of problem-solving, 
        that eureka moment when a solution crystallizes.</span>  My primary expertise lies in  <span className="underline"> React, JavaScript, Java, and Node.js</span>.
        I am also familiar with TypeScript and Next.js. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
        </p>
    </motion.section>
  )
}
