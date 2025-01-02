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
            Graduated with B.Sc in
            <span className="font-medium"> Computer Science</span>, Dec 23'. Current AI in Business MS Candidate at <span className="font-medium">Simon Business School</span>, Dec 25'.  
            Seeking an internship as an Applied AI Intern.
        </p>

        <p className='mb-3'>
            My skills include but not limited to 
           {" "}<span className="underline">Python, Java, JavaScript, and Node.js</span>. The tech landscape is constantly evolving, and I'm committed to ongoing learning. I'm actively seeking an 
            <span className="font-medium">{" "}internship</span> in AI and Analytics. If you believe I'd be a fit for your team, I'd love to <span className='font-medium'>connect</span>.
        </p>




    </motion.section>
  )
}
