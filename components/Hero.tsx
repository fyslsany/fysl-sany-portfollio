import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-cover bg-center px-4">
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Faysal Ahamed
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="text-cyan-400">Visual Designer | Frontend Developer | AI Enthusiast</span>
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://www.behance.net/fyslsany"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-md border-2 border-purple-500 text-purple-400 font-semibold glassmorphic neon-glow neon-glow-purple transition-all duration-300 hover:text-white"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-md border-2 border-cyan-500 text-cyan-400 font-semibold glassmorphic neon-glow neon-glow-blue transition-all duration-300 hover:text-white"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;