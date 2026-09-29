import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { PracticeAreasSection } from './components/PracticeAreasSection';
import { PartnersSection } from './components/PartnersSection';
import { AwardsSection } from './components/AwardsSection';
import { GlobalOfficesSection } from './components/GlobalOfficesSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { DedicatedViews } from './components/DedicatedViews';
import { Calendar, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [showFloatingCta, setShowFloatingCta] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingCta(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (view: string, sectionId?: string) => {
    setCurrentView(view);
    
    if (view === 'home') {
      if (sectionId) {
        // Small delay to allow DOM transition if returning from dedicated view
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#D7D7D7] flex flex-col font-sans selection:bg-[#B68A2F]/30 selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            {/* Section 1 — Hero */}
            <HeroSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onExplorePracticeAreas={() => {
                const el = document.getElementById('practice');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Section 2 — Welcome */}
            <WelcomeSection
              onLearnMore={() => handleNavigate('welcome')}
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* Section 3 — Areas of Practice */}
            <PracticeAreasSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* Section 4 — Partners */}
            <PartnersSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* Section 5 — Awards & Recognition */}
            <AwardsSection />

            {/* Section 6 — Global Presence & Contact */}
            <GlobalOfficesSection />
          </>
        ) : (
          /* Dedicated Pages for Welcome, Practice, Partners, Offices, Awards, Publications, In the News */
          <DedicatedViews
            view={currentView}
            onBackToHome={() => handleNavigate('home')}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Schedule Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Floating Consultation Button (Subtle & Mobile Accessible) */}
      {showFloatingCta && (
        <aside
          aria-label="Floating Consultation Action"
          className="fixed bottom-6 right-6 z-40 sm:hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-[#B68A2F] text-[#080808] font-semibold text-xs uppercase tracking-widest shadow-[0_4px_25px_rgba(182,138,47,0.4)] active:scale-95 focus:outline-none"
            aria-label="Schedule Consultation with Maalouf Ashford & Talbot"
          >
            <Calendar className="w-4 h-4 text-[#080808]" />
            <span>Consult</span>
          </button>
        </aside>
      )}
    </div>
  );
}
