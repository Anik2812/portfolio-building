import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import { initScrollAnimations } from './utils/animations';
import SpaceWarpBackground from './components/SpaceWarpBackground';
import './App.css';

function App() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <div className="App">
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <SpaceWarpBackground />
    </div>
  );
}

export default App;