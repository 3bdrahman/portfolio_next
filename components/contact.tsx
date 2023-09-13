"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail} from '@/actions/sendEmail'
import SubmitButton from './submit-btn'
export default function Contanct() {
    const{ref} = useSectionInView("Contact");
    
  return (
    
    <motion.section id='contact' ref={ref} className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration: 1}} viewport={{once: true}}>
        <SectionHeading>Contact me</SectionHeading>
        <p className='text-gray-700 -mt-6'>Please contact me directly at <a className='underline' href='mailto:ayosef@u.rochester.edu'>ayosef@u.rochester.edu</a> {" "}or through this form.</p>
        <form className='mt-10 flex flex-col' action={async (formData) => {
            await sendEmail(formData)
        }} >
            <input name='senderEmail' placeholder='Your email' required maxLength={500} className='h-14 px-4 rounded-lg border border-black/10 ' type='email'/>
            <textarea name='message' placeholder='Your message' required maxLength={5000} className='h-52 my-3 rounded-lg border border-black/10 p-4'/>
            <SubmitButton/>
        </form>
    </motion.section>
  )
}
