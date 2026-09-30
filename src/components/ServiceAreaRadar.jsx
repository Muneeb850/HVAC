import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Truck, ArrowRight, Radio } from 'lucide-react';
import { COLORADO_CITIES } from '../data/onenationData';

export default function ServiceAreaRadar({ onSelectCity, playAudioClick }) {
  const [activeCity, setActiveCity] = useState(COLORADO_CITIES[0]);

  return (
    <section id="coverage" className="py-24 bg-[#1C1917] text-white border-b border-[#2D2A26] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header - Balanced Editorial Layout */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#B8936D] uppercase font-semibold">
            COLORADO COVERAGE CORRIDORS
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-medium uppercase text-white leading-[0.98]">
            REGIONAL FLEET <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-stone-300">&amp; Response Telemetry</span>
          </h2>
          <p className="text-stone-300 max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Headquartered in Aurora, CO with rapid response vans stationed strategically along the I-25 and E-470 corridors.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COLORADO_CITIES.map((city) => {
              const isSelected = activeCity.name === city.name;
              return (
                <button
                  key={city.name}
                  onClick={() => {
                    setActiveCity(city);
                    if (playAudioClick) playAudioClick();
                  }}
                  className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all border flex items-center justify-between ${
                    isSelected
                      ? 'bg-white/10 border-2 border-white shadow-lg ring-2 ring-white/20'
                      : 'bg-black/30 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs shrink-0 ${
                      isSelected ? 'bg-white text-[#1C1917]' : 'bg-white/10 text-white'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{city.name}</div>
                      <div className="text-[10px] font-mono text-stone-400">{city.status}</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-amber-300 block">{city.avgEtaMinutes}m ETA</span>
                    <span className="text-[10px] font-mono text-emerald-400">{city.techAvailable} Vans Ready</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Telemetry Card */}
          <div className="lg:col-span-5 bg-black/40 border border-white/15 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
              <div>
                <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest block">Selected Front Range Zone</span>
                <h3 className="text-2xl font-display font-bold text-white">{activeCity.name}, Colorado</h3>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-800">
                Active Patrol
              </span>
            </div>

            <div className="space-y-4 mb-8 text-xs">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-stone-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300" /> Avg Emergency Response:
                </span>
                <span className="text-sm font-bold font-mono text-white">{activeCity.avgEtaMinutes} Minutes</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-stone-400 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-emerald-400" /> Units On Patrol Near You:
                </span>
                <span className="text-sm font-bold font-mono text-emerald-300">{activeCity.techAvailable} Vans</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-stone-400 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#B8936D]" /> Front Range ZIP Range:
                </span>
                <span className="text-sm font-mono text-white">{activeCity.zipPrefix}XX</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (playAudioClick) playAudioClick();
                if (onSelectCity) onSelectCity(activeCity.name);
              }}
              className="w-full py-4 rounded-full bg-white hover:bg-stone-200 text-[#1C1917] font-display font-bold text-xs uppercase tracking-wider transition shadow-xl flex items-center justify-center gap-2"
            >
              <span>Dispatch HVAC Tech to {activeCity.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
