import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Route Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TriagePage from './pages/TriagePage';
import CoveragePage from './pages/CoveragePage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [modalInitialData, setModalInitialData] = useState(null);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('nordic'); // Warm Alabaster Linen & Charcoal

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

  return (
    <Router>
      <ScrollToTop />
      <div 
        className="min-h-screen font-sans bg-[#F7F4EE] text-[#1C1917] selection:bg-[#1C1917] selection:text-white flex flex-col"
      >
        {/* Architectural Luxury Persistent Header */}
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          playAudioClick={playAudioClick}
          currentTheme={currentTheme}
        />

        {/* Dynamic Multi-Page Route Outlet */}
        <div className="flex-1 lg:pt-20">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenBooking={handleOpenBooking} 
                  playAudioClick={playAudioClick} 
                  currentTheme={currentTheme} 
                />
              } 
            />
            <Route 
              path="/services" 
              element={
                <ServicesPage 
                  onOpenBooking={handleOpenBooking} 
                  playAudioClick={playAudioClick} 
                  currentTheme={currentTheme} 
                />
              } 
            />
            <Route 
              path="/triage" 
              element={
                <TriagePage 
                  onOpenBooking={handleOpenBooking} 
                  playAudioClick={playAudioClick} 
                  currentTheme={currentTheme} 
                />
              } 
            />
            <Route 
              path="/system-sizer" 
              element={<Navigate to="/services" replace />} 
            />
            <Route 
              path="/calculator" 
              element={<Navigate to="/services" replace />} 
            />
            <Route 
              path="/coverage" 
              element={
                <CoveragePage 
                  onOpenBooking={handleOpenBooking} 
                  playAudioClick={playAudioClick} 
                  currentTheme={currentTheme} 
                />
              } 
            />
            <Route 
              path="/reviews" 
              element={
                <ReviewsPage 
                  playAudioClick={playAudioClick} 
                  currentTheme={currentTheme} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactPage 
                  onOpenBooking={handleOpenBooking} 
                  playAudioClick={playAudioClick} 
                  currentTheme={currentTheme} 
                />
              } 
            />
            <Route 
              path="*" 
              element={
                <HomePage 
                  onOpenBooking={handleOpenBooking} 
                  playAudioClick={playAudioClick} 
                  currentTheme={currentTheme} 
                />
              } 
            />
          </Routes>
        </div>

        {/* Global Footer */}
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
    </Router>
  );
}
