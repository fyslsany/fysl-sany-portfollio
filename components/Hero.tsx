
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-cover bg-center px-4 relative overflow-hidden pt-24 pb-12">
      <div className="z-10 flex flex-col items-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Faysal Ahamed
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <span className="text-cyan-400">Visual Designer | Frontend Developer | AI Enthusiast</span>
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in mb-16" style={{ animationDelay: '0.6s' }}>
          <a
            href="#contact"
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

        {/* Featured Project Showcase */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="glassmorphic p-2 rounded-2xl border border-white/10 shadow-2xl shadow-cyan-500/20 transform hover:scale-[1.02] transition-transform duration-500 max-w-xs sm:max-w-sm mx-auto">
                 <img 
                    src="https://i.postimg.cc/HLyvfKtR/Screenshot-2025-08-31-175755.png" 
                    alt="Combaine Medical Centre UI" 
                    className="w-full h-auto rounded-xl shadow-lg"
                 />
                 <div className="absolute -bottom-4 -right-4 bg-cyan-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    LATEST WORK
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
