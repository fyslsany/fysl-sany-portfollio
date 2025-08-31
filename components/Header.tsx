
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#projects', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphic border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-3xl font-bold text-white tracking-tighter">
            F<span className="text-cyan-400">A</span>.
          </a>
          <nav className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden glassmorphic">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="py-2 text-lg text-gray-300 hover:text-cyan-400" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
