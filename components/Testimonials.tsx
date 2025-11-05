
import React from 'react';
import { Quote } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Doe',
    company: 'CEO, TechSpark IT',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: "Faysal's design sense is impeccable. He took our initial concept and transformed it into a brand identity that truly represents our innovative spirit. The process was seamless and collaborative.",
  },
  {
    id: 2,
    name: 'John Smith',
    company: 'Founder, GreenLeaf Cafe',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: "The new logo and branding have been a game-changer for our cafe. We've seen a noticeable increase in customer engagement. Faysal is a true professional and a pleasure to work with.",
  },
  {
    id: 3,
    name: 'Ahmed Al Farsi',
    company: 'Marketing Head, Sahara Boutique',
    avatarUrl: 'https://randomuser.me/api/portraits/men/51.jpg',
    quote: "Working with Faysal on our e-commerce UI was fantastic. He has a deep understanding of user experience and delivered a design that is both beautiful and highly functional.",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="glassmorphic rounded-xl border border-white/10 p-6 flex flex-col h-full transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-2">
    <Quote className="text-purple-400 w-8 h-8" />
    <p className="text-gray-300 my-4 flex-grow italic">"{testimonial.quote}"</p>
    <div className="flex items-center mt-auto pt-4 border-t border-white/10 w-full">
      <img src={testimonial.avatarUrl} alt={testimonial.name} loading="lazy" className="w-12 h-12 rounded-full object-cover border-2 border-slate-700" />
      <div className="ml-4">
        <h4 className="font-bold text-white">{testimonial.name}</h4>
        <p className="text-sm text-gray-400">{testimonial.company}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Words From My Clients</h2>
          <p className="text-lg text-gray-400 mt-2">Building trust through successful collaborations.</p>
           <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
