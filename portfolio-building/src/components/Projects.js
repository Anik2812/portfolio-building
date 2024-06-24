import React, { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        const projects = [
            { name: 'Project Alpha', description: 'A revolutionary AI-powered analytics platform', tech: ['Python', 'TensorFlow', 'React'] },
            { name: 'Project Beta', description: 'Blockchain-based supply chain management system', tech: ['Solidity', 'Ethereum', 'Node.js'] },
            { name: 'Project Gamma', description: 'Real-time collaborative coding environment', tech: ['JavaScript', 'WebRTC', 'Docker'] },
        ];

        const projectsContainer = document.getElementById('projects-container');

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'project';

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.name;
            projectElement.appendChild(projectTitle);

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description;
            projectElement.appendChild(projectDescription);

            const techList = document.createElement('ul');
            project.tech.forEach(tech => {
                const techItem = document.createElement('li');
                techItem.textContent = tech;
                techList.appendChild(techItem);
            });
            projectElement.appendChild(techList);

            projectsContainer.appendChild(projectElement);
        });
    }, []);

    return (
        <section id="projects">
            <h2 className="section-title">Ingenious Creations</h2>
            <div id="projects-container"></div>
        </section>
    );
};

export default Projects;
