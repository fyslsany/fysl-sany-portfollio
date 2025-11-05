
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'succeeded' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    // Client-side validation
    if (!email || !message) {
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
      // Use the provided Formspree URL
      const response = await fetch('https://formspree.io/f/mdkwwlnl', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('succeeded');
        form.reset();
      } else {
        const responseData = await response.json();
        // FIX: Replaced Object.hasOwn with Object.prototype.hasOwnProperty.call for better compatibility.
        if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
            setErrorMessage(responseData["errors"].map((error: { message: string }) => error["message"]).join(", "));
        } else {
            setErrorMessage("Something went wrong on the server. Please try again later.");
        }
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please check your network and try again.");
      setStatus('error');
    }
  };

  if (status === 'succeeded') {
    return (
      <section id="contact" className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center glassmorphic border border-cyan-500/50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white">Thank you for your message!</h3>
            <p className="text-lg text-gray-300 mt-2">I'll get back to you soon.</p>
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
              <p className="text-center text-red-400 mt-4">{errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
