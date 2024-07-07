import React, { useEffect } from 'react';
import './Hero.css';  // Create a corresponding CSS file for Hero styles
import * as THREE from 'three';

const Hero = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('hero-canvas'),
      alpha: true,
    });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);

    const geometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x64FFDA,
      wireframe: true,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 15;

    const animateHero = () => {
      requestAnimationFrame(animateHero);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      torusKnot.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      renderer.render(scene, camera);
    };
    animateHero();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight);
    });
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
          <canvas id="hero-canvas"></canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
