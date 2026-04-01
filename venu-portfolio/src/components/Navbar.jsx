import React from 'react';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Internships', href: '#internship' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-950/40 backdrop-blur-xl z-[100] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* BRAND SECTION with Image */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            {/* Small decorative glow behind the logo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            <img 
              src="/Venu_portfolio.jpeg" 
              alt="Venu Logo" 
              className="relative w-10 h-10 rounded-full object-cover border border-white/20"
            />
          </div>
          <div className="flex flex-col w-2 p-1.5">
            <span className="font- text-lg text-white tracking-tighter leading-none">
              Venu 
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none mt-1">
              Portfolio
            </span>
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-5 py-2 text-slate-700 hover:text-white text-xs font-black uppercase tracking-widest transition-all hover:bg-white/5 rounded-full"
            >
              {link.name}
            </a>
          ))}
          
          {/* Action Button */}
          <a 
            href="#contact" 
            className="ml-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-widest rounded-full transition-all shadow-lg shadow-indigo-500/20"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU TOGGLE (Placeholder icon) */}
        <div className="md:hidden flex items-center">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;