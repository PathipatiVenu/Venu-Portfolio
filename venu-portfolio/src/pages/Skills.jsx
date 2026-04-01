import React from 'react';

function Skills() {
  const categories = [
    {
      name: "Programming & Frameworks",
      items: [
        { name: "React.js", img: "/react.js.png" },
        { name: "Node.js", img: "/node.js.png" },
        { name: "Python", img: "/python.png" },
        { name: "Java", img: "/Java.png" },
      ]
    },
    {
      name: "Data Science",
      items: [
        { name: "MySQL", img: "/mysql.png" },
        { name: "MongoDB", img: "/mongodb.png" },
        { name: "PostgreSQL", img: "/postgre.png" },
        { name: "Numpy & Pandas", img: "/np.png" },
        { name: "Big Data", img: "/bigdata.png" },
        { name: "Tableau", img: "/tableau.png" },
      ]
    },
    {
      name: "DevOps & Cloud",
      items: [
        { name: "AWS", img: "/aws.png" },
        { name: "Docker", img: "/docker.png" },
        { name: "Jenkins", img: "/jenkines.png" },
        { name: "Kubernetes", img: "/kubernetes.png" },
        { name: "Kafka", img: "/kafka.png" },
        { name: "Git", img: "/git.png" },
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
          Technical <span className="text-indigo-600">Stack</span>
        </h2>
        <p className="text-slate-500 font-medium">Hover over an icon to preview</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <div key={index} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl relative">
            <h3 className="text-xs font-black mb-12 text-indigo-500 uppercase tracking-[0.2em] text-center border-b pb-4">
              {cat.name}
            </h3>
            
            <div className="grid grid-cols-2 gap-y-16">
              {cat.items.map((skill, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center relative group"
                >
                  {/* THE HOVER POP-UP IMAGE
                      - Opacity 0 by default, becomes 100 on group-hover
                      - pointer-events-none ensures it doesn't flicker when mouse moves over the pop-up
                  */}
                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-32 h-32 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-110 pointer-events-none transition-all duration-300 z-50 flex flex-col items-center justify-center">
                    <img 
                      src={skill.img} 
                      alt={skill.name} 
                      className="w-20 h-20 object-contain mb-2"
                    />
                    <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-tighter">
                      {skill.name}
                    </span>
                    {/* Small arrow at the bottom of the pop-up */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100"></div>
                  </div>

                  {/* STATIC ICON (The trigger) */}
                  <div className="w-16 h-16 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-90 group-hover:opacity-50">
                    <img 
                      src={skill.img} 
                      alt={skill.name} 
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;