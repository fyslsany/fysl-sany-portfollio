
import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
        {children}
    </a>
);

// Custom Behance Icon since it's not in the standard Lucide set
const BehanceIcon = ({ size = 24 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12h-4.5" />
    <path d="M4.5 9h4.5a2.5 2.5 0 0 1 0 5h-4.5v-5Z" />
    <path d="M4.5 14h4.5a2.5 2.5 0 0 1 0 5h-4.5v-5Z" />
    <path d="M18 19c-2 0-3.5-1.5-3.5-3.5s1.5-3.5 3.5-3.5 3.5 1.5 3.5 3.5" />
    <path d="M21.5 15.5h-7" />
    <path d="M16 8h4" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a14] border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center items-center gap-8 mb-6">
            <SocialIcon href="https://www.linkedin.com/in/md-faysal-ahamed-56298a389">
              <Linkedin size={24} />
            </SocialIcon>
            <SocialIcon href="https://www.behance.net/fyslsany">
              <BehanceIcon size={24} />
            </SocialIcon>
            <SocialIcon href="https://github.com/fyslsany">
              <Github size={24} />
            </SocialIcon>
        </div>
        <p className="text-base">&copy; {new Date().getFullYear()} Faysal Ahamed. All Rights Reserved.</p>
        <p className="text-sm mt-3 opacity-60">
            Designed & Built with a futuristic vision. 
            <span className="mx-3">|</span>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
