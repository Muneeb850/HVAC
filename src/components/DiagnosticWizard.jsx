import React, { useState } from 'react';
import { 
  AlertCircle, 
  ArrowRight, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  Flame, 
  Snowflake, 
  ThermometerSun, 
  AlertTriangle, 
  Phone, 
  CheckCircle2,
  Sparkles,
  Zap
} from 'lucide-react';
import { SYMPTOMS_WIZARD, COMPANY_INFO } from '../data/onenationData';

export default function DiagnosticWizard({ onBookIssue, playAudioClick, activeSymptomId }) {
  const [selectedId, setSelectedId] = useState(activeSymptomId || 'no-heat');

  const currentSymptom = SYMPTOMS_WIZARD.find(s => s.id === selectedId) || SYMPTOMS_WIZARD[0];

  const getSymptomIcon = (id, isSelected) => {
    const iconClass = isSelected ? "w-5 h-5 text-amber-300" : "w-5 h-5 text-[#8C6C46]";
    switch (id) {
      case 'no-heat':
      case 'gas-co-smell':
        return <Flame className={iconClass} />;
      case 'ac-blowing-warm':
        return <ThermometerSun className={iconClass} />;
      case 'frozen-coils':
        return <Snowflake className={iconClass} />;
      default:
        return <AlertTriangle className={iconClass} />;
    }
  };

  return (
    <section id="triage" className="py-16 sm:py-24 bg-[#FAF5EE] text-[#1C1917] border-b border-[#EAE3D6] relative">
      
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8C6C46]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header with Live Dispatch Beacon */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl space-y-3 sm:space-y-4">
            
            {/* Live Operational Fleet Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#1C1917] text-white shadow-sm border border-stone-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#E5DCCE]">
                LIVE 24/7 COLORADO TRIAGE &bull; 18–35 MIN AVG DISPATCH
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
              EMERGENCY HVAC TRIAGE <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#8C6C46]">&amp; Containment</span>
            </h2>

            <p className="text-[#5A534A] font-sans max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed pt-1">
              Extreme Colorado freeze snaps and 95°F+ heatwaves make system failure critical within hours. Select your current symptom below for instant step-by-step containment instructions and direct priority dispatch.
            </p>
          </div>

          {/* Direct Hotline Card with Elevated Design */}
          <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white to-[#FBF8F2] border border-[#E5DAC8] shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3.5 shrink-0 lg:max-w-xs group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1C1917] to-[#2E2822] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <Phone className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8C8275] font-semibold">
                Priority Dispatch Hotline
              </div>
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="text-base sm:text-lg font-bold font-mono text-[#1C1917] hover:text-[#8C6C46] transition block leading-tight"
              >
                (720) 499-4013
              </a>
              <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>On-Duty Master Tech Standing By</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Highly Tactile & Fitted Symptom Cards */}
          <div className="lg:col-span-5 space-y-3 min-w-0 w-full">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-[#787168] tracking-wider mb-1.5 font-semibold px-1">
              <span>Select Current Symptom:</span>
              <span className="text-[10px] text-[#8C6C46] font-bold bg-[#F2ECE1] px-2 py-0.5 rounded-full">
                5 Active Protocols
              </span>
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
                  className={`w-full p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 flex items-center gap-3.5 border group relative cursor-pointer ${
                    isSelected
                      ? 'bg-white border-2 border-[#8C6C46] shadow-md ring-2 ring-[#8C6C46]/20'
                      : 'bg-white/85 border border-[#E8DFCE] hover:border-[#8C6C46]/60 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  {/* Icon Badge with Dual Tone */}
                  <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#1C1917] text-amber-300 shadow-sm'
                      : 'bg-[#FAF5EE] border border-[#E5DAC8] text-[#8C6C46] group-hover:bg-[#EFE7D8]'
                  }`}>
                    {getSymptomIcon(item.id, isSelected)}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'bg-[#1C1917] text-white shadow-sm'
                          : 'bg-[#EFE9DF] text-[#6A5438]'
                      }`}>
                        {item.severity}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#787168] flex items-center gap-1 shrink-0 font-medium">
                        <Clock className="w-3 h-3 text-[#8C6C46]" />
                        <span>{item.urgency.split('(')[0]}</span>
                      </span>
                    </div>

                    <div className={`text-xs sm:text-sm font-bold leading-snug break-words transition-colors ${
                      isSelected ? 'text-[#1C1917]' : 'text-[#2D2823] group-hover:text-[#8C6C46]'
                    }`}>
                      {item.symptom}
                    </div>
                  </div>

                  {/* Active Radio Pill Indicator */}
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isSelected 
                      ? 'border-[#8C6C46] bg-[#8C6C46] shadow-sm ring-2 ring-[#8C6C46]/20' 
                      : 'border-[#D5CDBC] bg-transparent group-hover:border-[#8C6C46]'
                  }`}>
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Prescribed Action & Containment Console Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-[#E8DFCE] shadow-lg relative min-w-0 w-full overflow-hidden">
            
            {/* Top Architectural Accent Line */}
            <div className="h-1 w-full rounded-full bg-gradient-to-r from-[#8C6C46] via-[#B8936D] to-[#1C1917] mb-5 sm:mb-6" />

            {/* Top Bar: Diagnostic Protocol & Live Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-[#F2ECE1]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#787168] font-semibold">
                  DIAGNOSTIC PROTOCOL:
                </span>
                <span className="text-[11px] font-mono font-bold text-[#1C1917] bg-[#FAF5EE] px-2.5 py-0.5 rounded-full border border-[#E8DFCE]">
                  TRG-{currentSymptom.id.toUpperCase()}
                </span>
              </div>

              <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full uppercase bg-[#1C1917] text-white tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>{currentSymptom.urgency}</span>
              </span>
            </div>

            {/* Main Symptom Title Banner */}
            <div className="pt-4 sm:pt-5 pb-2 space-y-1">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#8C6C46]" />
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#8C8275] font-semibold">
                  ACTIVE SYSTEM CONDITION
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-[#1C1917] leading-snug break-words">
                {currentSymptom.symptom}
              </h3>
            </div>

            {/* Authoritative First-Aid Containment Banner */}
            <div className="my-4 sm:my-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FAF5EE] via-[#F5ECE0] to-[#FAF5EE] border border-[#8C6C46]/35 shadow-sm relative">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#1C1917] text-white shadow-md shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#1C1917]">
                      Immediate First-Aid Containment Step:
                    </span>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#1C1917] text-white font-mono font-bold tracking-wider">
                      STEP 1 ACTION
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#3A332B] font-sans leading-relaxed pt-1">
                    {currentSymptom.action}
                  </p>
                </div>
              </div>
            </div>

            {/* Prescribed Solution & Guarantee 2-Tile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              
              {/* Tile 1 */}
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#FAF5EE] to-[#F5ECE0] border border-[#E5DAC8] shadow-sm space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#787168] font-semibold">
                    <div className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#8C6C46]">
                      <Wrench className="w-3 h-3" />
                    </div>
                    <span>Service Solution</span>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#8C6C46] font-bold bg-white/70 px-2 py-0.5 rounded border border-[#E5DAC8]">
                    OEM Stock
                  </span>
                </div>

                <div className="text-sm font-bold text-[#1C1917] leading-snug pt-0.5">
                  {currentSymptom.serviceMatch}
                </div>
                <p className="text-[11px] text-[#6B6358] leading-relaxed">
                  Master HVAC technicians arrive with universal ignitors, blower motors, and digital combustion analyzers on truck.
                </p>
              </div>

              {/* Tile 2 */}
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#FAF5EE] to-[#F5ECE0] border border-[#E5DAC8] shadow-sm space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-[#787168] font-semibold">
                    <div className="w-6 h-6 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#8C6C46]">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span>Pricing Standard</span>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#8C6C46] font-bold bg-white/70 px-2 py-0.5 rounded border border-[#E5DAC8]">
                    No Surprises
                  </span>
                </div>

                <div className="text-sm font-bold text-[#1C1917] leading-snug pt-0.5">
                  Written Flat-Rate Estimate
                </div>
                <p className="text-[11px] text-[#6B6358] leading-relaxed">
                  Full diagnostic breakdown and clear written quote approved by you before any mechanical repair begins.
                </p>
              </div>

            </div>

            {/* Live Dispatch Actions & Hotline Footer */}
            <div className="pt-4 sm:pt-5 border-t border-[#F2ECE1] flex flex-col sm:flex-row items-center justify-between gap-3.5">
              <div className="text-[11px] font-mono text-[#787168] flex items-center gap-2 text-center sm:text-left">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Denver &bull; Aurora Average Arrival: <strong className="text-[#1C1917]">18 &ndash; 35 Min ETA</strong></span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-full border border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-white font-mono text-xs font-semibold tracking-wider uppercase transition text-center shadow-sm"
                >
                  CALL (720) 499-4013
                </a>

                <button
                  onClick={() => {
                    if (playAudioClick) playAudioClick();
                    onBookIssue(currentSymptom.id);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#8C6C46] text-white font-sans text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all group cursor-pointer"
                >
                  <span>Dispatch Tech for This Issue</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

