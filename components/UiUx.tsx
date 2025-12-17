
import React from 'react';
import type { Project } from '../types';
import { Dribbble, ExternalLink } from 'lucide-react';

const uiProjects: Project[] = [
  { 
    id: 1, 
    title: 'Combaine Medical Centre', 
    category: 'Mobile UI/UX', 
    imageUrl: 'https://i.postimg.cc/Fsz699fq/Capture.jpg',
    description: 'A responsive mobile interface for a healthcare institution, featuring streamlined doctor discovery and appointment scheduling.',
    links: {
      live: 'https://aistudio.google.com/apps/drive/1LX3v135clarxgCxe-qehOOsREHYoogWu?showPreview=true&showAssistant=true&fullscreenApplet=true',
    }
  },
  { 
    id: 2, 
    title: 'HealthTech AI Diagnostics', 
    category: 'Web Dashboard', 
    imageUrl: 'https://i.postimg.cc/rmbGGG3T/picture684-1.png',
    description: 'A complex dashboard for medical professionals to analyze patient data using AI-driven insights and visualizations.',
    links: {
      dribbble: '#',
    }
  },
  { 
    id: 3, 
    title: 'AI Creative Suite', 
    category: 'Desktop App UI', 
    imageUrl: 'https://i.postimg.cc/hvLJJ9qp/finall.png',
    description: 'UI design for a suite of AI-powered creative tools, designed to be powerful yet accessible for artists and designers.',
    links: {
      dribbble: '#',
    }
  },
];

const UiUxCard: React.FC<{ project: Project; isMobile: boolean }> = ({ project, isMobile }) => {
    const primaryLink = project.links.live || project.links.dribbble;

    return (
        <div className={`group relative rounded-lg glassmorphic border border-white/10 p-4 transition-all duration-300 hover:border-purple-500/50 flex flex-col ${isMobile ? 'h-[550px]' : 'h-[400px]'}`}>
            <div className="relative h-full w-full rounded-md overflow-hidden">
                {primaryLink ? (
                     <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                ) : (
                    <>
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </>
                )}
            </div>
            
            <div className="absolute bottom-4 left-4 p-4 right-4 transition-all transform-gpu translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500 pointer-events-none">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-purple-400 text-sm">{project.category}</p>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                <div className="pointer-events-auto flex gap-3 mt-3">
                    {project.links.dribbble && (
                    <a href={project.links.dribbble} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors">
                        <Dribbble size={16} /> View on Dribbble
                    </a>
                    )}
                    {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-cyan-300 hover:text-white transition-colors">
                        <ExternalLink size={16} /> Live Preview
                    </a>
                    )}
                </div>
            </div>
        </div>
    );
};


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
