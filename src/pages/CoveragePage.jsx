import React from 'react';
import ServiceAreaRadar from '../components/ServiceAreaRadar';

export default function CoveragePage({ onOpenBooking, playAudioClick, currentTheme }) {
  return (
    <main className="min-h-screen bg-[#1C1917] text-white">
      {/* Interactive Radar & Map Corridors (includes title and regional telemetry) */}
      <ServiceAreaRadar
        onSelectCity={(city) => onOpenBooking({ city })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
