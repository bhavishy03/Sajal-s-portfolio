import React from 'react'
import { Briefcase, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
const experiences = [
  {
    id: 1,
    role: "Customer Relationship Management & Performance Marketing Intern",
    company: "Ad99India — Delhi (Remote)",
    date: "May 2025 – August 2025",
    description: ["Managed and updated CRM systems to maintain accurate lead and customer data",
                  "Tracked leads, follow-ups, and supported sales coordination activities",
                  "Assisted in the execution of digital and performance marketing campaigns",]
  },
  {
    id: 2,
    role: "Marketing Intern",
    company: "Big Bazaar",
    date: "January 2023",
    description: ["Assisted in in-store promotional activities and customer engagement",
                  "Supported sales teams during peak hours to help achieve daily targets",
                  "Observed on-ground marketing execution and customer behavior"]
  },
  {
    id: 3, 
    role: "Marketing Intern",
    company: "Park Avenue",
    date: "February 2022",
    description: ["Supported brand promotion and product visibility at retail counters",
                  "Assisted with customer interaction and sales coordination",
                  "Gained hands-on exposure to retail branding and marketing execution"]
  }
];

function ExperienceSection() {
  return (
    <Reveal>
    <section id="Experience" className="min-h-full w-full p-6 py-20 lg:p-6 flex flex-col items-center">
      
      {/* 1. Section Heading */}
      <div className='relative mb-15'>
        <h2 className='font-medium text-3xl lg:text-5xl text-black relative z-10'>
          Experience
        </h2>
        <span className='absolute bottom-2 left-0 w-full h-[40%] bg-yellow-400 opacity-80 rotate-[-1deg]'></span>
      </div>

      {/* 2. Main Timeline Wrapper */}
      <div className="w-full max-w-8xl ">
      
        {/* --- CARDS CONTAINER --- */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 relative z-10">
          {experiences.map((exp) => (
            <div key={exp.id} className="flex flex-col flex-1 group">
              

              {/* --- THE NEUBRUTALISM CARD --- */}
              <div className="ml-0 lg:ml-12 flex-1 flex flex-col items-start border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 rounded-2xl transition-all duration-300 hover:shadow-none hover:translate-x-1 hover:translate-y-1 min-h-[320px]">
                
                {/* Date Badge */}
                <span className="inline-block bg-yellow-300 border-2 border-black font-black px-4 py-1.5 rounded-lg text-xs mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {exp.date}
                </span>

                <h3 className="text-xl font-medium leading-tight mb-2">{exp.role}</h3>
                <h4 className="text-md font-bold text-gray-500 mb-1 flex items-center gap-2">
                {exp.company}</h4>

                <ul className="flex flex-col gap-4 ">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 font-mono text-sm lg:text-base text-gray-800 font-medium">
                      <ArrowRight size={18} className="mt-1 flex-shrink-0 text-black" strokeWidth={3} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  )
}

export default ExperienceSection;