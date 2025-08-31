
import React from 'react';
import { Download, Rocket } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section id="cta" className="py-20 sm:py-28 bg-[#0f0f1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphic rounded-xl border border-white/10 p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Let's collaborate to create something outstanding. I'm ready to bring your vision to life with strategic design and creative thinking.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="/resume.pdf"
              download
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-md border-2 border-cyan-500 text-cyan-400 font-semibold transition-all duration-300 neon-glow neon-glow-blue hover:text-white"
            >
              <Download className="transition-transform duration-300 group-hover:-translate-y-1" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-3 px-8 py-4 rounded-md border-2 border-purple-500 text-purple-400 font-semibold transition-all duration-300 neon-glow neon-glow-purple hover:text-white"
            >
              <Rocket className="transition-transform duration-300 group-hover:rotate-45" />
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
