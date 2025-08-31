
import React from 'react';
import type { Skill } from '../types';
import { Figma, PenTool, Code, Image, BrainCircuit, Server } from 'lucide-react';

const skills: Skill[] = [
  { id: 1, name: 'Adobe Illustrator', icon: <PenTool size={48} />, fact: 'The industry-standard for vector graphics and branding.' },
  { id: 2, name: 'Adobe Photoshop', icon: <Image size={48} />, fact: 'Mastery in photo manipulation, mockups, and digital art.' },
  { id: 3, name: 'Figma', icon: <Figma size={48} />, fact: 'Primary tool for collaborative UI/UX design and prototyping.' },
  { id: 4, name: 'HTML/CSS/JS', icon: <Code size={48} />, fact: 'Building responsive and interactive web interfaces.' },
  { id: 5, name: 'Prompt Engineering', icon: <BrainCircuit size={48} />, fact: 'Crafting effective prompts for generative AI models.' },
  { id: 6, name: 'Node.js', icon: <Server size={48} />, fact: 'Developing backend services and APIs.' },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="group relative flex flex-col items-center justify-center p-6 glassmorphic rounded-lg border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50">
    <div className="text-cyan-400 transition-colors duration-300 group-hover:text-fuchsia-400">
      {skill.icon}
    </div>
    <h3 className="mt-4 text-lg font-semibold text-white">{skill.name}</h3>
    <div className="absolute bottom-full mb-2 w-max px-3 py-1.5 text-sm font-medium text-white bg-slate-800 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
      {skill.fact}
      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-slate-800"></div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Tech Stack & Tools</h2>
          <p className="text-lg text-gray-400 mt-2">The digital arsenal behind the creativity.</p>
           <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;