
import React, { useState } from 'react';
import { supabase, isBackendConfigured } from '../lib/supabaseClient';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'succeeded' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Client-side validation
    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields.");
      setStatus('error');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus('error');
      return;
    }

    if (message.trim().length < 10) {
      setErrorMessage("Your message should be at least 10 characters long.");
      setStatus('error');
      return;
    }
    
    setStatus('submitting');

    try {
      if (isBackendConfigured()) {
        // Send to Supabase
        const { error } = await supabase
          .from('messages')
          .insert([
            { name, email, message }
          ]);

        if (error) throw error;
        
        setStatus('succeeded');
        form.reset();
      } else {
        // Fallback or Error if Supabase isn't set up yet
        console.warn("Backend not configured. Message not sent to database.");
        setErrorMessage("Database connection missing. Please configure Supabase keys.");
        setStatus('error');
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Something went wrong. Please check your network and try again.");
      setStatus('error');
    }
  };

  if (status === 'succeeded') {
    return (
      <section id="contact" className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center glassmorphic border border-cyan-500/50 rounded-lg p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-white">Thank you for your message!</h3>
            <p className="text-lg text-gray-300 mt-2">I'll get back to you soon.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          <p className="text-lg text-gray-400 mt-2">I'm currently available for freelance work and new opportunities.</p>
           <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-slate-800/50 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-slate-800/50 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full bg-slate-800/50 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-10 py-3 rounded-md bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {status === 'error' && (
              <div className="glassmorphic border border-red-500/30 p-4 rounded-lg mt-4 animate-fade-in">
                 <p className="text-center text-red-400">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
