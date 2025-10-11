import React from 'react';

const TimelineItem: React.FC<{ year: string; title: string; description: string; align: 'left' | 'right' }> = ({ year, title, description, align }) => (
  <div className={`relative w-full md:w-1/2 mb-8 ${align === 'left' ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
    <div className={`absolute top-0 w-4 h-4 rounded-full mt-1.5 bg-slate-700 border-2 border-purple-500 ${align === 'left' ? 'right-0 md:-mr-2' : 'left-0 md:-ml-2'}`}></div>
    <div className="p-4 rounded-lg glassmorphic border border-white/10">
      <p className="font-bold text-cyan-400">{year}</p>
      <h3 className="text-lg font-semibold text-white mt-1">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0f0f1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">About Faysal Ahamed</h2>
          <p className="text-lg text-gray-400 mt-2">Designing meaningful visuals & user experiences since 2016.</p>
           <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="lg:w-1/3 flex flex-col items-center gap-8">
            <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-full animate-pulse blur-xl"></div>
                <img src="https://i.postimg.cc/y8QTYzjW/Layer-6.png" alt="Faysal Ahamed" className="relative w-full h-full object-cover rounded-full border-4 border-slate-800" />
            </div>
            <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="faysal-ahamed-sany" data-version="v1">
              <a className="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/faysal-ahamed-sany?trk=profile-badge" target="_blank" rel="noopener noreferrer">Faysal Ahamed</a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="relative timeline">
              <div className="flex flex-col items-center">
                <TimelineItem 
                  year="2016"
                  title="Journey Begins"
                  description="Started exploring the world of graphic design, mastering fundamental principles and tools."
                  align="left"
                />
                <TimelineItem 
                  year="2018"
                  title="Freelance & Growth"
                  description="Began taking on freelance projects, focusing on logo design and small business branding."
                  align="right"
                />
                <TimelineItem 
                  year="2020"
                  title="Venturing into UI/UX"
                  description="Expanded skillset to include User Interface and User Experience design, creating intuitive digital products."
                  align="left"
                />
                 <TimelineItem 
                  year="2022"
                  title="Senior Frontend Webdesigner"
                  description="Bridging the gap between design and development, crafting pixel-perfect, responsive, and user-friendly websites."
                  align="right"
                />
                <TimelineItem 
                  year="2024"
                  title="AI Enthusiast"
                  description="Exploring the intersection of AI and design, leveraging generative models to enhance creative workflows."
                  align="left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;