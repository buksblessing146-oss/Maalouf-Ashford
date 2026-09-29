import React, { useState, useEffect } from 'react';
import { FIRM_LOGO } from '../data/firmData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, sectionId?: string) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', view: 'home', sectionId: 'hero' },
    { label: 'Welcome', view: 'welcome', sectionId: 'welcome' },
    { label: 'Areas of Practice', view: 'practice', sectionId: 'practice' },
    { label: 'Partners', view: 'partners', sectionId: 'partners' },
    { label: 'Offices', view: 'offices', sectionId: 'offices' },
    { label: 'Awards', view: 'awards', sectionId: 'awards' },
    { label: 'Publications', view: 'publications', sectionId: 'publications' },
    { label: 'In the News', view: 'news', sectionId: 'news' },
  ];

  const handleNavClick = (view: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(view, sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080808]/98 backdrop-blur-md border-b border-[#B68A2F]/30 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#080808] via-[#080808]/90 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[54px] sm:min-h-[64px]">
          {/* Left: Firm Logo - Prominent, crisp and high-contrast */}
          <button
            onClick={() => handleNavClick('home', 'hero')}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AA42] rounded py-1 group cursor-pointer"
            aria-label="Maalouf Ashford & Talbot - Home"
          >
            <img
              src={FIRM_LOGO}
              alt="Maalouf Ashford & Talbot Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_12px_rgba(216,170,66,0.25)] brightness-110 contrast-105"
              referrerPolicy="no-referrer"
            />
          </button>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.view, item.sectionId)}
                  className={`text-xs xl:text-sm font-medium tracking-wide transition-colors duration-200 relative py-1 focus:outline-none focus-visible:text-[#D8AA42] whitespace-nowrap ${
                    isActive
                      ? 'text-[#D8AA42] font-semibold'
                      : 'text-[#D7D7D7]/80 hover:text-[#FFFFFF]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B68A2F] to-[#D8AA42] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side: Gold Outlined Schedule Consultation button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#D8AA42] border border-[#B68A2F] rounded-none hover:bg-[#B68A2F] hover:text-[#080808] transition-all duration-300 shadow-[0_0_15px_rgba(182,138,47,0.15)] hover:shadow-[0_0_20px_rgba(216,170,66,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8AA42] group whitespace-nowrap"
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile menu hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-2.5 py-1.5 text-[11px] font-semibold tracking-wider text-[#D8AA42] border border-[#B68A2F] uppercase"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#D7D7D7] hover:text-[#D8AA42] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B68A2F]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A]/98 border-b border-[#B68A2F]/30 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view, item.sectionId)}
                className={`text-left py-2.5 px-3 text-sm font-medium tracking-wide border-l-2 transition-all ${
                  currentView === item.view
                    ? 'border-[#D8AA42] text-[#D8AA42] bg-[#B68A2F]/10'
                    : 'border-transparent text-[#D7D7D7] hover:border-[#B68A2F]/40 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-[#232018]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-semibold text-[#080808] bg-gradient-to-r from-[#B68A2F] via-[#D8AA42] to-[#B68A2F] hover:brightness-110 shadow-lg"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
