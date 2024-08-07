import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceWarpBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, stars, starGeo;

    function init() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI/2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      starGeo = new THREE.BufferGeometry();
      const positions = new Float32Array(6000 * 3);
      const velocities = new Float32Array(6000);

      for (let i = 0; i < 6000 * 3; i += 3) {
        positions[i] = Math.random() * 600 - 300;
        positions[i + 1] = Math.random() * 600 - 300;
        positions[i + 2] = Math.random() * 600 - 300;
        velocities[i / 3] = Math.random() / 2;
      }

      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1));

      const starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        transparent: true
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      window.addEventListener('resize', onWindowResize, false);
    }

    function animate() {
      const positions = starGeo.attributes.position.array;
      const velocities = starGeo.attributes.velocity.array;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= velocities[i / 3];

        if (positions[i + 1] < -200) {
          positions[i + 1] = 200;
        }
      }

      starGeo.attributes.position.needsUpdate = true;
      stars.rotation.y += 0.002;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    init();
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default SpaceWarpBackground;