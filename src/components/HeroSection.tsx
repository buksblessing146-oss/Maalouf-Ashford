import React from 'react';
import { HERO_ATTORNEY_IMG, FIRM_STATS } from '../data/firmData';
import { ArrowRight, ShieldCheck, Globe2, Award, Landmark, Calendar } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExplorePracticeAreas: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExplorePracticeAreas,
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#080808] via-[#0D0D0D] to-[#080808]">
      {/* Subtle luxury background radial glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, #B68A2F 0%, rgba(182, 138, 47, 0.05) 60%, transparent 80%)'
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #D8AA42 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      {/* Subtle geometric luxury grid backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#B68A2F 1px, transparent 1px), linear-gradient(90deg, #B68A2F 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[620px] lg:min-h-[680px]">
          
          {/* Left Column: Headline, Firm Introduction & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left pt-4 lg:pt-0">
            {/* Subtle editorial kicker */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-[#B68A2F]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D8AA42] font-semibold">
                New York · Dubai · Riyadh · Hong Kong · Global
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light text-white tracking-tight leading-[1.08] mb-6 text-balance">
              International Business Law{' '}
              <span className="italic font-normal text-gold-gradient block sm:inline">
                Without Borders
              </span>
            </h1>

            {/* Firm Introduction Subheading */}
            <p className="text-base sm:text-lg text-[#D7D7D7]/90 font-light leading-relaxed max-w-xl mb-8">
              Maalouf Ashford & Talbot, LLP is an elite international business law firm advising
              sovereign governments, Fortune 500 multinationals, private equity institutions, and high-net-worth
              principals across the world’s major financial centers. We navigate complex cross-border
              regulatory frontiers, multibillion-dollar transactions, and international disputes with decisive command.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-10">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#080808] bg-gradient-to-r from-[#B68A2F] via-[#D8AA42] to-[#B68A2F] hover:brightness-110 transition-all duration-300 shadow-[0_4px_25px_rgba(182,138,47,0.3)] hover:shadow-[0_6px_30px_rgba(216,170,66,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AA42] group cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExplorePracticeAreas}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#D7D7D7] hover:text-[#D8AA42] border border-[#2A261C] hover:border-[#B68A2F] bg-[#111111]/80 backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B68A2F] cursor-pointer"
              >
                Explore Practice Areas
              </button>
            </div>

            {/* Subtle trust markers */}
            <div className="flex items-center gap-6 pt-5 border-t border-[#1C1A14] text-xs text-[#A0A0A0]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D8AA42]" />
                <span>Premier Global Representation</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#D8AA42]" />
                <span>Multijurisdictional Direct Counsel</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Attorney Image (Big, Bold & Prominent) with Circular Gold Line Graphics */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] xl:max-w-[640px] aspect-[4/5] min-h-[520px] sm:min-h-[620px] lg:min-h-[680px] xl:min-h-[740px] flex items-center justify-center">
              
              {/* Elegant Circular Gold Line Graphics behind subject (Expanded and Bolder) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
                {/* Outermost large ring */}
                <div className="w-[500px] h-[500px] sm:w-[580px] sm:h-[580px] lg:w-[640px] lg:h-[640px] rounded-full border border-[#B68A2F]/25 animate-[spin_80s_linear_infinite]" />
                
                {/* Secondary ring with dashed luxury pattern */}
                <div 
                  className="absolute w-[400px] h-[400px] sm:w-[480px] sm:h-[480px] lg:w-[520px] lg:h-[520px] rounded-full border border-[#D8AA42]/35"
                  style={{ borderStyle: 'dashed', strokeDasharray: '6 10' }}
                />

                {/* Third concentric gold ring with glow */}
                <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full border border-[#B68A2F]/50 shadow-[0_0_50px_rgba(182,138,47,0.25)]" />

                {/* Center luminous halo */}
                <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full bg-gradient-to-tr from-[#B68A2F]/25 via-[#D8AA42]/15 to-transparent blur-3xl" />
                
                {/* Decorative radial axis lines */}
                <div className="absolute w-[560px] sm:w-[660px] h-[1px] bg-gradient-to-r from-transparent via-[#B68A2F]/35 to-transparent" />
                <div className="absolute h-[560px] sm:h-[660px] w-[1px] bg-gradient-to-b from-transparent via-[#B68A2F]/35 to-transparent" />
              </div>

              {/* The Attorney Subject Image - Big, Bold & Imposing */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <img
                  src={HERO_ATTORNEY_IMG}
                  alt="Senior Attorney - Maalouf Ashford & Talbot"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(0,0,0,0.98)] max-h-[580px] sm:max-h-[680px] lg:max-h-[760px] xl:max-h-[820px] scale-105 sm:scale-110 lg:scale-115 xl:scale-120 origin-bottom select-none transition-transform duration-700 hover:scale-[1.18]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Gold Card on Right Side */}
              <div className="absolute bottom-2 sm:bottom-8 -right-2 sm:-right-4 z-20 bg-[#151515]/95 backdrop-blur-md border border-[#B68A2F]/70 p-4 sm:p-5 shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(182,138,47,0.25)] max-w-[220px]">
                <div className="flex items-center gap-2 mb-2 text-[#D8AA42]">
                  <Calendar className="w-3.5 h-3.5 text-[#D8AA42]" />
                  <span className="text-[10px] uppercase tracking-widest font-semibold">Founded 2005</span>
                </div>
                <div className="text-sm sm:text-base font-serif font-medium text-white leading-snug">
                  International Corporate Law
                </div>
                <div className="w-10 h-[1.5px] bg-gradient-to-r from-[#B68A2F] to-[#D8AA42] mt-2 mb-1.5" />
                <span className="text-[10px] text-[#A5A5A5] block font-light">
                  New York · Dubai · Global
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Statistics Strip Below Hero (4 Luxury Cards) */}
        <div className="mt-16 pt-12 border-t border-[#1F1C14]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FIRM_STATS.map((stat, idx) => {
              const iconMap = [Globe2, Award, Landmark, Calendar];
              const IconComponent = iconMap[idx % iconMap.length];
              return (
                <div
                  key={stat.label}
                  className="group relative bg-[#111111] hover:bg-[#151515] border border-[#221F17] hover:border-[#B68A2F]/50 p-6 transition-all duration-300 shadow-md hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
                >
                  {/* Subtle top gold accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B68A2F] via-[#D8AA42] to-[#B68A2F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl sm:text-4xl font-serif font-light text-white group-hover:text-gold-gradient transition-colors tabular-nums">
                      {stat.value}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#B68A2F]/60 group-hover:text-[#D8AA42] transition-colors" />
                  </div>
                  <h2 className="text-sm font-medium text-[#E5E5E5] mb-1">
                    {stat.label}
                  </h2>
                  <p className="text-xs text-[#8E8E8E] leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
