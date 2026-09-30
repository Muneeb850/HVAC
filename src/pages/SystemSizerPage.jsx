import React from 'react';
import CostCalculator from '../components/CostCalculator';
import FinancingGuarantee from '../components/FinancingGuarantee';

export default function SystemSizerPage({ onOpenBooking, playAudioClick, currentTheme }) {
  return (
    <main className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#8C6C46] uppercase font-semibold">
            EQUIPMENT CONFIGURATOR
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
            TAILORED CLIMATE <br />
            <span className="font-serif italic font-normal text-[#8C6C46]">System Sizer</span>
          </h1>
          <p className="text-[#5A534A] font-sans max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Calculate the exact heating and cooling equipment capacity required for your property footprint, climate zone, and efficiency goals. Every recommendation is calibrated for Colorado altitude and temperature extremes.
          </p>
        </div>
      </div>

      {/* Interactive System Sizer Configurator */}
      <CostCalculator
        onBookEstimate={(data) => onOpenBooking(data)}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* Financing & Warranties */}
      <FinancingGuarantee
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
