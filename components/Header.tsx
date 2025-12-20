
import React, { useState } from 'react';
import { Menu, X as CloseMenu, Instagram, Youtube, Facebook } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void; }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group cursor-pointer text-sm font-medium">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const HeaderSocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110">
    {children}
  </a>
);

// Custom X (formerly Twitter) Icon
const XIcon = ({ size = 20 }: { size?: number }) => (
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
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/profile.php?id=61583844835869' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/mdfy.slsany/' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@MdFaysalAhamed-e5l6l' },
    { icon: <XIcon size={18} />, href: 'https://x.com/fyslsany' },
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
          <a href="#" onClick={handleNavClick} className="text-3xl font-bold text-white tracking-tighter shrink-0">
            F<span className="text-cyan-400">A</span>.
          </a>

          {/* Social Icons - Middle Section (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 px-8 border-x border-white/5 mx-4">
            {socialLinks.map((social, idx) => (
              <HeaderSocialIcon key={idx} href={social.href}>
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-1">
              {isOpen ? <CloseMenu size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden glassmorphic border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col items-center py-8 gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-xl text-gray-300 hover:text-cyan-400 font-medium" onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
            
            {/* Mobile Socials */}
            <div className="flex items-center gap-8 mt-6 pt-6 border-t border-white/10 w-full justify-center">
               {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer" className="text-cyan-400">
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
