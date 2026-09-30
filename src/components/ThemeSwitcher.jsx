import React, { useState } from 'react';
import { Palette, Check, X } from 'lucide-react';

export default function ThemeSwitcher({ currentTheme, onSelectTheme, playAudioClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    {
      id: 'gold',
      name: 'Golden Black & Champagne',
      subtitle: 'Luxury Obsidian & 24k Gold (Kallista Edition)',
      darkColor: '#0A0C10',
      lightColor: '#FBF9F4',
      accentColor: '#D4AF37',
    },
    {
      id: 'onenation',
      name: 'Heritage Navy & Crimson',
      subtitle: 'Authentic onenationco.com branding',
      darkColor: '#0A1322',
      lightColor: '#FFFFFF',
      accentColor: '#DC2626',
    },
    {
      id: 'emerald',
      name: 'Alpine Emerald & Brass',
      subtitle: 'Colorado Forest Pine & Polished Brass',
      darkColor: '#07130E',
      lightColor: '#F8FAF8',
      accentColor: '#10B981',
    },
    {
      id: 'nordic',
      name: 'Nordic Stone & Terracotta',
      subtitle: 'Warm Alabaster & Deep Charcoal',
      darkColor: '#121417',
      lightColor: '#F9F8F5',
      accentColor: '#C85A32',
    },
    {
      id: 'steel',
      name: 'Precision Steel & Amber',
      subtitle: 'Industrial Chalk & Gunmetal',
      darkColor: '#0F1115',
      lightColor: '#F1F3F5',
      accentColor: '#EA580C',
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-84 p-4 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl text-white space-y-3 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                Select Visual Combo Palette
              </span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {themes.map((t) => {
              const active = currentTheme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    onSelectTheme(t.id);
                    if (playAudioClick) playAudioClick();
                  }}
                  className={`w-full p-3 rounded-2xl text-left transition-all border flex items-center justify-between ${
                    active
                      ? 'bg-slate-800 border-amber-400/80 shadow-lg ring-1 ring-amber-400/30'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{t.name}</span>
                      {active && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">{t.subtitle}</div>
                  </div>

                  {/* Swatches pill */}
                  <div className="flex items-center -space-x-1.5 pl-2 shrink-0">
                    <span 
                      className="w-4 h-4 rounded-full border border-slate-700 shadow-sm" 
                      style={{ backgroundColor: t.darkColor }} 
                      title="Dark Surface"
                    />
                    <span 
                      className="w-4 h-4 rounded-full border border-slate-700 shadow-sm" 
                      style={{ backgroundColor: t.lightColor }} 
                      title="Light Surface"
                    />
                    <span 
                      className="w-4 h-4 rounded-full border border-slate-700 shadow-sm" 
                      style={{ backgroundColor: t.accentColor }} 
                      title="Accent"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800 flex justify-between items-center font-mono">
            <span>Click to switch live</span>
            <span className="text-amber-400 font-bold">5 Combos Available</span>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (playAudioClick) playAudioClick();
        }}
        className="px-4 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white border-2 border-amber-500/50 shadow-2xl flex items-center gap-2.5 text-xs font-mono font-bold tracking-wide active:scale-95 transition"
      >
        <Palette className="w-4 h-4 text-amber-400" />
        <span>Palette Switcher</span>
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
      </button>
    </div>
  );
}
