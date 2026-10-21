import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import lottie from 'lottie-web';
import './HeroSection.css';

export default function HeroSection() {
  const lottieContainer = useRef(null);
  const screenCanvasRef = useRef(null);

  // Initialize Lottie Headline
  useEffect(() => {
    if (!lottieContainer.current) return;
    const anim = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/assets/hero_lottie.json'
    });

    return () => anim.destroy();
  }, []);

  // Initialize ASCII Three.js in Amstrad CRT Screen
  useEffect(() => {
    if (!screenCanvasRef.current) return;
    const container = screenCanvasRef.current;
    const width = 362;
    const height = 260;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: false });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);

    // AsciiEffect configuration matching live site
    const effect = new AsciiEffect(renderer, ' .:-+^!0XW#', { resolution: 0.25, invert: true });
    effect.setSize(width, height);
    effect.domElement.style.color = '#1ad990';
    effect.domElement.style.backgroundColor = '#000000';
    effect.domElement.style.fontFamily = 'monospace';
    effect.domElement.style.userSelect = 'none';
    effect.domElement.style.cursor = 'grab';

    container.innerHTML = '';
    container.appendChild(effect.domElement);

    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // 3D TC Logo Box Geometries (extracted from real thibaut.cool)
    const geocube1 = new THREE.BoxGeometry(0.4, 2.36, 0.4);
    const cube1 = new THREE.Mesh(geocube1, material);
    cube1.position.set(0.378, -0.043, 0);
    scene.add(cube1);

    const geocube2 = new THREE.BoxGeometry(0.4, 3.2, 0.4);
    const cube2 = new THREE.Mesh(geocube2, material);
    cube2.position.set(-0.4, -0.1, 0);
    scene.add(cube2);

    const geocube3 = new THREE.BoxGeometry(0.4, 1.5, 0.4);
    const cube3 = new THREE.Mesh(geocube3, material);
    cube3.position.set(0.934, -1.086, 0);
    cube3.rotation.set(0, 0, (104.5 * Math.PI) / 180);
    scene.add(cube3);

    const geocube4 = new THREE.BoxGeometry(0.4, 3.1, 0.4);
    const cube4 = new THREE.Mesh(geocube4, material);
    cube4.position.set(0, 1.116, 0);
    cube4.rotation.set(0, 0, (104.5 * Math.PI) / 180);
    scene.add(cube4);

    // Black mask cube for the authentic TV scanline wipe reveal
    const geometryBlack = new THREE.BoxGeometry(5, 8, 5);
    const materialBlack = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackCube = new THREE.Mesh(geometryBlack, materialBlack);
    blackCube.position.set(0, 2, 0);
    scene.add(blackCube);

    let revealAnimId;
    const blackCubeAnimation = () => {
      blackCube.position.y -= 0.1;
      if (blackCube.position.y > -16) {
        revealAnimId = requestAnimationFrame(blackCubeAnimation);
      }
    };
    revealAnimId = requestAnimationFrame(blackCubeAnimation);

    // OrbitControls for mouse interaction
    const controls = new OrbitControls(camera, effect.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = (135 * Math.PI) / 180;
    controls.minPolarAngle = (45 * Math.PI) / 180;

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      controls.update();
      effect.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      cancelAnimationFrame(revealAnimId);
      controls.dispose();
      renderer.dispose();
      container.innerHTML = '';
    };
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-radial-glow" />

      {/* Lottie Header: Let's make it move. */}
      <div className="hero-lottie-container" ref={lottieContainer} />

      {/* Amstrad TV on Wooden Shelf */}
      <div className="hero-tv-wrapper">
        <img
          src="/assets/10_DOjXtb9Z6xzDB2PgoD59Z6SxviA.png"
          alt="Amstrad CTM 644 on wooden shelf with camera and cassette"
          className="hero-shelf-img"
        />

        {/* The screen overlay for 3D ASCII rendering */}
        <div className="tv-screen-overlay" ref={screenCanvasRef} />
      </div>

      {/* Transition copy */}
      <div className="hero-transition-text">
        <p className="hero-bio-lead">
          Thibaut Crépelle, 3D &amp; Motion generalist freelance who makes products dance.
        </p>
        <p className="hero-bio-sub">Your one-stop shop, with more disco.</p>
      </div>
    </section>
  );
}
