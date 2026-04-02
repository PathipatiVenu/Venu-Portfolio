import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll to toggle background visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Internships', href: '#internship' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${
        /* Only show background/border if menu is open OR user has scrolled */
        (isScrolled || isMenuOpen) 
          ? 'bg-slate-950 border-white/10' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* BRAND SECTION */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
            <img 
              src="/Venu_portfolio.jpeg" 
              alt="Venu Logo" 
              className="relative w-8 h-8 rounded-full object-cover border border-white/20"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base text-white tracking-tighter leading-none">
              Venu 
            </span>
            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.2em] leading-none mt-0.5">
              Portfolio
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-3 py-1.5 text-slate-400 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all hover:bg-white/5 rounded-full"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-2 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none z-[110]"
          aria-label="Toggle Menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div 
        className={`fixed inset-0 bg-slate-950 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 pt-16">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-black text-white uppercase tracking-[0.2em] hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-2.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;