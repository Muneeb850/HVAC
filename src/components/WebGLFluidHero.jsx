import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WebGLFluidHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Particle Fluid Geometry
    const particleCount = 1400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const initialPos = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const color1 = new THREE.Color('#06B6D4'); // Hydro Cyan
    const color2 = new THREE.Color('#0284C7'); // Deep Water Blue
    const color3 = new THREE.Color('#F97316'); // Warm Copper Spark

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 20;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPos[i * 3] = x;
      initialPos[i * 3 + 1] = y;
      initialPos[i * 3 + 2] = z;

      // Color variation
      const rand = Math.random();
      let c = color1;
      if (rand < 0.6) c = color1;
      else if (rand < 0.9) c = color2;
      else c = color3;

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      scales[i] = Math.random() * 2.5 + 0.8;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(6,182,212,0.8)');
    gradient.addColorStop(0.8, 'rgba(6,182,212,0.2)');
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 1.2,
      vertexColors: true,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Flow Lines (Simulating pipe flow streamlines)
    const lineGroup = new THREE.Group();
    const lineCount = 12;
    for (let l = 0; l < lineCount; l++) {
      const curvePoints = [];
      const yOffset = (l - lineCount / 2) * 2.8;
      for (let p = -30; p <= 30; p += 3) {
        curvePoints.push(new THREE.Vector3(p, yOffset + Math.sin(p * 0.2) * 1.5, (Math.random() - 0.5) * 5));
      }
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const tubeGeo = new THREE.TubeGeometry(curve, 40, 0.08, 6, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: l % 3 === 0 ? 0xF97316 : 0x06B6D4,
        transparent: true,
        opacity: 0.22,
        blending: THREE.AdditiveBlending
      });
      const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
      lineGroup.add(tubeMesh);
    }
    scene.add(lineGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = currentMount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 15;
      targetMouseY = y * 10;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const posArr = geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ix = initialPos[i3];
        const iy = initialPos[i3 + 1];
        const iz = initialPos[i3 + 2];

        // Harmonic fluid wave formula
        const waveX = Math.sin(elapsedTime * 1.2 + iy * 0.3) * 1.2;
        const waveY = Math.cos(elapsedTime * 0.9 + ix * 0.2) * 1.5;
        const waveZ = Math.sin(elapsedTime * 0.7 + ix * 0.1 + iy * 0.1) * 2.0;

        // Interaction repulsion from cursor
        const dx = posArr[i3] - mouseX;
        const dy = posArr[i3 + 1] - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let forceX = 0;
        let forceY = 0;
        if (dist < 10) {
          const force = (10 - dist) * 0.25;
          forceX = (dx / dist) * force;
          forceY = (dy / dist) * force;
        }

        posArr[i3] = ix + waveX + forceX;
        posArr[i3 + 1] = iy + waveY + forceY;
        posArr[i3 + 2] = iz + waveZ;
      }
      geometry.attributes.position.needsUpdate = true;

      // Rotate line streams slowly
      lineGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.08;
      lineGroup.rotation.z = Math.cos(elapsedTime * 0.2) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      aria-hidden="true"
    />
  );
}
