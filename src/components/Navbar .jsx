import React from 'react'
import { Download } from 'lucide-react';
import Reveal from './Reveal';


function Navbar () {
  return (
     <Reveal>
    <div className='flex px-6 md:px-12  w-full h-20 border-b-2 border-black  '>
      {/* User name */}
       <h1 className='text-black text-xl md:text-2xl font-medium py-6 px-4'>Sajal</h1>

      <nav className='ml-auto  flex items-center gap-4 md:gap-20'>

        {/* navbar links */}
        <ul className="flex gap-8 text-xl hidden md:flex">
          <li className='group relative cursor-pointer'>
            <a href="#about">About</a>
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
          </li>
            <li className='group relative cursor-pointer'>
            <a href="#Experience">Experience</a>
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='group relative cursor-pointer'>
            <a href="#Skils">Skills</a>
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='group relative cursor-pointer'>
            <a href="#Education">Education</a>
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
          </li>
          <li className='group relative cursor-pointer'>
            <a href="#contact">Contect</a>
            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full'></span>
          </li>
        </ul>
           {/* Resume button */}
              <button className="relative inline-block group  focus:outline-none">
                <a href="/sajal-resume.pdf">
           <span className="absolute inset-0 w-full h-full bg-black translate-x-1 md:translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
           <span className="relative flex items-center gap-1 px-1 py-1 md:px-5 md:py-2 font-medium text-[12px] md:text-xl text-xl bg-white border-2 hover:bg-black hover:border-amber-50 hover:text-white border-black transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0">
          Resume<Download /></span>
          </a>
          </button>
      </nav>
    </div>
    </Reveal>
  )
}

export default Navbar 