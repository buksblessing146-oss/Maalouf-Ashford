import React from 'react';
import { WELCOME_IMG } from '../data/firmData';
import { Globe, Scale, Award, ArrowUpRight } from 'lucide-react';

interface WelcomeSectionProps {
  onLearnMore?: () => void;
  onOpenConsultation?: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onLearnMore, onOpenConsultation }) => {
  const featureCards = [
    {
      title: "Global Expertise",
      description: "Our attorneys operate seamlessly across civil law, common law, and Islamic jurisprudence regimes, offering comprehensive cross-border strategic counsel.",
      icon: Globe,
    },
    {
      title: "Cross-Border Transactions",
      description: "Proven deal architecture for multilateral M&A, sovereign debt facilities, capital raisings, and energy concessions spanning the Americas, EMEA, and Asia.",
      icon: Scale,
    },
    {
      title: "Client-Centered Excellence",
      description: "Direct partner immersion on every mandate, delivering agile, senior-level counsel unencumbered by bureaucratic institutional overhead.",
      icon: Award,
    },
  ];

  return (
    <section id="welcome" className="relative py-20 lg:py-28 bg-[#0D0D0D] border-t border-b border-[#1C1912] overflow-hidden">
      {/* Decorative ambient background accents */}
      <div 
        className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-[#B68A2F]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Portrait / Architectural Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Outer gold decorative hairline frame */}
              <div className="absolute -inset-3 border border-[#B68A2F]/30 pointer-events-none transition-colors duration-500 group-hover:border-[#D8AA42]/60" />
              
              {/* Corner accent tick marks */}
              <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-[#D8AA42]" />
              <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-[#D8AA42]" />

              {/* Main image container */}
              <div className="relative overflow-hidden bg-[#151515] aspect-[4/5] shadow-2xl">
                <img
                  src={WELCOME_IMG}
                  alt="Maalouf Ashford & Talbot Headquarters Architecture"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle dark luxury vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60" />

                {/* Bottom caption badge inside frame */}
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#080808]/90 backdrop-blur-md border border-[#B68A2F]/40 text-left">
                  <p className="text-[11px] uppercase tracking-widest text-[#D8AA42] font-semibold mb-1">
                    Institutional Presence
                  </p>
                  <p className="text-xs text-[#E5E5E5] font-light">
                    Financial District, New York · DIFC, Dubai · Riyadh · Hong Kong
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Firm's Welcome Page Content & Feature Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[1px] bg-[#B68A2F]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#D8AA42] font-semibold">
                Welcome to the Firm
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight leading-[1.15] mb-6">
              A Legacy of Strategic Counsel in an{' '}
              <span className="italic text-gold-gradient font-normal">Interconnected World</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#C4C4C4] font-light leading-relaxed mb-8">
              <p>
                Founded in 2005, Maalouf Ashford & Talbot, LLP was built on a singular conviction:
                that modern cross-border enterprises require counsel that transcends borders,
                combining the highest caliber legal intellect with pragmatic commercial execution.
              </p>
              <p>
                Today, our firm stands as one of the world's most awarded international business law practices.
                Headquartered at 48 Wall Street in New York, with regional hubs in Dubai, Riyadh, Hong Kong,
                Shanghai, São Paulo, Beirut, and Moscow, we serve sovereign states, multinational corporations,
                and financial sponsors on matters that define global commerce.
              </p>
            </div>

            {/* Three Premium Feature Cards with Gold Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {featureCards.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="p-4 bg-[#141414] border border-[#242017] hover:border-[#B68A2F]/60 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-none bg-[#1C1810] border border-[#B68A2F]/30 flex items-center justify-center mb-3 group-hover:border-[#D8AA42] transition-colors">
                      <Icon className="w-4 h-4 text-[#D8AA42]" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-[#D8AA42] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-[#9B9B9B] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Firm's Signature & Gold Divider */}
            <div className="pt-6 border-t border-[#232018] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                {/* Gold Seal Monogram */}
                <div className="w-12 h-12 rounded-full border border-[#B68A2F] flex items-center justify-center bg-gradient-to-br from-[#1C1810] to-[#0A0A0A] shadow-[0_0_15px_rgba(182,138,47,0.2)]">
                  <span className="font-serif italic font-bold text-sm text-[#D8AA42]">M·A</span>
                </div>
                <div>
                  <div className="font-serif italic text-lg sm:text-xl text-white tracking-wide">
                    Dr. John J. Maalouf
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#A0A0A0]">
                    Senior Partner · Head of Global Practice
                  </div>
                </div>
              </div>

              {onLearnMore && (
                <button
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#D8AA42] hover:text-white transition-colors group"
                >
                  <span>Firm History & Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
