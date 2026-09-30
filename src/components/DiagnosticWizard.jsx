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
  Radio, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SYMPTOMS_WIZARD, COMPANY_INFO } from '../data/onenationData';

export default function DiagnosticWizard({ onBookIssue, playAudioClick, activeSymptomId }) {
  const [selectedId, setSelectedId] = useState(activeSymptomId || 'no-heat');

  const currentSymptom = SYMPTOMS_WIZARD.find(s => s.id === selectedId) || SYMPTOMS_WIZARD[0];

  const getSymptomIcon = (id, isSelected) => {
    const iconClass = isSelected ? "w-5 h-5 text-white" : "w-5 h-5 text-[#8C6C46]";
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
    <section id="triage" className="py-24 bg-[#FAF5EE] text-[#1C1917] border-b border-[#EAE3D6] relative overflow-hidden">
      
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#8C6C46]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Section Header with Live Dispatch Beacon */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl space-y-4">
            
            {/* Live Operational Fleet Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1C1917] text-white shadow-sm border border-stone-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#E5DCCE]">
                LIVE 24/7 COLORADO TRIAGE &bull; 18–35 MIN AVG DISPATCH
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
              EMERGENCY HVAC TRIAGE <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#8C6C46]">&amp; Containment</span>
            </h2>

            <p className="text-[#5A534A] font-sans max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
              Extreme Colorado freeze snaps and 95°F+ heatwaves make system failure critical within hours. Select your current symptom below for instant step-by-step containment instructions and direct priority dispatch.
            </p>
          </div>

          {/* Direct Hotline Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DFCE] shadow-sm flex items-center gap-4 shrink-0 lg:max-w-xs">
            <div className="w-11 h-11 rounded-xl bg-[#1C1917] text-white flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#8C8275] font-semibold">
                Priority Dispatch Hotline
              </div>
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="text-base font-bold font-mono text-[#1C1917] hover:text-[#8C6C46] transition block"
              >
                (720) 499-4013
              </a>
              <div className="text-[10px] text-emerald-600 font-medium">On-Duty Master Tech Standing By</div>
            </div>
          </div>
        </div>

        {/* Interactive Wizard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Tactile Symptom Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-[#787168] tracking-wider mb-2 font-semibold px-1">
              <span>Select Current Symptom:</span>
              <span className="text-[10px] text-[#8C6C46] font-bold">5 Scenarios</span>
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
                  className={`w-full p-4 sm:p-4.5 rounded-2xl text-left transition-all duration-200 flex items-start gap-4 border group relative ${
                    isSelected
                      ? 'bg-white border-[#8C6C46] shadow-xl scale-[1.01] border-l-[6px] border-l-[#8C6C46]'
                      : 'bg-white/80 border-[#E8DFCE] hover:border-[#D0C4AF] hover:bg-white hover:shadow-md'
                  }`}
                >
                  {/* Icon Badge */}
                  <div className={`p-3 rounded-xl shrink-0 mt-0.5 transition-colors ${
                    isSelected
                      ? 'bg-[#1C1917] shadow-sm'
                      : 'bg-[#FAF5EE] border border-[#E8DFCE] group-hover:bg-[#EFEAE0]'
                  }`}>
                    {getSymptomIcon(item.id, isSelected)}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'bg-[#1C1917] text-white'
                          : 'bg-[#EFE9DF] text-[#6A5438]'
                      }`}>
                        {item.severity}
                      </span>
                      <span className="text-[11px] font-mono text-[#787168] flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3 text-[#8C6C46]" />
                        <span>{item.urgency.split('(')[0]}</span>
                      </span>
                    </div>

                    <div className="text-sm font-bold text-[#1C1917] leading-snug pt-0.5 group-hover:text-[#8C6C46] transition-colors">
                      {item.symptom}
                    </div>
                  </div>

                  {/* Active Radio Pill Indicator */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 transition-all ${
                    isSelected 
                      ? 'border-[#8C6C46] bg-[#8C6C46]' 
                      : 'border-[#D5CDBC] bg-transparent group-hover:border-[#8C6C46]'
                  }`}>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Prescribed Action & Containment Console */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-[#E8DFCE] shadow-2xl relative overflow-hidden">
            
            {/* Top Bar: Diagnostic Protocol & Live Status */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F2ECE1]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#787168]">
                  DIAGNOSTIC PROTOCOL:
                </span>
                <span className="text-xs font-mono font-bold text-[#1C1917] bg-[#FAF5EE] px-2.5 py-0.5 rounded-full border border-[#E8DFCE]">
                  TRG-{currentSymptom.id.toUpperCase()}
                </span>
              </div>

              <span className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full uppercase bg-[#1C1917] text-white tracking-wider flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>{currentSymptom.urgency}</span>
              </span>
            </div>

            {/* Main Symptom Title Banner */}
            <div className="pt-6 pb-2">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#8C8275] block font-semibold mb-1">
                ACTIVE SYSTEM CONDITION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-[#1C1917] leading-tight">
                {currentSymptom.symptom}
              </h3>
            </div>

            {/* Authoritative First-Aid Containment Banner */}
            <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#FBF7F0] border-2 border-[#8C6C46]/30 shadow-sm relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#1C1917] text-white shadow-md shrink-0">
                  <AlertCircle className="w-5 h-5 text-amber-400" />
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs font-mono uppercase tracking-wider font-bold text-[#1C1917] flex items-center gap-2">
                    <span>First-Aid Containment Step (Do This Now):</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1C1917] text-white font-mono">STEP 1</span>
                  </div>
                  <p className="text-sm text-[#3A332B] font-sans leading-relaxed">
                    {currentSymptom.action}
                  </p>
                </div>
              </div>
            </div>

            {/* Prescribed Solution & Guarantee 2-Tile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#787168] font-semibold">
                  <Wrench className="w-4 h-4 text-[#8C6C46]" />
                  <span>Prescribed Service Solution</span>
                </div>
                <div className="text-base font-bold text-[#1C1917] leading-snug">
                  {currentSymptom.serviceMatch}
                </div>
                <p className="text-xs text-[#6B6358] leading-relaxed pt-0.5">
                  Master HVAC technicians arrive with universal ignitors, blower motors, and digital combustion analyzers on truck.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#787168] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#8C6C46]" />
                  <span>Transparent Upfront Guarantee</span>
                </div>
                <div className="text-base font-bold text-[#1C1917] leading-snug">
                  Written Flat-Rate Estimate
                </div>
                <p className="text-xs text-[#6B6358] leading-relaxed pt-0.5">
                  Full diagnostic breakdown and clear written quote approved by you before any mechanical repair begins.
                </p>
              </div>
            </div>

            {/* Live Dispatch Actions & Hotline Footer */}
            <div className="pt-6 border-t border-[#F2ECE1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#787168] flex items-center gap-2 text-center sm:text-left">
                <Clock className="w-4 h-4 text-[#8C6C46] shrink-0" />
                <span>Denver &bull; Aurora Average Arrival: <strong className="text-[#1C1917]">18 &ndash; 35 Min ETA</strong></span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-[#1C1917] text-[#1C1917] hover:bg-[#1C1917] hover:text-white font-mono text-xs font-semibold tracking-wider uppercase transition text-center"
                >
                  CALL (720) 499-4013
                </a>

                <button
                  onClick={() => {
                    if (playAudioClick) playAudioClick();
                    onBookIssue(currentSymptom.id);
                  }}
                  className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#8C6C46] text-white font-sans text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.02] active:scale-95 transition-all group"
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
