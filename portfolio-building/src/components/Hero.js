import React, { useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(() => {
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
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.mega-glitch', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        gsap.from('.subtitle', { opacity: 0, y: 20, duration: 1, delay: 1 });
        gsap.from('.cta-button', { opacity: 0, y: 20, duration: 1, delay: 1.5 });
    }, []);

    return (
        <section id="hero">
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="mega-glitch" data-text="Anik">Anik</h1>
                    <p class="subtitle">Digital Alchemist & Code Virtuoso</p>
                    <div class="cta-wrapper">
                        <a href="#about" class="cta-button futuristic-border">Discover My Universe</a>
                    </div>
                </div>
                <div class="hero-3d">
                    <canvas id="hero-canvas"></canvas>
                </div>
            </div>
        </section>
    );
};

export default Hero;
