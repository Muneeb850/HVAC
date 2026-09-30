export const COMPANY_INFO = {
  name: "One Nation Heating, Air & Climate Engineering",
  shortName: "One Nation HVAC",
  tagline: "Front Range Colorado's Premier HVAC & Thermal Systems Engineers",
  phone: "720-499-4013",
  phoneFormatted: "(720) 499-4013",
  email: "service@onenationco.com",
  address: "4107 Richfield St, Aurora, CO 80013",
  hours: "24/7 Emergency Dispatch • 365 Days a Year",
  financingPartner: "Wells Fargo Retail Services",
  financingUrl: "https://retailservices.wellsfargo.com/pl/0024373912",
  rating: 4.95,
  reviewCount: 480,
  yearsServing: 12,
  completedJobs: 18450,
  license: "CO Master HVAC Lic #HV-33821 • Mechanical & EPA Certified • Master Lic #MP-098244"
};

export const COLORADO_CITIES = [
  { name: "Denver", techAvailable: 4, avgEtaMinutes: 22, status: "Active Dispatch", zipPrefix: "802" },
  { name: "Aurora", techAvailable: 6, avgEtaMinutes: 18, status: "HQ Dispatch (Fastest)", zipPrefix: "800" },
  { name: "Boulder", techAvailable: 2, avgEtaMinutes: 34, status: "Active Dispatch", zipPrefix: "803" },
  { name: "Parker", techAvailable: 3, avgEtaMinutes: 25, status: "Active Dispatch", zipPrefix: "801" },
  { name: "Centennial", techAvailable: 3, avgEtaMinutes: 20, status: "Active Dispatch", zipPrefix: "801" },
  { name: "Highlands Ranch", techAvailable: 2, avgEtaMinutes: 26, status: "Active Dispatch", zipPrefix: "801" },
  { name: "Lakewood", techAvailable: 3, avgEtaMinutes: 24, status: "Active Dispatch", zipPrefix: "802" },
  { name: "Littleton", techAvailable: 2, avgEtaMinutes: 22, status: "Active Dispatch", zipPrefix: "801" },
  { name: "Thornton & Westminster", techAvailable: 3, avgEtaMinutes: 28, status: "Active Dispatch", zipPrefix: "802" },
  { name: "Arvada", techAvailable: 2, avgEtaMinutes: 29, status: "Active Dispatch", zipPrefix: "800" }
];

export const SERVICES = [
  {
    id: "heat-pumps",
    category: "heat-pumps",
    title: "Cold-Climate Inverter Heat Pumps (Rated to -15°F)",
    badge: "Colorado Rebate Eligible",
    estimateScope: "Free In-Home Sizing & Estimate",
    eta: "Next-Day",
    description: "Ultra-quiet variable-speed inverter heat pump technology designed to provide clean heating through sub-zero Colorado cold snaps and high-efficiency summer cooling.",
    features: [
      "Dual-fuel hybrid integration with existing gas furnaces",
      "Qualifies for maximum Xcel Energy & State clean-heat rebates",
      "Up to 22 SEER2 efficiency rating for drastic utility bill savings",
      "Mitsubishi, Daikin & Trane certified installation"
    ],
    popular: true
  },
  {
    id: "gas-furnaces",
    category: "heating",
    title: "High-Efficiency 96%+ AFUE Low-NOx Gas Furnaces",
    badge: "Extreme Cold Certified",
    estimateScope: "Custom Engineered Quote",
    eta: "Same-Day / Next-Day",
    description: "Two-stage and modulating gas furnaces calibrated for Colorado's dry, high-altitude alpine air, guaranteeing reliable whole-home warmth through deep freezes.",
    features: [
      "Variable-speed ECM blower motors for whisper-silent airflow",
      "Secondary stainless-steel condensing heat exchangers",
      "Integrated carbon monoxide safety cutoff sensors",
      "10-Year parts and labor master technician warranty"
    ],
    popular: true
  },
  {
    id: "central-ac",
    category: "cooling",
    title: "Precision Central Air Conditioning Installation & Repair",
    badge: "Peak Summer Comfort",
    estimateScope: "Transparent Written Estimate",
    eta: "Same-Day Dispatch",
    description: "Engineered cooling systems built to handle blazing 95°F+ Front Range heatwaves with optimized multi-stage compressors and eco-friendly R-454B/R-410A refrigerant.",
    features: [
      "High-efficiency condensing units with aluminum microchannel coils",
      "Acoustic composite sound-dampening tops (< 58 dBA operation)",
      "Digital static pressure and aerodynamic airflow balancing",
      "Complete legacy AC haul-away and EPA refrigerant recovery"
    ],
    popular: true
  },
  {
    id: "ductless-mini-splits",
    category: "heat-pumps",
    title: "Multi-Zone Ductless Mini-Split Systems",
    badge: "Zero Ductwork Required",
    estimateScope: "Room-by-Room Sizing Quote",
    eta: "1-2 Days",
    description: "Targeted independent room-by-room heating and cooling for historic Denver homes, modern additions, sunrooms, and detached garages.",
    features: [
      "Independent micro-climate control for each individual living space",
      "Hyper-Heating (H2i) technology maintaining 100% capacity at 5°F",
      "Sleek architectural wall, floor-mounted, or ceiling cassette units",
      "Wi-Fi smartphone remote scheduling and geofencing"
    ],
    popular: false
  },
  {
    id: "rooftop-package-units",
    category: "commercial",
    title: "Commercial & Residential Rooftop Package Units (RTU)",
    badge: "High-Capacity Rooftop Fleet",
    estimateScope: "Engineering Consultation & Quote",
    eta: "Scheduled / Priority",
    description: "Self-contained heavy-duty rooftop heating, cooling, and air ventilation units engineered for residential complexes and commercial properties.",
    features: [
      "All-in-one heating and cooling packaged within weatherized cabinetry",
      "Direct drive fans and economizers for free-cooling ventilation",
      "Crane rigging, curb adaptation, and rooftop gas/electric hookup",
      "Preventative maintenance contracts with priority dispatch"
    ],
    popular: false
  },
  {
    id: "iaq-ventilation",
    category: "air-quality",
    title: "Whole-Home HEPA Filtration & Fresh Air ERV/HRV",
    badge: "Hospital-Grade Clean Air",
    estimateScope: "Air Quality Audit & Proposal",
    eta: "Same-Day",
    description: "Remove Colorado wildfire smoke, alpine pollen, mold spores, and viruses while balancing indoor humidity during arid winter months.",
    features: [
      "MERV-16 hospital-grade particulate air scrubbers",
      "UV-C germicidal light sanitization inside ductwork",
      "Energy Recovery Ventilators (ERV) exchanging stale air with fresh oxygen",
      "Steam whole-home humidification preserving hardwood floors and sinuses"
    ],
    popular: false
  }
];

export const REAL_REVIEWS = [
  {
    author: "Bradford Bolinder",
    location: "Denver, CO",
    rating: 5,
    source: "Google Verified Review",
    date: "Verified Customer",
    quote: "I had my heating unit quit halfway through the freezing day and I contacted One Nation. They arrived on time, extremely professional, gave me clear options. The work was done very efficiently and cleanly. Prompt, explained everything to my satisfaction and I will be using them from now on. I'm very happy."
  },
  {
    author: "Cody Charnas",
    location: "Aurora, CO",
    rating: 5,
    source: "Google Verified Review",
    date: "Recent Customer",
    quote: "Gerardo was outstanding! He came out the same day and stayed late to troubleshoot our climate system and heating issue, which we really appreciated. He communicated clearly throughout the entire process, explained everything well, and was honest and transparent. His pricing was fair, and the quality of his work was excellent. Highly recommend One Nation for any HVAC needs!"
  },
  {
    author: "Audrey Lambert",
    location: "Boulder, CO",
    rating: 5,
    source: "Google Verified Review",
    date: "Verified Customer",
    quote: "Professional, kind, and punctual. Transparent pricing before touching a single wire. They installed our high-efficiency heat pump and zoned ductless units effortlessly. Our home is perfectly warm in the winter and crisp in the summer, and our energy bills dropped significantly!"
  },
  {
    author: "Brianna Giannini",
    location: "Parker, CO",
    rating: 5,
    source: "Google Verified Review",
    date: "Verified Customer",
    quote: "Both technicians who came out were outstanding! Got here in less than 30 minutes in the middle of a no-heat crisis during a sub-zero freeze. Replaced the flame sensor and blower capacitor, verified carbon monoxide safety, and left everything spotless. Thank you!"
  },
  {
    author: "Elina M.",
    location: "Centennial, CO",
    rating: 5,
    source: "Google Verified Review",
    date: "Verified Customer",
    quote: "Gerardo is so kind, honest, and beyond professional. Diagnosed our rooftop AC condenser in minutes when another contractor wanted thousands for an unnecessary full replacement. Clean, respectful, and genuine."
  },
  {
    author: "Ezri Lell",
    location: "Lakewood, CO",
    rating: 5,
    source: "Google Verified Review",
    date: "Verified Customer",
    quote: "Top tier HVAC service! Prompt dispatch, friendly certified technicians, and great outcome. One Nation is the only heating and air conditioning team I will ever call in the Denver metro area."
  }
];

export const SYMPTOMS_WIZARD = [
  {
    id: "no-heat",
    symptom: "Furnace blowing cold air or system locked out during freezing freeze",
    severity: "CRITICAL EMERGENCY",
    urgency: "Dispatch immediately (< 30 min)",
    action: "Check thermostat battery and emergency switch. If furnace attempts ignition 3 times and clicks off, do not force restart. Call priority dispatch.",
    serviceMatch: "24/7 Emergency No-Heat & Blower Rescue",
    quoteType: "Written Flat-Rate Diagnostic Quote"
  },
  {
    id: "ac-blowing-warm",
    symptom: "AC running continuously but blowing warm or lukewarm air in summer",
    severity: "HIGH URGENCY",
    urgency: "Same-Day Dispatch (< 2 hrs)",
    action: "Turn system to OFF at thermostat to prevent compressor burnout. Inspect outdoor condenser unit for brush or debris obstruction.",
    serviceMatch: "Precision Central AC Repair & Refrigerant Rebalance",
    quoteType: "Written Flat-Rate Diagnostic Quote"
  },
  {
    id: "gas-co-smell",
    symptom: "Rotten egg sulfur odor or carbon monoxide detector alarm sounding",
    severity: "EXTREME HAZARD",
    urgency: "Immediate Evacuate & Call 911",
    action: "Evacuate everyone immediately! Do NOT turn light switches on or off. Call 911 and Xcel Energy from outdoors, then our emergency line.",
    serviceMatch: "Emergency Gas Furnace & Combustion Safety",
    quoteType: "Immediate Safety Inspection Quote"
  },
  {
    id: "frozen-coils",
    symptom: "Evaporator coils encrusted in ice or water leaking from indoor unit pan",
    severity: "HIGH URGENCY",
    urgency: "Same-Day Dispatch",
    action: "Switch thermostat from COOL to FAN ONLY to start defrosting coils. Replace air filter if clogged. Check condensate line drain.",
    serviceMatch: "Coil Defrost, Leak Detection & Airflow Rebalancing",
    quoteType: "Written Flat-Rate Diagnostic Quote"
  },
  {
    id: "strange-noises",
    symptom: "Loud screeching, metallic grinding, or rapid short-cycling on/off",
    severity: "MODERATE",
    urgency: "Priority Scheduled Dispatch",
    action: "Shut down system to protect motor bearings from catastrophic seizure. Our techs carry replacement ECM blower motors and capacitors.",
    serviceMatch: "Blower Motor & Electrical Capacitor Replacement",
    quoteType: "Written Flat-Rate Diagnostic Quote"
  }
];

export const FAQS = [
  {
    q: "How fast can an emergency HVAC technician arrive at my Denver or Aurora home?",
    a: "Our rapid dispatch fleet has certified HVAC technicians stationed strategically across Aurora HQ, Denver, Parker, and Boulder. Our average Front Range emergency response time is 18 to 35 minutes for no-heat or AC emergencies."
  },
  {
    q: "Can heat pumps really handle Colorado's sub-zero alpine winters?",
    a: "Yes! Modern cold-climate inverter heat pumps (such as Mitsubishi Hyper-Heating and Trane TruComfort systems) are engineered specifically for cold regions, delivering 100% heating capacity down to -5°F and continuing operation below -15°F. We also install dual-fuel hybrid setups paired with a gas furnace for ultimate resilience."
  },
  {
    q: "What energy rebates are available for Colorado heat pump and furnace upgrades?",
    a: "Colorado homeowners can qualify for substantial utility rebates through Xcel Energy, combined with federal Inflation Reduction Act (25C) tax credits and Colorado Clean Heat cash-back programs. We handle all rebate filing paperwork for you."
  },
  {
    q: "Do you offer upfront pricing without hidden trip or overtime fees?",
    a: "100% YES. We provide a transparent, flat-rate written estimate following diagnostic inspection before any repair or installation begins. You will never encounter hidden surprise charges or emergency overtime markups."
  },
  {
    q: "How does the Wells Fargo 0% Financing work for HVAC replacements?",
    a: "Through our Wells Fargo Retail Services partnership, qualified homeowners can access convenient monthly payment options, including promotional 0% APR financing. The online application takes under 2 minutes with instant approval decisioning."
  }
];

