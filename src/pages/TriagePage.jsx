import React from 'react';
import { Phone, AlertTriangle, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import DiagnosticWizard from '../components/DiagnosticWizard';
import BackButton from '../components/BackButton';
import { COMPANY_INFO } from '../data/onenationData';

export default function TriagePage({ onOpenBooking, playAudioClick, currentTheme }) {
  return (
    <main className="py-12 bg-[#FAF5EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <BackButton playAudioClick={playAudioClick} label="Back to Home" />
        {/* Priority Emergency Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#1C1917] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border border-stone-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8936D] font-bold">
                FRONT RANGE FLEET STATUS: ACTIVE DISPATCH
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-display font-medium text-white">
              24/7 Emergency No-Heat &amp; System Failure Rescue
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-sans">
              Sub-zero alpine freeze outside? Do not let your home freeze. Our master certified technicians carry universal ignitors, blower motors, and control boards on truck.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-6 py-3.5 rounded-full bg-[#8C6C46] hover:bg-[#A37E54] text-white text-xs font-mono font-bold tracking-wider uppercase flex items-center gap-2 shadow-lg transition active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>CALL (720) 499-4013 NOW</span>
            </a>
            <button
              onClick={() => {
                if (playAudioClick) playAudioClick();
                onOpenBooking({ urgency: 'emergency' });
              }}
              className="px-6 py-3.5 rounded-full border border-white/30 hover:border-white text-white text-xs font-mono font-bold tracking-wider uppercase transition active:scale-95"
            >
              BOOK EMERGENCY DISPATCH
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Symptom Diagnostic Wizard */}
      <DiagnosticWizard
        onBookIssue={(issueId) => onOpenBooking({ preselectedIssue: issueId })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
