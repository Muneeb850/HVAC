import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, ChevronDown, Flame, ThermometerSnowflake } from 'lucide-react';
import { COMPANY_INFO } from '../data/onenationData';

export default function Navbar({ onOpenBooking, soundEnabled, setSoundEnabled, playAudioClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Heat Pumps", href: "#services" },
    { label: "Emergency Triage", href: "#triage" },
    { label: "System Sizer", href: "#calculator" },
    { label: "Coverage", href: "#coverage" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <>
      {/* Architectural Luxury Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#EAE3D6] py-3.5' 
            : 'bg-[#F7F4EE] py-4.5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          
          {/* Brand Logo: Clean vertical pill "▮" + Brand Name */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <span className="w-2.5 h-6 rounded-full bg-[#1C1917] group-hover:scale-105 transition-transform" />
            <div className="flex items-center gap-2">
              <span className="font-sans font-bold text-xl sm:text-2xl tracking-[0.08em] text-[#1C1917] uppercase whitespace-nowrap">
                ONE NATION
              </span>
              <span className="hidden xl:inline-block w-px h-4 bg-[#D5CDBC]" />
              <span className="text-[10px] font-mono tracking-widest text-[#8C6C46] uppercase hidden xl:inline-block font-semibold whitespace-nowrap">
                HEATING &amp; AIR
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Perfectly Fitted & Spaced */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={playAudioClick}
                className="text-[13px] font-sans font-medium text-[#5A534A] hover:text-[#1C1917] tracking-wide transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Phone Number & "CONTACT US" pill button */}
          <div className="hidden sm:flex items-center gap-4 lg:gap-5 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#1C1917] hover:text-[#8C6C46] transition whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#8C6C46]" />
              <span>(720) 499-4013</span>
            </a>

            <button
              onClick={() => {
                if (playAudioClick) playAudioClick();
                onOpenBooking();
              }}
              className="px-5 py-2 rounded-full border border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-200 active:scale-95 shadow-sm whitespace-nowrap"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Quick Action: Call Button + Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="p-2 rounded-xl text-[#8C6C46] bg-[#FAF5EE] border border-[#E8DFCE] active:scale-95 transition"
              aria-label="Call (720) 499-4013"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#1C1917] hover:bg-[#EFEAE0] transition"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Tablet Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="hidden sm:block lg:hidden p-2 rounded-xl text-[#1C1917] hover:bg-[#EFEAE0] transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF5EE] border-b border-[#E8DFCE] px-6 py-6 space-y-4">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    if (playAudioClick) playAudioClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-sm font-sans font-medium text-[#1C1917] py-2 border-b border-[#EAE3D6]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full text-center py-3 rounded-full border border-[#1C1917] text-[#1C1917] font-mono text-xs font-semibold"
              >
                CALL (720) 499-4013 (24/7 HVAC)
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (playAudioClick) playAudioClick();
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#1C1917] text-white font-sans text-xs font-semibold uppercase tracking-wider"
              >
                BOOK HVAC DISPATCH
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
