import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PracticeArea } from '../types';
import { ArrowRight, ChevronRight, X, CheckCircle2 } from 'lucide-react';

interface PracticeAreasSectionProps {
  onOpenConsultation: () => void;
}

export const PracticeAreasSection: React.FC<PracticeAreasSectionProps> = ({ onOpenConsultation }) => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  return (
    <section id="practice" className="relative py-20 lg:py-28 bg-[#080808]">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#B68A2F]/5 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#B68A2F]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D8AA42] font-semibold">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight leading-tight">
              Areas of <span className="italic text-gold-gradient font-normal">Global Practice</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed">
              We deliver rigorous legal acumen and strategic agility across the principal disciplines of international commerce, safeguarding institutional interests across sovereign and corporate corridors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#D8AA42] border border-[#B68A2F]/50 hover:bg-[#B68A2F] hover:text-[#080808] transition-all duration-300"
            >
              <span>Consult a Practice Head</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6 Premium Practice Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRACTICE_AREAS.map((practice, index) => {
            return (
              <div
                key={practice.id}
                onClick={() => setSelectedPractice(practice)}
                className="group relative bg-[#111111] border border-[#221F17] hover:border-[#B68A2F] overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_15px_35px_rgba(0,0,0,0.8),0_0_25px_rgba(182,138,47,0.18)] flex flex-col h-[420px]"
              >
                {/* Background Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-[#181818]">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-85 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient scrim ensuring WCAG AA contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-black/30" />
                  
                  {/* Editorial Index Number */}
                  <div className="absolute top-4 left-4 text-xs font-mono tracking-widest text-[#D8AA42] px-2 py-0.5 bg-[#080808]/80 border border-[#B68A2F]/40 backdrop-blur-sm">
                    0{index + 1}
                  </div>

                  {/* Corner gold hover line */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-transparent group-hover:border-[#D8AA42] transition-colors duration-300" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between text-left relative z-10">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#D8AA42] font-medium block mb-1">
                      {practice.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-gold-gradient transition-colors mb-2.5 font-light">
                      {practice.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#A6A6A6] line-clamp-3 leading-relaxed font-light">
                      {practice.description}
                    </p>
                  </div>

                  {/* Card Footer / Action */}
                  <div className="pt-4 border-t border-[#1F1C15] flex items-center justify-between text-xs font-medium text-[#D8AA42] group-hover:text-white transition-colors">
                    <span className="uppercase tracking-wider text-[11px]">View Full Scope & Deals</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#D8AA42]" />
                  </div>
                </div>

                {/* Bottom Gold Accent Bar on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B68A2F] via-[#D8AA42] to-[#B68A2F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Practice Area Detail Modal */}
      {selectedPractice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#111111] border border-[#B68A2F]/60 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(182,138,47,0.25)] max-h-[90vh] overflow-y-auto">
            
            {/* Modal Hero Image */}
            <div className="relative h-56 sm:h-64 w-full overflow-hidden">
              <img
                src={selectedPractice.image}
                alt={selectedPractice.title}
                className="w-full h-full object-cover brightness-75"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-transparent" />
              
              <button
                onClick={() => setSelectedPractice(null)}
                className="absolute top-4 right-4 p-2 bg-[#080808]/80 hover:bg-[#B68A2F] text-white hover:text-[#080808] border border-[#B68A2F]/40 transition-colors"
                aria-label="Close Practice Details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold">
                  {selectedPractice.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-white font-light">
                  {selectedPractice.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-left">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#A0A0A0] font-semibold mb-2">
                  Practice Overview
                </h4>
                <p className="text-sm sm:text-base text-[#D7D7D7] font-light leading-relaxed">
                  {selectedPractice.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold mb-3">
                  Key Capabilities & Counsel Scope
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPractice.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CCCCCC]">
                      <CheckCircle2 className="w-4 h-4 text-[#D8AA42] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Representative Deals */}
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#A0A0A0] font-semibold mb-3">
                  Representative Matters & Transactions
                </h4>
                <div className="space-y-2.5">
                  {selectedPractice.representativeDeals.map((deal, idx) => (
                    <div key={idx} className="p-3.5 bg-[#171717] border-l-2 border-[#B68A2F] text-xs sm:text-sm text-[#E0E0E0] leading-relaxed">
                      {deal}
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-6 border-t border-[#232018] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#8E8E8E]">
                  Inquire regarding conflict clearance and retention.
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedPractice(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 text-xs uppercase tracking-wider text-[#A0A0A0] hover:text-white border border-[#2D281E]"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPractice(null);
                      onOpenConsultation();
                    }}
                    className="flex-1 sm:flex-initial px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#080808] bg-gradient-to-r from-[#B68A2F] to-[#D8AA42] hover:brightness-110"
                  >
                    Retain Counsel
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
