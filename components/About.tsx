
import React from 'react';

const TimelineItem: React.FC<{ year: string; title: string; description: string; index: number }> = ({ year, title, description, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-center mb-12 w-full animate-fade-in`} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
      {/* Date Pillar for Mobile */}
      <div className="md:hidden w-full mb-4 px-8">
          <span className="text-cyan-400 font-black text-xl tracking-widest">{year}</span>
      </div>

      {/* Content Block (Left for even on Desktop) */}
      <div className={`hidden md:flex w-full md:w-[45%] ${isEven ? 'justify-end pr-12 text-right' : 'opacity-0 pointer-events-none'}`}>
        {isEven && (
          <div className="max-w-sm">
            <p className="font-black text-cyan-400 text-lg tracking-widest">{year}</p>
            <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">{title}</h3>
            <p className="text-gray-400 mt-2 leading-relaxed">{description}</p>
          </div>
        )}
      </div>

      {/* Center Circle Indicator */}
      <div className="absolute left-8 md:left-auto z-10 w-6 h-6 rounded-full bg-[#0a0a14] border-4 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
      </div>

      {/* Content Block (Right for odd on Desktop) */}
      <div className={`w-full md:w-[45%] pl-20 md:pl-12 text-left ${!isEven ? '' : 'md:opacity-0 md:pointer-events-none'}`}>
        {!isEven ? (
           <div className="max-w-sm">
             <p className="hidden md:block font-black text-cyan-400 text-lg tracking-widest">{year}</p>
             <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
             <p className="text-gray-400 mt-2 leading-relaxed">{description}</p>
           </div>
        ) : (
          <div className="md:hidden max-w-sm">
             <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
             <p className="text-gray-400 mt-2 leading-relaxed">{description}</p>
           </div>
        )}
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const journey = [
    { year: "2016", title: "Creative Spark", description: "Ignited my passion for visual communication. Immersed myself in the foundations of typography, color theory, and vector-based layout systems." },
    { year: "2018", title: "The Freelance Era", description: "Launched into the global market. Collaborated with startups across industries to build cohesive brand identities and digital marketing assets." },
    { year: "2020", title: "UI/UX Mastery", description: "Evolved from static design to interactive experiences. Mastered user research, wireframing, and the psychology of high-conversion digital interfaces." },
    { year: "2022", title: "Frontend Engineering", description: "Closed the creative-technical loop. Became a developer-designer hybrid, ensuring that visual visions are executed with pixel-perfect code precision." },
    { year: "2024", title: "AI-Powered Innovation", description: "Pioneering the next frontier. Integrating generative AI into the design workflow to deliver unprecedented speed and creative possibilities." }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0a0a14] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Evolution of a Creator</span>
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tight">My Journey</h2>
          <div className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-10.5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent transform md:-translate-x-1/2 opacity-30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"></div>

          <div className="flex flex-col items-center">
            {journey.map((item, idx) => (
              <TimelineItem 
                key={idx}
                index={idx}
                year={item.year}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
