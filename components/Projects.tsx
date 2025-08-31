
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'QuantumLeap Inc.', category: 'Brand Identity', imageUrl: 'https://i.postimg.cc/kGnJpWW6/behance-6797a0b0530a8.jpg' },
  { id: 2, title: 'Nova Financial', category: 'Logo & Web', imageUrl: 'https://i.postimg.cc/HLyvfKtR/Screenshot-2025-08-31-175755.png' },
  { id: 3, title: 'Aether Cosmetics', category: 'Packaging Design', imageUrl: 'https://i.postimg.cc/76q1mQtg/image.png' },
  { id: 4, title: 'Zenith Robotics', category: 'Full Rebrand', imageUrl: 'https://i.postimg.cc/YSRLq28W/3b4b9c178150099-Y3-Jvc-Cwy-NTAw-LDE5-NTUs-MCw3-Nzk.png' },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative overflow-hidden rounded-lg glassmorphic border border-white/10 transition-all duration-500 hover:border-cyan-400/50 hover:scale-105">
    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="text-cyan-400">{project.category}</p>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Brand Identity Projects</h2>
          <p className="text-lg text-gray-400 mt-2">Crafting visual systems that speak volumes.</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
