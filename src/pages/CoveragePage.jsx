import React from 'react';
import ServiceAreaRadar from '../components/ServiceAreaRadar';
import ReviewsSection from '../components/ReviewsSection';

export default function CoveragePage({ onOpenBooking, playAudioClick, currentTheme }) {
  return (
    <main className="py-12 bg-[#1C1917] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#B8936D] uppercase font-semibold">
            COLORADO COVERAGE CORRIDORS
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium uppercase text-white leading-[0.98]">
            REGIONAL FLEET <br />
            <span className="font-serif italic font-normal text-stone-300">&amp; Response Telemetry</span>
          </h1>
          <p className="text-stone-300 font-sans max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Headquartered in Aurora, CO with rapid response vans stationed strategically along the I-25 and E-470 corridors. Select your municipality below to view live technician fleet status and average emergency response times.
          </p>
        </div>
      </div>

      {/* Interactive Radar & Map Corridors */}
      <ServiceAreaRadar
        onSelectCity={(city) => onOpenBooking({ city })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* Reviews from these areas */}
      <div className="bg-[#F7F4EE]">
        <ReviewsSection
          playAudioClick={playAudioClick}
          currentTheme={currentTheme}
        />
      </div>
    </main>
  );
}
