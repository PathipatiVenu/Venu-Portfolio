import React from 'react';
import Internship from './Internship';
import Projects from './Projects';
import Skills from './Skills';
import Contract from './Contract';
import ParticlesBg from '../components/ParticleBg';

const Home = () => {
  return (
    <main className="font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden">
      {/* HERO SECTION */}
      {/* Added pt-24 for mobile to account for a fixed navbar */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-slate-950 pt-24 pb-12 md:py-0 relative overflow-hidden">
        
        <ParticlesBg />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
          
          {/* IMAGE SIDE: Moved to top on mobile for better visual hierarchy */}
          <div className="order-1 md:order-2 relative group px-4 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-slate-900 rounded-[2rem] p-2 sm:p-3 shadow-2xl">
              <img 
                src="/Venu_portfolio.jpeg"
                alt="Venu Babu Pathipati" 
                /* Fixed aspect ratio for mobile consistency */
                className="w-full aspect-square md:aspect-[4/4.5] rounded-[1.5rem] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>

          <div className="text-center md:text-left order-2 md:order-1 px-2">
            {/* Badge Styling: Smaller text on mobile */}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Hire
            </span>
            
            {/* Headline: Fluid text size for smaller screens */}
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-white leading-[1.15] md:leading-[1.1] mb-6 tracking-[-0.04em]">
              Venu Babu <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500">
                Pathipati
              </span>
            </h1>
            
            {/* Professional Bio: Optimized max-width for mobile center-alignment */}
            <p className="text-base md:text-xl text-slate-400 max-w-md md:max-w-xl mx-auto md:mx-0 font-normal leading-relaxed mb-8 md:mb-10">
              Transforming complex data into <span className="text-white font-semibold">secure, scalable architectures</span>. 
              Specialized in Full-Stack ecosystems and deep learning solutions.
            </p>
            
            {/* Tech Pill Styling: Smaller padding on mobile */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12 justify-center md:justify-start">
              {["React", "CI/CD", "Python", "AWS", "Deep Learning","Postgres","MongoDB","Docker"].map(tech => (
                <span key={tech} className="px-3 py-1 md:px-4 md:py-1.5 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Action Buttons: Stack on small mobile, row on tablets/desktop */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center md:justify-start">
              <a href="#projects" className="w-full sm:w-auto text-center bg-white text-slate-950 px-8 md:px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                View Projects
              </a>
              <a href="#contact" className="w-full sm:w-auto text-center px-8 md:px-10 py-4 border border-slate-700 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections: Reduced padding for mobile (py-16 to py-20 instead of py-32) */}
      <section id="internship" className="py-20 md:py-32 px-4 md:px-6 bg-white"><Internship /></section>
      <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 border-y border-slate-200"><Projects /></section>
      <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-white"><Skills /></section>
      <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-slate-950 text-white"><Contract /></section>
    </main>
  );
};

export default Home;