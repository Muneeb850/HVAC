import React, { useState, useRef } from 'react';
import { AlertOctagon, CheckCircle2, Video, Sliders } from 'lucide-react';

export default function BeforeAfterSlider({ playAudioClick }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const onTouchMove = (e) => handleMove(e.touches[0].clientX);
  const onMouseMove = (e) => {
    if (e.buttons === 1) handleMove(e.clientX);
  };

  return (
    <section className="py-24 bg-porcelain-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono font-semibold">
            <Video className="w-3.5 h-3.5 text-hydro-400" />
            CCTV FIBER-OPTIC PIPE SCAN COMPARISON
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-slate-950 uppercase">
            Proof in the Bore: <br />
            <span className="text-hydro-600">Before &amp; After Hydro Jetting</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Drag the slider to see how our 4,000 PSI pulsating water jetting scours 100% of invasive tree roots, hardened scale, and grease out of Front Range sewer pipes.
          </p>
        </div>

        {/* Interactive Comparison Viewport */}
        <div 
          ref={containerRef}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
          onClick={(e) => {
            handleMove(e.clientX);
            if (playAudioClick) playAudioClick();
          }}
          className="relative max-w-4xl mx-auto h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900 select-none cursor-ew-resize bg-slate-950"
        >
          {/* Right Side: Clean After Pipe View */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 flex items-center justify-center p-8">
            {/* Visual simulation of cleaned pipe */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border-8 border-cyan-400/40 bg-gradient-to-br from-slate-950 via-cyan-950/60 to-slate-950 flex items-center justify-center shadow-[inset_0_0_80px_rgba(6,182,212,0.4)]">
              <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-dashed border-cyan-400/30 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-cyan-400/10 blur-xl"></div>
              </div>
              <div className="absolute text-center space-y-1">
                <span className="text-4xl sm:text-5xl font-mono font-black text-cyan-400">100%</span>
                <span className="text-[11px] font-mono tracking-widest text-cyan-200 uppercase block font-bold">
                  Bore Diameter Restored
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 inline-block">
                  FLOW RATE: 125 GPM
                </span>
              </div>
            </div>

            {/* After Top Label */}
            <div className="absolute top-6 right-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-cyan-500/40 text-right">
              <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block flex items-center justify-end gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> AFTER: HYDRO-JET CLEANED
              </span>
              <span className="text-xs text-white font-medium">Scoured with 4,000 PSI • Zero Roots</span>
            </div>
          </div>

          {/* Left Side: Clogged Before Pipe View (Clipped) */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 flex items-center justify-center p-8 overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            {/* Visual simulation of severely clogged pipe */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border-8 border-amber-900/60 bg-gradient-to-br from-amber-950 via-stone-950 to-amber-950 flex items-center justify-center shadow-[inset_0_0_80px_rgba(180,83,9,0.5)]">
              {/* Clog obstruction overlay */}
              <div className="absolute inset-8 rounded-full bg-amber-900/40 backdrop-blur-[2px] flex items-center justify-center border-4 border-amber-700/40">
                <div className="w-16 h-16 rounded-full bg-amber-950 border border-amber-500/40 flex items-center justify-center">
                  <span className="text-xs font-mono font-bold text-amber-300">15%</span>
                </div>
              </div>
              <div className="absolute bottom-12 text-center">
                <span className="text-[10px] font-mono text-amber-300 font-bold bg-[#1C1917]/90 px-2 py-0.5 rounded border border-amber-500/30 inline-block">
                  SEVERE ROOT INTRUSION &amp; CALCITE
                </span>
              </div>
            </div>

            {/* Before Top Label */}
            <div className="absolute top-6 left-6 bg-[#1C1917]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-500/40 text-left">
              <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block flex items-center gap-1">
                <AlertOctagon className="w-3.5 h-3.5 text-amber-400" /> BEFORE: SEVERELY RESTRICTED
              </span>
              <span className="text-xs text-white font-medium">Tree Roots • Grease • Mineral Scale</span>
            </div>
          </div>

          {/* Draggable Divider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-950 shadow-2xl flex items-center justify-center font-mono font-bold text-xs border-2 border-slate-900 hover:scale-110 active:scale-95 transition">
              <Sliders className="w-4 h-4 rotate-90 text-slate-950" />
            </div>
          </div>

          {/* Bottom HUD bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl pointer-events-none border border-white/10">
            <span>CCTV CAM REC: FRONT RANGE SEWER #4928</span>
            <span className="text-white font-semibold">DRAG TO REVEAL</span>
            <span className="text-emerald-400">STATUS: VERIFIED CLEAN</span>
          </div>
        </div>
      </div>
    </section>
  );
}
