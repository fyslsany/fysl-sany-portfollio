
import React from 'react';
import { Linkedin, Dribbble, Github } from 'lucide-react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
        {children}
    </a>
)

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a14] border-t border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center items-center gap-6 mb-4">
            <SocialIcon href="https://www.linkedin.com/in/md-faysal-ahamed-56298a389"><Linkedin size={24} /></SocialIcon>
            <SocialIcon href="https://dribbble.com/fyslsany"><Dribbble size={24} /></SocialIcon>
            <SocialIcon href="https://github.com/fyslsany"><Github size={24} /></SocialIcon>
        </div>
        <p>&copy; {new Date().getFullYear()} Faysal Ahamed. All Rights Reserved.</p>
        <p className="text-sm mt-2">
            Designed & Built with a futuristic vision. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
