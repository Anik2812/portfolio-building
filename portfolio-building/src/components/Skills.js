import React, { useEffect } from 'react';
import * as THREE from 'three';

const Skills = () => {
    useEffect(() => {
        const skillsData = [
            { name: 'JavaScript', size: 3.5 },
            { name: 'React', size: 3.2 }, 
            { name: 'Node.js', size: 3.0 },
            { name: 'Python', size: 2.8 },
            { name: 'CSS', size: 2.6 },
            { name: 'HTML', size: 2.4 },
            { name: 'SQL', size: 2.2 },
            { name: 'Git', size: 2.0 },
            { name: 'AWS', size: 1.8 },
            { name: 'Docker', size: 1.6 }
        ];
        
        const galaxyScene = new THREE.Scene();
        const galaxyCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const galaxyRenderer = new THREE.WebGLRenderer({ alpha: true });
        galaxyRenderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('skills-galaxy').appendChild(galaxyRenderer.domElement);
        
        const galaxyGeometry = new THREE.BufferGeometry();
        const galaxyMaterial = new THREE.PointsMaterial({
            color: 0x64FFDA,
            size: 0.05,
            blending: THREE.AdditiveBlending
        });
        
        const galaxyPositions = [];
        const galaxyColors = [];
        const color = new THREE.Color();
        
        skillsData.forEach((skill, i) => {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);
        
            const x = skill.size * Math.sin(theta) * Math.cos(phi);
            const y = skill.size * Math.sin(theta) * Math.sin(phi);
            const z = skill.size * Math.cos(theta);
        
            galaxyPositions.push(x, y, z);
        
            color.setHSL(i / skillsData.length, 1.0, 0.5);
            galaxyColors.push(color.r, color.g, color.b);
        
            const skillLabel = document.createElement('div');
            skillLabel.className = 'skill-label';
            skillLabel.textContent = skill.name;
            skillLabel.style.position = 'absolute';
            document.getElementById('skills-galaxy').appendChild(skillLabel);
        });
        
        galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(galaxyPositions, 3));
        galaxyGeometry.setAttribute('color', new THREE.Float32BufferAttribute(galaxyColors, 3));
        
        const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
        galaxyScene.add(galaxyPoints);
        
        galaxyCamera.position.z = 5;
        
        function animateGalaxy() {
            requestAnimationFrame(animateGalaxy);
            galaxyPoints.rotation.x += 0.001;
            galaxyPoints.rotation.y += 0.002;
            galaxyRenderer.render(galaxyScene, galaxyCamera);
        
            const skillLabels = document.getElementsByClassName('skill-label');
            for (let i = 0; i < skillLabels.length; i++) {
                const position = new THREE.Vector3(
                    galaxyPositions[i * 3],
                    galaxyPositions[i * 3 + 1],
                    galaxyPositions[i * 3 + 2]
                );
                position.applyMatrix4(galaxyPoints.matrixWorld);
                const projected = position.project(galaxyCamera);
                skillLabels[i].style.left = (projected.x * 0.5 + 0.5) * window.innerWidth + 'px';
                skillLabels[i].style.top = (-projected.y * 0.5 + 0.5) * window.innerHeight + 'px';
            }
        }
        animateGalaxy();
    }, []);

    return (
        <section id="skills">
            <h2 class="section-title">Arsenal of Expertise</h2>
            <div id="skills-galaxy"></div>
        </section>
    );
};

export default Skills;
