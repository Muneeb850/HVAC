import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Clock, Phone } from 'lucide-react';
import ServicesMatrix from '../components/ServicesMatrix';
import FinancingGuarantee from '../components/FinancingGuarantee';
import { COMPANY_INFO } from '../data/onenationData';

export default function ServicesPage({ onOpenBooking, playAudioClick, currentTheme }) {
  return (
    <main className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="max-w-3xl space-y-4">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#8C6C46] uppercase font-semibold">
            COLORADO CLIMATE INFRASTRUCTURE
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
            ENGINEERED HVAC <br />
            <span className="font-serif italic font-normal text-[#8C6C46]">&amp; Climate Capabilities</span>
          </h1>
          <p className="text-[#5A534A] font-sans max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Explore our complete spectrum of residential and commercial HVAC services. From sub-zero cold-climate heat pumps to high-capacity rooftop package units, every installation is engineered to withstand extreme Colorado winters and Front Range summer heatwaves.
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#EAE3D6]">
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE]">
            <ShieldCheck className="w-5 h-5 text-[#8C6C46] shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#1C1917]">10-Year Master Warranty</div>
              <div className="text-[11px] text-[#787168]">Complete parts & labor protection</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE]">
            <CheckCircle2 className="w-5 h-5 text-[#8C6C46] shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#1C1917]">Xcel Rebates Handled</div>
              <div className="text-[11px] text-[#787168]">100% utility filing support</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE]">
            <Clock className="w-5 h-5 text-[#8C6C46] shrink-0" />
            <div>
              <div className="text-xs font-bold text-[#1C1917]">Prompt Front Range Dispatch</div>
              <div className="text-[11px] text-[#787168]">Stationed across Denver & Aurora HQ</div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Interactive Services Showcase & Matrix */}
      <ServicesMatrix
        onSelectService={(serviceId) => onOpenBooking({ service: serviceId })}
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />

      {/* Financing & Master Guarantees */}
      <FinancingGuarantee
        playAudioClick={playAudioClick}
        currentTheme={currentTheme}
      />
    </main>
  );
}
