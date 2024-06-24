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

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
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