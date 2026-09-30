import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ playAudioClick, label = "Back to Home", dark = false }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (playAudioClick) playAudioClick();
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="mb-6 pt-1">
      <button
        onClick={handleGoBack}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer shadow-sm hover:shadow active:scale-95 group ${
          dark
            ? 'bg-stone-900/90 hover:bg-stone-800 text-stone-200 border border-stone-700 hover:border-stone-500'
            : 'bg-white/95 hover:bg-white text-[#1C1917] border border-[#E8DFCE] hover:border-[#8C6C46]'
        }`}
        aria-label="Go back to previous page"
      >
        <ArrowLeft className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1 ${
          dark ? 'text-amber-400' : 'text-[#8C6C46]'
        }`} />
        <span>{label}</span>
      </button>
    </div>
  );
}
