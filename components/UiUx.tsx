
import React from 'react';
import type { Project } from '../types';

const uiProjects: Project[] = [
  { id: 1, title: 'Fintech NeoBank App', category: 'Mobile UI/UX', imageUrl: 'https://picsum.photos/seed/fintech/500/800' },
  { id: 2, title: 'HealthTech AI Diagnostics', category: 'Web Dashboard', imageUrl: 'https://i.postimg.cc/rmbGGG3T/picture684-1.png/500' },
  { id: 3, title: 'AI Creative Suite', category: 'Desktop App UI', imageUrl: 'https://i.postimg.cc/hvLJJ9qp/finall.png' },
];

const UiUxCard: React.FC<{ project: Project; isMobile: boolean }> = ({ project, isMobile }) => (
    <div className={`group relative rounded-lg glassmorphic border border-white/10 p-4 transition-all duration-300 hover:border-purple-500/50 ${isMobile ? 'h-[500px]' : 'h-[400px]'}`}>
        <div className="h-full w-full rounded-md overflow-hidden">
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover object-top transition-all duration-500 group-hover:object-bottom" 
            />
        </div>
        <div className="absolute bottom-4 left-4 p-4">
             <h3 className="text-lg font-bold text-white">{project.title}</h3>
             <p className="text-purple-400">{project.category}</p>
        </div>
    </div>
);


const UiUx: React.FC = () => {
  return (
    <section id="uiux" className="py-20 sm:py-28 bg-[#0f0f1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">UI/UX Design Concepts</h2>
          <p className="text-lg text-gray-400 mt-2">Designing interfaces for tomorrow's technology.</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
                <UiUxCard project={uiProjects[0]} isMobile={true} />
            </div>
            <div className="md:col-span-2 space-y-8">
                <UiUxCard project={uiProjects[1]} isMobile={false} />
                <UiUxCard project={uiProjects[2]} isMobile={false} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default UiUx;
