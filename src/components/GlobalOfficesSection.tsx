import React, { useState } from 'react';
import { OFFICES, NY_HQ_IMG, PRACTICE_AREAS } from '../data/firmData';
import { Office } from '../types';
import { MapPin, Phone, Mail, Printer, CheckCircle, Send, Globe, ArrowRight } from 'lucide-react';

export const GlobalOfficesSection: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<Office>(OFFICES[0]);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    practiceArea: 'Corporate Law',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please complete all required fields.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    // Simulate verified submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="offices" className="relative py-20 lg:py-28 bg-[#0D0D0D] border-t border-[#1C1912]">
      {/* Background Glow */}
      <div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#B68A2F]/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#B68A2F]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8AA42] font-semibold">
              Global Presence & Counsel
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight leading-tight">
            Worldwide Reach, <span className="italic text-gold-gradient font-normal">Direct Access</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed">
            Headquartered on Wall Street with strategic presences situated in the world's most vital financial and commercial gateways.
          </p>
        </div>

        {/* Top Two-Column Block: Left Image & Global HQ, Right Office Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
          
          {/* Left Side: Office Architectural Image & New York HQ Details */}
          <div className="lg:col-span-5 bg-[#141414] border border-[#242017] p-6 lg:p-7 relative shadow-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden mb-6 bg-[#181818] border border-[#2A2518]">
              <img
                src={NY_HQ_IMG}
                alt="Maalouf Ashford & Talbot 48 Wall Street New York Headquarters"
                className="w-full h-full object-cover filter contrast-105 brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-70" />
              <div className="absolute top-3 left-3 bg-[#080808]/90 border border-[#B68A2F]/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[#D8AA42] backdrop-blur-sm">
                Global Headquarters
              </div>
            </div>

            {/* Exact Required New York Details */}
            <div className="text-left space-y-4">
              <div>
                <h3 className="text-xl font-serif text-white font-medium mb-1">
                  MAALOUF ASHFORD & TALBOT, LLP
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#B68A2F] font-semibold">
                  World Financial Center · New York
                </p>
              </div>

              <div className="p-4 bg-[#0E0E0E] border-l-2 border-[#D8AA42] text-xs text-[#D0D0D0] space-y-1 font-light">
                <div className="font-semibold text-white">Address:</div>
                <div className="text-[#E0E0E0] font-medium">MAALOUF ASHFORD & TALBOT, LLP</div>
                <div>48 Wall Street, 11th Fl.</div>
                <div>New York, New York 10005</div>
                <div>United States of America</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#C0C0C0]">
                <div className="flex items-center gap-2 p-2.5 bg-[#181818] border border-[#221F17]">
                  <Phone className="w-4 h-4 text-[#D8AA42] shrink-0" />
                  <div>
                    <div className="text-[10px] text-[#8E8E8E] uppercase">Telephone</div>
                    <a href="tel:2125375035" className="hover:text-white font-mono">212.537.5035</a>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-[#181818] border border-[#221F17]">
                  <Printer className="w-4 h-4 text-[#D8AA42] shrink-0" />
                  <div>
                    <div className="text-[10px] text-[#8E8E8E] uppercase">Facsimile</div>
                    <span className="font-mono">212.537.9268</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#9E9E9E] pt-2">
                <Mail className="w-3.5 h-3.5 text-[#D8AA42]" />
                <span>General Counsel Desk:</span>
                <a href="mailto:ny@maaloufashford.com" className="text-[#D8AA42] hover:underline">
                  ny@maaloufashford.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Real Office Locations Selector & Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="mb-4 text-left">
              <span className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold block mb-1">
                Select Regional Office
              </span>
              <p className="text-xs text-[#999999]">
                Click any financial center below to view specific regional coordinates, counsel contact, and local jurisdiction.
              </p>
            </div>

            {/* 8 Location Cards Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
              {OFFICES.map((office) => {
                const isCurrent = selectedOffice.id === office.id;
                return (
                  <button
                    key={office.id}
                    onClick={() => setSelectedOffice(office)}
                    className={`p-3 text-left border transition-all duration-200 ${
                      isCurrent
                        ? 'bg-[#1C1810] border-[#D8AA42] text-white shadow-[0_0_15px_rgba(182,138,47,0.2)]'
                        : 'bg-[#121212] border-[#221F18] text-[#A5A5A5] hover:border-[#B68A2F]/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold">{office.city}</span>
                      {office.isHeadquarters && (
                        <span className="text-[9px] text-[#D8AA42] uppercase font-mono">HQ</span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#7F7F7F] block truncate">
                      {office.country}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Office Expanded Detail Card */}
            <div className="bg-[#141414] border border-[#242017] p-6 text-left relative">
              <div className="flex items-center justify-between pb-4 border-b border-[#221E17] mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1C1810] border border-[#B68A2F]/50 flex items-center justify-center text-[#D8AA42]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-white font-medium">
                      {selectedOffice.city} Office
                    </h4>
                    <span className="text-xs text-[#D8AA42] uppercase tracking-wider">
                      {selectedOffice.country} · {selectedOffice.region}
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] uppercase tracking-wider text-[#8A8A8A] block">
                    Regional Practice
                  </span>
                  <span className="text-xs text-[#C5C5C5]">
                    Direct Partner Presence
                  </span>
                </div>
              </div>

              {/* Office Address & Jurisdiction */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#C5C5C5] mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-[#D8AA42] font-semibold text-[11px] uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Office Location</span>
                  </div>
                  {selectedOffice.address.map((line, idx) => (
                    <div key={idx} className="font-light">{line}</div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="text-[#D8AA42] font-semibold text-[11px] uppercase tracking-wider">
                    Primary Jurisdiction & Practice
                  </div>
                  <p className="font-light text-[#A8A8A8] leading-relaxed">
                    {selectedOffice.jurisdiction}
                  </p>
                </div>
              </div>

              {/* Office Contact Strip */}
              <div className="pt-4 border-t border-[#201D16] flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-[#D7D7D7]">
                    <Phone className="w-3.5 h-3.5 text-[#D8AA42]" />
                    <a href={`tel:${selectedOffice.telephone.replace(/[^0-9+]/g, '')}`} className="hover:text-white font-mono">
                      {selectedOffice.telephone}
                    </a>
                  </div>
                  {selectedOffice.facsimile && (
                    <div className="hidden sm:flex items-center gap-1.5 text-[#9E9E9E]">
                      <Printer className="w-3.5 h-3.5 text-[#B68A2F]" />
                      <span className="font-mono">{selectedOffice.facsimile}</span>
                    </div>
                  )}
                </div>

                <a
                  href={`mailto:${selectedOffice.email}`}
                  className="inline-flex items-center gap-1 text-[#D8AA42] hover:text-white transition-colors uppercase tracking-wider text-[11px] font-semibold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{selectedOffice.email}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Premium Contact Form */}
        <div id="contact" className="mt-16 bg-[#121212] border border-[#232018] p-8 sm:p-12 text-left relative">
          <div className="max-w-3xl mb-8">
            <span className="text-xs uppercase tracking-[0.2em] text-[#D8AA42] font-semibold block mb-2">
              Confidential Retention & Inquiry
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
              Initiate a Privileged Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#A0A0A0] mt-2 font-light">
              Submit matter details for conflict checks and partner consultation. All correspondence is held in strict professional confidence under attorney-client privilege.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#161616] border border-[#B68A2F]/60 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#1C1810] border border-[#D8AA42] flex items-center justify-center text-[#D8AA42]">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-serif text-white font-medium">
                Inquiry Received Under Privilege
              </h4>
              <p className="text-xs sm:text-sm text-[#C0C0C0] max-w-lg mx-auto font-light leading-relaxed">
                Thank you for contacting Maalouf Ashford & Talbot, LLP. Your inquiry has been routed to our conflicts committee and practice group leaders. A senior partner will contact you within one business day.
              </p>
              <div className="text-xs text-[#8E8E8E] font-mono">
                Matter Reference: MAT-CONF-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    practiceArea: 'Corporate Law',
                    message: '',
                  });
                }}
                className="mt-4 px-6 py-2 text-xs uppercase tracking-widest text-[#D8AA42] border border-[#B68A2F] hover:bg-[#B68A2F] hover:text-[#080808] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formError && (
                <div className="p-3 bg-red-950/40 border border-red-800 text-red-300 text-xs">
                  {formError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-2 font-medium">
                    Full Name <span className="text-[#D8AA42]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Robert Sterling"
                    className="w-full bg-[#171717] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-4 py-3 outline-none transition-colors"
                  />
                </div>

                {/* Company / Institution */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-2 font-medium">
                    Company / Sovereign Entity
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Global Energy Corp."
                    className="w-full bg-[#171717] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-4 py-3 outline-none transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-2 font-medium">
                    Corporate Email <span className="text-[#D8AA42]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sterling@apexenergy.com"
                    className="w-full bg-[#171717] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-4 py-3 outline-none transition-colors"
                  />
                </div>

                {/* Telephone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-2 font-medium">
                    Direct Telephone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 212 555 0192"
                    className="w-full bg-[#171717] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-4 py-3 outline-none transition-colors"
                  />
                </div>

                {/* Practice Area Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-2 font-medium">
                    Relevant Practice Area <span className="text-[#D8AA42]">*</span>
                  </label>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full bg-[#171717] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-4 py-3 outline-none transition-colors cursor-pointer"
                  >
                    {PRACTICE_AREAS.map((pa) => (
                      <option key={pa.id} value={pa.title} className="bg-[#111111] text-white">
                        {pa.title}
                      </option>
                    ))}
                    <option value="International Arbitration" className="bg-[#111111] text-white">
                      International Arbitration
                    </option>
                    <option value="General Cross-Border Counsel" className="bg-[#111111] text-white">
                      General Cross-Border Counsel
                    </option>
                  </select>
                </div>

                {/* Target Office */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-2 font-medium">
                    Preferred Office Hub
                  </label>
                  <select
                    defaultValue="New York"
                    className="w-full bg-[#171717] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-4 py-3 outline-none transition-colors cursor-pointer"
                  >
                    {OFFICES.map((off) => (
                      <option key={off.id} value={off.city} className="bg-[#111111] text-white">
                        {off.city} ({off.country})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-2 font-medium">
                  Summary of Legal Matter <span className="text-[#D8AA42]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide an overview of the legal matter, counterparties involved, and jurisdictional scope for conflict checking..."
                  className="w-full bg-[#171717] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-4 py-3 outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <p className="text-[11px] text-[#7E7E7E]">
                  Confidential communication. No attorney-client relationship is formed prior to written engagement.
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-9 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#080808] bg-gradient-to-r from-[#B68A2F] via-[#D8AA42] to-[#B68A2F] hover:brightness-110 transition-all duration-300 shadow-[0_4px_20px_rgba(182,138,47,0.3)] disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing Clearance...</span>
                  ) : (
                    <>
                      <span>Transmit Confidential Inquiry</span>
                      <Send className="w-3.5 h-3.5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
