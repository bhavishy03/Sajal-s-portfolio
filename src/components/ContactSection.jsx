import React from 'react'
import { Mail, Phone, Linkedin, Download, Send } from 'lucide-react';
import Reveal from './Reveal';

function ContactSection() {
  return (
    <Reveal>
    <section id="contact" className="py-4 lg:py-24 px-6 lg:px-20 bg-[#fbfbfb] flex flex-col items-center lg:items-start text-center lg:text-left">
      
      {/* 1. Heading - Consistent with Education/Experience */}
      <div className='relative mb-20 text-center'>
        <h2 className='font-medium text-5xl lg:text-6xl text-black relative z-10  tracking-tighter'>
          Contect 
        </h2>
        <span className='absolute bottom-1 left-0 w-full h-[40%] bg-yellow-400 -z-0 opacity-80 rotate-[-1deg]'></span>
        
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-stretch">
        
        {/* LEFT SIDE: Text & CTA */}
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
          <div className='bg-black text-white px-4 py-1.5 rounded-lg font-medium text-xs lg:text-xl tracking-widest w-fit mb-6 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]'>
            Available for opportunities
          </div>
          <h3 className="text-2xl lg:text-4xl font-medium text-black leading-tight mb-6">
            Let's build something <br /> great together.
          </h3>
          <p className="text-sm lg:text-xl font-mono font-bold text-gray-600 max-w-md leading-relaxed">
            I’m open to entry-level marketing and brand roles and would be happy to connect for discussions.
          </p>

          {/* RESUME BUTTON (Large & Bold) */}
          <div className="mt-10">
            <a
              href="/Sajal-Soni-Resume.pdf"
              download
              className="inline-flex items-center gap-3 bg-yellow-400 border-4 border-black px-5 py-2.5 lg:px-8 lg:py-4 font-medium text-sm lg:text-2xl tracking-tight shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <Download strokeWidth={2} /> Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Contact Browser Window (Image Style) */}
        <div className="flex-1 flex flex-col group">
          
          {/* WINDOW TOP BAR */}
          <div className="w-full h-12 bg-[#e5e1cc] border-x-4 border-t-4 border-black rounded-t-2xl flex items-center px-4 gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
            <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
            <div className="w-3.5 h-3.5 rounded-full bg-black"></div>
            <div className="ml-4 bg-white border-2 border-black rounded-md px-3 py-0.5 text-[10px] font-mono font-bold">
              /contact-me
            </div>
          </div>

          {/* WINDOW BODY */}
          <div className="flex-1 bg-[#f8f5e6] border-4 border-black rounded-b-2xl p-6 lg:p-12 flex flex-col gap-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
            
            {/* Contact Items - Button Style like @github */}
            <div className="flex flex-col gap-4">
              
              {/* Email Card */}
              <a href="mailto:sonisajal2004@gmail.com" className="group/item bg-white border-2 border-black p-4 rounded-xl flex items-center gap-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-100 transition-colors">
                <div className="bg-black text-white p-2 rounded-lg"><Mail size={20} /></div>
                <div>
                  <p className="text-[14px] lg:text-none font-medium  text-gray-400">Email Me</p>
                  <p className="text-sm lg:text-xl font-medium ">sonisajal2004@gmail.com</p>
                </div>
              </a>

              {/* Phone Card */}
              <div className="bg-white border-2 border-black p-4 rounded-xl flex items-center gap-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <div className="bg-black text-white p-2 rounded-lg"><Phone size={20} /></div>
                <div>
                  <p className="text-[14px] font-medium text-gray-400">Call Me</p>
                  <p className="text-sm lg:text-base font-medium">+91 94253 06623</p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a href="https://www.linkedin.com/in/sajal-soni-052b8b303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="group/item bg-white border-2 border-black p-4 rounded-xl flex items-center gap-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-100 transition-colors">
                <div className="bg-black text-white p-2 rounded-lg"><Linkedin size={20} /></div>
                <div>
                  <p className="text-[14px] font-medium text-gray-400">Professional Profile</p>
                  <p className="text-sm lg:text-base font-medium">linkedin.com/in/Sajalsoni</p>
                </div>
              </a>

            </div>

            {/* Bottom Decoration */}
            <div className="mt-auto pt-6 border-t-2 border-black border-dashed flex justify-between items-center text-[11px] font-black text-gray-500">
               <span>India</span>
               <div className='flex items-center gap-1'>
                 <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div> Available Now
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </Reveal>
  )
}

export default ContactSection;