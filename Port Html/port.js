// Particle background
particlesJS('particle-container', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#64FFDA" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#64FFDA", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Hero Section 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('hero-canvas'),
    alpha: true
});
renderer.setSize(window.innerWidth / 2, window.innerHeight);

const geometry = new THREE.TorusKnotGeometry(5, 1.5, 100, 16);
const material = new THREE.MeshBasicMaterial({
    color: 0x64FFDA,
    wireframe: true
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 15;

function animateHero() {
    requestAnimationFrame(animateHero);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    torusKnot.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    renderer.render(scene, camera);
}
animateHero();

// Skills Galaxy
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

// Projects Showcase
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

// Experience Timeline
const experiences = [
    { year: '2022', title: 'Senior Software Engineer', company: 'Tech Innovators Inc.', description: 'Led the development of cutting-edge web applications' },
    { year: '2020', title: 'Full Stack Developer', company: 'Digital Solutions Ltd.', description: 'Designed and implemented scalable backend systems' }
];

const timeline = document.getElementById('experience-timeline');
experiences.forEach((exp, index) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.innerHTML = `
        <h3>${exp.year} - ${exp.title}</h3>
        <h4>${exp.company}</h4>
        <p>${exp.description}</p>
    `;
    timeline.appendChild(item);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Resize handler
window.addEventListener('resize', () => {
    // Update hero canvas
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / 2, window.innerHeight);

    // Update skills galaxy
    galaxyCamera.aspect = window.innerWidth / window.innerHeight;
    galaxyCamera.updateProjectionMatrix();
    galaxyRenderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('.mega-glitch', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from('.subtitle', { opacity: 0, y: 20, duration: 1, delay: 1 });
gsap.from('.cta-button', { opacity: 0, y: 20, duration: 1, delay: 1.5 });

// Animate sections on scroll
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