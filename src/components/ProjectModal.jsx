// src/components/ProjectModal.jsx
import React from 'react';
// src/components/ProjectModal.jsx
import { X, Calendar, MapPin, CheckCircle2, BotMessageSquare, Target } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* 1. Backdrop Blur (prevents navigation/interaction) */}
      <div 
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-md animate-in fade-in"
        onClick={onClose}
      ></div>

      {/* 2. The Detailed Card (Floating without navigation) */}
      <div className="relative bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-slate-500" />
        </button>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left Side: Summary & Image */}
          <div className="md:w-1/3 flex flex-col items-center">
            <div className="p-3 bg-white border border-slate-100 rounded-full shadow-lg mb-6 ring-2 ring-indigo-50/50">
              <img 
                src={project.image} 
                alt={project.company} 
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-950 uppercase tracking-tighter text-center">{project.company}</h3>
            <p className="text-sm font-black text-indigo-600 uppercase tracking-[0.2em] mb-4 text-center">{project.role}</p>
            
            <div className="flex flex-col gap-2.5 text-xs font-semibold text-slate-500 bg-slate-50 p-4 rounded-xl w-full">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-indigo-400"/> {project.duration}</div>
              {project.location && <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-indigo-400"/> {project.location}</div>}
            </div>
          </div>

          {/* Right Side: Deep Project Information */}
          <div className="flex-1 space-y-8">
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
              <p className="text-slate-700 leading-relaxed font-medium">"{project.description}"</p>
            </div>

            {/* NEW: The Deep Information sections */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Project Deep Dive</h4>
              {project.deepDive.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1 p-2 bg-indigo-100/50 rounded-lg text-indigo-600">
                    {item.type === 'ai' ? <BotMessageSquare className="w-5 h-5"/> : <Target className="w-5 h-5"/>}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{item.title}</h5>
                    <p className="text-sm text-slate-600">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Original Technical Contribution List */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Core Technical Delivery</h4>
              {project.tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold text-slate-700">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;