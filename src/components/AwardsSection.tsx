import React, { useRef } from 'react';
import { AWARDS } from '../data/firmData';
import { Trophy, ChevronLeft, ChevronRight, Award, Star } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="awards" className="relative py-20 lg:py-28 bg-[#080808] overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#B68A2F]/5 blur-[180px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B68A2F]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#D8AA42] font-semibold">
                Accreditations & Distinction
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight leading-tight">
              International Recognition{' '}
              <span className="italic text-gold-gradient font-normal">Built Over Decades</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#A8A8A8] font-light leading-relaxed">
              Consistently ranked among the globe’s leading cross-border corporate and dispute resolution law firms by the legal industry’s most rigorous international rating bodies.
            </p>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll('left')}
              className="p-3 bg-[#111111] hover:bg-[#1C1810] border border-[#26221A] hover:border-[#B68A2F] text-[#D7D7D7] hover:text-[#D8AA42] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B68A2F]"
              aria-label="Scroll awards left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 bg-[#111111] hover:bg-[#1C1810] border border-[#26221A] hover:border-[#B68A2F] text-[#D7D7D7] hover:text-[#D8AA42] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B68A2F]"
              aria-label="Scroll awards right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontally Scrollable Awards Showcase */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {AWARDS.map((award) => {
            return (
              <div
                key={award.id}
                className="shrink-0 w-[300px] sm:w-[350px] snap-start bg-[#111111] hover:bg-[#151515] border border-[#242017] hover:border-[#B68A2F]/80 p-7 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(182,138,47,0.15)] relative"
              >
                {/* Gold Top Hairline */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B68A2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top Badge Lockup */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-none bg-[#1C1810] border border-[#B68A2F]/40 flex items-center justify-center group-hover:border-[#D8AA42] transition-colors">
                      <Trophy className="w-6 h-6 text-[#D8AA42]" />
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-widest text-[#B68A2F] font-semibold block">
                        {award.category}
                      </span>
                      <span className="text-xs text-[#8E8E8E] font-mono">
                        {award.year}
                      </span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-serif text-white font-normal group-hover:text-gold-gradient transition-colors mb-2 leading-snug">
                    {award.title}
                  </h3>

                  <div className="text-xs font-medium text-[#D8AA42] uppercase tracking-wider mb-4">
                    {award.organization}
                  </div>

                  <p className="text-xs text-[#9E9E9E] font-light leading-relaxed mb-6">
                    {award.description}
                  </p>
                </div>

                {/* Bottom Accolade Badge */}
                <div className="pt-4 border-t border-[#1F1C15] flex items-center justify-between text-[11px] text-[#A8A8A8]">
                  <div className="flex items-center gap-1.5 text-[#D8AA42]">
                    <Star className="w-3.5 h-3.5 fill-[#D8AA42]" />
                    <span className="font-semibold uppercase tracking-wider">{award.badgeLabel}</span>
                  </div>
                  <Award className="w-4 h-4 text-[#B68A2F]/60" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Footnote */}
        <div className="mt-8 text-center text-xs text-[#7A7A7A]">
          <span>Verified rankings independently audited by international legal directories and professional peers.</span>
        </div>

      </div>
    </section>
  );
};
