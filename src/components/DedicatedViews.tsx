import React, { useState } from 'react';
import {
  PRACTICE_AREAS,
  PARTNERS,
  OFFICES,
  AWARDS,
  PUBLICATIONS,
  IN_THE_NEWS,
  WELCOME_IMG,
  NY_HQ_IMG
} from '../data/firmData';
import { Publication, NewsArticle, PracticeArea, Partner } from '../types';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Search,
  BookOpen,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Trophy,
  CheckCircle2,
  FileText,
  X,
  Printer
} from 'lucide-react';

interface DedicatedViewsProps {
  view: string;
  onBackToHome: () => void;
  onOpenConsultation: () => void;
}

export const DedicatedViews: React.FC<DedicatedViewsProps> = ({
  view,
  onBackToHome,
  onOpenConsultation,
}) => {
  // Publications state
  const [pubSearch, setPubSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePub, setActivePub] = useState<Publication | null>(null);

  // News state
  const [newsFilter, setNewsFilter] = useState('All');
  const [activeNews, setActiveNews] = useState<NewsArticle | null>(null);

  // Practice state
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  // Partner state
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // Office state
  const [activeOfficeTab, setActiveOfficeTab] = useState(OFFICES[0].id);

  const categories = ['All', 'Middle East Corporate Strategy', 'International Arbitration', 'Oil & Gas / Energy', 'Mergers & Acquisitions'];
  const newsCategories = ['All', 'Firm Distinction', 'Representative Deal', 'Partner Recognition', 'Firm Expansion'];

  const filteredPubs = PUBLICATIONS.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(pubSearch.toLowerCase()) ||
      p.summary.toLowerCase().includes(pubSearch.toLowerCase()) ||
      p.author.toLowerCase().includes(pubSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const filteredNews = IN_THE_NEWS.filter((n) => {
    return newsFilter === 'All' || n.category === newsFilter;
  });

  // Breadcrumb / Back Bar
  const HeaderBar = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="pt-28 pb-12 bg-gradient-to-b from-[#080808] to-[#101010] border-b border-[#1C1810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8AA42] hover:text-white transition-colors mb-6 group focus:outline-none"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Return to Main Portal</span>
        </button>

        <div className="inline-flex items-center gap-2 mb-2 block">
          <span className="w-6 h-[1px] bg-[#B68A2F]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#D8AA42] font-semibold">
            {subtitle}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-tight">
          {title}
        </h1>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#080808] text-[#D7D7D7]">
      
      {/* 1. DEDICATED PUBLICATIONS VIEW */}
      {view === 'publications' && (
        <div>
          <HeaderBar
            title="Legal Publications & Briefings"
            subtitle="Thought Leadership & Whitepapers"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Search and Category filter */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-8 border-b border-[#1C1912]">
              {/* Category Pills/Buttons */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? 'bg-[#B68A2F] text-[#080808] font-semibold'
                        : 'bg-[#141414] text-[#A0A0A0] hover:text-white hover:bg-[#1E1E1E] border border-[#232018]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7F7F7F]" />
                <input
                  type="text"
                  value={pubSearch}
                  onChange={(e) => setPubSearch(e.target.value)}
                  placeholder="Search articles, authors..."
                  className="w-full bg-[#121212] border border-[#232018] focus:border-[#D8AA42] text-xs text-white pl-9 pr-4 py-2 outline-none"
                />
              </div>
            </div>

            {/* Publication Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPubs.map((pub) => (
                <div
                  key={pub.id}
                  className="bg-[#111111] border border-[#221F17] hover:border-[#B68A2F] p-8 text-left flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    {/* Metadata line with typographic separators per zero-pill rules */}
                    <div className="flex items-center gap-2 text-xs text-[#B68A2F] mb-3">
                      <span>{pub.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pub.date}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pub.readTime}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif text-white font-medium group-hover:text-gold-gradient transition-colors mb-3 leading-snug">
                      {pub.title}
                    </h2>

                    <div className="text-xs text-[#8E8E8E] mb-4 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#D8AA42]" />
                      <span>{pub.author}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed mb-6">
                      {pub.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1F1C15] flex items-center justify-between">
                    <button
                      onClick={() => setActivePub(pub)}
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#D8AA42] hover:text-white transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Complete Monograph</span>
                    </button>
                    <span className="text-[11px] text-[#606060]">Institutional Briefing</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 2. DEDICATED IN THE NEWS VIEW */}
      {view === 'news' && (
        <div>
          <HeaderBar
            title="Firm News & Market Dispatches"
            subtitle="Press Releases & Deal Accolades"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-[#1C1810]">
              {newsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setNewsFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-medium transition-all ${
                    newsFilter === cat
                      ? 'bg-[#B68A2F] text-[#080808] font-semibold'
                      : 'bg-[#141414] text-[#A0A0A0] hover:text-white border border-[#232018]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* News Articles Grid */}
            <div className="space-y-6">
              {filteredNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#111111] border border-[#221F17] hover:border-[#B68A2F] p-7 text-left transition-all duration-300 group hover:bg-[#141414]"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 text-xs text-[#B68A2F]">
                      <span className="font-semibold">{item.outlet}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.date}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#888888]">{item.category}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif text-white font-medium group-hover:text-[#D8AA42] transition-colors mb-3 leading-snug">
                    {item.headline}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#A8A8A8] font-light leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#1F1C15]">
                    <button
                      onClick={() => setActiveNews(item)}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D8AA42] hover:text-white transition-colors"
                    >
                      <span>Read Full Press Statement</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. DEDICATED WELCOME VIEW */}
      {view === 'welcome' && (
        <div>
          <HeaderBar
            title="Institutional Heritage & Ethos"
            subtitle="About Maalouf Ashford & Talbot, LLP"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#141414] border border-[#242018] p-3">
                  <img
                    src={WELCOME_IMG}
                    alt="Maalouf Ashford & Talbot Headquarters"
                    className="w-full aspect-[4/5] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 bg-[#111111] border border-[#242017]">
                  <h3 className="text-base font-serif text-white mb-2">Global Headquarters</h3>
                  <p className="text-xs text-[#A0A0A0] leading-relaxed">
                    48 Wall Street, 11th Floor<br />
                    New York, New York 10005, United States<br />
                    Direct Dial: 212.537.5035
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-[#C0C0C0] font-light leading-relaxed text-sm sm:text-base">
                <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                  Two Decades of Cross-Border Leadership
                </h2>
                <p>
                  Established in 2005, Maalouf Ashford & Talbot, LLP has earned an international reputation as one of the preeminent business law firms advising across complex sovereign borders. We combine Wall Street rigor with seasoned in-region presence in Riyadh, Dubai, Hong Kong, Shanghai, São Paulo, Beirut, and Moscow.
                </p>
                <p>
                  Unlike fragmented franchise practices, Maalouf Ashford & Talbot operates as an integrated global partnership. Our attorneys regularly counsel governments on international treaties and foreign investment regimes, structure syndicated sovereign debt facilities, negotiate multi-decade oil & gas concessions, and represent Fortune 500 multinationals in contentious cross-border arbitrations before the ICC, LCIA, DIFC-LCIA, and HKIAC tribunals.
                </p>

                <div className="pt-6 border-t border-[#221E17] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#121212] border border-[#242017]">
                    <div className="text-[#D8AA42] font-serif text-xl mb-1">Direct Partner Access</div>
                    <p className="text-xs text-[#959595]">
                      Every client mandate is steered personally by a senior partner with decades of subject matter command.
                    </p>
                  </div>
                  <div className="p-4 bg-[#121212] border border-[#242017]">
                    <div className="text-[#D8AA42] font-serif text-xl mb-1">Uncompromising Ethics</div>
                    <p className="text-xs text-[#959595]">
                      Rigorous multi-jurisdictional conflict controls and unyielding dedication to client confidentiality.
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={onOpenConsultation}
                    className="px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#080808] bg-gradient-to-r from-[#B68A2F] to-[#D8AA42] hover:brightness-110"
                  >
                    Schedule Confidential Consultation
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 4. DEDICATED OFFICES VIEW */}
      {view === 'offices' && (
        <div>
          <HeaderBar
            title="Global Office Directory"
            subtitle="Strategic Financial Gateways"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {OFFICES.map((office) => (
                <div
                  key={office.id}
                  className="bg-[#121212] border border-[#232018] hover:border-[#B68A2F] p-6 text-left flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold">
                        {office.region}
                      </span>
                      {office.isHeadquarters && (
                        <span className="text-[10px] bg-[#B68A2F]/20 text-[#D8AA42] border border-[#B68A2F]/40 px-2 py-0.5">
                          Global HQ
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-serif text-white font-medium mb-3 group-hover:text-gold-gradient transition-colors">
                      {office.city}, {office.country}
                    </h2>

                    <div className="text-xs text-[#9E9E9E] space-y-1 mb-6 font-light">
                      {office.address.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1E1B15] space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-[#C0C0C0]">
                      <Phone className="w-3.5 h-3.5 text-[#D8AA42]" />
                      <a href={`tel:${office.telephone.replace(/[^0-9+]/g, '')}`} className="font-mono hover:text-white">
                        {office.telephone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-[#C0C0C0]">
                      <Mail className="w-3.5 h-3.5 text-[#D8AA42]" />
                      <a href={`mailto:${office.email}`} className="hover:text-white text-[#D8AA42]">
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 5. DEDICATED PARTNERS VIEW */}
      {view === 'partners' && (
        <div>
          <HeaderBar
            title="Partners & Counsel"
            subtitle="Global Practice Leaders"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {PARTNERS.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-[#121212] border border-[#232018] p-7 flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="w-full sm:w-40 aspect-[3/4] overflow-hidden bg-[#181818] shrink-0 border border-[#2B271E]">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <span className="text-[11px] uppercase tracking-widest text-[#D8AA42] font-semibold">
                      {partner.location}
                    </span>
                    <h2 className="text-2xl font-serif text-white font-medium">
                      {partner.name}
                    </h2>
                    <p className="text-xs text-[#B68A2F] font-semibold">
                      {partner.title}
                    </p>
                    <p className="text-xs text-[#A8A8A8] font-light leading-relaxed">
                      {partner.longBio}
                    </p>

                    <div className="pt-3 border-t border-[#1F1C15] flex items-center justify-between text-xs">
                      <a
                        href={`mailto:${partner.email}`}
                        className="text-[#D8AA42] hover:text-white transition-colors"
                      >
                        {partner.email}
                      </a>
                      <button
                        onClick={onOpenConsultation}
                        className="px-3 py-1 bg-[#1A1812] border border-[#B68A2F]/40 text-[#D8AA42] hover:bg-[#B68A2F] hover:text-[#080808] transition-colors uppercase text-[10px] tracking-wider"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. DEDICATED AWARDS VIEW */}
      {view === 'awards' && (
        <div>
          <HeaderBar
            title="Awards & Global Accolades"
            subtitle="Audit of International Distinction"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {AWARDS.map((award) => (
                <div
                  key={award.id}
                  className="bg-[#121212] border border-[#232018] p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-[#1C1810] border border-[#B68A2F]/50 flex items-center justify-center text-[#D8AA42] mb-4">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-[#B68A2F] uppercase tracking-wider mb-1">
                      {award.category} · {award.year}
                    </div>
                    <h2 className="text-xl font-serif text-white font-medium mb-2">
                      {award.title}
                    </h2>
                    <div className="text-xs text-[#D8AA42] font-semibold mb-4 uppercase">
                      {award.organization}
                    </div>
                    <p className="text-xs text-[#9E9E9E] font-light leading-relaxed">
                      {award.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#1E1B15] text-[11px] text-[#A0A0A0]">
                    Verified Ranking · {award.badgeLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 7. DEDICATED AREAS OF PRACTICE VIEW */}
      {view === 'practice' && (
        <div>
          <HeaderBar
            title="Comprehensive Practice Directory"
            subtitle="Global Legal Disciplines"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="space-y-12">
              {PRACTICE_AREAS.map((practice, idx) => (
                <div
                  key={practice.id}
                  className="bg-[#111111] border border-[#232018] p-8 lg:p-10 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-4 aspect-[16/10] overflow-hidden bg-[#181818]">
                    <img
                      src={practice.image}
                      alt={practice.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="lg:col-span-8 space-y-4">
                    <span className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold">
                      0{idx + 1} · {practice.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                      {practice.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#B0B0B0] font-light leading-relaxed">
                      {practice.description}
                    </p>

                    <div>
                      <h3 className="text-xs uppercase tracking-wider text-[#A0A0A0] font-semibold mb-2">
                        Representative Deal Focus
                      </h3>
                      <ul className="space-y-1 text-xs text-[#C5C5C5]">
                        {practice.representativeDeals.map((deal, dIdx) => (
                          <li key={dIdx} className="leading-snug">• {deal}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onOpenConsultation}
                        className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#080808] bg-gradient-to-r from-[#B68A2F] to-[#D8AA42] hover:brightness-110"
                      >
                        Retain Practice Group
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Publication Reader Modal */}
      {activePub && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-[#111111] border border-[#B68A2F]/60 p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setActivePub(null)}
              className="absolute top-4 right-4 p-2 bg-[#080808] text-white hover:text-[#D8AA42] border border-[#26221A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pb-6 border-b border-[#232018]">
              <span className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold">
                {activePub.category} · {activePub.date} · {activePub.readTime}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mt-2 leading-tight">
                {activePub.title}
              </h3>
              <p className="text-xs text-[#B68A2F] mt-2 font-medium">
                Author: {activePub.author}
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#D7D7D7] font-light leading-relaxed">
              {activePub.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#232018] flex items-center justify-between text-xs text-[#8E8E8E]">
              <span>Maalouf Ashford & Talbot International Legal Insights</span>
              <button
                onClick={() => setActivePub(null)}
                className="px-5 py-2 text-xs uppercase tracking-wider text-[#D8AA42] border border-[#B68A2F]"
              >
                Close Monograph
              </button>
            </div>
          </div>
        </div>
      )}

      {/* News Article Modal */}
      {activeNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-[#111111] border border-[#B68A2F]/60 p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => setActiveNews(null)}
              className="absolute top-4 right-4 p-2 bg-[#080808] text-white hover:text-[#D8AA42] border border-[#26221A]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 pb-6 border-b border-[#232018]">
              <span className="text-xs uppercase tracking-widest text-[#D8AA42] font-semibold">
                {activeNews.outlet} · {activeNews.date}
              </span>
              <h3 className="text-2xl font-serif text-white font-medium mt-2 leading-tight">
                {activeNews.headline}
              </h3>
            </div>

            <p className="text-sm text-[#D7D7D7] font-light leading-relaxed mb-6">
              {activeNews.details}
            </p>

            <div className="pt-6 border-t border-[#232018] flex justify-end">
              <button
                onClick={() => setActiveNews(null)}
                className="px-5 py-2 text-xs uppercase tracking-wider text-[#D8AA42] border border-[#B68A2F]"
              >
                Close Statement
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
