import React, { useState } from 'react';
import { PRACTICE_AREAS, OFFICES } from '../data/firmData';
import { X, CheckCircle, ShieldCheck, Calendar, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    practiceArea: 'Corporate Law',
    office: 'New York',
    preferredDate: '',
    timeSlot: 'Morning (EST / GMT-5)',
    summary: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      setRefId(`MAT-SCHED-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 700);
  };

  const handleReset = () => {
    setIsComplete(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      practiceArea: 'Corporate Law',
      office: 'New York',
      preferredDate: '',
      timeSlot: 'Morning (EST / GMT-5)',
      summary: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#B68A2F]/60 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_35px_rgba(182,138,47,0.25)] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#080808]/80 hover:bg-[#B68A2F] text-white hover:text-[#080808] border border-[#B68A2F]/40 transition-colors"
          aria-label="Close Schedule Consultation"
        >
          <X className="w-5 h-5" />
        </button>

        {isComplete ? (
          <div className="p-8 sm:p-10 text-center space-y-5 text-left">
            <div className="w-14 h-14 mx-auto rounded-none bg-[#1C1810] border border-[#D8AA42] flex items-center justify-center text-[#D8AA42]">
              <CheckCircle className="w-7 h-7" />
            </div>
            
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold">
                Privileged Request Logged
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mt-1">
                Consultation Request Received
              </h3>
            </div>

            <p className="text-sm text-[#C0C0C0] max-w-lg mx-auto font-light leading-relaxed text-center">
              Your confidential consultation details have been transmitted directly to the Managing Partner’s Office for the <strong className="text-white">{formData.office}</strong> hub. A conflict check will be executed, followed by confirmation of your requested conference time.
            </p>

            <div className="p-4 bg-[#171717] border border-[#2B271E] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#B0B0B0]">
              <div className="flex justify-between">
                <span className="text-[#808080]">Confirmation Code:</span>
                <span className="font-mono text-[#D8AA42] font-semibold">{refId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#808080]">Practice Group:</span>
                <span className="text-white">{formData.practiceArea}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#808080]">Primary Office:</span>
                <span className="text-white">{formData.office}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#808080]">Requested Date:</span>
                <span className="text-white">{formData.preferredDate || 'Earliest Available'}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={handleReset}
                className="px-8 py-3 text-xs uppercase tracking-widest font-semibold text-[#080808] bg-gradient-to-r from-[#B68A2F] to-[#D8AA42] hover:brightness-110"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10 text-left">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <ShieldCheck className="w-4 h-4 text-[#D8AA42]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#D8AA42] font-semibold">
                  Confidential Attorney-Client Matter
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
                Schedule a Partner Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1.5 font-light leading-relaxed">
                Connect with our senior partners to review cross-border transactions, regulatory strategy, or dispute representation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elizabeth Vance"
                    className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                    Company / Sovereign Entity
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Vance Capital Partners"
                    className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. evance@vancecap.com"
                    className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                    Telephone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +1 212 555 0188"
                    className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                    Practice Area *
                  </label>
                  <select
                    value={formData.practiceArea}
                    onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                    className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                  >
                    {PRACTICE_AREAS.map((pa) => (
                      <option key={pa.id} value={pa.title}>
                        {pa.title}
                      </option>
                    ))}
                    <option value="International Commercial Arbitration">
                      International Commercial Arbitration
                    </option>
                    <option value="Cross-Border M&A / FDI">
                      Cross-Border M&A / FDI
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                    Target Office *
                  </label>
                  <select
                    value={formData.office}
                    onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                    className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                  >
                    {OFFICES.map((off) => (
                      <option key={off.id} value={off.city}>
                        {off.city} ({off.country})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                    Requested Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                  >
                    <option value="Morning (EST / GMT-5)">Morning (09:00 - 12:00 EST)</option>
                    <option value="Afternoon (EST / GMT-5)">Afternoon (13:00 - 17:00 EST)</option>
                    <option value="Gulf Standard Time (GST)">Gulf Standard Time (10:00 - 16:00 GST)</option>
                    <option value="Asia Pacific (HKT)">Asia Pacific (10:00 - 16:00 HKT)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A5A5A5] mb-1 font-medium">
                  Confidential Matter Summary
                </label>
                <textarea
                  rows={3}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Outline the matter, jurisdiction, transaction scope, or counterparties for conflict vetting..."
                  className="w-full bg-[#161616] border border-[#2B271E] focus:border-[#D8AA42] text-sm text-white px-3.5 py-2.5 outline-none"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#201C14]">
                <div className="text-[11px] text-[#7E7E7E]">
                  Strictly privileged attorney-client correspondence.
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-5 py-2.5 text-xs uppercase tracking-wider text-[#8A8A8A] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center px-7 py-2.5 text-xs font-semibold uppercase tracking-widest text-[#080808] bg-gradient-to-r from-[#B68A2F] via-[#D8AA42] to-[#B68A2F] hover:brightness-110 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Verifying...' : 'Confirm Appointment'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
