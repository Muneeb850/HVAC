import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, AlertTriangle, CheckCircle2, ShieldCheck, ArrowRight, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, COLORADO_CITIES, COMPANY_INFO } from '../data/onenationData';

export default function BookingModal({ isOpen, onClose, initialData, playAudioClick }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    serviceId: initialData?.service || 'rooftop-package-units',
    urgency: initialData?.preselectedIssue ? 'emergency' : 'same-day',
    city: initialData?.city || 'Aurora',
    address: '',
    fullName: '',
    phone: '',
    email: '',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTime: 'morning',
    notes: initialData?.preselectedIssue ? `Urgent attention required: ${initialData.preselectedIssue}` : '',
  });

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        serviceId: initialData.service || prev.serviceId,
        city: initialData.city || prev.city,
        notes: prev.notes
      }));
    }
  }, [initialData]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playAudioClick) playAudioClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomCode = 'ONH-' + Math.floor(100000 + Math.random() * 900000);
      setBookingCode(randomCode);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti triggered');
      }
    }, 1100);
  };

  const selectedCityObj = COLORADO_CITIES.find(c => c.name === formData.city) || COLORADO_CITIES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Ambient Backdrop */}
      <div 
        className="fixed inset-0 bg-[#141210]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Content in Luxurious Warm Alabaster & Charcoal Theme */}
      <div className="relative w-full max-w-2xl bg-[#FAF5EE] border border-[#E8DFCE] rounded-3xl shadow-2xl overflow-hidden z-10 text-[#1C1917] my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-6 sm:p-7 border-b border-[#EAE3D6] bg-white">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#F7F4EE] text-[#8C6C46] border border-[#E8DFCE] flex items-center justify-center font-mono font-bold text-xs shadow-sm">
              HVAC
            </div>
            <div>
              <h3 className="text-xl font-display font-medium text-[#1C1917]">
                {isSuccess ? "HVAC Dispatch Confirmed" : "Book HVAC System Service & Dispatch"}
              </h3>
              <p className="text-xs font-mono text-[#787168]">
                Colorado Front Range Fleet &bull; Licensed &amp; Insured #HV-33821
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#FAF5EE] text-[#787168] hover:text-[#1C1917] hover:bg-[#EFE9DF] border border-[#E8DFCE] transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {!isSuccess && (
          <div className="bg-[#F7F4EE] px-6 sm:px-8 py-3.5 border-b border-[#EAE3D6] flex items-center justify-between text-xs font-mono">
            <span className={step >= 1 ? "text-[#1C1917] font-bold flex items-center gap-1.5" : "text-[#A89F91]"}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? "bg-[#1C1917] text-white" : "bg-stone-200 text-stone-500"}`}>1</span>
              <span>System Scope</span>
            </span>
            <span className="text-[#C8BFB0]">&rarr;</span>
            <span className={step >= 2 ? "text-[#1C1917] font-bold flex items-center gap-1.5" : "text-[#A89F91]"}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? "bg-[#1C1917] text-white" : "bg-stone-200 text-stone-500"}`}>2</span>
              <span>Location &amp; Schedule</span>
            </span>
            <span className="text-[#C8BFB0]">&rarr;</span>
            <span className={step >= 3 ? "text-[#1C1917] font-bold flex items-center gap-1.5" : "text-[#A89F91]"}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? "bg-[#1C1917] text-white" : "bg-stone-200 text-stone-500"}`}>3</span>
              <span>Contact &amp; Confirm</span>
            </span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            /* Success View */
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto text-2xl animate-bounce shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-3xl font-display font-medium text-[#1C1917]">
                  HVAC Specialist Dispatched!
                </h4>
                <p className="text-[#5A534A] text-sm max-w-md mx-auto leading-relaxed">
                  Your work ticket has been assigned to our Front Range master technician fleet. We have sent an SMS confirmation to <strong className="text-[#1C1917]">{formData.phone || 'your phone'}</strong>.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E8DFCE] text-left max-w-md mx-auto space-y-3 font-mono text-xs shadow-sm">
                <div className="flex justify-between border-b border-[#EAE3D6] pb-2.5">
                  <span className="text-[#787168]">DISPATCH CODE:</span>
                  <span className="text-[#8C6C46] font-bold text-sm">{bookingCode}</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE3D6] pb-2.5">
                  <span className="text-[#787168]">ASSIGNED TECH:</span>
                  <span className="text-[#1C1917] font-semibold">Gerardo M. (Master HVAC Specialist)</span>
                </div>
                <div className="flex justify-between border-b border-[#EAE3D6] pb-2.5">
                  <span className="text-[#787168]">ESTIMATED ETA:</span>
                  <span className="text-emerald-700 font-bold">{selectedCityObj.avgEtaMinutes} Minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#787168]">LOCATION:</span>
                  <span className="text-[#1C1917]">{formData.address || formData.city + ', CO'}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-6 py-3 rounded-full bg-white hover:bg-[#FAF5EE] text-[#1C1917] border border-[#D5CDBC] font-mono text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#8C6C46]" />
                  Call Tech Directly: {COMPANY_INFO.phoneFormatted}
                </a>
                <button
                  onClick={onClose}
                  className="px-7 py-3 rounded-full bg-[#1C1917] hover:bg-[#332E29] text-white font-bold text-xs uppercase tracking-wider transition shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-2 tracking-wider">
                      Select Primary Heating &amp; Air Service:
                    </label>
                    <div className="relative">
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full p-4 pr-10 rounded-2xl bg-white border-2 border-[#D5CDBC] text-[#1C1917] font-sans text-sm font-semibold focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition appearance-none cursor-pointer"
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id} className="bg-white text-[#1C1917] py-2">
                            {s.title}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#787168]">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-2 tracking-wider">
                      Select Urgency Level:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, urgency: 'emergency' });
                          if (playAudioClick) playAudioClick();
                        }}
                        className={`p-4 rounded-2xl text-left border-2 transition-all ${
                          formData.urgency === 'emergency'
                            ? 'bg-red-50/90 border-red-500 text-red-950 shadow-md ring-2 ring-red-500/20'
                            : 'bg-white border-[#E8DFCE] text-[#5A534A] hover:border-[#D5CDBC]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-red-600 flex items-center gap-1.5 uppercase font-mono">
                            <AlertTriangle className="w-3.5 h-3.5" /> Emergency Now
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-semibold">
                            &lt; 30 min
                          </span>
                        </div>
                        <div className="text-xs text-[#5A534A] mt-1.5 font-medium leading-relaxed">
                          No heat during freeze, frozen coils, gas odor
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, urgency: 'scheduled' });
                          if (playAudioClick) playAudioClick();
                        }}
                        className={`p-4 rounded-2xl text-left border-2 transition-all ${
                          formData.urgency === 'scheduled'
                            ? 'bg-[#F7F4EE] border-[#1C1917] text-[#1C1917] shadow-md ring-2 ring-[#1C1917]/10'
                            : 'bg-white border-[#E8DFCE] text-[#5A534A] hover:border-[#D5CDBC]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#1C1917] flex items-center gap-1.5 uppercase font-mono">
                            <Calendar className="w-3.5 h-3.5 text-[#8C6C46]" /> Scheduled Care
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-semibold">
                            Flexible
                          </span>
                        </div>
                        <div className="text-xs text-[#5A534A] mt-1.5 font-medium leading-relaxed">
                          Same-day or convenient scheduled appointment
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setStep(2);
                        if (playAudioClick) playAudioClick();
                      }}
                      className="px-7 py-3.5 rounded-full bg-[#1C1917] hover:bg-[#332E29] text-white font-sans font-semibold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95"
                    >
                      <span>Continue To Location</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-2 tracking-wider">
                        Front Range Municipality:
                      </label>
                      <div className="relative">
                        <select
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full p-3.5 pr-10 rounded-2xl bg-white border border-[#D5CDBC] text-[#1C1917] text-sm font-semibold focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition appearance-none cursor-pointer"
                        >
                          {COLORADO_CITIES.map(c => (
                            <option key={c.name} value={c.name} className="bg-white text-[#1C1917]">
                              {c.name} ({c.avgEtaMinutes}m Avg ETA)
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#787168]">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-2 tracking-wider">
                        Street Address:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 4107 Richfield St, Aurora"
                        value={formData.address}
                        required
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full p-3.5 rounded-2xl bg-white border border-[#D5CDBC] text-[#1C1917] text-sm font-medium focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-2 tracking-wider">
                        Preferred Date:
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full p-3.5 rounded-2xl bg-white border border-[#D5CDBC] text-[#1C1917] text-sm font-medium focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-2 tracking-wider">
                        Arrival Window:
                      </label>
                      <div className="relative">
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full p-3.5 pr-10 rounded-2xl bg-white border border-[#D5CDBC] text-[#1C1917] text-sm font-semibold focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition appearance-none cursor-pointer"
                        >
                          <option value="immediate">Immediate Emergency (&lt; 30 min)</option>
                          <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                          <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#787168]">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#EAE3D6]">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-mono text-[#787168] hover:text-[#1C1917] font-semibold transition"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setStep(3);
                        if (playAudioClick) playAudioClick();
                      }}
                      className="px-7 py-3.5 rounded-full bg-[#1C1917] hover:bg-[#332E29] text-white font-sans font-semibold text-xs uppercase tracking-wider transition flex items-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95"
                    >
                      <span>Continue To Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-mono uppercase text-[#787168] font-bold tracking-wider">
                          Your Full Name:
                        </label>
                        <span className="text-[10px] font-mono text-stone-400">Required</span>
                      </div>
                      <input
                        type="text"
                        placeholder="John Smith"
                        value={formData.fullName}
                        required
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full p-3.5 rounded-2xl bg-white border border-[#D5CDBC] text-[#1C1917] text-sm font-medium focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition placeholder:text-stone-400"
                      />
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-mono uppercase text-[#787168] font-bold tracking-wider">
                          Phone Number:
                        </label>
                        <span className="text-[10px] font-mono text-[#8C6C46] font-semibold">SMS Dispatch</span>
                      </div>
                      <input
                        type="tel"
                        placeholder="(720) 555-0199"
                        value={formData.phone}
                        required
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3.5 rounded-2xl bg-white border border-[#D5CDBC] text-[#1C1917] text-sm font-medium focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-2 tracking-wider">
                      Email Address:
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      required
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 rounded-2xl bg-white border border-[#D5CDBC] text-[#1C1917] text-sm font-medium focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition placeholder:text-stone-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#787168] font-bold mb-2 tracking-wider">
                      Issue Description / Access Notes:
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Describe symptoms (e.g., furnace blowing cold air, AC short-cycling, rooftop unit access)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full p-3.5 rounded-2xl bg-white border border-[#D5CDBC] text-[#1C1917] text-sm font-medium focus:border-[#1C1917] focus:ring-2 focus:ring-[#1C1917]/10 focus:outline-none shadow-sm transition placeholder:text-stone-400"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-[#EAE3D6]">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-xs font-mono text-[#787168] hover:text-[#1C1917] font-semibold transition"
                    >
                      &larr; Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded-full bg-[#1C1917] hover:bg-[#8C6C46] text-white font-display font-bold text-xs uppercase tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Assigning Technician...</span>
                      ) : (
                        <>
                          <span>Confirm &amp; Dispatch HVAC Specialist</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
