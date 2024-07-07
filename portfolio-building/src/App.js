import React, { useEffect } from 'react';
import './App.css';  // Import the main CSS file
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

const App = () => {
  useEffect(() => {
    // Initialize ScrollMagic Controller
    const controller = new ScrollMagic.Controller();

    // ScrollMagic Scene for Hero section
    new ScrollMagic.Scene({
      triggerElement: '#hero',
      triggerHook: 0.5,
      duration: '100%',
    })
      .setTween(gsap.fromTo('#hero', { opacity: 0 }, { opacity: 1, ease: 'power1.inOut' }))
      .addTo(controller);

    // ScrollMagic Scene for About section
    new ScrollMagic.Scene({
      triggerElement: '#about',
      triggerHook: 0.5,
      duration: '100%',
    })
      .setTween(gsap.fromTo('#about', { opacity: 0 }, { opacity: 1, ease: 'power1.inOut' }))
      .addTo(controller);

    // ScrollMagic Scene for Skills section
    new ScrollMagic.Scene({
      triggerElement: '#skills',
      triggerHook: 0.5,
      duration: '100%',
    })
      .setTween(gsap.fromTo('#skills', { opacity: 0 }, { opacity: 1, ease: 'power1.inOut' }))
      .addTo(controller);

    // ScrollMagic Scene for Projects section
    new ScrollMagic.Scene({
      triggerElement: '#projects',
      triggerHook: 0.5,
      duration: '100%',
    })
      .setTween(gsap.fromTo('#projects', { opacity: 0 }, { opacity: 1, ease: 'power1.inOut' }))
      .addTo(controller);

    // ScrollMagic Scene for Experience section
    new ScrollMagic.Scene({
      triggerElement: '#experience',
      triggerHook: 0.5,
      duration: '100%',
    })
      .setTween(gsap.fromTo('#experience', { opacity: 0 }, { opacity: 1, ease: 'power1.inOut' }))
      .addTo(controller);

    // ScrollMagic Scene for Contact section
    new ScrollMagic.Scene({
      triggerElement: '#contact',
      triggerHook: 0.5,
      duration: '100%',
    })
      .setTween(gsap.fromTo('#contact', { opacity: 0 }, { opacity: 1, ease: 'power1.inOut' }))
      .addTo(controller);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default App;
