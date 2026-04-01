import React from 'react';
// Importing brand-specific icons from react-icons (Font Awesome set)
import { 
  FaInstagram, 
  FaFacebook, 
  FaWhatsapp, 
  FaGithub, 
  FaLinkedin 
} from 'react-icons/fa';
// Importing brand-specific icon for LeetCode (Simple Icons set)
import { SiLeetcode } from 'react-icons/si';
// Importing UI icons from lucide-react
import { 
  Mail, 
  Code, 
  ExternalLink 
} from 'lucide-react';

const Contract = () => {
  const contactData = [
    {
      name: "LinkedIn",
      value: "Venu_Pathipati",
      href: "https://www.linkedin.com/in/venu-pathipati-903a83290/?skipRedirect=true",
      icon: <FaLinkedin className="w-6 h-6" />,
      color: "hover:text-[#0077B5] hover:border-[#0077B5]/50"
    },
    {
      name: "GitHub",
      value: "Venu_Pathipati",
      href: "https://github.com/PathipatiVenu",
      icon: <FaGithub className="w-6 h-6" />,
      color: "hover:text-white hover:border-white/50"
    },
    {
      name: "Email",
      value: "venupathipati1@gmail.com",
      href: "mailto:venupathipati1@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:text-red-500 hover:border-red-500/50"
    },
    {
      name: "LeetCode",
      value: "Pathipati_Venu",
      href: "https://leetcode.com/u/Pathipati_venu/", 
      icon: <SiLeetcode className="w-6 h-6" />, 
      color: "hover:text-yellow-500 hover:border-yellow-500/50"
    },
    {
      name: "WhatsApp",
      value: "Chat with me",
      href: "https://wa.me/918639145045", 
      icon: <FaWhatsapp className="w-6 h-6" />,
      color: "hover:text-green-500 hover:border-green-500/50"
    },
    {
      name: "Instagram",
      value: "@__venu__11__08__", 
      href: "https://www.instagram.com/___venu__11__08__/",
      icon: <FaInstagram className="w-6 h-6" />, 
      color: "hover:text-pink-500 hover:border-pink-500/50"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase">
          Let's <span className="text-indigo-500">Connect</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto font-medium">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactData.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center p-8 bg-slate-900/40 border border-slate-800 rounded-[2rem] transition-all duration-300 group hover:bg-slate-800/60 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 ${item.color}`}
          >
            {/* Icon Wrapper */}
            <div className="p-4 bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform text-white ring-1 ring-white/5">
              {item.icon}
            </div>

            {/* Text Content */}
            <div className="ml-6 flex-1">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">
                {item.name}
              </p>
              <p className="text-white font-bold truncate tracking-tight text-lg">
                {item.value}
              </p>
            </div>

            {/* External Icon */}
            <ExternalLink className="w-5 h-5 text-slate-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0" />
          </a>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-28 pt-10 border-t border-slate-800/50 text-center">
        <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.4em]">
          © {new Date().getFullYear()} Venu Babu Pathipati • Built with React & Tailwind
        </p>
      </div>
    </div>
  );
};

export default Contract;