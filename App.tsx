
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import UiUx from './components/UiUx';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Skills from './components/Skills';
import Cta from './components/Cta';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading time for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[#0a0a14] min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-900 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <UiUx />
          <Testimonials />
          <About />
          <Skills />
          <Cta />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
