import React from 'react';
import { ArrowRight, Flame, Wind, ShieldCheck, ThermometerSun, MapPin, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/onenationData';

export default function Hero({ onOpenBooking, playAudioClick }) {
  return (
    <section className="relative pt-10 pb-20 overflow-hidden">
      
      {/* 1. HVAC Rooftop Picture on the BACK of Hero Section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hvac_rooftop_hero.jpg" 
          alt="One Nation Commercial and Residential Rooftop HVAC Infrastructure" 
          className="w-full h-full object-cover object-center brightness-[1.07] contrast-[1.03]"
        />
        
        {/* Architectural Warm Alabaster Scrim preserving exact theme palette and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EE] via-[#F7F4EE]/85 to-[#F7F4EE]/35 lg:to-[#F7F4EE]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4EE] via-transparent to-[#F7F4EE]/45" />
      </div>

      {/* 2. Content & Words in FRONT of Background Picture */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
          
          {/* Left Column: Typography & Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small uppercase tag */}
            <div className="text-[11px] font-sans tracking-[0.25em] text-[#8C8275] uppercase font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#8C6C46]" />
              <span>CRAFTING CLIMATE INFRASTRUCTURE. COLORADO.</span>
            </div>

            {/* Massive Editorial Serif Headline matching theme typography */}
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-display font-medium uppercase tracking-tight text-[#1C1917] leading-[0.92]">
              ELEVATING <br />
              CLIMATE COMFORT
            </h1>

            {/* Clean, light subtext */}
            <p className="text-base sm:text-lg text-[#5A534A] max-w-lg font-sans leading-relaxed">
              We engineer, install, and optimize high-efficiency heating, ventilation, and air conditioning systems that keep Colorado homes and commercial facilities in perpetual equilibrium.
            </p>

            {/* Black Pill Button with Circular Arrow matching reference */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (playAudioClick) playAudioClick();
                  onOpenBooking({ service: 'heat-pumps' });
                }}
                className="px-7 py-3.5 rounded-full bg-[#1C1917] hover:bg-[#332E29] text-white font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-3.5 shadow-md hover:scale-[1.02] active:scale-95 transition-all group"
              >
                <span>EXPLORE HVAC SYSTEMS</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-6 py-3.5 rounded-full border border-[#D5CDBC] text-[#1C1917] hover:border-[#1C1917] bg-white/80 backdrop-blur-sm font-mono text-xs font-semibold tracking-wide transition-all"
              >
                CALL (720) 499-4013
              </a>
            </div>
          </div>

          {/* Right Column: Floating High-Capacity Climate Card in Front */}
          <div className="lg:col-span-5 relative">
            <div 
              onClick={() => {
                if (playAudioClick) playAudioClick();
                onOpenBooking({ service: 'rooftop-package-units' });
              }}
              className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl shadow-2xl border border-white/90 space-y-4 cursor-pointer hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D6]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C6C46] font-semibold">
                    COLORADO HVAC TELEMETRY
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#8C8275] bg-[#FAF5EE] px-2.5 py-1 rounded-full border border-[#E8DFCE]">
                  LIC. #HV-33821
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#8C8275] block font-semibold">
                  FEATURED INFRASTRUCTURE
                </span>
                <h3 className="font-display text-2xl font-medium text-[#1C1917] leading-tight">
                  High-Capacity Rooftop &amp; Inverter Fleet
                </h3>
                <p className="text-xs text-[#6B6358] leading-relaxed">
                  Calibrated for Colorado's alpine altitude and rapid temperature drops down to -15°F. Packaged rooftop units, variable-speed heat pumps, and multi-zone climate zoning.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono text-[#1C1917]">
                <div className="p-2.5 rounded-xl bg-[#FAF5EE] border border-[#E8DFCE]">
                  <div className="text-[9px] text-[#8C8275] uppercase">Heating Efficiency</div>
                  <div className="font-bold text-sm">Up to 98% AFUE</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FAF5EE] border border-[#E8DFCE]">
                  <div className="text-[9px] text-[#8C8275] uppercase">Cooling Seasonal</div>
                  <div className="font-bold text-sm">Up to 22 SEER2</div>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between gap-2 border-t border-[#EAE3D6]">
                <span className="flex items-center gap-1.5 text-xs text-[#8C6C46] font-semibold whitespace-nowrap min-w-0">
                  <MapPin className="w-3.5 h-3.5 text-[#8C6C46] shrink-0" />
                  <span className="truncate">Aurora HQ &bull; Front Range</span>
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (playAudioClick) playAudioClick();
                    onOpenBooking({ service: 'rooftop-package-units' });
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-[#1C1917] hover:bg-[#8C6C46] text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-[1.02] active:scale-95 transition-all group/btn whitespace-nowrap shrink-0"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span>Click to Book System</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Feature & Stat Ribbon matching reference structure */}
        <div className="mt-14 bg-[#FAF5EE] border border-[#E8DFCE] rounded-3xl p-6 sm:p-8 shadow-xl shadow-stone-900/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* 4 Feature Items */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#EFE9DF] flex items-center justify-center text-[#1C1917] mb-2">
                  <Flame className="w-4 h-4 text-[#8C6C46]" />
                </div>
                <div className="text-xs font-bold text-[#1C1917]">Thermal Engineering</div>
                <p className="text-[11px] text-[#787168] leading-relaxed">
                  Sub-zero heat pumps &amp; 96%+ AFUE gas furnaces.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#EFE9DF] flex items-center justify-center text-[#1C1917] mb-2">
                  <ThermometerSun className="w-4 h-4 text-[#8C6C46]" />
                </div>
                <div className="text-xs font-bold text-[#1C1917]">Precision Cooling</div>
                <p className="text-[11px] text-[#787168] leading-relaxed">
                  High-SEER2 central AC &amp; multi-zone ductless units.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#EFE9DF] flex items-center justify-center text-[#1C1917] mb-2">
                  <Wind className="w-4 h-4 text-[#8C6C46]" />
                </div>
                <div className="text-xs font-bold text-[#1C1917]">Air Purification</div>
                <p className="text-[11px] text-[#787168] leading-relaxed">
                  Hospital-grade HEPA, UV-C &amp; ERV fresh ventilation.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="space-y-1.5">
                <div className="w-7 h-7 rounded-lg bg-[#EFE9DF] flex items-center justify-center text-[#1C1917] mb-2">
                  <Zap className="w-4 h-4 text-[#8C6C46]" />
                </div>
                <div className="text-xs font-bold text-[#1C1917]">24/7 Rapid Care</div>
                <p className="text-[11px] text-[#787168] leading-relaxed">
                  Immediate Denver dispatch for no-heat emergencies.
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block w-px h-16 bg-[#D8CEBA]" />

            {/* 3 Metrics */}
            <div className="md:col-span-3 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl lg:text-3xl font-display font-medium text-[#1C1917]">12+</div>
                <div className="text-[10px] font-sans text-[#787168] uppercase tracking-wider mt-0.5">Years Serving CO</div>
              </div>

              <div>
                <div className="text-2xl lg:text-3xl font-display font-medium text-[#1C1917]">3,800+</div>
                <div className="text-[10px] font-sans text-[#787168] uppercase tracking-wider mt-0.5">Systems Installed</div>
              </div>

              <div>
                <div className="text-2xl lg:text-3xl font-display font-medium text-[#1C1917]">99.4%</div>
                <div className="text-[10px] font-sans text-[#787168] uppercase tracking-wider mt-0.5">Reliability Rate</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

