import React from 'react'
import { GraduationCap, MapPin, Calendar, Award, Star } from 'lucide-react';
import Reveal from './Reveal';
function EducationSection() {
  return (
    <Reveal>
    <section id="Education" className=" py-20 px-6 lg:px-20 bg-[#fbfbfb] flex flex-col items-center overflow-hidden">
      
      {/* 1. Heading - Consistent with Experience Section style */}
      <div className='relative mb-16'>
        <h2 className='font-medium text-5xl lg:text-6xl text-black relative z-10  tracking-tighter'>
          Education
        </h2>
        <span className='absolute bottom-1 left-0 w-full h-[40%] bg-yellow-400 -z-0 opacity-80 rotate-[-1deg]'></span>
      </div>

      {/* 2. Main Stacked Card Container - Width and Height Fixed */}
      {/* h-screen ko h-auto kiya aur max-w-4xl taaki ye screen par fit rahe */}
      <div className="w-full max-w-4xl relative">
        
        {/* Decorative Background Cards */}
        <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 rounded-3xl -z-20"></div>
        <div className="absolute inset-0 bg-yellow-400 border-4 border-black translate-x-1.5 translate-y-1.5 rounded-3xl -z-10"></div>

        {/* Main Content Card - Padding reduced for better fit */}
        <div className="bg-white border-4 border-black rounded-3xl p-6 lg:p-10 flex flex-col gap-10 relative overflow-hidden">
          
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          {/* --- TOP ROW --- */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 relative z-10">
            <div className='flex-1 text-center md:text-left'>
               <div className='flex items-center justify-center md:justify-start gap-3 mb-4'>
                 <div className='bg-black text-white p-2.5 rounded-xl shadow-[3px_3px_0px_0px_rgba(250,204,21,1)]'>
                   <GraduationCap size={28} />
                 </div>
                 <span className='font-black text-xs uppercase tracking-widest border-b-2 border-yellow-400'>Degree Program</span>
               </div>
               
               <h3 className="text-3xl lg:text-5xl font-medium text-black leading-tight mb-2">
                 Bachelor of Business Administration
               </h3>
               <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                 <span className='flex items-center gap-2 font-bold text-sm text-gray-600'><MapPin size={16}/> IPER, Bhopal</span>
                 <span className='flex items-center gap-2 font-bold text-sm text-gray-600'><Calendar size={16}/> 2021 – 2024</span>
               </div>
            </div>

            {/* STAMP GRADE - Size slightly reduced */}
            <div className='relative rotate-[8deg] hover:rotate-0 transition-transform duration-500'>
               <div className='w-32 h-32 rounded-full border-4 border-dashed border-yellow-500 flex flex-col items-center justify-center bg-yellow-50 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
                 <Star size={20} fill="orange" strokeWidth={0} className='mb-1' />
                 <span className='font-black text-4xl'>7.3</span>
                 <span className='font-bold text-[10px] uppercase'>Final CGPA</span>
               </div>
               <div className='absolute -bottom-1 -left-1 bg-black text-white text-[8px] font-black px-2 py-0.5 rounded-md uppercase'>Verified</div>
            </div>
          </div>

          {/* --- BOTTOM ROW --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-8 border-t-4 border-black border-dashed">
            
            {/* Specialization Box */}
            <div className='bg-gray-50 border-2 border-black p-5 rounded-2xl'>
               <h4 className='font-black text-lg uppercase mb-2 flex items-center gap-2'>
                 <div className='h-3 w-3 bg-yellow-400 border-2 border-black rotate-45'></div> Major
               </h4>
               <p className='font-mono text-sm font-bold text-gray-700 leading-relaxed'>
                 Marketing: Digital Marketing, CRM, and Campaign Management.
               </p>
            </div>

            {/* Schooling List */}
            <div className='flex flex-col gap-3'>
               <div className='flex items-center justify-between bg-white border-2 border-black p-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all'>
                 <span className='font-black text-xs uppercase tracking-tight'>Class 12th (Commerce)</span>
                 <span className='bg-black text-white px-2 py-0.5 text-xs font-black rounded-lg'>63%</span>
               </div>
               <div className='flex items-center justify-between bg-white border-2 border-black p-3 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all'>
                 <span className='font-black text-xs uppercase tracking-tight'>Class 10th Standard</span>
                 <span className='bg-black text-white px-2 py-0.5 text-xs font-black rounded-lg'>62%</span>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
    </Reveal>
  )
}

export default EducationSection;