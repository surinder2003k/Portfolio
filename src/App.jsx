import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBg from './components/ParticlesBg';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial load logic if needed
    // The LoadingScreen component itself handles the timeout
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
      ) : (
        <div key="content">
          <ParticlesBg />
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
}
