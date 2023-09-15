"use client";
import React, {useEffect} from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
export default function About() {
  const {ref} = useSectionInView("About");
  return (
    <motion.section ref = {ref} id='about' className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' 
    initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay:1.5}}>
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
            I'm currently in my final semester at the 
            <span className="font-medium"> University of Rochester</span>, where I'm pursuing a degree in 
            <span className="font-medium"> Computer Science</span>. While my academic journey has been enriching, my part-time role as a Full-Stack Lead Developer  has truly deepened my passion for 
            <span className="font-medium"> web development</span>. 
            <span className="italic">There's something genuinely thrilling about finding solutions to intricate coding challenges.</span>
        </p>

        <p className='mb-3'>
            My core expertise revolves around 
           {" "}<span className="underline">React, JavaScript, Java, and Node.js</span>, but I've also explored TypeScript and Next.js. The tech landscape is always evolving, and I'm committed to ongoing learning. As I approach graduation, I'm actively seeking a 
            <span className="font-medium">{" "}full-time position</span> as a software developer. If you believe I'd be a fit for your team, I'd love to <span className='font-medium'>connect</span> .
        </p>




    </motion.section>
  )
}
