import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-4 relative overflow-hidden pt-32 pb-12">
      <div className="z-10 flex flex-col items-center max-w-5xl mx-auto">
        
        {/* Profile Image - LCP Priority */}
        <div className="relative mb-8 animate-fade-in">
          <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            <div className="w-full h-full rounded-full bg-[#0a0a14] p-1 overflow-hidden">
               <img 
                src="https://i.postimg.cc/y8QTYzjW/Layer-6.png" 
                alt="Faysal Ahamed" 
                width="160"
                height="160"
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="absolute -inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite]"></div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Faysal Ahamed
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-cyan-400">Visual Designer | Frontend Developer | AI Enthusiast</span>
        </p>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg leading-relaxed animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
          Visionary creator blending artistic precision with technical innovation. 
          Specializing in crafting <span className="text-white border-b border-purple-500/50">immersive brand identities</span> and 
          <span className="text-white border-b border-cyan-500/50"> future-proof digital experiences</span>.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://wa.me/8801778730640"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-md border-2 border-purple-500 text-purple-400 font-semibold glassmorphic neon-glow transition-all duration-300 hover:bg-purple-500 hover:text-white"
          >
            Hire Me
          </a>
          <a
            href="#uiux"
            className="px-8 py-3 rounded-md border-2 border-cyan-500 text-cyan-400 font-semibold glassmorphic neon-glow transition-all duration-300 hover:bg-cyan-500 hover:text-white"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;