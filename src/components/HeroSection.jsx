import React from 'react';
import Lottie from 'lottie-react';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import heroAnimation from '../assets/working.json'; 
import Reveal from './Reveal';

function HeroSection() {
  return (
    <Reveal>
    <section className="min-h-[80vh]  w-full bg-[#ffffff] flex flex-col-reverse lg:flex-row items-center justify-between  lg:px-24 lg:py-12 ">
      
      {/* --- LEFT SIDE: Clean & Professional Intro --- */}
      <div className="w-full lg:w-[55%] flex flex-col md:items-start items-center text-left">
        
        <span className="bg-yellow-400 border-2 border-black px-3 py-1 text-[12px] font-black uppercase tracking-widest mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          Marketing Executive
        </span>

        <h1 className="text-5xl lg:text-7xl font-black text-black mb-4 leading-tight">
          Hello, I’m <br />
          <span className="text-yellow-500">Sajal Soni</span>
        </h1>

        <h2 className="text-[12px] lg:text-2xl font-bold text-gray-700 mb-6 font-mono">
          Digital Marketing • CRM • Brand Execution
        </h2>

        <p className="  text-[15px] md:text-lg text-gray-900 font-medium leading-relaxed max-w-[90%] md:max-w-lg mb-8 md:mb-10 border-l-4 border-black pl-5 md:pl-8 transition-all duration-300">
         BBA Marketing graduate with hands-on internship experience in digital marketing,
           CRM management, and campaign execution. Skilled in lead tracking, customer
           engagement, and supporting integrated marketing campaigns across digital
           and retail environments.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-wrap gap-5">
          {/* Main Hire Button */}
          <button className="group relative">
            <a href="#contact">
            <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <span className="relative flex items-center gap-2 bg-yellow-400 border-2 border-black px-8 py-3 font-black uppercase text-sm tracking-wider hover:bg-white transition-colors">
              Hire Me <ExternalLink size={18} strokeWidth={3} />
            </span>
            </a>
          </button>

          {/* Social Links */}
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/sajal-soni-052b8b303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="group relative">
              <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <span className="relative flex items-center justify-center p-3 bg-white border-2 border-black group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Linkedin size={20} />
              </span>
            </a>
            <a href="mailto:sonisajal2004@gmail.com" className="group relative">
              <div className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <span className="relative flex items-center justify-center p-3 bg-white border-2 border-black group-hover:bg-red-500 group-hover:text-white transition-all">
                <Mail size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
       <div className="w-full lg:w-[45%] flex justify-center items-center top-0 md:top-0 lg:mb-0">
          <div className="w-full max-w-[280px] md:max-w-[350px] lg:max-w-full lg:scale-110 scale-130 transition-transform duration-500">
            <Lottie  
              animationData={heroAnimation} 
              loop={true} 
              autoplay={true}
            />
          </div>
        </div>
    </section>
     </Reveal>
  );
}

export default HeroSection;