import React from 'react';
import { FIRM_LOGO } from '../data/firmData';
import { ArrowUp, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, sectionId?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', view: 'home', sectionId: 'hero' },
    { label: 'Welcome', view: 'welcome', sectionId: 'welcome' },
    { label: 'Areas of Practice', view: 'practice', sectionId: 'practice' },
    { label: 'Partners', view: 'partners', sectionId: 'partners' },
    { label: 'Offices', view: 'offices', sectionId: 'offices' },
    { label: 'Awards', view: 'awards', sectionId: 'awards' },
    { label: 'Publications', view: 'publications', sectionId: 'publications' },
    { label: 'In the News', view: 'news', sectionId: 'news' },
  ];

  return (
    <footer className="bg-[#080808] border-t border-[#1C1810] text-[#D7D7D7] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1A1711]">
          
          {/* Col 1: Logo & Overview */}
          <div className="lg:col-span-4 text-left">
            <div className="mb-6 inline-block">
              <img
                src={FIRM_LOGO}
                alt="Maalouf Ashford & Talbot Logo"
                className="h-14 sm:h-16 md:h-18 w-auto object-contain filter drop-shadow-[0_2px_15px_rgba(216,170,66,0.25)] brightness-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-[#9E9E9E] font-light leading-relaxed max-w-sm mb-6">
              Maalouf Ashford & Talbot, LLP is an international business law firm recognized globally for high-stakes cross-border transactions, sovereign advisory, and commercial dispute resolution.
            </p>
            <div className="text-xs text-[#8A8A8A] space-y-1">
              <div className="text-[#D8AA42] font-semibold text-[11px] uppercase tracking-wider">
                New York Headquarters
              </div>
              <div>48 Wall Street, 11th Floor</div>
              <div>New York, New York 10005, USA</div>
              <div className="text-[#D8AA42] font-mono pt-1">Tel: 212.537.5035 · Fax: 212.537.9268</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8AA42] font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A8A8]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.view, item.sectionId)}
                    className="hover:text-[#D8AA42] transition-colors focus:outline-none"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Financial Centers */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8AA42] font-semibold mb-4">
              Global Office Hubs
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A8A8]">
              <li><strong className="text-white font-medium">New York:</strong> 48 Wall Street, 11th Fl.</li>
              <li><strong className="text-white font-medium">Dubai:</strong> Burj Daman, Level 14, DIFC</li>
              <li><strong className="text-white font-medium">Riyadh:</strong> King Fahd Road, Al Olaya</li>
              <li><strong className="text-white font-medium">Hong Kong:</strong> Two IFC, 31st Fl., Central</li>
              <li><strong className="text-white font-medium">Shanghai:</strong> Shanghai Tower, 38th Fl.</li>
              <li><strong className="text-white font-medium">São Paulo:</strong> Av. Faria Lima, 3477</li>
            </ul>
          </div>

          {/* Col 4: Retain & Contact */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8AA42] font-semibold mb-4">
              Client Portal
            </h4>
            <p className="text-xs text-[#999999] mb-4 font-light">
              Direct access for institutional clients and conflict clearance.
            </p>
            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 px-3 text-center text-xs uppercase tracking-wider font-semibold text-[#D8AA42] border border-[#B68A2F] hover:bg-[#B68A2F] hover:text-[#080808] transition-colors block mb-4"
            >
              Schedule Consultation
            </button>
            <a
              href="mailto:ny@maaloufashford.com"
              className="text-xs text-[#8E8E8E] hover:text-[#D8AA42] block transition-colors"
            >
              ny@maaloufashford.com
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#707070] gap-4">
          <div className="flex flex-wrap items-center gap-3 text-left">
            <span>© {new Date().getFullYear()} Maalouf Ashford & Talbot, LLP. All rights reserved.</span>
            <span>·</span>
            <span className="text-[#888888]">Attorney Advertising. Prior results do not guarantee a similar outcome.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A0A0A0] hover:text-[#D8AA42] transition-colors"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
