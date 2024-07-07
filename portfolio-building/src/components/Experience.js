import React from 'react';

const experiences = [
    { year: '2022', title: 'Senior Software Engineer', company: 'Tech Innovators Inc.', description: 'Led the development of cutting-edge web applications' },
    { year: '2020', title: 'Full Stack Developer', company: 'Digital Solutions Ltd.', description: 'Designed and implemented scalable backend systems' }
];

function Experience() {
    return (
        <section id="experience">
            <h2 className="section-title">Chronicle of Triumphs</h2>
            <div id="experience-timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <h3>{exp.year} - {exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;