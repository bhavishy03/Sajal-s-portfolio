import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
function Footer() {
  const currentYear = 2025; //

  return (
    <Reveal>
    <footer className="w-full bg-white border-t-8 border-black pt-16 pb-8 px-6 lg:px-20 overflow-hidden ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

        {/* --- 1. Brand & Bio --- */}
        <div className="flex-1">
          {/* Name with Yellow Scribble Style */}
          <div className='relative w-fit mb-6'>
            <h3 className="text-3xl lg:text-4xl font-medium  relative z-10">Sajal Soni</h3>
            <div className='absolute bottom-0 left-0 w-full h-[40%] bg-yellow-400 -z-0 opacity-80'></div>
          </div>
          
          <p className="text-lg lg:text-xl font-mono font-bold text-gray-800 max-w-sm leading-relaxed">
            Entry-Level Marketing Executive focused on execution, learning, and
            growth in marketing and brand roles.
          </p>
        </div>

        {/* --- 2. Quick Links (Grid Style) --- */}
        <div className="w-full md:w-auto grid grid-cols-2 gap-10 lg:gap-20">
          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-6">Navigation</h4>
            <ul className="space-y-4 font-mono text-xl  tracking-tight">
              {['about', 'Experience', 'Skils', 'contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="group flex items-center gap-1 hover:text-yellow-500 transition-colors">
                    {link} <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-widest text-gray-400 mb-6">Socials</h4>
            <ul className="space-y-4 font-mono text-xl tracking-tight">
              <li>
                <a href="https://www.linkedin.com/in/sajal-soni-052b8b303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:underline decoration-4 decoration-yellow-400">LinkedIn</a>
              </li>
              <li>
                <a href="mailto:sonisajal2004@gmail.com" className="hover:underline decoration-4 decoration-yellow-400">Email</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* --- 3. Bottom Bar --- */}
      <div className="mt-20 pt-8 border-t-4 border-black border-dashed flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono font-black text-sm uppercase">
          © {currentYear} Sajal Soni. Crafted with Passion.
        </div>
        
        {/* Status Indicator consistent with Contact section */}
        <div className='flex items-center gap-4'>
           <div className='bg-black text-white px-4 py-1 font-black text-[10px] uppercase rounded-full shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]'>
             Indore, India
           </div>
           <div className='flex items-center gap-2'>
             <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
             <span className='font-black text-[10px] uppercase'>Open to Work</span>
           </div>
        </div>
      </div>
    </footer>
    </Reveal>
  )
}

export default Footer