import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, COLORADO_CITIES } from '../data/onenationData';

export default function Footer({ onOpenBooking, playAudioClick }) {
  return (
    <footer className="bg-[#141210] text-[#D0C7B7] pt-20 pb-12 border-t border-[#26221F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#26221F]">
          
          {/* Brand Column matching reference logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-6 rounded-full bg-white inline-block" />
              <span className="font-sans font-bold text-2xl tracking-[0.12em] text-white uppercase">
                ONE NATION
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#B8936D] uppercase">
                HEATING &amp; AIR
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              Colorado Front Range premier heating, ventilation, and air conditioning engineering team. Licensed Master HVAC mechanical contractors serving Denver and Aurora.
            </p>

            <div className="pt-2 text-xs font-mono text-stone-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B8936D] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B8936D] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition">
                  {COMPANY_INFO.phoneFormatted} (24/7 HVAC Dispatch)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B8936D] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* HVAC Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              HVAC Systems
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-sans">
              <li><a href="#services" className="hover:text-white transition">Cold-Climate Heat Pumps</a></li>
              <li><a href="#services" className="hover:text-white transition">96%+ AFUE Gas Furnaces</a></li>
              <li><a href="#services" className="hover:text-white transition">Precision Central AC</a></li>
              <li><a href="#services" className="hover:text-white transition">Multi-Zone Mini-Splits</a></li>
              <li><a href="#services" className="hover:text-white transition">Rooftop Package Units</a></li>
              <li><a href="#services" className="hover:text-white transition">Whole-Home HEPA &amp; ERV</a></li>
            </ul>
          </div>

          {/* Emergency Triage & Coverage */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Front Range Dispatch
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-sans">
              <li><a href="#triage" className="hover:text-white transition">24/7 No-Heat Triage</a></li>
              <li><a href="#triage" className="hover:text-white transition">Frozen AC Coil Rescue</a></li>
              <li><a href="#coverage" className="hover:text-white transition">Aurora HQ Dispatch (18m)</a></li>
              <li><a href="#coverage" className="hover:text-white transition">Denver Metro Vans (22m)</a></li>
              <li><a href="#coverage" className="hover:text-white transition">Boulder &amp; Foothills (34m)</a></li>
              <li><a href="#calculator" className="hover:text-white transition">Xcel Rebate Estimator</a></li>
            </ul>
          </div>

          {/* Licensing & Financing */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Credentials
            </h4>
            <div className="space-y-3 text-xs text-stone-400 font-sans">
              <p className="font-mono text-[11px] text-[#B8936D]">
                CO Master HVAC Lic. #HV-33821<br />
                Master Plumber Lic. #MP-098244
              </p>
              <p className="text-[11px] text-stone-400">
                Fully Comprehensive Commercial &amp; Residential Liability Insured.
              </p>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.financingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B8936D] hover:underline"
                >
                  <span>Wells Fargo 0% Financing</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} One Nation Heating, Air &amp; Climate Engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Aurora &bull; Denver &bull; Boulder &bull; Colorado</span>
            <span>4107 Richfield St, Aurora, CO 80013</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

