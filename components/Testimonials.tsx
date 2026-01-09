import React, { useState, useEffect } from 'react';
import { Quote, Plus, X, Send } from 'lucide-react';
import type { Testimonial } from '../types';
import { supabase, isBackendConfigured } from '../lib/supabaseClient';

const INITIAL_TESTIMONIALS: Testimonial[] = [
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
  <div className="glassmorphic rounded-xl border border-white/10 p-6 flex flex-col h-full transition-all duration-300 hover:border-purple-500/50 hover:-translate-y-2 animate-fade-in">
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

const ReviewForm: React.FC<{ onClose: () => void, onSubmit: (t: Testimonial) => void, isSubmitting: boolean }> = ({ onClose, onSubmit, isSubmitting }) => {
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [quote, setQuote] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!name || !quote) return;
        
        const newReview: Testimonial = {
            id: Date.now(), 
            name,
            company: company || 'Client',
            avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0D8ABC&color=fff`,
            quote
        };
        onSubmit(newReview);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-md bg-[#1a1a24] border border-white/10 rounded-2xl p-8 shadow-2xl">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
                    <X size={24} />
                </button>
                <h3 className="text-2xl font-bold text-white mb-6">Write a Review</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Your Name</label>
                        <input 
                            type="text" 
                            required 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder-gray-600"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Company (Optional)</label>
                        <input 
                            type="text" 
                            value={company} 
                            onChange={(e) => setCompany(e.target.value)}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder-gray-600"
                            placeholder="Tech Solutions Inc."
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Your Feedback</label>
                        <textarea 
                            required 
                            value={quote} 
                            onChange={(e) => setQuote(e.target.value)}
                            rows={4}
                            className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none transition-colors placeholder-gray-600 resize-none"
                            placeholder="Share your experience working with Faysal..."
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : <><Send size={18} /> Submit Review</>}
                    </button>
                </form>
            </div>
        </div>
    )
}

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
        if (isBackendConfigured()) {
            try {
                const { data, error } = await supabase
                    .from('testimonials')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) {
                    // Quietly ignore if DB is paused
                    return;
                }
                
                if (data && data.length > 0) {
                    const dbReviews = data.map((item: any) => ({
                        id: item.id,
                        name: item.name,
                        company: item.company || 'Client',
                        avatarUrl: item.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random`,
                        quote: item.quote
                    }));
                    setReviews([...INITIAL_TESTIMONIALS, ...dbReviews]);
                }
            } catch (error: any) {
                // Completely silent fallback for 'Failed to fetch' errors
            }
        } else {
            const savedReviews = localStorage.getItem('user_reviews');
            if (savedReviews) {
                try {
                    const parsed = JSON.parse(savedReviews);
                    if (Array.isArray(parsed)) {
                        setReviews([...INITIAL_TESTIMONIALS, ...parsed]);
                    }
                } catch(e) { }
            }
        }
    };

    fetchReviews();
  }, []);

  const handleNewReview = async (review: Testimonial) => {
      setIsSubmitting(true);
      
      if (isBackendConfigured()) {
          try {
              const { error } = await supabase
                  .from('testimonials')
                  .insert([
                      { 
                          name: review.name,
                          company: review.company,
                          quote: review.quote,
                          avatar_url: review.avatarUrl
                      },
                  ]);
              
              if (error) throw error;

              setReviews(prev => [review, ...prev]);
              setShowForm(false);
          } catch (error: any) {
              const msg = error.message?.includes('fetch') 
                ? 'Database is currently offline. Please try again later.' 
                : (error.message || 'Submission failed');
              alert(msg);
          } finally {
              setIsSubmitting(false);
          }
      } else {
          setTimeout(() => {
              const savedReviews = JSON.parse(localStorage.getItem('user_reviews') || '[]');
              const updatedSavedReviews = [review, ...savedReviews];
              localStorage.setItem('user_reviews', JSON.stringify(updatedSavedReviews));
              
              setReviews([...INITIAL_TESTIMONIALS, ...updatedSavedReviews]);
              setShowForm(false);
              setIsSubmitting(false);
          }, 800);
      }
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Words From My Clients</h2>
          <p className="text-lg text-gray-400 mt-2">Building trust through successful collaborations.</p>
           <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
           
           <button 
             onClick={() => setShowForm(true)}
             className="mt-8 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-cyan-400 hover:bg-cyan-500 hover:text-white hover:border-transparent transition-all duration-300 flex items-center gap-2 mx-auto backdrop-blur-sm"
           >
             <Plus size={16} /> Write a Review
           </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
      
      {showForm && (
        <ReviewForm 
            onClose={() => setShowForm(false)} 
            onSubmit={handleNewReview} 
            isSubmitting={isSubmitting}
        />
      )}
    </section>
  );
};

export default Testimonials;