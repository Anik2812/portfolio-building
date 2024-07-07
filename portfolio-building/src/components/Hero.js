// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import { initHeroAnimation } from '../utils/animations';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    initHeroAnimation(canvasRef.current);
  }, []);

  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="mega-glitch" data-text="Anik">Anik</h1>
          <p className="subtitle">Digital Alchemist & Code Virtuoso</p>
          <div className="cta-wrapper">
            <a href="#about" className="cta-button futuristic-border">Discover My Universe</a>
          </div>
        </div>
        <div className="hero-3d">
          <canvas ref={canvasRef} id="hero-canvas"></canvas>
        </div>
      </div>
    </section>
  );
}

export default Hero;