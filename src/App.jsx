import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DiagnosticWizard from './components/DiagnosticWizard';
import ServicesMatrix from './components/ServicesMatrix';
import CostCalculator from './components/CostCalculator';
import ServiceAreaRadar from './components/ServiceAreaRadar';
import ReviewsSection from './components/ReviewsSection';
import FinancingGuarantee from './components/FinancingGuarantee';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSymptom, setActiveSymptom] = useState(null);
  const [currentTheme, setCurrentTheme] = useState('nordic'); // 'nordic' default warm alabaster & terracotta stone

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  // Modern UI click sound using Web Audio API
  const playAudioClick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // AudioContext could be blocked by autoplay policies
    }
  }, [soundEnabled]);

  const handleOpenBooking = (data = null) => {
    setModalInitialData(data);
    setBookingModalOpen(true);
  };

  const handleSelectSymptom = (symptomId) => {
    setActiveSymptom(symptomId);
    const element = document.getElementById('triage');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="min-h-screen font-sans bg-[#F7F4EE] text-[#1C1917] selection:bg-[#1C1917] selection:text-white"
    >
      {/* 1. Header (Dark Section) */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 2. Hero Section (DARK SECTION with zero moving elements) */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onSelectSymptom={handleSelectSymptom}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 3. Emergency Diagnostic Wizard (CRISP LIGHT SECTION) */}
      <DiagnosticWizard
        activeSymptomId={activeSymptom}
        onBookIssue={(issueId) => handleOpenBooking({ preselectedIssue: issueId })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 4. Full Infrastructure Services Matrix (CRISP LIGHT SECTION) */}
      <ServicesMatrix
        onSelectService={(serviceId) => handleOpenBooking({ service: serviceId })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
      {/* 5. Instant Cost & Financing Estimator (LIGHT/DARK DUAL) */}
      <CostCalculator
        onBookEstimate={(data) => handleOpenBooking(data)}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 8. Front Range Colorado Service Radar (DARK SECTION) */}
      <ServiceAreaRadar
        onSelectCity={(city) => handleOpenBooking({ city })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 9. Verified Google Reviews (CRISP LIGHT SECTION) */}
      <ReviewsSection
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 10. Wells Fargo Financing & Master Guarantees (DARK SECTION) */}
      <FinancingGuarantee
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 11. Footer (DARK SECTION) */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* Multi-Step Interactive Booking & Dispatch Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={modalInitialData}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </div>
  );
}
