import React from 'react';
import ReviewsSection from '../components/ReviewsSection';
import FinancingGuarantee from '../components/FinancingGuarantee';

export default function ReviewsPage({ playAudioClick, currentTheme }) {
  return (
    <main className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#8C6C46] uppercase font-semibold">
            VERIFIED COLORADO HOMEOWNERS
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
            TRUST THAT <br />
            <span className="font-serif italic font-normal text-[#8C6C46]">Endures</span>
          </h1>
          <p className="text-[#5A534A] font-sans max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Read unedited reviews from homeowners across Denver, Aurora, Boulder, and Parker who rely on One Nation for precision climate engineering, sub-zero heating rescue, and transparent service.
          </p>
        </div>
      </div>

      {/* Verified Reviews Section */}
      <ReviewsSection
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* Master Guarantees & Financing Partnership */}
      <FinancingGuarantee
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
