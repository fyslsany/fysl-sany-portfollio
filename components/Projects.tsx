
import React, { useState } from 'react';
import type { Project } from '../types';
import { ExternalLink } from 'lucide-react';

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'QuantumLeap Inc.', 
    category: 'Brand Identity', 
    imageUrl: 'https://i.postimg.cc/kGnJpWW6/behance-6797a0b0530a8.jpg',
    description: 'A complete brand identity system for a futuristic tech startup, including logo, color palette, typography, and marketing collateral.',
    links: {
      behance: 'https://www.behance.net/gallery/178150099/Zenith-Robotics-Brand-Identity-Design',
    } 
  },
  { 
    id: 2, 
    title: 'Nova Financial', 
    category: 'Logo & Web', 
    imageUrl: 'https://i.postimg.cc/HLyvfKtR/Screenshot-2025-08-31-175755.png',
    description: 'Designed a modern logo and a responsive landing page for a new fintech company, focusing on trust and user experience.',
    links: {
      live: 'https://www.facebook.com/share/v/1RvK4u9Hvh/',
    }
  },
  { 
    id: 3, 
    title: 'Aether Cosmetics', 
    category: 'Packaging Design', 
    imageUrl: 'https://i.postimg.cc/76q1mQtg/image.png',
    description: 'Elegant and minimalist packaging design for a luxury cosmetics brand, aimed at creating a premium unboxing experience.',
    links: {
      behance: 'https://www.behance.net/gallery/178150099/Zenith-Robotics-Brand-Identity-Design',
    } 
  },
  { 
    id: 4, 
    title: 'Zenith Robotics', 
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
    <div className="group relative overflow-hidden rounded-lg glassmorphic border border-white/10 transition-all duration-500 hover:border-cyan-400/50 hover:scale-105 flex flex-col">
      <div className="relative h-80 bg-slate-900">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 animate-pulse z-10">
             <div className="w-10 h-10 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={project.imageUrl} 
          alt={project.title}
          // @ts-ignore
          fetchPriority="high"
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isLoading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <p className="text-cyan-400 mb-2">{project.category}</p>
        <p className="text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto flex items-center gap-4">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
              <ExternalLink size={16} /> Live Preview
            </a>
          )}
          {project.links.behance && (
            <a href={project.links.behance} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
              View on Behance
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Brand Identity Projects</h2>
          <p className="text-lg text-gray-400 mt-2">Crafting visual systems that speak volumes.</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
