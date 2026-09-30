import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, Flame, Snowflake, Wind, ShieldCheck, Cpu } from 'lucide-react';
import { SERVICES } from '../data/onenationData';

export default function ServicesMatrix({ onSelectService, playAudioClick }) {
  const [filter, setFilter] = useState('all');

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

  return (
    <section id="services" className="py-24 bg-[#F7F4EE] border-b border-[#EAE3D6] text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section 1: "SPACES THAT FEEL LIKE HOME" layout matching reference image */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12 space-y-4">
            <div>
              <div className="text-[11px] font-sans tracking-[0.25em] text-[#8C8275] uppercase font-semibold mb-2">
                SPACES THAT
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium uppercase text-[#1C1917] leading-[0.92]">
                FEEL LIKE <br />
                HOME
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#6B6358] max-w-xl font-sans leading-relaxed pt-1">
              Every home has a climate. We are here to shape heating, ventilation, and air conditioning systems that protect your living spaces and elevate everyday comfort.
            </p>
          </div>

          {/* 3 Architectural Vertical Cards with Numbers 01, 02, 03 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {architecturalCategories.map((item) => (
              <div 
                key={item.number}
                className="group relative rounded-3xl overflow-hidden bg-[#EFE9DF] border border-[#E0D5C3] shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-[450px]"
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle scrim overlay so titles pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                {/* Top Corner Number */}
                <div className="relative z-10 p-7 flex justify-end">
                  <span className="text-xs font-mono text-white/90 font-bold bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                    {item.number}
                  </span>
                </div>

                {/* Bottom Content matching reference typography */}
                <div className="relative z-10 p-7 space-y-2 text-white">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#E5DCCE] block font-semibold">
                    {item.sub}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-medium uppercase leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Detailed Capabilities & Pricing Matrix */}
        <div id="capabilities" className="pt-16 border-t border-[#EAE3D6]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
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
                  className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all ${
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

          {/* Services Grid (6 Core Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-b from-white via-white to-[#FDFBF7] rounded-3xl p-6 sm:p-7 border border-[#E8DFCE] hover:border-[#8C6C46]/70 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Top Accent Glow on Hover */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#8C6C46] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 right-0" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#FAF5EE] to-[#F5ECE0] text-[#8C6C46] border border-[#E5DAC8] font-bold shadow-sm">
                      {service.badge}
                    </span>
                    <span className="text-[11px] font-mono text-[#8C8275] flex items-center gap-1 font-medium bg-[#FAF5EE] px-2.5 py-0.5 rounded-full border border-[#EAE3D6]">
                      <Clock className="w-3 h-3 text-[#8C6C46]" />
                      {service.eta}
                    </span>
                  </div>

                  <h4 className="text-xl font-display font-bold text-[#1C1917] mb-2.5 leading-snug group-hover:text-[#8C6C46] transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-xs text-[#6B6358] mb-5 leading-relaxed font-sans">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#524B42] p-1 rounded-xl transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6C46] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#8C6C46] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#8C6C46]" />
                    <span>{service.estimateScope || "Free In-Home Estimate"}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (playAudioClick) playAudioClick();
                      onSelectService(service.id);
                    }}
                    className="px-4.5 py-2.5 rounded-full bg-[#1C1917] text-white hover:bg-[#8C6C46] text-xs font-sans font-semibold tracking-wider flex items-center gap-2 transition-all shadow-md group-hover:scale-105 active:scale-95"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

