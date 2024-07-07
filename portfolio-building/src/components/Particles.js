import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    try {
      console.log("Initializing particles.js engine:", engine);
      await loadFull(engine);
      console.log("Particles.js engine loaded successfully");
    } catch (error) {
      console.error("Error initializing particles.js engine:", error);
    }
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#64FFDA" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          links: { enable: true, distance: 150, color: "#64FFDA", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
          detectsOn: "canvas",
          events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      }}
    />
  );
};

export default ParticleBackground;
