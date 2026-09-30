import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Award, ArrowUpRight, ChevronDown, Check, Flame, Snowflake } from 'lucide-react';
import { COMPANY_INFO, FAQS } from '../data/onenationData';

export default function FinancingGuarantee({ playAudioClick, showFaq = false }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-24 bg-[#FAF5EE] text-[#1C1917] border-b border-[#EAE3D6] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Financing Banner Card */}
        <div className="rounded-3xl bg-[#1C1917] text-white p-6 sm:p-12 shadow-2xl relative overflow-hidden mb-20">
          <div className="absolute -top-10 -right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#8C6C46]/10 blur-3xl pointer-events-none rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#B8936D] text-xs font-mono border border-white/15">
                <CreditCard className="w-3.5 h-3.5" />
                <span>OFFICIAL WELLS FARGO RETAIL SERVICES PARTNER</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-display font-medium uppercase tracking-tight text-white leading-[0.98]">
                High-Efficiency HVAC Upgrades <br />
                <span className="text-[#B8936D] font-serif italic">With Flexible 0% APR Financing</span>
              </h3>
              <p className="text-stone-300 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
                Don’t let a sudden furnace burnout or failed AC compressor disrupt your family budget. Access flexible monthly payment terms with rapid 60-second online approval.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-stone-300">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> No Prepayment Penalties</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Fast Paperless Application</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-400" /> Promotional Terms up to 60 Months</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <a
                href={COMPANY_INFO.financingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playAudioClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FAF5EE] hover:bg-white text-[#1C1917] font-sans font-bold text-xs uppercase tracking-wider active:scale-95 transition shadow-xl flex items-center justify-center gap-2"
              >
                <span>Apply For 0% Financing</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-[10px] font-mono text-stone-400 mt-2">
                Secure 256-bit Wells Fargo Online Portal
              </span>
            </div>
          </div>
        </div>

        {/* Guarantees & Credentials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-8 rounded-3xl bg-white border border-[#E8DFCE] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#8C6C46] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-display font-bold text-[#1C1917]">
              10-Year Master HVAC Warranty
            </h4>
            <p className="text-xs text-[#6B6358] leading-relaxed">
              Every complete heat pump and gas furnace installation is backed by comprehensive 10-year parts and master technician labor protection.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E8DFCE] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#8C6C46] flex items-center justify-center mb-4">
              <Flame className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-display font-bold text-[#1C1917]">
              Sub-Zero Colorado Dispatch
            </h4>
            <p className="text-xs text-[#6B6358] leading-relaxed">
              When Colorado alpine temperatures dip below zero, our emergency no-heat vans respond within 18 to 35 minutes across Denver and Aurora.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E8DFCE] shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#8C6C46] flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-display font-bold text-[#1C1917]">
              Rebate Filing Handled 100%
            </h4>
            <p className="text-xs text-[#6B6358] leading-relaxed">
              We process all utility paperwork directly with Xcel Energy, Colorado Clean Heat, and Federal 25C tax programs to maximize your savings.
            </p>
          </div>
        </div>

        {/* HVAC FAQs Section - Rendered only when showFaq is true (Home Section) */}
        {showFaq && (
          <div className="max-w-3xl mx-auto pt-8 border-t border-[#EAE3D6]">
            <div className="text-center mb-10">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#8C8275] uppercase font-semibold block mb-2">
                HOMEOWNER CLIMATE QUESTIONS
              </span>
              <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-[#1C1917]">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="rounded-2xl border border-[#E8DFCE] bg-white overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => {
                        if (playAudioClick) playAudioClick();
                        setOpenFaq(isOpen ? -1 : idx);
                      }}
                      className="w-full p-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="text-sm font-bold text-[#1C1917] font-sans">
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#8C6C46] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs text-[#6B6358] leading-relaxed font-sans border-t border-[#F2ECE1]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

