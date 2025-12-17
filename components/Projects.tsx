
import React, { useState } from 'react';
import type { Project } from '../types';
import { ArrowUpRight, Palette, Layers, Eye } from 'lucide-react';

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'OLYMPIA MALL - KUWAIT || Full Rebranding', 
    category: 'Brand Identity', 
    imageUrl: 'https://i.postimg.cc/kGnJpWW6/behance-6797a0b0530a8.jpg',
    description: 'A complete brand identity system for a futuristic tech startup, including logo, color palette, typography, and marketing collateral.',
    links: {
      behance: 'https://www.behance.net/gallery/178150099/Zenith-Robotics-Brand-Identity-Design',
    } 
  },
  { 
    id: 2, 
    title: "Doctor's Portfolio Website Design", 
    category: 'Logo & Web', 
    imageUrl: 'https://i.postimg.cc/HLyvfKtR/Screenshot-2025-08-31-175755.png',
    description: 'Designed a modern logo and a responsive landing page for a new fintech company, focusing on trust and user experience.',
    links: {
      live: 'https://www.facebook.com/share/v/1RvK4u9Hvh/',
    }
  },
  { 
    id: 3, 
    title: 'Product Identity and Branding Design', 
    category: 'Packaging Design', 
    imageUrl: 'https://i.postimg.cc/76q1mQtg/image.png',
    description: 'Elegant and minimalist packaging design for a luxury cosmetics brand, aimed at creating a premium unboxing experience.',
    links: {
      behance: 'https://www.behance.net/gallery/178150099/Zenith-Robotics-Brand-Identity-Design',
    } 
  },
  { 
    id: 4, 
    title: 'Brand identity', 
    category: 'Full Rebrand', 
    imageUrl: 'https://i.postimg.cc/YSRLq28W/3b4b9c178150099-Y3-Jvc-Cwy-NTAw-LDE5-NTUs-MCw3-Nzk.png',
    description: 'A comprehensive rebranding project for a robotics firm, including a new logo, visual guidelines, and website UI concepts.',
    links: {
      behance: 'https://www.behance.net/gallery/178150099/Zenith-Robotics-Brand-Identity-Design',
    }
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group relative flex flex-col rounded-xl bg-[#12121a] border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden bg-slate-900">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800 z-10">
             <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={project.imageUrl} 
          alt={project.title}
          // @ts-ignore
          fetchPriority="high"
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setIsLoading(false)}
        />
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent opacity-80"></div>
        
        {/* Category Pill */}
        <div className="absolute top-4 left-4">
             <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-widest text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-full uppercase">
                <Layers size={10} className="text-cyan-400" />
                {project.category}
             </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6 relative">
        {/* Floating Action Button (appears on hover) */}
        <div className="absolute -top-6 right-6">
            <a 
                href={project.links.live || project.links.behance} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out hover:bg-cyan-400"
            >
                {project.links.live ? <Eye size={20} /> : <ArrowUpRight size={20} />}
            </a>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
        </p>

        {/* Project Meta / Links */}
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
           <div className="flex gap-4">
               {/* Visual indicators for project contents */}
               <div className="flex items-center gap-1.5 text-xs text-gray-500" title="Identity System">
                   <Palette size={14} /> 
                   <span>Identity</span>
               </div>
           </div>
           
           <a 
                href={project.links.live || project.links.behance}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-semibold text-gray-400 uppercase tracking-wider hover:text-white transition-colors flex items-center gap-2"
           >
               Details <ArrowUpRight size={14} />
           </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0a0a14] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm mb-2 block">Selected Works</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Brand Identity & <br /> Visual Systems</h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed md:text-right">
                A curated selection of projects demonstrating strategic design, visual storytelling, and brand craftsmanship.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
