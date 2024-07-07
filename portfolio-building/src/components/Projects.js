import React from 'react';

const projects = [
    { name: 'Project Alpha', description: 'A revolutionary AI-powered analytics platform', tech: ['Python', 'TensorFlow', 'React'] },
    { name: 'Project Beta', description: 'Blockchain-based supply chain management system', tech: ['Solidity', 'Ethereum', 'Node.js'] },
    { name: 'Project Gamma', description: 'Real-time collaborative coding environment', tech: ['WebSockets', 'Express', 'MongoDB'] }
];

function Projects() {
    return (
        <section id="projects">
            <h2 className="section-title">Magnum Opuses</h2>
            <div id="project-showcase">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;