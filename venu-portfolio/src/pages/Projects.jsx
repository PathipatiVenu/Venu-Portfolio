import React, { useState } from 'react';
import { 
  Cpu, 
  Mic2, 
  ShieldCheck, 
  ArrowUpRight, 
  BrainCircuit, 
  PhoneCall, 
  FileSearch,
  CheckCircle2,
  X
} from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      name: "AI Interview & RAG Ecosystem",
      category: "LLM & Generative AI",
      icon: <BrainCircuit className="w-8 h-8 text-indigo-500" />,
      shortDesc: "Virtual AI interview platform using RAG for dynamic context-aware technical assessments.",
      fullDesc: "A sophisticated recruitment tool that uses Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to conduct human-like technical interviews. It retrieves real-time data to challenge candidates based on their specific resumes and industry standards.",
      features: [
        "Vector database integration for high-speed context retrieval",
        "Semantic analysis of candidate responses",
        "Automated scoring based on technical accuracy and soft skills",
        "Anti-plagiarism and eye-tracking monitoring"
      ],
      tech: ["Python", "LangChain", "OpenAI", "Pinecone", "React"]
    },
    {
      name: "Smart Care Voice Reminder",
      category: "AI/ML & Healthcare",
      icon: <Mic2 className="w-8 h-8 text-rose-500" />,
      shortDesc: "Automated medicine reminder system using voice synthesis, direct phone calls, and email alerts.",
      fullDesc: "Designed for elders and patients who forget medication schedules. The app doesn't just notify; it calls family members using recorded voices to ensure the patient takes their medicine, backed by email logs for tracking.",
      features: [
        "Twilio API integration for automated emergency/reminder calls",
        "Voice enhancement for clear, comforting synthesized speech",
        "Multi-channel alerts (Email, SMS, and Voice)",
        "Patient adherence tracking dashboard for doctors"
      ],
      tech: ["Node.js", "Twilio API", "WebSpeech API", "MongoDB", "Express"]
    },
    {
      name: "MedCrypt Analysis Suite",
      category: "Cybersecurity & DL",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
      shortDesc: "Medical image encryption using AES and DL-based diagnostic health analysis.",
      fullDesc: "A dual-purpose platform that secures sensitive medical imagery using AES encryption while simultaneously running Deep Learning models to analyze reports and determine if a patient is healthy or unhealthy.",
      features: [
        "Hybrid AES + Deep Learning encryption architecture",
        "Automated report parsing for diagnostic classification",
        "Zero-knowledge proof implementation for data privacy",
        "High-fidelity image restoration post-decryption"
      ],
      tech: ["Python", "TensorFlow", "PyCryptodome", "OpenCV", "Next.js"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-5xl font-black text-slate-900 tracking-tighter uppercase text-center">
          Featured <span className="text-indigo-600">Innovation</span>
        </h2>
        <div className="w-24 h-1.5 bg-indigo-600 rounded-full mt-4"></div>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="group bg-white border border-slate-100 p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            <div className="mb-8 p-4 bg-slate-50 rounded-2xl w-fit group-hover:bg-indigo-50 transition-colors duration-500">
              {project.icon}
            </div>
            
            <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-2">{project.category}</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">{project.name}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">{project.shortDesc}</p>
            
            <button 
              onClick={() => setActiveProject(project)}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 group-hover:text-indigo-600 transition-colors"
            >
              Learn More <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* PROJECT SIDEBAR (SLIDE-OVER) */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${activeProject ? 'visible' : 'invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-500 ${activeProject ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setActiveProject(null)}
        ></div>
        
        {/* Panel */}
        <div className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl transition-transform duration-500 ease-out p-12 overflow-y-auto ${activeProject ? 'translate-x-0' : 'translate-x-full'}`}>
          <button 
            onClick={() => setActiveProject(null)}
            className="mb-12 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>

          {activeProject && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
              <div className="mb-8 p-6 bg-indigo-50 rounded-3xl w-fit">
                {activeProject.icon}
              </div>
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-4 uppercase">{activeProject.name}</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                {activeProject.fullDesc}
              </p>
              <div className="space-y-8 mb-12">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b pb-4">Key Technical Deliverables</h4>
                {activeProject.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-indigo-500 shrink-0" />
                    <p className="text-slate-700 font-semibold">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Stack Utilized</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t, idx) => (
                    <span key={idx} className="px-5 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
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