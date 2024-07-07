import React from 'react';

function About() {
    return (
        <section id="about">
            <h2 className="section-title">The Mastermind</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>Greetings, I'm Anik - a digital alchemist transforming ideas into cutting-edge solutions. With a passion for innovation and a knack for problem-solving, I navigate the ever-evolving landscape of technology to create impactful digital experiences.</p>
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
}

export default About;