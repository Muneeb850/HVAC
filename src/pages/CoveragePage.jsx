import React from 'react';
import ServiceAreaRadar from '../components/ServiceAreaRadar';
import BackButton from '../components/BackButton';

export default function CoveragePage({ onOpenBooking, playAudioClick, currentTheme }) {
  return (
    <main className="min-h-screen bg-[#1C1917] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6">
        <BackButton playAudioClick={playAudioClick} label="Back to Home" dark={true} />
      </div>
      {/* Interactive Radar & Map Corridors (includes title and regional telemetry) */}
      <ServiceAreaRadar
        onSelectCity={(city) => onOpenBooking({ city })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
