import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatusatus } from 'react-dom'

export default function SubmitButton() {
    const {pending} = useFormStatusatus();
  return (
    <button className='group flex gap-2 h-[3rem] w-[8rem] bg-gray-900 rounded-full 
            outline-none  text-white items-center justify-center focus:scale-110 
            hover:scale-110 active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-60
            dark:bg-white dark:bg-opacity-10 transition-all' 
            type='submit' disabled={pending}>
                {
                    pending ? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
                    :(<>Submit <FaPaperPlane className='text-xs opacity-70 group-hover:translate-x-1 group-hover:-translate-y-2'/></>)
                }
                 </button>
  )
}
