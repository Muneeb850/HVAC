import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Snowflake, 
  Wind, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Sparkles, 
  ChevronDown 
} from 'lucide-react';
import { SERVICES } from '../data/onenationData';

export default function ServicesMatrix({ onSelectService, playAudioClick }) {
  const [filter, setFilter] = useState('all');
  const [expandedServiceId, setExpandedServiceId] = useState(null);

  // Featured 3 Cards matching the reference layout: 01 Heating Systems, 02 Cooling & AC, 03 Air Quality
  const architecturalCategories = [
    {
      number: "01",
      title: "Heating Systems",
      sub: "Low-NOx Furnaces & Radiant",
      image: "/images/hvac_heating_furnace.jpg",
      description: "96%+ AFUE modulating gas furnaces, boiler hydronics, and alpine sub-zero heating engineered for Colorado winters down to -15°F."
    },
    {
      number: "02",
      title: "Cooling & AC",
      sub: "High-SEER2 & Multi-Zone",
      image: "/images/hvac_cooling_ac.jpg",
      description: "Whisper-quiet variable-speed inverter air conditioning, ductless mini-splits, and high-capacity rooftop packages built for Front Range heatwaves."
    },
    {
      number: "03",
      title: "Air Quality",
      sub: "Hospital-Grade HEPA & ERV",
      image: "/images/hvac_air_quality.jpg",
      description: "Whole-home particulate air scrubbers, UV-C germicidal purifiers, steam humidification, and continuous fresh-air energy recovery ventilation."
    }
  ];

  const categories = [
    { id: 'all', label: 'All HVAC Systems' },
    { id: 'heating', label: 'Heating & Furnaces' },
    { id: 'cooling', label: 'Cooling & Central AC' },
    { id: 'heat-pumps', label: 'Heat Pumps & Ductless' },
    { id: 'air-quality', label: 'Air Quality & Filtration' },
    { id: 'commercial', label: 'Rooftop Package Units' },
  ];

  const filteredServices = filter === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === filter);

  const toggleExpand = (id) => {
    if (playAudioClick) playAudioClick();
    setExpandedServiceId(prev => prev === id ? null : id);
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case 'heat-pumps':
        return <Zap className="w-4 h-4 text-amber-300" />;
      case 'gas-furnaces':
        return <Flame className="w-4 h-4 text-amber-300" />;
      case 'central-ac':
        return <Snowflake className="w-4 h-4 text-amber-300" />;
      case 'ductless-mini-splits':
        return <Wind className="w-4 h-4 text-amber-300" />;
      case 'rooftop-package-units':
        return <Cpu className="w-4 h-4 text-amber-300" />;
      case 'iaq-ventilation':
        return <ShieldCheck className="w-4 h-4 text-amber-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-300" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-[#F7F4EE] border-b border-[#EAE3D6] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        
        {/* Section 1: "SPACES THAT FEEL LIKE HOME" layout matching reference image */}
        <div className="mb-16 sm:mb-20">
          <div className="max-w-2xl mb-10 sm:mb-12 space-y-3 sm:space-y-4">
            <div>
              <div className="text-[11px] font-sans tracking-[0.25em] text-[#8C8275] uppercase font-semibold mb-2">
                SPACES THAT
              </div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-medium uppercase text-[#1C1917] leading-[0.94]">
                FEEL LIKE <br />
                HOME
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#6B6358] max-w-xl font-sans leading-relaxed pt-1">
              Every home has a climate. We are here to shape heating, ventilation, and air conditioning systems that protect your living spaces and elevate everyday comfort.
            </p>
          </div>

          {/* 3 Architectural Vertical Cards with Numbers 01, 02, 03 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {architecturalCategories.map((item) => (
              <div 
                key={item.number}
                className="group relative rounded-[26px] sm:rounded-3xl overflow-hidden bg-[#EFE9DF] border border-[#E0D5C3] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[270px] sm:h-[340px] md:h-[450px]"
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Scrim overlay for crystal-clear readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />

                {/* Top Row: Pill Badge on Left, Squircle Icon on Right */}
                <div className="relative z-10 p-5 sm:p-7 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5DCCE] font-bold bg-black/45 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.number} &bull; {item.title.toUpperCase()}
                  </span>
                  <div className="w-9 h-9 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-md">
                    {item.number === "01" ? <Flame className="w-4 h-4" /> : item.number === "02" ? <Snowflake className="w-4 h-4" /> : <Wind className="w-4 h-4" />}
                  </div>
                </div>

                {/* Bottom Content matching reference typography */}
                <div className="relative z-10 p-5 sm:p-7 space-y-1.5 text-white">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#E5DCCE] block font-semibold">
                    {item.sub}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium uppercase leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed pt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Detailed Capabilities & Pricing Matrix */}
        <div id="capabilities" className="pt-14 sm:pt-16 border-t border-[#EAE3D6]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="text-[11px] font-mono tracking-[0.2em] text-[#8C8275] uppercase font-semibold mb-1">
                HVAC ENGINEERING SCOPE
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-[#1C1917]">
                Comprehensive Climate Matrix
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    if (playAudioClick) playAudioClick();
                    setFilter(cat.id);
                  }}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-sans font-medium transition-all ${
                    filter === cat.id
                      ? 'bg-[#1C1917] text-white shadow-md'
                      : 'bg-[#EFEAE0] text-[#5A534A] hover:bg-[#E5DCCE] hover:text-[#1C1917]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid (6 Core Cards styled precisely to match reference screenshot in size and structure) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredServices.map((service) => {
              const isDark = service.popular; // First card has dark luxury background like Voice AI in screenshot
              const isExpanded = expandedServiceId === service.id;

              return (
                <div
                  key={service.id}
                  className={`rounded-[26px] p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                    isDark
                      ? 'bg-gradient-to-b from-[#1C1917] via-[#221E1B] to-[#1C1917] text-white border-stone-800 shadow-xl hover:shadow-2xl hover:-translate-y-1'
                      : 'bg-white text-[#1C1917] border-[#E8DFCE] shadow-sm hover:shadow-xl hover:border-[#8C6C46]/60 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Top Row: Pill Badge on Left + Dark Squircle Icon on Right */}
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full font-bold shadow-sm ${
                        isDark
                          ? 'bg-stone-800 text-amber-300 border border-stone-700'
                          : 'bg-[#FAF5EE] text-[#8C6C46] border border-[#E5DAC8]'
                      }`}>
                        {service.categoryTag || service.badge}
                      </span>

                      <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 shadow-md ${
                        isDark
                          ? 'bg-stone-800 border border-stone-700 text-amber-400'
                          : 'bg-[#1C1917] text-amber-400 border border-stone-800'
                      }`}>
                        {getServiceIcon(service.id)}
                      </div>
                    </div>

                    {/* Picture Banner with Scrim & ETA Tag */}
                    <div className="relative h-36 sm:h-40 w-full rounded-2xl overflow-hidden mb-3.5 shrink-0 bg-[#EFE9DF]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
                      
                      <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-[10px] font-mono text-white font-medium drop-shadow-sm">
                        <Clock className="w-3 h-3 text-amber-300" />
                        <span>{service.eta} Dispatch</span>
                      </div>

                      <div className="absolute bottom-2.5 right-3 text-[9px] font-mono uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                        {service.badge}
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className={`text-lg sm:text-xl font-bold font-sans mb-1.5 leading-snug transition-colors ${
                      isDark ? 'text-white' : 'text-[#1C1917] group-hover:text-[#8C6C46]'
                    }`}>
                      {service.shortTitle || service.title}
                    </h4>

                    {/* Description */}
                    <p className={`text-xs mb-3.5 leading-relaxed font-sans line-clamp-2 ${
                      isDark ? 'text-stone-300' : 'text-[#6B6358]'
                    }`}>
                      {service.description}
                    </p>

                    {/* Feature Tag Pills (matching screenshot's Sub-300ms Voice, Auto-Calendar Sync) */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags ? (
                        service.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className={`text-[11px] font-medium px-2.5 py-1 rounded-xl transition-colors ${
                              isDark 
                                ? 'bg-stone-800/80 text-stone-200 border border-stone-700' 
                                : 'bg-[#FAF5EE] text-[#5A534A] border border-[#EAE3D6]'
                            }`}
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className={`text-[11px] font-medium px-2.5 py-1 rounded-xl ${
                          isDark ? 'bg-stone-800/80 text-stone-200 border border-stone-700' : 'bg-[#FAF5EE] text-[#5A534A] border border-[#EAE3D6]'
                        }`}>
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Expandable Feature List (Revealed when "View Details" is clicked) */}
                    {isExpanded && (
                      <div className={`pt-3 pb-2 border-t mb-4 space-y-2 animate-in fade-in duration-200 ${
                        isDark ? 'border-stone-800' : 'border-[#F0EAE1]'
                      }`}>
                        <div className="text-[10px] font-mono uppercase tracking-wider font-semibold opacity-75 mb-1.5">
                          Engineering Specifications:
                        </div>
                        {service.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6C46] shrink-0 mt-0.5" />
                            <span className={isDark ? 'text-stone-200' : 'text-[#4A433A]'}>{feat}</span>
                          </div>
                        ))}

                        <div className="pt-2 flex items-center justify-between text-xs font-semibold">
                          <span className={isDark ? 'text-amber-300' : 'text-[#8C6C46]'}>
                            {service.estimateScope || "Free In-Home Estimate"}
                          </span>
                          <button
                            onClick={() => {
                              if (playAudioClick) playAudioClick();
                              onSelectService(service.id);
                            }}
                            className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider flex items-center gap-1.5 transition-all shadow-md active:scale-95 ${
                              isDark
                                ? 'bg-amber-400 text-[#1C1917] hover:bg-amber-300'
                                : 'bg-[#1C1917] text-white hover:bg-[#8C6C46]'
                            }`}
                          >
                            <span>Book Now</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Full-Width Wide Button matching screenshot's "View Details ∨" */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className={`w-full py-2.5 px-4 rounded-xl sm:rounded-2xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer shadow-sm active:scale-98 ${
                        isDark
                          ? 'bg-stone-800 hover:bg-stone-700 text-white border border-stone-700'
                          : 'bg-[#FAF5EE] hover:bg-[#F2ECE1] text-[#1C1917] border border-[#E8DFCE]'
                      }`}
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180 text-amber-400' : 'text-[#8C6C46]'
                      }`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

