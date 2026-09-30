import React from 'react';
import Hero from '../components/Hero';
import ServicesMatrix from '../components/ServicesMatrix';
import DiagnosticWizard from '../components/DiagnosticWizard';
import CostCalculator from '../components/CostCalculator';
import ServiceAreaRadar from '../components/ServiceAreaRadar';
import ReviewsSection from '../components/ReviewsSection';
import FinancingGuarantee from '../components/FinancingGuarantee';

export default function HomePage({ onOpenBooking, playAudioClick, currentTheme }) {
  return (
    <main>
      {/* 1. Hero with Rooftop Background and Telemetry Card */}
      <Hero 
        onOpenBooking={onOpenBooking} 
        playAudioClick={playAudioClick} 
      />

      {/* 2. Architectural Services Showcase & Matrix */}
      <ServicesMatrix
        onSelectService={(serviceId) => onOpenBooking({ service: serviceId })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 3. Emergency Triage Diagnostic Wizard */}
      <DiagnosticWizard
        onBookIssue={(issueId) => onOpenBooking({ preselectedIssue: issueId })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 4. Tailored Climate System Sizer & Configurator */}
      <CostCalculator
        onBookEstimate={(data) => onOpenBooking(data)}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 5. Colorado Coverage Corridors & Radar */}
      <ServiceAreaRadar
        onSelectCity={(city) => onOpenBooking({ city })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 6. Verified Client Reviews */}
      <ReviewsSection
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* 7. Financing Guarantee & Warranties */}
      <FinancingGuarantee
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
