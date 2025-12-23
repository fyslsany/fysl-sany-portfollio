
import React, { useState } from 'react';
import type { Post } from '../types';
import { Calendar, Clock, ArrowLeft, Award } from 'lucide-react';

const posts: Post[] = [
  {
    id: 5,
    title: 'The Aesthetics of Authority: Why Visual Design is Today’s Top Skill',
    excerpt: 'Mastering the visual language of leadership. Learn why looking authoritative is a high-performance business strategy in a digital-first world.',
    imageUrl: 'https://i.ibb.co/xSWk79bG/Image.png',
    date: 'October 05, 2024',
    readTime: 8,
    content: (
        <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-xl text-white font-medium border-l-4 border-cyan-500 pl-4 italic">
                "Design is the silent ambassador of your brand." — Paul Rand
            </p>
            <p>
                We live in the most visually saturated era in human history. Every brand is competing for a split-second of attention. In this environment, visual design is no longer a "nice-to-have" luxury; it is the primary differentiator between a brand that scales and a brand that fails.
            </p>
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">The 50-Millisecond Rule</h3>
            <p>
                Research shows that it takes a user approximately 0.05 seconds to form an opinion about your website and your brand. That opinion determines whether they stay or leave. Visual design is the silent salesperson that handles this first impression. If your design is clunky or outdated, no amount of brilliant copy will save the sale.
            </p>
            <h3 className="text-2xl font-bold text-white mt-8 mb-4">Design as a Trust Mechanism</h3>
            <p>
                Professional design signals professional service. In a world of digital scams and fly-by-night businesses, a polished visual identity is a mark of authenticity. High-demand visual designers are those who understand that colors, fonts, and layouts are tools for psychological signaling. They don't just "make things pretty"; they build trust through visual consistency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="p-5 rounded-lg glassmorphic border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                        <Award size={18} /> Cognitive Efficiency
                    </h4>
                    <p className="text-sm">Great design helps the brain process information faster, reducing friction in the user journey.</p>
                </div>
                <div className="p-5 rounded-lg glassmorphic border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                        <Award size={18} /> Emotional Impact
                    </h4>
                    <p className="text-sm">Visuals trigger emotions far more effectively than text, creating lasting brand loyalty and authority.</p>
                </div>
            </div>
            <p className="mt-8">
                Mastering the visual language of leadership isn't just about art; it's about architecture. It's about building a digital structure that commands respect and ensures your voice is heard in a crowded marketplace.
            </p>
        </div>
    )
  },
  {
    id: 1,
    title: 'The Intersection of AI and Brand Identity Design',
    excerpt: 'Exploring how generative AI is revolutionizing the creative process for brand designers, from logo ideation to full-scale campaign visuals.',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    date: 'August 15, 2024',
    readTime: 7,
    content: (
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Let’s be real for a moment. Every brand designer knows the feeling. The blank canvas. The client brief that’s both inspiring and terrifyingly vague. The pressure to conjure something unique, meaningful, and beautiful out of thin air. 
          </p>
          <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Spark: Creative Barrage</h3>
          <p>
            The most immediate revolution is happening at the very beginning: ideation. Remember spending hours on Pinterest? Now, that spark can be a wildfire with the help of specialized LLMs and image generators.
          </p>
        </div>
    )
  },
  {
    id: 4,
    title: 'The Invisible Engine: Why SEO is Vital for Your Own Business',
    excerpt: 'Discover why mastering Search Engine Optimization is no longer optional for entrepreneurs who want to dominate their niche online.',
    imageUrl: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?q=80&w=2070&auto=format&fit=crop',
    date: 'September 12, 2024',
    readTime: 6,
    content: (
        <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
                In the digital age, being the "best" at what you do is only half the battle. The other half is being found. SEO transforms your technical presence into a discoverable authority.
            </p>
        </div>
    )
  },
  {
    id: 6,
    title: 'Digital Proof of Life: Why Your Business Needs a Website to Survive',
    excerpt: 'Stop relying solely on social media. Learn why an owned website is the only way to ensure business growth and true authentication.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
    date: 'October 22, 2024',
    readTime: 5,
    content: (
        <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
                Relying on social media for your entire digital presence is like building a house on rented land. You don't own the platform, and you don't control the algorithm.
            </p>
        </div>
    )
  },
  {
    id: 2,
    title: '5 UI/UX Principles for Designing Future-Proof Interfaces',
    excerpt: 'A deep dive into timeless design principles that ensure your digital products remain intuitive, accessible, and beautiful for years to come.',
    imageUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop',
    date: 'July 28, 2024',
    readTime: 5,
    content: (
        <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
                In the world of digital design, trends have the lifespan of a housefly. Future-proofing your UI means anchoring it to human psychology.
            </p>
        </div>
    )
  },
  {
    id: 3,
    title: 'From Designer to Developer: A Guide to Bridging the Gap',
    excerpt: 'My personal journey and practical tips for designers looking to learn frontend development and build their own creations.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop',
    date: 'June 10, 2024',
    readTime: 6,
    content: (
        <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
                Bridging the gap between a pixel-perfect mockup and a functional web application is the ultimate superpower for a modern creative.
            </p>
        </div>
    )
  },
];

const PostCard: React.FC<{ post: Post; onReadMore: () => void }> = ({ post, onReadMore }) => {
  const isFeatured = post.id === 5;
  
  return (
    <div className={`group relative overflow-hidden rounded-lg glassmorphic border ${isFeatured ? 'border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]' : 'border-white/10'} transition-all duration-500 hover:border-cyan-400/60 hover:-translate-y-2 flex flex-col h-full`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          loading="lazy" 
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        {isFeatured && (
          <div className="absolute top-4 left-4 bg-cyan-500 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
            FEATURED ARTICLE
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-[10px] font-medium tracking-widest text-gray-400 mb-3 uppercase">
          <span className="flex items-center gap-1.5"><Calendar size={12} className="text-cyan-400" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} className="text-cyan-400" /> {post.readTime} MIN</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-400 text-xs mb-5 flex-grow line-clamp-3 leading-relaxed font-medium">
          {post.excerpt}
        </p>
        <button 
          onClick={(e) => {
              e.preventDefault();
              onReadMore();
          }}
          className="mt-auto text-xs font-bold text-cyan-400 hover:text-white transition-all text-left uppercase tracking-widest flex items-center gap-2 group/btn"
        >
          Read Perspective <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

const SinglePostView: React.FC<{ post: Post; onBack: () => void }> = ({ post, onBack }) => (
    <div className="glassmorphic rounded-xl border border-white/10 p-6 md:p-12 animate-fade-in max-w-4xl mx-auto shadow-2xl">
      <button onClick={onBack} className="flex items-center gap-2 text-cyan-400 mb-8 hover:text-cyan-300 transition-colors font-bold text-xs uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Library
      </button>
      
      <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest text-gray-400 mb-6 uppercase">
          <span className="flex items-center gap-2"><Calendar size={16} className="text-cyan-400" /> {post.date}</span>
          <span className="flex items-center gap-2"><Clock size={16} className="text-cyan-400" /> {post.readTime} MIN READ</span>
      </div>

      <h2 className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight leading-none text-balance">
        {post.title}
      </h2>

      <div className="max-w-3xl prose prose-invert prose-cyan">
          {post.content || <div className="text-center py-20 text-gray-500">Full article content coming soon...</div>}
      </div>

      <div className="mt-16 pt-10 border-t border-white/10 flex justify-center">
        <button onClick={onBack} className="px-10 py-4 rounded-full bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-bold text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-slate-900 transition-all shadow-lg">
            Exploration Continued
        </button>
      </div>
    </div>
  );

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleBack = () => {
    setSelectedPost(null);
    setTimeout(() => {
        document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section id="blog" className="py-24 sm:py-32 bg-[#0a0a14]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedPost && (
            <div className="text-center mb-20">
              <span className="text-cyan-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-2 block">Thought Leadership</span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Insights & Articles</h2>
              <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed font-medium">Sharing knowledge from the frontiers of high-performance design.</p>
              <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
            </div>
        )}
        
        {selectedPost ? (
            <SinglePostView post={selectedPost} onBack={handleBack} />
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Prioritize the featured post at the top/start */}
              <PostCard post={posts[0]} onReadMore={() => setSelectedPost(posts[0])} />
              {posts.slice(1).map(post => (
                  <PostCard key={post.id} post={post} onReadMore={() => setSelectedPost(post)} />
              ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
