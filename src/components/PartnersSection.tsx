import React, { useState } from 'react';
import { PARTNERS } from '../data/firmData';
import { Partner } from '../types';
import { Mail, Phone, ArrowUpRight, X, GraduationCap, Scale } from 'lucide-react';

interface PartnersSectionProps {
  onOpenConsultation: () => void;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenConsultation }) => {
  const [activePartnerModal, setActivePartnerModal] = useState<Partner | null>(null);

  return (
    <section id="partners" className="relative py-20 lg:py-28 bg-[#0D0D0D] border-t border-b border-[#1C1912]">
      {/* Ambient background glow */}
      <div 
        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#B68A2F]/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B68A2F]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8AA42] font-semibold">
              Senior Leadership
            </span>
            <span className="w-6 h-[1px] bg-[#B68A2F]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight leading-tight">
            Partners & <span className="italic text-gold-gradient font-normal">Practice Leaders</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed">
            Seasoned advocates and strategic legal counsellors recognized across international tribunals, appellate bars, and the world’s major financial hubs.
          </p>
        </div>

        {/* 4 Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PARTNERS.map((partner) => {
            return (
              <div
                key={partner.id}
                className="group relative bg-[#141414] border border-[#232018] hover:border-[#B68A2F] flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(182,138,47,0.2)] overflow-hidden"
              >
                {/* Partner Portrait */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#181818]">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-110 brightness-95 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />

                  {/* Location Tag */}
                  <div className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold text-[#D8AA42] bg-[#080808]/85 border border-[#B68A2F]/40 px-2 py-0.5 backdrop-blur-sm">
                    {partner.location}
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-transparent group-hover:border-[#D8AA42] transition-colors" />
                </div>

                {/* Partner Information */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-white font-medium group-hover:text-[#D8AA42] transition-colors leading-snug mb-1">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-[#B68A2F] font-medium leading-tight mb-3">
                      {partner.title}
                    </p>
                    <p className="text-xs text-[#A8A8A8] line-clamp-4 font-light leading-relaxed mb-4">
                      {partner.bio}
                    </p>
                  </div>

                  {/* Social / Contact Icons & Bio Trigger */}
                  <div className="pt-4 border-t border-[#201D16] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <a
                        href={`mailto:${partner.email}`}
                        className="w-7 h-7 flex items-center justify-center rounded-none bg-[#1C1810] border border-[#B68A2F]/30 text-[#D8AA42] hover:bg-[#B68A2F] hover:text-[#080808] transition-colors"
                        title={`Email ${partner.name}`}
                        aria-label={`Email ${partner.name}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={`tel:${partner.phone}`}
                        className="w-7 h-7 flex items-center justify-center rounded-none bg-[#1C1810] border border-[#B68A2F]/30 text-[#D8AA42] hover:bg-[#B68A2F] hover:text-[#080808] transition-colors"
                        title={`Call office: ${partner.phone}`}
                        aria-label={`Call office of ${partner.name}`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <button
                      onClick={() => setActivePartnerModal(partner)}
                      className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-[#D8AA42] hover:text-white transition-colors"
                    >
                      <span>Full Bio</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Bottom Gold Line */}
                <div className="h-[2px] bg-gradient-to-r from-transparent via-[#B68A2F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Partner Full Profile Modal */}
      {activePartnerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#111111] border border-[#B68A2F]/60 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(182,138,47,0.25)] max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActivePartnerModal(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#080808]/80 hover:bg-[#B68A2F] text-white hover:text-[#080808] border border-[#B68A2F]/40 transition-colors"
              aria-label="Close Partner Bio"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8 text-left">
              {/* Header profile block */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pb-6 border-b border-[#232018]">
                <div className="w-24 h-24 sm:w-28 sm:h-28 overflow-hidden rounded-none border border-[#B68A2F]/60 shrink-0 bg-[#161616]">
                  <img
                    src={activePartnerModal.image}
                    alt={activePartnerModal.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#D8AA42] font-semibold">
                    {activePartnerModal.location}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                    {activePartnerModal.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B68A2F] font-medium mt-1">
                    {activePartnerModal.title}
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-[#9E9E9E]">
                    <span>{activePartnerModal.email}</span>
                    <span>·</span>
                    <span>{activePartnerModal.phone}</span>
                  </div>
                </div>
              </div>

              {/* Comprehensive Bio */}
              <div className="py-6 space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold">
                  Biography & Professional Record
                </h4>
                <p className="text-sm text-[#D7D7D7] font-light leading-relaxed">
                  {activePartnerModal.longBio}
                </p>
              </div>

              {/* Education & Admissions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#232018]">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#D8AA42]">
                    <GraduationCap className="w-4 h-4 text-[#D8AA42]" />
                    <h5 className="text-xs uppercase tracking-wider font-semibold text-white">Education</h5>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#B5B5B5]">
                    {activePartnerModal.education.map((item, idx) => (
                      <li key={idx} className="leading-snug">• {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#D8AA42]">
                    <Scale className="w-4 h-4 text-[#D8AA42]" />
                    <h5 className="text-xs uppercase tracking-wider font-semibold text-white">Admissions & Credentials</h5>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#B5B5B5]">
                    {activePartnerModal.admissions.map((item, idx) => (
                      <li key={idx} className="leading-snug">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Practice Focus Tags */}
              <div className="mt-6 pt-4 border-t border-[#232018]">
                <h5 className="text-xs uppercase tracking-wider text-[#A0A0A0] font-semibold mb-2">Practice Focus</h5>
                <div className="flex flex-wrap gap-2 text-xs text-[#C8C8C8]">
                  {activePartnerModal.practiceFocus.map((focus, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-[#191919] border border-[#2B271E] text-[11px]">
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal footer CTA */}
              <div className="mt-8 pt-6 border-t border-[#232018] flex items-center justify-between">
                <button
                  onClick={() => setActivePartnerModal(null)}
                  className="px-5 py-2 text-xs uppercase tracking-wider text-[#A0A0A0] hover:text-white"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActivePartnerModal(null);
                    onOpenConsultation();
                  }}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#080808] bg-gradient-to-r from-[#B68A2F] to-[#D8AA42] hover:brightness-110"
                >
                  Direct Inquiry
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
