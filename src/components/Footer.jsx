import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, COLORADO_CITIES } from '../data/onenationData';

export default function Footer({ onOpenBooking, playAudioClick }) {
  return (
    <footer className="bg-[#141210] text-[#D0C7B7] pt-20 pb-12 border-t border-[#26221F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#26221F]">
          
          {/* Brand Column matching reference logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" onClick={playAudioClick} className="flex items-center gap-2.5">
              <div className="w-2.5 h-6 rounded-full bg-white inline-block" />
              <span className="font-sans font-bold text-2xl tracking-[0.12em] text-white uppercase">
                ONE NATION
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#B8936D] uppercase">
                HEATING &amp; AIR
              </span>
            </Link>

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

          {/* Quick Navigation Pages */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-sans">
              <li><Link to="/" onClick={playAudioClick} className="hover:text-white transition">Home Overview</Link></li>
              <li><Link to="/services" onClick={playAudioClick} className="hover:text-white transition">HVAC Services Fleet</Link></li>
              <li><Link to="/triage" onClick={playAudioClick} className="hover:text-white transition">Emergency Diagnostic Triage</Link></li>
              <li><Link to="/system-sizer" onClick={playAudioClick} className="hover:text-white transition">System Sizer &amp; Configurator</Link></li>
              <li><Link to="/coverage" onClick={playAudioClick} className="hover:text-white transition">Front Range Coverage</Link></li>
              <li><Link to="/reviews" onClick={playAudioClick} className="hover:text-white transition">Verified Colorado Reviews</Link></li>
              <li><Link to="/contact" onClick={playAudioClick} className="hover:text-white transition">Contact &amp; Dispatch HQ</Link></li>
            </ul>
          </div>

          {/* Emergency Triage & Coverage */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Front Range Dispatch
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400 font-sans">
              <li><Link to="/triage" onClick={playAudioClick} className="hover:text-white transition">24/7 No-Heat Triage</Link></li>
              <li><Link to="/triage" onClick={playAudioClick} className="hover:text-white transition">Frozen AC Coil Rescue</Link></li>
              <li><Link to="/coverage" onClick={playAudioClick} className="hover:text-white transition">Aurora HQ Dispatch (18m)</Link></li>
              <li><Link to="/coverage" onClick={playAudioClick} className="hover:text-white transition">Denver Metro Vans (22m)</Link></li>
              <li><Link to="/coverage" onClick={playAudioClick} className="hover:text-white transition">Boulder &amp; Foothills (34m)</Link></li>
              <li><Link to="/system-sizer" onClick={playAudioClick} className="hover:text-white transition">Xcel Energy Sizer</Link></li>
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
