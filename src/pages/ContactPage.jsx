import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import BackButton from '../components/BackButton';
import { COMPANY_INFO, COLORADO_CITIES } from '../data/onenationData';

export default function ContactPage({ onOpenBooking, playAudioClick }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Aurora',
    service: 'heat-pumps',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playAudioClick) playAudioClick();
    setSubmitted(true);
  };

  return (
    <main className="py-12 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <BackButton playAudioClick={playAudioClick} label="Back to Home" />
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#8C6C46] uppercase font-semibold">
            COLORADO DISPATCH CENTER
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
            CONTACT &amp; <br />
            <span className="font-serif italic font-normal text-[#8C6C46]">Priority Dispatch</span>
          </h1>
          <p className="text-[#5A534A] font-sans max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Reach our Front Range dispatch coordinators 24 hours a day, 365 days a year. Whether you need immediate emergency no-heat dispatch or a free in-home heating and cooling replacement estimate, we are here to help.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#1C1917] text-white shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-amber-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#B8936D]">
                    24/7 Emergency Line
                  </div>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-xl sm:text-2xl font-bold font-mono hover:text-[#B8936D] transition">
                    (720) 499-4013
                  </a>
                </div>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-sans pt-1">
                Direct connection to on-duty Denver &amp; Aurora dispatch fleet supervisor. Instant triage for sudden furnace lockouts and freeze emergencies.
              </p>
            </div>

            {/* Address & Facility Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8DFCE] shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] flex items-center justify-center text-[#8C6C46]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#787168]">
                    Aurora Operations HQ
                  </div>
                  <div className="text-sm font-bold text-[#1C1917]">
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>
              <p className="text-xs text-[#6B6358] leading-relaxed">
                Central fleet staging, parts warehouse, and engineering headquarters servicing Denver, Aurora, Parker, Boulder, and Centennial.
              </p>
            </div>

            {/* Hours & Credentials Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8DFCE] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] flex items-center justify-center text-[#8C6C46]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#787168]">
                    Dispatch Availability
                  </div>
                  <div className="text-sm font-bold text-[#1C1917]">
                    24 Hours / 7 Days a Week / 365 Days
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F2ECE1] space-y-1.5 text-xs font-mono text-[#787168]">
                <div>• Colorado Master HVAC Lic. #HV-33821</div>
                <div>• Master Plumber Lic. #MP-098244</div>
                <div>• Fully Comprehensive Liability Insured</div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact & Estimate Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DFCE] shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto text-2xl">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-medium text-[#1C1917]">
                  Dispatch Request Received!
                </h3>
                <p className="text-sm text-[#5A534A] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1C1917]">{formData.fullName || 'Neighbor'}</strong>. Our Front Range dispatch team has received your inquiry and will reach out to you shortly at <strong className="text-[#1C1917]">{formData.phone || 'your phone number'}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full border border-[#1C1917] text-[#1C1917] text-xs font-semibold uppercase tracking-wider hover:bg-[#1C1917] hover:text-white transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-display font-medium text-[#1C1917]">
                    Schedule Service or Request In-Home Estimate
                  </h3>
                  <p className="text-xs text-[#787168] mt-1">
                    Fill out the form below or call our 24/7 line for immediate emergency arrival.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787168] mb-1.5 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full p-3.5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#1C1917] text-sm focus:border-[#1C1917] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787168] mb-1.5 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(720) 000-0000"
                      className="w-full p-3.5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#1C1917] text-sm focus:border-[#1C1917] focus:bg-white focus:outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787168] mb-1.5 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full p-3.5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#1C1917] text-sm focus:border-[#1C1917] focus:bg-white focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787168] mb-1.5 font-semibold">
                      Municipality / City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full p-3.5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#1C1917] text-sm focus:border-[#1C1917] focus:bg-white focus:outline-none transition"
                    >
                      {COLORADO_CITIES.map(c => (
                        <option key={c.name} value={c.name}>{c.name}, CO</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787168] mb-1.5 font-semibold">
                    Requested Service Scope
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-3.5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#1C1917] text-sm focus:border-[#1C1917] focus:bg-white focus:outline-none transition"
                  >
                    <option value="heat-pumps">Cold-Climate Inverter Heat Pumps</option>
                    <option value="gas-furnaces">High-Efficiency Gas Furnaces (96%+ AFUE)</option>
                    <option value="central-ac">Precision Central Air Conditioning</option>
                    <option value="ductless-mini-splits">Multi-Zone Ductless Mini-Splits</option>
                    <option value="rooftop-package-units">Commercial &amp; Residential Rooftop Packages</option>
                    <option value="emergency-hvac">24/7 Emergency No-Heat or AC Failure</option>
                    <option value="iaq-ventilation">Whole-Home HEPA &amp; Fresh Air ERV</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#787168] mb-1.5 font-semibold">
                    Project Details or Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your home, current heating/cooling issue, or desired upgrade..."
                    className="w-full p-3.5 rounded-2xl bg-[#FAF5EE] border border-[#E8DFCE] text-[#1C1917] text-sm focus:border-[#1C1917] focus:bg-white focus:outline-none transition placeholder:text-stone-400"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#787168]">
                    <ShieldCheck className="w-4 h-4 text-[#8C6C46]" />
                    <span>Free In-Home Sizing &amp; Written Estimates</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1C1917] hover:bg-[#8C6C46] text-white font-sans text-xs font-semibold uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Submit Service Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}
