
import React from 'react';
import type { Post } from '../types';
import { Calendar, Clock } from 'lucide-react';

const posts: Post[] = [
  {
    id: 1,
    title: 'The Intersection of AI and Brand Identity Design',
    excerpt: 'Exploring how generative AI is revolutionizing the creative process for brand designers, from logo ideation to full-scale campaign visuals.',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    date: 'August 15, 2024',
    readTime: 7,
  },
  {
    id: 2,
    title: '5 UI/UX Principles for Designing Future-Proof Interfaces',
    excerpt: 'A deep dive into timeless design principles that ensure your digital products remain intuitive, accessible, and beautiful for years to come.',
    imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop',
    date: 'July 28, 2024',
    readTime: 5,
  },
  {
    id: 3,
    title: 'From Designer to Developer: A Guide to Bridging the Gap',
    excerpt: 'My personal journey and practical tips for designers looking to learn frontend development and build their own creations.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
    date: 'June 10, 2024',
    readTime: 6,
  },
];

const PostCard: React.FC<{ post: Post }> = ({ post }) => (
  <div className="group relative overflow-hidden rounded-lg glassmorphic border border-white/10 transition-all duration-500 hover:border-pink-500/50 hover:-translate-y-2 flex flex-col">
    <div className="relative h-56">
      <img src={post.imageUrl} alt={post.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
        <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
        <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} min read</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">{post.title}</h3>
      <p className="text-gray-300 text-sm mb-4 flex-grow">{post.excerpt}</p>
      <a href="#" className="mt-auto text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
        Read More &rarr;
      </a>
    </div>
  </div>
);

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 sm:py-28 bg-[#0f0f1a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Insights & Articles</h2>
          <p className="text-lg text-gray-400 mt-2">Sharing knowledge from the frontiers of design and tech.</p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
