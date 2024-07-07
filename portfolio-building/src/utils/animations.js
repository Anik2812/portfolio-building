import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initHeroAnimation(canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth / 2, window.innerHeight);

    const geometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 16);
    const material = new THREE.MeshBasicMaterial({
        color: 0x64FFDA,
        wireframe: true
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 15;

    function animate() {
        requestAnimationFrame(animate);
        torusKnot.rotation.x += 0.01;
        torusKnot.rotation.y += 0.01;
        torusKnot.position.y = Math.sin(Date.now() * 0.001) * 0.5;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth / 2, window.innerHeight);
    });
}

export function initSkillsGalaxy(container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

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
        container.appendChild(skillLabel);
    });

    galaxyGeometry.setAttribute('position', new THREE.Float32BufferAttribute(galaxyPositions, 3));
    galaxyGeometry.setAttribute('color', new THREE.Float32BufferAttribute(galaxyColors, 3));

    const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxyPoints);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        galaxyPoints.rotation.x += 0.001;
        galaxyPoints.rotation.y += 0.002;
        renderer.render(scene, camera);

        const skillLabels = container.getElementsByClassName('skill-label');
        for (let i = 0; i < skillLabels.length; i++) {
            const position = new THREE.Vector3(
                galaxyPositions[i * 3],
                galaxyPositions[i * 3 + 1],
                galaxyPositions[i * 3 + 2]
            );
            position.applyMatrix4(galaxyPoints.matrixWorld);
            const projected = position.project(camera);
            skillLabels[i].style.left = (projected.x * 0.5 + 0.5) * window.innerWidth + 'px';
            skillLabels[i].style.top = (-projected.y * 0.5 + 0.5) * window.innerHeight + 'px';
        }
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

export function initScrollAnimations() {
    gsap.from('.mega-glitch', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from('.subtitle', { opacity: 0, y: 20, duration: 1, delay: 1 });
    gsap.from('.cta-button', { opacity: 0, y: 20, duration: 1, delay: 1.5 });

    gsap.utils.toArray('section').forEach((section, i) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}