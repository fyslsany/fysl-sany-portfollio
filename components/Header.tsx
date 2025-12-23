
import React, { useState } from 'react';
import { Menu, X as CloseMenu, Instagram, Youtube, Facebook } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group cursor-pointer text-sm font-medium">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const HeaderSocialIcon: React.FC<{ href: string; children: React.ReactNode; label: string }> = ({ href, children, label }) => (
  <div className="group relative flex flex-col items-center">
    {/* Futuristic Tooltip */}
    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-300 bg-cyan-500 text-slate-900 text-[10px] font-bold px-2 py-1 rounded border border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)] pointer-events-none uppercase tracking-tighter">
      {label}
    </span>
    
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 glassmorphic text-gray-400 transition-all duration-500 group-hover:text-cyan-400 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:-translate-y-1 overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors duration-500"></div>
      
      {/* Icon Content */}
      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
        {children}
      </div>

      {/* Scanning Line Animation on Hover */}
      <div className="absolute top-0 left-[-100%] w-full h-[1px] bg-cyan-400/30 group-hover:animate-[scan_1.5s_infinite] pointer-events-none"></div>
    </a>

    <style>{`
      @keyframes scan {
        0% { top: 0; opacity: 0; left: 0; }
        50% { opacity: 1; }
        100% { top: 100%; opacity: 0; left: 0; }
      }
    `}</style>
  </div>
);

// Custom X (formerly Twitter) Icon
const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://www.facebook.com/profile.php?id=61583844835869', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/mdfy.slsany/', label: 'Instagram' },
    { icon: <Youtube size={18} />, href: 'https://www.youtube.com/@MdFaysalAhamed-e5l6l', label: 'YouTube' },
    { icon: <XIcon size={16} />, href: 'https://x.com/fyslsany', label: 'X.com' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphic border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" onClick={handleNavClick} className="text-3xl font-bold text-white tracking-tighter shrink-0 group">
            F<span className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-500">A</span>.
          </a>

          {/* Social Icons - Middle Section (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 px-10 border-x border-white/5 mx-4 h-12">
            {socialLinks.map((social, idx) => (
              <HeaderSocialIcon key={idx} href={social.href} label={social.label}>
                {social.icon}
              </HeaderSocialIcon>
            ))}
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={handleNavClick}>{link.label}</NavLink>
            ))}
            <button 
              className="ml-6 px-3 py-1 rounded-md border border-cyan-400 text-cyan-400 text-xs font-bold hover:bg-cyan-400 hover:text-slate-900 transition-colors"
              aria-label="Switch to Bengali language"
            >
              BN
            </button>
          </nav>

          {/* Mobile UI */}
          <div className="md:hidden flex items-center">
             <button 
              className="mr-4 px-2 py-1 rounded-md border border-cyan-400 text-cyan-400 text-xs font-bold"
              aria-label="Switch to Bengali language"
            >
              BN
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-1 transition-transform active:scale-90">
              {isOpen ? <CloseMenu size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden glassmorphic border-t border-white/10 animate-fade-in shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <nav className="flex flex-col items-center py-10 gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-2xl text-gray-300 hover:text-cyan-400 font-bold tracking-tight" onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
            
            {/* Mobile Socials */}
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10 w-full justify-center">
               {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border border-white/10 glassmorphic flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
