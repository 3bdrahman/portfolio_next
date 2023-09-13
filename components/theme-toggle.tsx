"use client"
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
import { useTheme } from '@/context/theme-context'
export default function ThemeToggle() {
    
  const {theme, toggleTheme}= useTheme()
  return (
    <button className='fixed bottom-5 right-5 bg-white 
    w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
    rounded-full border border-white border-opacity-40 
    shadow-2xl flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
    onClick={toggleTheme}>
        {theme === 'light' ? <BsSun/> : <BsMoon />}
    </button>
  )
}
