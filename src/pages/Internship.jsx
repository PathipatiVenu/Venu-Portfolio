import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
// Verify this path! 
import ProjectModal from '../components/ProjectModal'; 

const Internship = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const experiences = [
    {
      company: "Cluco",
      role: "AI/ML Developer",
      duration: "Dec 2025 - Present",
      location: "USA Remote",
      image: "/cluco.png", 
      tags: ["React", "Python", "AWS", "AI"],
      description: "Leading the development of a secure administrative platform for startup legal workflows.",
      tasks: ["Integrated React.js frontend with Python backend", "Designed secure Sqllite schemas", "Implemented AWS Lambda functions for automation"],
      deepDive: [
        {
          type: "ai",
          title: "JobGrid Automation Engine",
          content: "Built an AI system that intercepts job applications and automatically generates a custom-tailored resume based on the job description (JD). It tracks the application status and simplifies the entire user applying experience."
        },
        {
          type: "law",
          title: "USA Immigration Lawyer Platform",
          content: "Developed a secure workflow to automate immigration filings. The system builds applications (e.g., I-90, I-537 forms) based on user-uploaded documents, significantly reducing manual work for lawyers."
        }
      ]
    },
    {
      company: "Uncalled Innovaters",
      role: "Software Developer",
      duration: "Jun 2025 - Nov 2025",
      image: "/Uncalled.png", 
      tags: ["Python", "Flask", "Pandas", "AWS"],
      description: "Developed a predictive engine for real estate valuation using advanced regression.",
      tasks: ["Data cleaning with Pandas/Numpy", "Trained XGBoost models for price accuracy", "Deployed model via Flask API"],
      deepDive: [
        {
          type: "ai",
          title: "Real-Time Machine Rental Marketplace",
          content: "Engineered the software backend for a peer-to-peer heavy machinery rental platform, allowing students or entities to book equipment on a flexible rental basis instead of purchasing."
        },
        {
          type: "hack",
          title: "Real-Time Hackathon Management",
          content: "Developed real-time activity tracking and management modules to facilitate student engagement and live progress monitoring during hackathons."
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 relative">
      <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter uppercase text-slate-950">
        TECHNICAL <span className="text-indigo-600">INTERNSHIPS</span>
      </h2>

      {/* This MUST be inside the return div */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all flex flex-col items-center">
            <div className="p-2.5 bg-white border border-slate-100 rounded-full shadow-lg mb-8 ring-1 ring-indigo-50/50">
              <img src={exp.image} alt={exp.company} className="w-20 h-20 object-contain" />
            </div>
            
            <h3 className="text-3xl font-extrabold text-slate-950 uppercase tracking-tighter mb-1">{exp.company}</h3>
            <p className="text-sm font-black text-indigo-600 uppercase tracking-[0.2em] mb-6">{exp.role}</p>
            
            <div className="flex flex-wrap gap-3 mb-10 text-[11px] font-bold text-slate-500">
              <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400"/> {exp.duration}</div>
              {exp.location && <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400"/> {exp.location}</div>}
            </div>

            <button 
              onClick={() => setSelectedProject(exp)} 
              className="mt-auto w-full md:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-700 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all"
            >
              Explore Project <ExternalLink className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;