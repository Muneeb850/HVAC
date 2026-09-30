import React, { useState } from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { REAL_REVIEWS } from '../data/onenationData';

export default function ReviewsSection({ playAudioClick }) {
  const [filter, setFilter] = useState('all');

  const filteredReviews = filter === 'all'
    ? REAL_REVIEWS
    : REAL_REVIEWS.filter(r => r.quote.toLowerCase().includes(filter));

  return (
    <section id="reviews" className="py-24 bg-[#F7F4EE] text-[#1C1917] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header - Balanced Editorial Layout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] font-mono tracking-[0.25em] text-[#787168] uppercase font-semibold mb-2">
              VERIFIED CLIENT REVIEWS
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-medium uppercase text-[#1C1917] leading-[0.98]">
              TRUST THAT <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-[#8C6C46]">Endures</span>
            </h2>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-[#E8DFCE] shadow-sm flex items-center gap-4">
            <div className="text-3xl font-display font-bold text-[#1C1917]">4.95</div>
            <div>
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <div className="text-[11px] font-sans text-[#787168] mt-0.5 font-medium">Based on 480+ Colorado Homeowners</div>
            </div>
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <span className="text-xs font-mono text-[#787168] mr-2">Filter Reviews:</span>
          {[
            { id: 'all', label: 'All Reviews (6)' },
            { id: 'gerardo', label: 'Mentions "Gerardo" (2)' },
            { id: 'heat', label: 'Heat Pumps & Heating' },
            { id: 'condenser', label: 'AC & Rooftop Units' },
            { id: 'freeze', label: 'Freeze & Emergency Care' },
          ].map((tag) => (
            <button
              key={tag.id}
              onClick={() => {
                setFilter(tag.id);
                if (playAudioClick) playAudioClick();
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-sans transition ${
                filter === tag.id
                  ? 'bg-[#1C1917] text-white font-semibold shadow-sm'
                  : 'bg-[#FAF5EE] text-[#5A534A] hover:bg-[#EFE9DF] border border-[#E8DFCE]'
              }`}
            >
              {tag.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-start">
          {filteredReviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#E8DFCE] shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAF5EE] text-[#8C6C46] font-bold border border-[#E8DFCE] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> {rev.source}
                  </span>
                </div>

                <p className="text-[#3D3730] text-xs sm:text-sm leading-relaxed mb-6 font-sans italic line-clamp-5">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#1C1917]">{rev.author}</div>
                  <div className="text-[11px] font-sans text-[#787168]">{rev.location}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF5EE] border border-[#E8DFCE] flex items-center justify-center text-xs font-bold text-[#8C6C46]">
                  {rev.author[0]}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
