import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Flame, Snowflake, Wind, Zap } from 'lucide-react';

export default function CostCalculator({ onBookEstimate, playAudioClick }) {
  const [homeSize, setHomeSize] = useState('medium');
  const [serviceType, setServiceType] = useState('heat-pump');
  const [addons, setAddons] = useState({
    smartThermostat: true,
    ductLeakAudit: true,
    warranty10yr: true,
    airScrubber: false
  });

  const baseServices = {
    'heat-pump': { 
      name: 'Cold-Climate Inverter Heat Pump (Rated -15°F)', 
      specs: 'Up to 22 SEER2 Modulating Inverter', 
      time: '1-2 Days Dispatch', 
      rebate: 'Maximum Xcel & Colorado Clean Heat Rebates' 
    },
    'gas-furnace': { 
      name: 'High-Efficiency 96%+ AFUE Low-NOx Gas Furnace', 
      specs: 'Secondary Stainless Heat Exchanger', 
      time: '1 Day Installation', 
      rebate: 'High-Efficiency Energy Rebate Qualified' 
    },
    'central-ac': { 
      name: 'Precision Central Air Conditioning (Up to 18 SEER2)', 
      specs: 'Microchannel Coils & Acoustic Dampening', 
      time: 'Same-Day / Next-Day', 
      rebate: 'High-Efficiency Cooling Certified' 
    },
    'ductless-mini': { 
      name: 'Multi-Zone Ductless Mini-Split Systems', 
      specs: 'Independent Room-by-Room Micro-Climate', 
      time: '1-2 Days Installation', 
      rebate: 'Zero-Ductwork Architectural Solution' 
    },
    'tuneup-audit': { 
      name: 'Comprehensive Seasonal HVAC Precision Tune-Up', 
      specs: '26-Point Safety, CO & Airflow Certification', 
      time: '1.5 Hours On-Site', 
      rebate: 'Peak Efficiency Calibration' 
    },
  };

  const homeLabels = {
    small: { title: 'Compact / Condo', sub: '< 1,500 sqft • 1.5 - 2.0 Ton' },
    medium: { title: 'Single Family Home', sub: '1,500 - 2,800 sqft • 2.5 - 3.5 Ton' },
    large: { title: 'Estate / Commercial', sub: '> 2,800 sqft • 4.0 - 5.0 Ton' },
  };

  const toggleAddon = (key) => {
    if (playAudioClick) playAudioClick();
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedServiceObj = baseServices[serviceType];

  return (
    <section id="calculator" className="py-24 bg-[#F7F4EE] text-[#1C1917] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header - Balanced Editorial Layout */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="text-[11px] font-mono tracking-[0.25em] text-[#787168] uppercase font-semibold">
            EQUIPMENT CONFIGURATOR
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
            TAILORED CLIMATE <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#8C6C46]">System Sizer</span>
          </h2>
          <p className="text-[#5A534A] font-sans max-w-2xl text-base sm:text-lg leading-relaxed pt-1">
            Configure your Colorado property parameters for high-efficiency heat pumps, furnaces, or air conditioning to receive a personalized engineering recommendation and written estimate.
          </p>
        </div>

        {/* Dual Configurator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls: White & Warm Linen */}
          <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFCE] shadow-sm">
            {/* Step 1: Scale */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-3">
                1. Select Property Footprint
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'small', label: 'Compact / Condo', sub: '< 1,500 sqft • 1-2 Ton' },
                  { id: 'medium', label: 'Single Family', sub: '1,500-2,800 sqft • 2.5-3.5 Ton' },
                  { id: 'large', label: 'Estate / Commercial', sub: '> 2,800 sqft • 4-5 Ton' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setHomeSize(item.id);
                      if (playAudioClick) playAudioClick();
                    }}
                    className={`p-3.5 rounded-2xl text-left transition-all border ${
                      homeSize === item.id
                        ? 'bg-[#FAF5EE] border-[#1C1917] shadow-sm'
                        : 'bg-[#FCFAF7] border-[#E8DFCE] hover:border-[#D0C4AF]'
                    }`}
                  >
                    <div className="text-xs font-bold text-[#1C1917]">{item.label}</div>
                    <div className="text-[10px] text-[#787168] mt-1">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-3">
                2. Select Core HVAC System Package
              </label>
              <div className="space-y-2.5">
                {Object.entries(baseServices).map(([key, srv]) => {
                  const active = serviceType === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setServiceType(key);
                        if (playAudioClick) playAudioClick();
                      }}
                      className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border ${
                        active
                          ? 'bg-[#FAF5EE] border-[#1C1917] shadow-sm'
                          : 'bg-[#FCFAF7] border-[#E8DFCE] hover:border-[#D0C4AF]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          active ? 'border-[#1C1917] bg-[#1C1917]' : 'border-[#D8CEBA]'
                        }`}>
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#1C1917]">{srv.name}</div>
                          <div className="text-xs text-[#8C6C46] font-medium">{srv.specs} &bull; {srv.time}</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-300">
                        {srv.rebate.includes('Rebate') ? 'Rebate Eligible' : 'Certified'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-Ons */}
            <div>
              <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-3">
                3. Efficiency &amp; Air Quality Enhancements
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => toggleAddon('smartThermostat')}
                  className={`p-3.5 rounded-2xl text-left border flex items-start gap-3 transition ${
                    addons.smartThermostat ? 'bg-[#FAF5EE] border-[#1C1917]' : 'bg-[#FCFAF7] border-[#E8DFCE]'
                  }`}
                >
                  <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                    addons.smartThermostat ? 'bg-[#1C1917] border-[#1C1917] text-white' : 'border-[#D8CEBA]'
                  }`}>
                    {addons.smartThermostat && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1C1917]">Smart Ecobee / Nest + Remote Sensors</div>
                    <div className="text-[10px] text-[#787168]">Wi-Fi multi-room temperature balancing</div>
                  </div>
                </button>

                <button
                  onClick={() => toggleAddon('ductLeakAudit')}
                  className={`p-3.5 rounded-2xl text-left border flex items-start gap-3 transition ${
                    addons.ductLeakAudit ? 'bg-[#FAF5EE] border-emerald-600' : 'bg-[#FCFAF7] border-[#E8DFCE]'
                  }`}
                >
                  <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                    addons.ductLeakAudit ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-[#D8CEBA]'
                  }`}>
                    {addons.ductLeakAudit && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1C1917]">Aerodynamic Duct Airflow Audit</div>
                    <div className="text-[10px] text-emerald-700 font-bold uppercase">Included Free With Package</div>
                  </div>
                </button>

                <button
                  onClick={() => toggleAddon('airScrubber')}
                  className={`p-3.5 rounded-2xl text-left border flex items-start gap-3 transition ${
                    addons.airScrubber ? 'bg-[#FAF5EE] border-[#1C1917]' : 'bg-[#FCFAF7] border-[#E8DFCE]'
                  }`}
                >
                  <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                    addons.airScrubber ? 'bg-[#1C1917] border-[#1C1917] text-white' : 'border-[#D8CEBA]'
                  }`}>
                    {addons.airScrubber && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1C1917]">Hospital UV-C Air Scrubber</div>
                    <div className="text-[10px] text-[#787168]">In-duct germicidal and odor defense</div>
                  </div>
                </button>

                <button
                  onClick={() => toggleAddon('warranty10yr')}
                  className={`p-3.5 rounded-2xl text-left border flex items-start gap-3 transition ${
                    addons.warranty10yr ? 'bg-[#FAF5EE] border-[#1C1917]' : 'bg-[#FCFAF7] border-[#E8DFCE]'
                  }`}
                >
                  <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                    addons.warranty10yr ? 'bg-[#1C1917] border-[#1C1917] text-white' : 'border-[#D8CEBA]'
                  }`}>
                    {addons.warranty10yr && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#1C1917]">10-Year Master Labor Coverage</div>
                    <div className="text-[10px] text-[#787168]">Zero-deductible parts &amp; labor warranty</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Summary: Charcoal & Alabaster Box */}
          <div className="lg:col-span-5 bg-[#1C1917] text-white p-7 sm:p-9 rounded-3xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B8936D] font-bold">
                SYSTEM SPECIFICATION
              </span>
              <span className="text-[11px] font-mono text-stone-400">
                Lic. #HV-33821 Certified
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs text-stone-400 uppercase font-mono tracking-wider mb-1">
                  Selected Infrastructure:
                </div>
                <div className="text-2xl font-display font-medium text-white leading-tight">
                  {selectedServiceObj.name}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-stone-300">
                  <span>PROPERTY MATCH:</span>
                  <span className="text-white font-bold">{homeLabels[homeSize].title}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>ESTIMATED TONNAGE:</span>
                  <span className="text-[#B8936D] font-bold">{homeLabels[homeSize].sub.split('•')[1] || 'Calibrated'}</span>
                </div>
                <div className="flex justify-between text-stone-300">
                  <span>REBATE STATUS:</span>
                  <span className="text-emerald-400 font-bold">Xcel &amp; State Eligible</span>
                </div>
              </div>

              <div className="text-xs text-[#B8936D] font-sans flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Includes Full On-Site Thermal Duct &amp; Sizing Inspection</span>
              </div>
            </div>

            {/* Guarantees Panel */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
              <div className="flex items-center justify-between text-stone-300 font-mono">
                <span>0% APR FINANCING:</span>
                <span className="text-emerald-400 font-bold">Wells Fargo Retail Services</span>
              </div>
              <p className="text-[11px] text-stone-400 leading-relaxed">
                Written flat-rate estimate provided following physical on-site equipment inspection. No surprises or hidden trip charges.
              </p>
            </div>

            <button
              onClick={() => {
                if (playAudioClick) playAudioClick();
                onBookEstimate({
                  serviceType,
                  homeSize,
                  addons
                });
              }}
              className="w-full py-4 rounded-full bg-[#FAF5EE] hover:bg-white text-[#1C1917] font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
            >
              <span>Schedule Free In-Home Sizing &amp; Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
