import React from 'react';
import ReviewsSection from '../components/ReviewsSection';

export default function ReviewsPage({ playAudioClick, currentTheme }) {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      {/* Verified Reviews Section (contains single clean header, rating score & reviews grid) */}
      <ReviewsSection
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
