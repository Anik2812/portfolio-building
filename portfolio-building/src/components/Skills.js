import React, { useEffect, useRef } from 'react';
import { initSkillsGalaxy } from '../utils/animations';

function Skills() {
    const galaxyRef = useRef(null);

    useEffect(() => {
        initSkillsGalaxy(galaxyRef.current);
    }, []);

    return (
        <section id="skills">
            <h2 className="section-title">Arsenal of Expertise</h2>
            <div id="skills-galaxy" ref={galaxyRef}></div>
        </section>
    );
}

export default Skills;