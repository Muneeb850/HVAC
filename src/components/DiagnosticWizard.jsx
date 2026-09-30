import React, { useState } from 'react';
import { AlertCircle, ArrowRight, Wrench, Clock, ShieldCheck, Flame, Snowflake, ThermometerSun, AlertTriangle } from 'lucide-react';
import { SYMPTOMS_WIZARD } from '../data/onenationData';

export default function DiagnosticWizard({ onBookIssue, playAudioClick, activeSymptomId }) {
  const [selectedId, setSelectedId] = useState(activeSymptomId || 'no-heat');

  const currentSymptom = SYMPTOMS_WIZARD.find(s => s.id === selectedId) || SYMPTOMS_WIZARD[0];

  const getSymptomIcon = (id) => {
    switch (id) {
      case 'no-heat':
      case 'gas-co-smell':
        return <Flame className="w-5 h-5" />;
      case 'ac-blowing-warm':
        return <ThermometerSun className="w-5 h-5" />;
      case 'frozen-coils':
        return <Snowflake className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  return (
    <section id="triage" className="py-24 bg-[#FAF5EE] text-[#1C1917] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header - Balanced Editorial Layout */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#787168] uppercase font-semibold">
            COLORADO CLIMATE DEFENSE
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
            EMERGENCY HVAC TRIAGE <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#8C6C46]">&amp; Containment</span>
          </h2>
          <p className="text-[#5A534A] font-sans max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Extreme Colorado temperatures can make heating or AC loss dangerous within hours. Select what is occurring in your home for immediate containment instructions and priority dispatch.
          </p>
        </div>

        {/* Interactive Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Symptom Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase text-[#787168] tracking-wider mb-2 font-semibold">
              Select Current Climate Symptom:
            </div>
            {SYMPTOMS_WIZARD.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    if (playAudioClick) playAudioClick();
                  }}
                  className={`w-full p-4 rounded-2xl text-left transition-all flex items-start gap-4 border ${
                    isSelected
                      ? 'bg-white border-[#1C1917] shadow-lg scale-[1.01]'
                      : 'bg-white/70 border-[#E8DFCE] hover:border-[#D0C4AF] hover:bg-white'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                    item.severity.includes('CRITICAL') || item.severity.includes('EXTREME')
                      ? 'bg-[#1C1917] text-white shadow-sm'
                      : 'bg-[#F2ECE1] text-[#8C6C46]'
                  }`}>
                    {getSymptomIcon(item.id)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                        item.severity.includes('CRITICAL') || item.severity.includes('EXTREME')
                          ? 'bg-[#1C1917] text-white'
                          : 'bg-[#EFE9DF] text-[#785E3E]'
                      }`}>
                        {item.severity}
                      </span>
                      <span className="text-[11px] font-mono text-[#787168]">{item.urgency.split('(')[0]}</span>
                    </div>
                    <div className="text-sm font-bold text-[#1C1917] leading-snug">
                      {item.symptom}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Prescribed Action Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFCE] shadow-xl relative overflow-hidden">
            {/* Status Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F2ECE1]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-[#787168]">Diagnostic Result:</span>
                <span className="text-xs font-mono font-bold text-[#1C1917]">{currentSymptom.id.toUpperCase()}</span>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full uppercase bg-[#1C1917] text-white">
                {currentSymptom.urgency}
              </span>
            </div>

            {/* First-Aid Action Banner */}
            <div className="my-6 p-5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] flex items-start gap-4">
              <div className="p-2 rounded-xl bg-white text-[#8C6C46] shadow-sm shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#1C1917] mb-1">
                  First-Aid Containment Step (Do This Now):
                </div>
                <div className="text-sm text-[#5A534A] leading-relaxed">
                  {currentSymptom.action}
                </div>
              </div>
            </div>

            {/* Prescribed Solution & Estimated Cost */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE5D8]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#787168] mb-1">
                  <Wrench className="w-3.5 h-3.5 text-[#8C6C46]" />
                  <span>Prescribed Service Solution</span>
                </div>
                <div className="text-base font-bold text-[#1C1917] mb-1">
                  {currentSymptom.serviceMatch}
                </div>
                <div className="text-xs text-[#787168]">
                  Colorado Master HVAC technicians on truck with OEM parts.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#EDE5D8]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#787168] mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8C6C46]" />
                  <span>Upfront Pricing Guarantee</span>
                </div>
                <div className="text-base font-bold text-[#1C1917] mb-1">
                  Written Flat-Rate Estimate
                </div>
                <div className="text-xs text-[#787168]">
                  Exact quote approved by you before any repair work starts.
                </div>
              </div>
            </div>

            {/* Live Dispatch Action Button */}
            <div className="pt-4 border-t border-[#F2ECE1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#787168] flex items-center gap-2">
                <span>Denver / Aurora Average Response:</span>
                <strong className="text-[#1C1917] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8C6C46]" />
                  18 – 35 Minutes ETA
                </strong>
              </div>

              <button
                onClick={() => {
                  if (playAudioClick) playAudioClick();
                  onBookIssue(currentSymptom.id);
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1C1917] hover:bg-[#332E29] text-white font-sans text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
              >
                <span>Dispatch Tech for This Issue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

