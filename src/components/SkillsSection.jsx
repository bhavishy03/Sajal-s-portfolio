import React from 'react';
import Reveal from './Reveal';

const SkillsSection = () => {
  const categories = [
    {
      title: "Marketing Strategy",
      path: "/home/marketing",
      skills: ["Digital Marketing", "Lead Generation", "CRM Management","Branding" ,"Campaign Execution"]
    },
    {
      title: "Tools & Tech",
      path: "/home/tools",
      skills: ["MS Excel", "PowerPoint", "Google Analytics","CRM Software", "Salesforce"]
    },
    {
      title: "Interpersonal",
      path: "/home/soft-skills",
      skills: ["Communication", "Teamwork", "Time Management", "Project Planning"]
    }
  ];

  return (
    <Reveal>
    <section id="Skils" className=" min-h-screen bg-[#fbfbfb] py-2 px-6 flex flex-col items-center gap-16 ">
      
      {/* 1. Heading */}
      <div className='relative'>
        <h2 className='font-medium text-5xl lg:text-6xl relative z-10 '>
          My Skills
        </h2>
        <span className='absolute bottom-1 left-0 w-full h-[40%] bg-yellow-400 -z-0 opacity-80 rotate-[-1deg]'></span>
      </div>

      {/* 2. Grid of Browser-Style Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-7xl">
        {categories.map((cat, index) => (
          
          /* --- THE WINDOW CARD START --- */
          <div key={index} className="flex flex-col group">
            
            {/* WINDOW TOP BAR (Browser Header) */}
            <div className="w-full h-10 bg-[#e5e1cc] border-x-4 border-t-4 border-black rounded-t-2xl flex items-center px-4 gap-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
              {/* Window Dots */}
              <div className="w-3 h-3 rounded-full bg-black"></div>
              <div className="w-3 h-3 rounded-full bg-black"></div>
              {/* Path Bar */}
              <div className="ml-4 bg-white/50 border-2 border-black rounded px-3 py-0.5 text-[10px] font-mono text-black truncate">
                {cat.path}
              </div>
            </div>

            {/* WINDOW BODY (Cream Background) */}
            <div className="
              w-full flex-1
              bg-[#f8f5e6]                       
              border-4 border-black               
              rounded-b-2xl                  
              p-8                                 
              flex flex-col items-center gap-6    
              shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] 
              transition-all duration-200
              group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1
            ">
              {/* Welcome Title Style */}
              <h3 className="text-3xl font-medium text-black tracking-tight mb-4">
                {cat.title}
              </h3>

              {/* Skill Badges (@github style) */}
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill, i) => (
                  <button 
                    key={i} 
                    className="
                      bg-white 
                      border-2 border-black 
                      rounded-lg 
                      px-4 py-2 
                      font-medium text-xs text-black uppercase
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                      hover:bg-yellow-400 transition-colors
                    "
                  >
                    {skill.toLowerCase().replace(" ", "")}
                  </button>
                ))}
              </div>
            </div>

          </div>
          /* --- THE WINDOW CARD END --- */

        ))}
      </div>
    </section>
    </Reveal>
  );
};

export default SkillsSection;