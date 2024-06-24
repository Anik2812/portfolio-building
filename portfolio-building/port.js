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

// Loader
window.addEventListener('load', () => {
    gsap.to('#loader', { opacity: 0, duration: 1, onComplete: () => {
        document.getElementById('loader').style.display = 'none';
    }});
});

// Navigation
const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];
const navbar = document.getElementById('navbar');

navItems.forEach(item => {
    const link = document.createElement('a');
    link.href = `#${item.toLowerCase()}`;
    link.textContent = item;
    navbar.appendChild(link);
});

// Scroll-triggered animations
const controller = new ScrollMagic.Controller();

document.querySelectorAll('section').forEach(section => {
    new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 0.9,
        reverse: false
    })
    .setClassToggle(section, 'fade-in')
    .addTo(controller);
});

// Hero Section 3D Background
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('hero-canvas'),
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshBasicMaterial({
    color: 0x64FFDA,
    wireframe: true
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

camera.position.z = 30;

function animateHero() {
    requestAnimationFrame(animateHero);
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animateHero();

// Skills Galaxy
const skillsData = [
    { name: 'Agile', size: 3.5 },
    { name: 'Solidity', size: 2.4 },
    { name: 'Bash', size: 2.6 },
    { name: 'Excel Sheet', size: 3.1 },
    { name: 'CSS', size: 2.9 },
    { name: 'HTML', size: 2.7 },
    { name: 'JavaScript', size: 2.9 },
    { name: 'Python', size: 2.5 },
    { name: 'Java', size: 3.3 },
    { name: 'C++', size: 2.0 },
    { name: 'React', size: 2.3 },
    { name: 'Node.js', size: 2.1 },
    { name: 'SQL', size: 1.9 },
    { name: 'Git', size: 1.8 },
    { name: 'Docker', size: 1.7 },
    { name: 'AWS', size: 1.6 }
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

    // Update skill labels positions
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
    { name: 'Quantum Simulator', description: 'A groundbreaking quantum computing simulation platform', tech: ['Python', 'Qiskit', 'React'] },
    { name: 'NeuroNet', description: 'Advanced neural network for real-time language translation', tech: ['TensorFlow', 'CUDA', 'C++'] },
    { name: 'CryptoGuard', description: 'Blockchain-based cybersecurity solution for enterprise', tech: ['Solidity', 'Ethereum', 'Node.js'] }
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

    // Add hover effect
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Experience Timeline
const experiences = [
    { year: '2022', title: 'AI Research Intern', company: 'DeepMind', description: 'Contributed to cutting-edge AI algorithms for general problem-solving' },
    { year: '2023', title: 'Software Engineer', company: 'SpaceX', description: 'Developed mission-critical software for Mars colonization project' }
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

    // Animate timeline items
    gsap.from(item, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
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
    // Here you would typically send the form data to a server
    gsap.to('.btn-send', {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
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
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Update skills galaxy
    galaxyCamera.aspect = window.innerWidth / window.innerHeight;
    galaxyCamera.updateProjectionMatrix();
    galaxyRenderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize animations
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
