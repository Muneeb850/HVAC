import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Gauge, Zap, Flame, Camera, RotateCcw, ShieldCheck, Waves } from 'lucide-react';

export default function WebGLPipeVisualizer({ onBookService }) {
  const mountRef = useRef(null);
  const [psi, setPsi] = useState(2400);
  const [mode, setMode] = useState('jetting'); // 'jetting' | 'thermal' | 'cctv'
  const [isRotating, setIsRotating] = useState(false);
  const [debrisCleared, setDebrisCleared] = useState(82);

  const visualizerParams = useRef({ psi: 2400, mode: 'jetting', isRotating: false });

  useEffect(() => {
    visualizerParams.current = { psi, mode, isRotating };
  }, [psi, mode, isRotating]);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 4, 18);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x06B6D4, 2.5, 50);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xF97316, 2, 50);
    pointLight2.position.set(-10, -10, -5);
    scene.add(pointLight2);

    // 3D Pipe Group
    const pipeGroup = new THREE.Group();
    scene.add(pipeGroup);

    // Outer Glass/Cutaway Pipe
    const pipeGeometry = new THREE.CylinderGeometry(2.4, 2.4, 14, 32, 1, true);
    const pipeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1E293B,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      transmission: 0.6,
      thickness: 0.5
    });
    const outerPipe = new THREE.Mesh(pipeGeometry, pipeMaterial);
    outerPipe.rotation.z = Math.PI / 2;
    pipeGroup.add(outerPipe);

    // Pipe Flanges / Rings (Industrial aesthetic)
    const flangeMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.9,
      roughness: 0.3
    });
    [-6.8, -2.5, 2.5, 6.8].forEach(xPos => {
      const flangeGeo = new THREE.TorusGeometry(2.55, 0.18, 16, 32);
      const flangeMesh = new THREE.Mesh(flangeGeo, flangeMat);
      flangeMesh.rotation.y = Math.PI / 2;
      flangeMesh.position.x = xPos;
      pipeGroup.add(flangeMesh);
    });

    // Internal Water Jet Stream Particles
    const particleCount = 1800;
    const streamGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 13; // X along pipe length
      const radius = Math.random() * 2.0;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3 + 1] = Math.sin(angle) * radius; // Y
      positions[i * 3 + 2] = Math.cos(angle) * radius; // Z

      velocities[i] = Math.random() * 0.3 + 0.1;

      // Initial cyan color
      colors[i * 3] = 0.02;
      colors[i * 3 + 1] = 0.71;
      colors[i * 3 + 2] = 0.83;
    }

    streamGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    streamGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const streamMat = new THREE.PointsMaterial({
      size: 0.28,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const waterParticles = new THREE.Points(streamGeo, streamMat);
    pipeGroup.add(waterParticles);

    // Debris / Root Obstacles inside the pipe
    const debrisGroup = new THREE.Group();
    for (let d = 0; d < 35; d++) {
      const debrisGeo = new THREE.DodecahedronGeometry(Math.random() * 0.4 + 0.15);
      const debrisMat = new THREE.MeshStandardMaterial({
        color: 0x573e27,
        roughness: 0.9,
        metalness: 0.1
      });
      const debrisMesh = new THREE.Mesh(debrisGeo, debrisMat);
      debrisMesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 2.5,
        (Math.random() - 0.5) * 2.5
      );
      debrisGroup.add(debrisMesh);
    }
    pipeGroup.add(debrisGroup);

    // Mouse Drag Rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      pipeGroup.rotation.y += deltaX * 0.008;
      pipeGroup.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const currentMode = visualizerParams.current.mode;
      const currentPsi = visualizerParams.current.psi;
      const rotating = visualizerParams.current.isRotating;

      if (rotating && !isDragging) {
        pipeGroup.rotation.y += delta * 0.35;
        pipeGroup.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.15;
      }

      // Update Particle flow velocity based on PSI
      const speedMultiplier = (currentPsi / 1000) * 1.8;
      const pos = streamGeo.attributes.position.array;
      const col = streamGeo.attributes.color.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Move along X axis (pipe bore)
        pos[i3] += velocities[i] * speedMultiplier * delta * 8;
        if (pos[i3] > 6.8) {
          pos[i3] = -6.8;
        }

        // Adjust colors according to mode
        if (currentMode === 'jetting') {
          // Intense Aqua / Cyan
          col[i3] = 0.05;
          col[i3 + 1] = 0.75 + Math.sin(pos[i3]) * 0.15;
          col[i3 + 2] = 0.95;
        } else if (currentMode === 'thermal') {
          // Orange / Amber / Red hot water
          col[i3] = 0.98;
          col[i3 + 1] = 0.45;
          col[i3 + 2] = 0.08;
        } else {
          // CCTV Diagnostic Green
          col[i3] = 0.1;
          col[i3 + 1] = 0.95;
          col[i3 + 2] = 0.4;
        }
      }
      streamGeo.attributes.position.needsUpdate = true;
      streamGeo.attributes.color.needsUpdate = true;

      // Shake debris if high PSI jetting
      if (currentPsi > 2500) {
        debrisGroup.children.forEach(c => {
          c.rotation.x += 0.05;
          c.rotation.y += 0.05;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      currentMount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-obsidian-900 border border-slate-800 shadow-2xl p-6 lg:p-8">
      {/* Visualizer Header HUD */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-hydro-500/10 text-hydro-400 border border-hydro-500/20 mb-2">
            <span className="w-2 h-2 rounded-full bg-hydro-400 animate-ping"></span>
            3D WEBGL HYDRO-DIAGNOSTIC ENGINE
          </div>
          <h3 className="text-2xl font-bold font-display text-white tracking-tight">
            Interactive Pipe Bore & Hydro-Jet Simulator
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Drag to rotate 360° • Adjust pressure to see 4,000 PSI high-velocity sewer scour technology in action.
          </p>
        </div>

        {/* Telemetry Pill Badges */}
        <div className="flex items-center gap-3">
          <div className="bg-obsidian-850 px-4 py-2 rounded-xl border border-slate-700 text-right">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Restored Flow Rate</span>
            <span className="text-lg font-bold text-hydro-400 font-mono">99.8 GPM</span>
          </div>
          <div className="bg-obsidian-850 px-4 py-2 rounded-xl border border-slate-700 text-right">
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Debris Cleared</span>
            <span className="text-lg font-bold text-emerald-400 font-mono">{debrisCleared}%</span>
          </div>
        </div>
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div className="relative w-full h-[380px] sm:h-[440px] my-6 cursor-grab active:cursor-grabbing rounded-2xl bg-gradient-to-b from-obsidian-950 to-obsidian-900 border border-slate-800/60 overflow-hidden">
        <div ref={mountRef} className="w-full h-full" />

        {/* Mode HUD Overlays */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
          <div className="bg-obsidian-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
            <Gauge className="w-3.5 h-3.5 text-hydro-400" />
            <span>OPERATING PRESSURE: <strong className="text-white">{psi} PSI</strong></span>
          </div>
          <div className="bg-obsidian-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>STRUCTURAL INTEGRITY: <strong className="text-emerald-400">100% NOMINAL</strong></span>
          </div>
        </div>

        {/* Drag Hint */}
        <div className="absolute bottom-4 right-4 pointer-events-none bg-obsidian-950/70 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-mono text-slate-400 border border-slate-800">
          Click & Drag to Inspect Pipe Internal Bore
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-2">
        {/* PSI Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400" /> Hydro Pressure (PSI)
            </span>
            <span className="text-hydro-400 font-bold">{psi} PSI</span>
          </div>
          <input
            type="range"
            min="500"
            max="4000"
            step="100"
            value={psi}
            onChange={(e) => {
              const val = Number(e.target.value);
              setPsi(val);
              setDebrisCleared(Math.min(100, Math.floor(60 + (val / 4000) * 40)));
            }}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-hydro-500"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500">
            <span>500 (Standard)</span>
            <span>2000 (Commercial)</span>
            <span>4000 (Full Scour)</span>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setMode('jetting')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              mode === 'jetting'
                ? 'bg-hydro-500 text-obsidian-950 shadow-lg shadow-hydro-500/25'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Waves className="w-3.5 h-3.5" /> Hydro Jet
          </button>
          <button
            onClick={() => setMode('thermal')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              mode === 'thermal'
                ? 'bg-copper-500 text-white shadow-lg shadow-copper-500/25'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Flame className="w-3.5 h-3.5" /> Hot Water
          </button>
          <button
            onClick={() => setMode('cctv')}
            className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              mode === 'cctv'
                ? 'bg-emerald-500 text-obsidian-950 shadow-lg shadow-emerald-500/25'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Camera className="w-3.5 h-3.5" /> CCTV Scan
          </button>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
            title="Toggle Auto Rotation"
          >
            <RotateCcw className={`w-4 h-4 ${isRotating ? 'animate-spin-slow' : ''}`} />
          </button>
          <button
            onClick={() => onBookService && onBookService('hydro-jetting')}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-hydro-500 to-hydro-600 text-obsidian-950 font-bold text-sm hover:brightness-110 active:scale-95 transition shadow-lg shadow-hydro-500/20"
          >
            Book 4,000 PSI Jetting
          </button>
        </div>
      </div>
    </div>
  );
}
