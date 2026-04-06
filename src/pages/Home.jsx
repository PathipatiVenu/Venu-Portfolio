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
      {/* Increased top padding for mobile to ensure no overlap with fixed nav */}
      <section id="home" className="min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 bg-slate-950 pt-28 pb-16 md:pt-0 relative overflow-hidden">
        
        <ParticlesBg />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          
          {/* IMAGE SIDE: Mobile-optimized scaling */}
          <div className="order-1 md:order-2 relative group px-2 sm:px-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            {/* THE IMAGE CONTAINER */}
              <div className="relative bg-slate-900 rounded-[2rem] p-3 shadow-2xl group transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]">
                <img 
                src="/Venu_portfolio.jpeg"
                alt="Venu Babu Pathipati" 
                /* md:grayscale: Only black & white on desktop 
                  md:hover:grayscale-0: Becomes color on desktop hover 
                  grayscale-0: Forces full color as default for mobile
                */
                className="w-full aspect-square md:aspect-[4/4.5] rounded-[1.5rem] object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-700 shadow-inner" 
              />
              </div>
          </div>

          {/* TEXT SIDE */}
          <div className="text-center md:text-left order-2 md:order-1 px-1">
            {/* Animated Badge */}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Hire
            </span>
            
            {/* Headline: Uses vw for fluid mobile scaling */}
            <h1 className="text-[12vw] sm:text-5xl md:text-8xl font-extrabold text-white leading-[1.1] mb-6 tracking-[-0.05em]">
              Venu Babu <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500">
                Pathipati
              </span>
            </h1>
            
            {/* Professional Bio */}
            <p className="text-base md:text-xl text-slate-400 max-w-md md:max-w-xl mx-auto md:mx-0 font-normal leading-relaxed mb-8">
              Transforming complex data into <span className="text-white font-semibold">secure, scalable architectures</span>. 
              Specialized in Full-Stack ecosystems and deep learning solutions.
            </p>
            
            {/* Tech Pills: Flex-center for mobile */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center md:justify-start">
              {["React", "CI/CD", "Python", "AWS", "Deep Learning","Postgres"].map(tech => (
                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {tech}
                </span>
              ))}
            </div>
            
            {/* Action Buttons: Vertical stack for easier mobile tapping */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="w-full sm:w-auto text-center bg-white text-slate-950 px-8 py-4 rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:brightness-90 transition-all active:scale-95 shadow-xl">
                View Projects
              </a>
              <a href="#contact" className="w-full sm:w-auto text-center px-8 py-4 border border-slate-800 text-white rounded-full font-black text-xs md:text-sm uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Section Padding */}
      <section id="internship" className="py-20 md:py-32 px-4 md:px-6 bg-white"><Internship /></section>
      <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-slate-50 border-y border-slate-200"><Projects /></section>
      <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-white"><Skills /></section>
      <section id="contact" className="py-20 md:py-32 px-4 md:px-6 bg-slate-950 text-white"><Contract /></section>
    </main>
  );
};

export default Home;