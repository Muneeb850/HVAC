import React from 'react';
import ReviewsSection from '../components/ReviewsSection';
import BackButton from '../components/BackButton';

export default function ReviewsPage({ playAudioClick, currentTheme }) {
  return (
    <main className="min-h-screen bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-6">
        <BackButton playAudioClick={playAudioClick} label="Back to Home" />
      </div>
      {/* Verified Reviews Section (contains single clean header, rating score & reviews grid) */}
      <ReviewsSection
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
