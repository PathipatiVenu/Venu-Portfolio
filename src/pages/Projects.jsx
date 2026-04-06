import React, { useState } from 'react';
import { Cpu, Mic2, ShieldCheck, ArrowUpRight, BrainCircuit, CheckCircle2, X } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    // ... (Keep your projects data array here)
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 relative overflow-hidden">
      <div className="flex flex-col items-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase text-center">
          Featured <span className="text-indigo-600">Innovation</span>
        </h2>
        <div className="w-16 md:w-24 h-1.5 bg-indigo-600 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <div key={i} className="group bg-white border border-slate-100 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="mb-6 md:mb-8 p-3 md:p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-indigo-50 transition-colors">
              {project.icon}
            </div>
            <p className="text-[9px] md:text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight leading-tight">{project.name}</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-1">{project.shortDesc}</p>
            <button onClick={() => setActiveProject(project)} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-indigo-600 transition-colors">
              Learn More <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* PROJECT SIDEBAR (SLIDE-OVER) */}
      <div className={`fixed inset-0 z-[150] ${activeProject ? 'visible' : 'invisible'} transition-all duration-300`}>
        {/* Backdrop */}
        <div className={`absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-500 ${activeProject ? 'opacity-100' : 'opacity-0'}`} onClick={() => setActiveProject(null)}></div>
        
        {/* Panel - Full width on mobile, max-2xl on desktop */}
        <div className={`absolute right-0 top-0 h-full w-full md:max-w-2xl bg-white shadow-2xl transition-transform duration-500 ease-in-out p-6 md:p-12 overflow-y-auto ${activeProject ? 'translate-x-0' : 'translate-x-full'}`}>
          {activeProject && (
            <div className="relative">
              <button onClick={() => setActiveProject(null)} className="sticky top-0 mb-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-full z-10 transition-colors">
                <X className="w-5 h-5 text-slate-600" />
              </button>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-6 p-4 bg-indigo-50 rounded-2xl w-fit">{activeProject.icon}</div>
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tighter mb-4 uppercase">{activeProject.name}</h3>
                <p className="text-sm md:text-lg text-slate-600 leading-relaxed mb-8 font-medium">{activeProject.fullDesc}</p>
                
                <div className="space-y-6 md:space-y-8 mb-10">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b pb-2">Key Technical Deliverables</h4>
                  {activeProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                      <p className="text-sm md:text-base text-slate-700 font-semibold">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Stack Utilized</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((t, idx) => (
                      <span key={idx} className="px-3 py-1.5 md:px-5 md:py-2 bg-slate-900 text-white rounded-lg text-[9px] font-bold uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;