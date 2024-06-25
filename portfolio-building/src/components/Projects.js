import React, { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        const projects = [
            { name: 'Project Alpha', description: 'A revolutionary AI-powered analytics platform', tech: ['Python', 'TensorFlow', 'React'] },
            { name: 'Project Beta', description: 'Blockchain-based supply chain management system', tech: ['Solidity', 'Ethereum', 'Node.js'] },
            { name: 'Project Gamma', description: 'Real-time collaborative coding environment', tech: ['WebSockets', 'Express', 'MongoDB'] }
        ];
        
        const projectShowcase = document.getElementById('project-showcase');
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            `;
            projectShowcase.appendChild(card);
        });        
    }, []);

    return (
        <section id="projects">
            <h2 class="section-title">Magnum Opuses</h2>
            <div id="project-showcase"></div>
        </section>
    );
};

export default Projects;
