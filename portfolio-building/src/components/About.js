import React from 'react';
import './About.css';  // Create a corresponding CSS file for About styles

const About = () => (
  <section id="about">
    <h2 className="section-title">The Mastermind</h2>
    <div className="about-content">
      <div className="about-text">
        <p>Greetings, I'm Anik - a digital alchemist transforming ideas into cutting-edge solutions...</p>
      </div>
      <div className="cube-wrapper">
        <div className="cube">
          <div className="face front">Innovator</div>
          <div className="face back">Visionary</div>
          <div className="face right">Creator</div>
          <div className="face left">Solver</div>
          <div className="face top">Leader</div>
          <div className="face bottom">Learner</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
