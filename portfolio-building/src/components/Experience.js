import React from 'react';

const Experience = () => {
    return (
        <section id="experience">
            <h2 className="section-title">Chronicles of Mastery</h2>
            <div className="experience-content">
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-item-content">
                            <span className="tag">Current</span>
                            <h3>Lead Developer at Tech Innovators</h3>
                            <p>Leading a team of brilliant minds to develop next-gen software solutions.</p>
                            <span className="circle"></span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-content">
                            <span className="tag">2020-2022</span>
                            <h3>Senior Software Engineer at CodeCraft</h3>
                            <p>Architected scalable applications and drove key projects to success.</p>
                            <span className="circle"></span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-item-content">
                            <span className="tag">2018-2020</span>
                            <h3>Software Engineer at DevStudio</h3>
                            <p>Developed innovative solutions and collaborated on cutting-edge projects.</p>
                            <span className="circle"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
