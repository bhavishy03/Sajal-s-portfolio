import React from 'react'
import sajal from '../assets/sajal.jpg'
import Reveal from './Reveal';

function AboutSection () {
  return (
    <Reveal>
      {/* 1. Padding ko mobile par 'p-6' kiya aur gaps ko kam kiya */}
      <section id="about" className='flex w-full justify-center items-center flex-col gap-10 lg:gap-16 p-6 lg:p-20 bg-white'>
        
        {/* Section Heading */}
        <div className='relative'>
          <h2 className='font-medium text-4xl lg:text-5xl text-black relative z-10'>
            About
          </h2>
          <span className='absolute bottom-1 left-0 w-full h-[40%] bg-yellow-400 -z-0 opacity-80 rotate-[-1deg]'></span>
        </div>

        {/* Content Container */}
        {/* 2. Gap ko mobile par 'gap-10' aur laptop par 'gap-20' kiya */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full max-w-9xl'>
          
          {/* --- IMAGE SIDE --- */}
          {/* 3. Mobile par image ko 70% width di taaki wo saaf dikhe */}
          <div className='w-[70%] md:w-[40%] lg:w-[32%] bg-black relative group'>
            <img 
              src={sajal} 
              alt="sajal" 
              className='w-full h-full border-2 border-black translate-x-2 translate-y-2 transition-transform group-hover:translate-x-0 group-hover:translate-y-0'
            />
          </div>

          {/* --- TEXT CONTENT SIDE --- */}
          {/* 4. Text alignment: Mobile par center, Laptop par left */}
          <div className='w-full lg:w-[65%] text-center lg:text-left'>
            <p className='font-mono text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-bold'>
              During my internships, I’ve worked on practical marketing tasks such as managing CRM data, 
              tracking leads, and coordinating with sales and marketing teams to support ongoing campaigns. 
              My experience spans both digital marketing activities and on-ground retail promotions.
            </p>
            <br />
            <p className='font-mono text-base md:text-lg lg:text-xl text-gray-900 leading-relaxed font-bold border-t-4 lg:border-t-0 lg:border-l-4 border-black pt-4 lg:pt-0 lg:pl-6 bg-gray-50 lg:bg-transparent p-4 lg:p-0'>
              I’m particularly comfortable with execution-focused responsibilities like follow-ups, coordination, 
              and maintaining structured data, and I enjoy working in environments where teamwork and learning are essential.
            </p>
          </div>

        </div>
      </section>
    </Reveal>
  )
}

export default AboutSection