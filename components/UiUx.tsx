
import React from 'react';
import type { Project } from '../types';
import { Dribbble, ExternalLink, Globe, Smartphone, Layout, MousePointer2, Layers, Heart } from 'lucide-react';

const uiProjects: Project[] = [
  { 
    id: 1, 
    title: 'Heart Care Foundation', 
    category: 'NGO WordPress Development', 
    imageUrl: 'https://heartcarefoundationcb.org/wp-content/uploads/2024/01/Heart-Care-Foundation-Comilla-Bangladesh.png',
    description: 'A complete non-profit digital ecosystem built on WordPress. Features include integrated donation gateways, medical awareness portals, and volunteer management systems.',
    links: {
      live: 'https://heartcarefoundationcb.org/',
    }
  },
  { 
    id: 2, 
    title: 'Combaine Medical Centre', 
    category: 'Health Org WordPress', 
    imageUrl: 'https://i.postimg.cc/Fsz699fq/Capture.jpg',
    description: 'A comprehensive medical portal built on WordPress, optimized for patient accessibility, service listings, and organizational transparency.',
    links: {
      live: 'https://drtriptishghose.liveblog365.com/?i=1',
    }
  },
  { 
    id: 3, 
    title: "Doctor's Portfolio Website", 
    category: 'Personal Brand Website', 
    imageUrl: 'https://i.postimg.cc/HLyvfKtR/Screenshot-2025-08-31-175755.png',
    description: 'A high-converting professional portfolio for a medical specialist, featuring case studies, patient testimonials, and a direct booking system.',
    links: {
      live: 'https://drtriptishchandraghose.com/?i=1',
    }
  },
  { 
    id: 4, 
    title: '7+ Premium Header Styles', 
    category: 'Navigation Architecture', 
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop&q=75',
    description: 'Awesome Header Layout: Choose from 7+ modern styles. From minimal glassmorphism to bold mega-menus, each variation is pixel-perfect.',
    links: {
      behance: 'https://www.behance.net/fyslsany',
    }
  },
  { 
    id: 5, 
    title: '7+ Modern Footer Styles', 
    category: 'Conversion Systems', 
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop&q=75',
    description: 'Awesome Footer Layout: End your pages on a high note with beautifully crafted layouts. Designed for SEO and engagement.',
    links: {
      behance: 'https://www.behance.net/fyslsany',
    }
  },
  { 
    id: 6, 
    title: 'Mobile-First Master Template', 
    category: 'Responsive Framework', 
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop&q=75',
    description: 'Responsive With all Devices: A fluid design system prioritizing mobile experience across all platforms.',
    links: {
      behance: 'https://www.behance.net/fyslsany',
    }
  },
  { 
    id: 7, 
    title: 'HealthTech AI Diagnostics', 
    category: 'Web Dashboard', 
    imageUrl: 'https://i.postimg.cc/rmbGGG3T/picture684-1.png',
    description: 'A complex dashboard for medical professionals using AI-driven insights and visualizations.',
    links: {
      dribbble: '#',
    }
  },
   { 
    id: 8, 
    title: 'Care Medical Centre', 
    category: 'Web Dashboard', 
    imageUrl: 'https://i.postimg.cc/MpKdf70p/Screenshot-2026-01-28-233541.png',
    description: 'Care Medical portal built for easy patient access, clear service listings, and transparent organizational communication.',
    links: {
       live: 'https://semantic-purple-l3s1wilutx.edgeone.app/screencapture-127-0-0-1-5500-index-html-2026-01-28-23_31_15.pdf/?i=1',
    }
  },
];

const UiUxCard: React.FC<{ project: Project; isLarge?: boolean }> = ({ project, isLarge }) => {
    const primaryLink = project.links.live || project.links.dribbble || project.links.behance;

    return (
        <div className={`group relative rounded-lg glassmorphic border border-white/10 p-4 transition-all duration-300 hover:border-cyan-500/50 flex flex-col ${isLarge ? 'h-[480px]' : 'h-[400px]'}`}>
            <div className="relative flex-grow rounded-md overflow-hidden bg-slate-900 shadow-inner">
                {primaryLink ? (
                     <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60"></div>
                    </a>
                ) : (
                    <>
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            loading="lazy"
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60"></div>
                    </>
                )}
            </div>
            
            <div className="mt-4 pointer-events-none">
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <p className="text-cyan-400 text-[10px] font-black tracking-widest flex items-center gap-2 uppercase mt-1">
                  {project.category.includes('Mobile') ? <Smartphone size={12} /> : project.category.includes('NGO') ? <Heart size={12} /> : project.category.includes('Header') ? <Layout size={12} /> : <Globe size={12} />} 
                  {project.category}
                </p>
                <p className="text-gray-400 text-xs mt-2 line-clamp-2 leading-relaxed">{project.description}</p>
                <div className="pointer-events-auto flex gap-4 mt-4">
                    {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400 hover:text-white transition-all">
                        <ExternalLink size={12} /> Live Site
                    </a>
                    )}
                    {project.links.behance && !project.links.live && (
                      <a href={project.links.behance} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-400 hover:text-white transition-all">
                        <MousePointer2 size={12} /> View Demo
                      </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const UiUx: React.FC = () => {
  return (
    <section id="uiux" className="py-20 sm:py-28 bg-[#0a0a14] relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">Premium Solutions</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Website & Landing Page Concepts</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">High-performance interaction design and responsive layouts.</p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
               <UiUxCard project={uiProjects[0]} isLarge={true} />
            </div>
            <UiUxCard project={uiProjects[1]} isLarge={true} />
            <UiUxCard project={uiProjects[2]} />
            <UiUxCard project={uiProjects[3]} />
            <UiUxCard project={uiProjects[4]} />
            <div className="md:col-span-2 lg:col-span-1">
                <UiUxCard project={uiProjects[5]} />
            </div>
            <UiUxCard project={uiProjects[6]} />
        </div>
      </div>
    </section>
  );
};

export default UiUx;
