import { PracticeArea, Partner, Office, Award, Publication, NewsArticle } from '../types';

export const FIRM_LOGO = "https://res.cloudinary.com/yc7cencg/image/upload/v1790645862/ChatGPT_Image_Sep_29_2026_02_36_56_AM_ljgif4.png";
export const HERO_ATTORNEY_IMG = "https://res.cloudinary.com/yc7cencg/image/upload/v1790609758/ChatGPT_Image_Sep_28__2026__04_31_29_PM-removebg-preview_fogwef.png";
export const WELCOME_IMG = "https://res.cloudinary.com/yc7cencg/image/upload/v1790643076/6229091_slcm37.jpg";
export const NY_HQ_IMG = "https://res.cloudinary.com/yc7cencg/image/upload/v1790643076/6229091_slcm37.jpg";

export const FIRM_STATS = [
  { value: "15+", label: "Global Offices & Affiliates", sublabel: "Advising across major financial capitals" },
  { value: "60+", label: "International Legal Awards", sublabel: "Honored by premier global rating agencies" },
  { value: "$50B+", label: "Cross-Border Transaction Volume", sublabel: "Structuring marquee multilateral deals" },
  { value: "2005", label: "Year Established", sublabel: "Two decades of unwavering institutional excellence" },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "corporate-law",
    title: "Corporate Law",
    subtitle: "Strategic Governance & Institutional Counsel",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790643684/ChatGPT_Image_Sep_29_2026_02_00_53_AM_jaaghn.png",
    description: "Maalouf Ashford & Talbot advises leading multinational conglomerates, sovereign wealth vehicles, and privately held enterprises on full-lifecycle corporate governance, multi-jurisdictional compliance, cross-border restructuring, and institutional expansion.",
    highlights: [
      "Board advisory & fiduciary obligations across common and civil law jurisdictions",
      "Multinational corporate structuring & holding company regimes",
      "Executive compensation, equity arrangements, and shareholder agreements",
      "Regulatory enforcement defense before international financial authorities"
    ],
    scope: ["Entity Formation", "Holding Regimes", "Corporate Restructuring", "Joint Ventures", "Compliance Audits"],
    representativeDeals: [
      "Advising a Fortune 100 technology enterprise on restructuring EMEA and GCC corporate entities spanning 11 jurisdictions.",
      "Structuring cross-border joint venture between US energy developer and GCC sovereign investment arm valued at $1.8B."
    ]
  },
  {
    id: "mergers-acquisitions",
    title: "Mergers & Acquisitions",
    subtitle: "Complex Cross-Border Transactions",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790643790/Devino_antreprenor_impreuna_este_simplu_mmrako.jpg",
    description: "We orchestrate bilateral and competitive cross-border M&A transactions, carve-outs, tender offers, and strategic alliances. Our attorneys bring unparalleled deal discipline from initial letters of intent through regulatory clearances and post-closing integration.",
    highlights: [
      "Cross-border buy-side and sell-side representation with foreign direct investment (FDI) clearances",
      "Private equity sponsor leveraged buyouts & consortium investments",
      "Antitrust, CFIUS, and foreign competition merger control approvals",
      "Hostile takeover defense and shareholder activism response"
    ],
    scope: ["Public & Private M&A", "Consortium Bids", "Cross-Border Carve-Outs", "CFIUS & National Security Review"],
    representativeDeals: [
      "Represented an international infrastructure fund in the $2.3B acquisition of maritime logistics assets across 4 continents.",
      "Advised sovereign consortium on the purchase of strategic mineral processing assets in South America and the Middle East."
    ]
  },
  {
    id: "banking-finance",
    title: "Banking & Finance",
    subtitle: "Syndicated Facilities & Sovereign Financing",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790643919/You_Don_t_Negotiate_You_Command_t0amqe.jpg",
    description: "Our banking and finance practice counsels premier financial institutions, sovereign wealth entities, multilateral development banks, and corporate borrowers on sophisticated debt instruments, syndicated loan facilities, and structured liquidity transactions.",
    highlights: [
      "Syndicated senior, mezzanine, and unitranche credit facilities",
      "Islamic finance structures including Sukuk, Murabaha, and Ijara instruments",
      "Asset-backed securitization and high-yield debt issuance",
      "Cross-border debt workouts, restructuring, and debtor-in-possession facilities"
    ],
    scope: ["Syndicated Credit", "Project Finance", "Islamic Finance", "Debt Capital Structuring"],
    representativeDeals: [
      "Structured a $1.2B syndicated multi-currency credit facility for an international aviation lessor backed by European and Middle Eastern lenders.",
      "Advised regional central banking authority on cross-border liquidity stabilization framework."
    ]
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    subtitle: "Upstream, Midstream & Energy Transition",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790644008/Industrial_oil_refinery_at_sunset_an_Industrial_Photo_by_MistyDay_um9alj.jpg",
    description: "Deeply entrenched in the global energy corridors of New York, Riyadh, Dubai, and Moscow, our attorneys advise National Oil Companies (NOCs), independent operators, pipeline consortia, and LNG exporters on exploration concessions, PSCs, and energy infrastructure.",
    highlights: [
      "Production Sharing Contracts (PSCs), joint operating agreements (JOAs), and farm-in pacts",
      "LNG liquefaction, long-term offtake, and trans-shipment agreements",
      "Offshore drilling, subsea concessions, and pipeline pipeline development",
      "Integration of carbon capture, utilization, and storage (CCUS) projects"
    ],
    scope: ["Upstream E&P Concessions", "LNG Sales & Transport", "Refinery Joint Ventures", "Dispute Resolution"],
    representativeDeals: [
      "Counsel to independent exploration group in connection with $850M offshore exploration concession in West Africa.",
      "Negotiated multi-decade LNG supply agreement between Middle Eastern exporter and European utilities consortium."
    ]
  },
  {
    id: "capital-markets",
    title: "Capital Markets",
    subtitle: "Global Equity & Debt Offerings",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790644160/Triple-Leveraged_Silver_ETC_Rallies_After_Jobs____l5r2wq.jpg",
    description: "We guide corporate issuers, underwriters, and sovereign borrowers through primary and secondary listings on the New York Stock Exchange, Nasdaq, London Stock Exchange, Tadawul, and DFMS, ensuring seamless SEC and cross-border regulatory compliance.",
    highlights: [
      "Initial Public Offerings (IPOs) and cross-border dual listings",
      "Rule 144A / Regulation S debt and equity placements",
      "Sovereign green bond and sustainability-linked bond issuances",
      "Continuous disclosure and securities litigation preventative counseling"
    ],
    scope: ["Global IPOs", "Rule 144A / Reg S", "Sovereign Debt", "Dual Listings"],
    representativeDeals: [
      "Underwriters' counsel on $750M dual-listed debt offering under Reg S / 144A for global telecommunications provider.",
      "Advised leading fintech enterprise on NYSE listing and concurrent institutional international placement."
    ]
  },
  {
    id: "international-trade",
    title: "International Trade",
    subtitle: "Customs, Sanctions & WTO Dispute Resolution",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790644202/Stacked_containers_lrds5x.jpg",
    description: "Navigating today's volatile geopolitical trade climate requires decisive legal command. We represent sovereigns and multinational exporters in tariff disputes, export control regimes (EAR/ITAR), OFAC sanctions compliance, and WTO dispute settlement.",
    highlights: [
      "U.S. OFAC, EU, and UK sanctions compliance & enforcement defense",
      "Export controls, dual-use technology transfers, and deemed export licensing",
      "Antidumping, countervailing duties (AD/CVD), and Section 301 proceedings",
      "Supply chain provenance verification and forced labor import audits"
    ],
    scope: ["OFAC Sanctions", "Export Controls", "Tariff Defense", "WTO Litigation"],
    representativeDeals: [
      "Represented global manufacturing syndicate in obtaining critical OFAC specific licenses for cross-border divestiture.",
      "Successfully defended multinational agricultural exporter in international antidumping investigation before U.S. ITC."
    ]
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "john-maalouf",
    name: "Dr. John J. Maalouf",
    title: "Senior Partner & Head of Global Practice",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790606868/ChatGPT_Image_Sep_28_2026_03_46_49_PM_ugkizu.png",
    bio: "Recognized internationally as one of the world's preeminent business and arbitration lawyers. Multiple-time recipient of Global Law Experts International Business Lawyer of the Year, Dr. Maalouf has represented Fortune 500 corporations and sovereign nations in premier global transactions and international disputes.",
    longBio: "Dr. John J. Maalouf is Senior Partner of Maalouf Ashford & Talbot, LLP. With more than 25 years of cross-border legal leadership, Dr. Maalouf has represented Fortune 500 multinationals, sovereign entities, and institutional investors across the United States, Europe, the Middle East, and Asia in high-stakes M&A, cross-border arbitration, oil & gas concessions, and syndicated finance. He has been named International Business Lawyer of the Year for 11 consecutive years by Global Law Experts and is widely published on sovereign contracts and international commercial arbitration.",
    location: "New York / Dubai",
    education: [
      "Doctor of Laws (LL.D.), International Law",
      "Juris Doctor (J.D.), cum laude",
      "Bachelor of Arts in Economics & International Relations"
    ],
    admissions: [
      "New York State Bar",
      "United States District Court, Southern District of New York",
      "United States Court of International Trade",
      "DIFC Courts Academy of Law, Dubai"
    ],
    practiceFocus: [
      "International Arbitration & Commercial Litigation",
      "Cross-Border Mergers & Acquisitions",
      "Oil & Gas / Energy Concessions",
      "Sovereign Debt & Foreign Direct Investment"
    ],
    email: "j.maalouf@maaloufashford.com",
    phone: "+1 212.537.5035"
  },
  {
    id: "ahmad-bin-meshar",
    name: "Ahmad Muhair bin Mes’har",
    title: "Partner Co-Head of Litigation, Dubai and Abu Dhabi Offices",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790643083/ahmad-bin-mes-har_agpxvy.jpg",
    bio: "Eminent litigation specialist advising multinational corporations and regional enterprises on high-stakes disputes and cross-border proceedings across the UAE and MENA region.",
    longBio: "Ahmad Muhair bin Mes’har serves as Partner and Co-Head of Litigation for the firm's Dubai and Abu Dhabi offices. He is widely acknowledged across the United Arab Emirates and the GCC as a leading authority in high-stakes corporate disputes, international arbitration, and administrative enforcement. With comprehensive rights of audience before the highest UAE courts and the DIFC Courts, he advises sovereign-backed companies and global financial conglomerates on strategic contentious matters.",
    location: "Dubai / Abu Dhabi",
    education: [
      "Master of Laws (LL.M.) in International Dispute Resolution",
      "Bachelor of Sharia & Law with Distinction"
    ],
    admissions: [
      "Advocate of the UAE Courts (Full Audience)",
      "Dubai International Financial Centre (DIFC) Courts Registered Practitioner",
      "Member of the International Bar Association (IBA)"
    ],
    practiceFocus: [
      "Commercial Litigation & Dispute Resolution",
      "Enforcement of Foreign Judgments & Arbitral Awards",
      "Banking & Financial Services Litigation",
      "White Collar Defense & Regulatory Investigations"
    ],
    email: "a.meshar@maaloufashford.com",
    phone: "+971 4.382.7700"
  },
  {
    id: "mansoor-al-mazmi",
    name: "Mansoor Mohammed Al Mazmi",
    title: "Partner Co-Head of Litigation, Dubai and Abu Dhabi Offices",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790645114/mansoor-al-mazmi_mt1xkb.jpg",
    bio: "Distinguished commercial litigator with deep expertise in regional corporate disputes, enforcement of foreign judgments, and commercial arbitration before UAE and international tribunals.",
    longBio: "Mansoor Mohammed Al Mazmi is Partner and Co-Head of Litigation for Maalouf Ashford & Talbot's UAE practice. He specializes in intricate commercial proceedings, cross-border asset freezing and recovery, shareholder deadlock resolutions, and multi-forum arbitration. Known for his tactical acumen and deep familiarity with regional judicial precedents, Mansoor regularly coordinates parallel proceedings spanning the DIFC, ADGM, and onshore federal courts.",
    location: "Dubai / Abu Dhabi",
    education: [
      "Master of Commercial Law",
      "Bachelor of Laws (LL.B.)"
    ],
    admissions: [
      "UAE Ministry of Justice Licensed Advocate",
      "Abu Dhabi Global Market (ADGM) Courts Registered Practitioner",
      "DIFC Courts Registered Attorney"
    ],
    practiceFocus: [
      "Cross-Border Asset Recovery & Injunctions",
      "Maritime & International Logistics Litigation",
      "Real Estate & Major Construction Disputes",
      "Shareholder Disputes & Corporate Dissolution"
    ],
    email: "m.mazmi@maaloufashford.com",
    phone: "+971 4.382.7715"
  },
  {
    id: "abdulaziz-bin-ali",
    name: "Abdulaziz Bin Ali",
    title: "Partner",
    image: "https://res.cloudinary.com/yc7cencg/image/upload/v1790645286/abdulaziz-bin-ali-768x1024_mdhqpe.jpg",
    bio: "Abdulaziz has over 12 years of experience representing western companies in connection with setting up operations in the Kingdom of Saudi Arabia, Dubai and Abu Dhabi.",
    longBio: "Abdulaziz Bin Ali is a Partner at Maalouf Ashford & Talbot, LLP. With over 12 years of specialized experience representing western and Asian corporations, financial institutions, and defense and infrastructure contractors, Abdulaziz is recognized for his mastery in guiding foreign enterprises through the regulatory, corporate, and operational establishment in the Kingdom of Saudi Arabia, Dubai, and Abu Dhabi. He advises on Ministry of Investment (MISA) licensing, Regional Headquarters (RHQ) compliance, public procurement, and Saudization regulations.",
    location: "Riyadh / Dubai",
    education: [
      "Master of Laws (LL.M.) in Corporate & Commercial Law",
      "Bachelor of Laws (LL.B.)"
    ],
    admissions: [
      "Saudi Ministry of Justice Licensed Attorney",
      "GCC Commercial Arbitration Centre Arbitrator",
      "Saudi Bar Association Member"
    ],
    practiceFocus: [
      "KSA Market Entry & MISA Foreign Direct Investment",
      "Regional Headquarters (RHQ) Program Compliance",
      "Cross-Border Mergers, Acquisitions & Joint Ventures",
      "Commercial Contracts & Public Procurement"
    ],
    email: "a.binali@maaloufashford.com",
    phone: "+966 11.203.8840"
  }
];

export const AWARDS: Award[] = [
  {
    id: "global-100",
    title: "International Law Firm of the Year",
    organization: "Global 100",
    year: "2025 / 2026",
    category: "Cross-Border Excellence",
    description: "Voted premier law firm across the globe for excellence in multi-jurisdictional M&A and international commercial arbitration.",
    badgeLabel: "Global 100 Winner"
  },
  {
    id: "super-lawyers",
    title: "Excellence in International Law",
    organization: "Super Lawyers",
    year: "Consecutive Honoree",
    category: "Attorney Distinction",
    description: "Peer-reviewed recognition awarded to the top 5% of legal practitioners demonstrating highest professional standards.",
    badgeLabel: "Super Lawyers Select"
  },
  {
    id: "corporate-intl",
    title: "Cross-Border Corporate Law Firm of the Year",
    organization: "Corporate INTL Magazine Global Awards",
    year: "2024 / 2025",
    category: "Corporate & Commercial",
    description: "Recognizing outstanding advisory performance in complex cross-border acquisitions, corporate reorganizations, and joint ventures.",
    badgeLabel: "Corporate INTL Award"
  },
  {
    id: "acq-awards",
    title: "M&A Law Firm of the Year",
    organization: "ACQ5 Global Awards",
    year: "Annual Winner",
    category: "M&A Transactions",
    description: "Honored by international peers and institutional clients for leading deal execution and transactional excellence.",
    badgeLabel: "ACQ5 Global Honoree"
  },
  {
    id: "worldwide-financial",
    title: "Premier Cross-Border Legal Advisory",
    organization: "Worldwide Financial Awards",
    year: "2025",
    category: "Banking & Finance",
    description: "Awarded for exceptional counsel to sovereign wealth funds and multinational banks in international syndicated facilities.",
    badgeLabel: "Worldwide Financial Winner"
  },
  {
    id: "international-advisory-experts",
    title: "Global Trade & Finance Firm of the Year",
    organization: "International Advisory Experts",
    year: "2024 / 2025",
    category: "International Trade",
    description: "Excellence in advising clients on sanctions, WTO compliance, and export regulation across the United States, EU, and Middle East.",
    badgeLabel: "IAE Excellence"
  },
  {
    id: "global-law-experts",
    title: "International Business Lawyer of the Year",
    organization: "Global Law Experts",
    year: "11-Time Winner",
    category: "Senior Leadership",
    description: "Bestowed upon Dr. John J. Maalouf for landmark contributions to international business transactions and commercial arbitration.",
    badgeLabel: "11-Year Recipient"
  }
];

export const OFFICES: Office[] = [
  {
    id: "new-york",
    city: "New York",
    country: "United States",
    region: "Americas",
    isHeadquarters: true,
    address: [
      "MAALOUF ASHFORD & TALBOT, LLP",
      "48 Wall Street, 11th Fl.",
      "New York, New York 10005",
      "United States of America"
    ],
    telephone: "212.537.5035",
    facsimile: "212.537.9268",
    email: "ny@maaloufashford.com",
    jurisdiction: "United States Federal, New York State & International Tribunals",
    coordinates: { lat: 40.7064, lng: -74.0094 }
  },
  {
    id: "dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East",
    address: [
      "MAALOUF ASHFORD & TALBOT",
      "Burj Daman Tower, Level 14",
      "DIFC, P.O. Box 507221",
      "Dubai, United Arab Emirates"
    ],
    telephone: "+971 4.382.7700",
    facsimile: "+971 4.382.7701",
    email: "dubai@maaloufashford.com",
    jurisdiction: "DIFC Courts, UAE Federal Courts & GCC Jurisdictions"
  },
  {
    id: "riyadh",
    city: "Riyadh",
    country: "Kingdom of Saudi Arabia",
    region: "Middle East",
    address: [
      "MAALOUF ASHFORD & TALBOT",
      "King Fahd Road, Al Olaya District",
      "P.O. Box 8840",
      "Riyadh 11492, Saudi Arabia"
    ],
    telephone: "+966 11.203.8840",
    facsimile: "+966 11.203.8841",
    email: "riyadh@maaloufashford.com",
    jurisdiction: "KSA Ministry of Justice & GCC Commercial Arbitration"
  },
  {
    id: "hong-kong",
    city: "Hong Kong",
    country: "Hong Kong SAR",
    region: "Asia-Pacific",
    address: [
      "MAALOUF ASHFORD & TALBOT",
      "Two International Finance Centre, 31st Fl.",
      "8 Finance Street, Central",
      "Hong Kong"
    ],
    telephone: "+852 3975.2800",
    facsimile: "+852 3975.2801",
    email: "hk@maaloufashford.com",
    jurisdiction: "HK High Court & HKIAC International Arbitration"
  },
  {
    id: "shanghai",
    city: "Shanghai",
    country: "China",
    region: "Asia-Pacific",
    address: [
      "MAALOUF ASHFORD & TALBOT",
      "Shanghai Tower, 38th Fl.",
      "501 Yincheng Middle Road, Pudong",
      "Shanghai 200120, China"
    ],
    telephone: "+86 21.6103.5500",
    facsimile: "+86 21.6103.5501",
    email: "shanghai@maaloufashford.com",
    jurisdiction: "PRC Foreign Legal Practice & Cross-Border Outbound M&A"
  },
  {
    id: "sao-paulo",
    city: "São Paulo",
    country: "Brazil",
    region: "Americas",
    address: [
      "MAALOUF ASHFORD & TALBOT",
      "Avenida Faria Lima, 3477, 14º Andar",
      "Itaim Bibi",
      "São Paulo - SP, 04538-133, Brazil"
    ],
    telephone: "+55 11.3049.2200",
    facsimile: "+55 11.3049.2201",
    email: "saopaulo@maaloufashford.com",
    jurisdiction: "Mercosur Cross-Border Investment & CAM-CCBC Arbitration"
  },
  {
    id: "beirut",
    city: "Beirut",
    country: "Lebanon",
    region: "Middle East",
    address: [
      "MAALOUF ASHFORD & TALBOT",
      "Starco Center, Bloc B, 8th Fl.",
      "Omar Daouk Street, Downtown",
      "Beirut, Lebanon"
    ],
    telephone: "+961 1.365.120",
    facsimile: "+961 1.365.121",
    email: "beirut@maaloufashford.com",
    jurisdiction: "Levant Commercial Practice & Paris/Geneva Arbitration Liaison"
  },
  {
    id: "moscow",
    city: "Moscow",
    country: "Eurasia",
    region: "Europe & Eurasia",
    address: [
      "MAALOUF ASHFORD & TALBOT",
      "Presnenskaya Embankment, 12",
      "Federation Tower West, 45th Fl.",
      "Moscow 123112"
    ],
    telephone: "+7 495.967.8900",
    facsimile: "+7 495.967.8901",
    email: "moscow@maaloufashford.com",
    jurisdiction: "Cross-Border Natural Resources & Energy Concessions"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "ksa-fdi-rhq-guide",
    title: "Navigating Foreign Direct Investment & RHQ Requirements in the Kingdom of Saudi Arabia",
    category: "Middle East Corporate Strategy",
    author: "Abdulaziz Bin Ali & Dr. John J. Maalouf",
    date: "January 2026",
    readTime: "8 min read",
    summary: "An authoritative analysis of the Ministry of Investment's updated Regional Headquarters (RHQ) mandates, tax incentives, government procurement eligibility, and labor localization guidelines for international firms expanding into Riyadh.",
    content: [
      "The Kingdom of Saudi Arabia's Vision 2030 initiatives have catalyzed one of the most dynamic regulatory transformations in modern commercial history. Under the Regional Headquarters (RHQ) directive, multinational companies seeking government tenders and sovereign contracts must establish their regional administrative hub in Riyadh.",
      "Our practice has assisted over 60 international corporations in obtaining MISA foreign investment licenses, structuring zero-corporate-tax holding regimes, and harmonizing cross-border governance between home jurisdictions and Saudi commercial regulations.",
      "Key considerations addressed in this briefing include 30-year tax holiday provisions, exemptions from Saudization quotas for leadership personnel, and streamlined residency processing under the Premium Residency Center."
    ]
  },
  {
    id: "cross-border-arbitration-enforcement",
    title: "Enforcement of Foreign Arbitral Awards Across Civil and Common Law Middle East Jurisdictions",
    category: "International Arbitration",
    author: "Dr. John J. Maalouf & Ahmad Muhair bin Mes’har",
    date: "November 2025",
    readTime: "12 min read",
    summary: "Strategic procedural considerations under the 1958 New York Convention, navigating the interplay between DIFC / ADGM conduit jurisdictions and onshore enforcement courts.",
    content: [
      "While the United Arab Emirates and Saudi Arabia are longstanding signatories to the New York Convention, securing practical monetary recovery requires acute procedural command across both common law financial centers (DIFC, ADGM) and onshore execution courts.",
      "This paper analyzes recent appellate rulings on public policy exceptions, jurisdictional defenses, and the use of precautionary attachment orders to preserve debtor assets pending final recognition.",
      "The authors outline an 8-point pre-enforcement checklist for multinational counsel before commencing arbitral proceedings, ensuring arbitration clauses withstand rigorous multi-forum scrutiny."
    ]
  },
  {
    id: "lng-energy-transition-contracts",
    title: "Long-Term LNG Contracting and Geopolitical Risk in Global Energy Trade",
    category: "Oil & Gas / Energy",
    author: "Dr. John J. Maalouf",
    date: "August 2025",
    readTime: "10 min read",
    summary: "A practical examination of take-or-pay flexibility clauses, price re-opener litigation, and destination restrictions in trans-continental liquefied natural gas agreements.",
    content: [
      "The reconfiguration of global gas supplies has triggered unprecedented demands for contractual flexibility, carbon-neutral cargo certifications, and revised price-index formulas shifting away from pure Brent crude parity toward regional hub benchmarks.",
      "We examine how major sovereign exporters in the GCC and North American developers structure multi-decade offtake pacts that balance fixed capital amortization with market-reflective renegotiation rights.",
      "We detail tactical negotiation strategies for force majeure declarations following geopolitical supply-route disruptions and environmental compliance shifts."
    ]
  },
  {
    id: "cross-border-merger-controls",
    title: "CFIUS, EU Foreign Subsidies Regulation, and Multilateral Antitrust Clearance in 2026",
    category: "Mergers & Acquisitions",
    author: "Global M&A Practice Group",
    date: "May 2025",
    readTime: "9 min read",
    summary: "How cross-border dealmakers navigate tightening foreign investment scrutiny, critical technology definitions, and concurrent clearances across the FTC, European Commission, and Middle East authorities.",
    content: [
      "In an era of economic security statecraft, cross-border M&A transactions are subject to heightened regulatory obstacles even before antitrust competition filings are reviewed.",
      "The Committee on Foreign Investment in the United States (CFIUS) and the European Union Foreign Subsidies Regulation (FSR) require comprehensive sovereign wealth disclosure and supply-chain transparency.",
      "This article provides a model timetable for managing synchronized clearance filings, mitigation agreements, and reverse termination fee protections in high-stakes mega-deals."
    ]
  }
];

export const IN_THE_NEWS: NewsArticle[] = [
  {
    id: "news-1",
    headline: "Maalouf Ashford & Talbot Named International Law Firm of the Year for 2025/2026",
    outlet: "Global 100 Legal Directory",
    date: "February 2026",
    category: "Firm Distinction",
    summary: "The firm has been recognized as the top international business law firm in cross-border M&A and international commercial dispute resolution across 85 surveyed jurisdictions.",
    details: "The annual Global 100 ranking evaluates law firms based on transaction volume, cross-border complexity, client satisfaction, and peer recognition. Maalouf Ashford & Talbot received top marks for its seamless representation of Fortune 500 corporations and sovereign funds."
  },
  {
    id: "news-2",
    headline: "Firm Advises Sovereign Energy Consortium in Landmark $1.8B Cross-Border Clean Hydrogen JV",
    outlet: "Financial Times / Legal Week",
    date: "December 2025",
    category: "Representative Deal",
    summary: "Maalouf Ashford & Talbot's New York and Riyadh teams orchestrated the multilateral investment agreements and technology licensing framework.",
    details: "The transaction unites leading Gulf infrastructure entities and European utility partners to develop one of the world's largest green ammonia export terminals, including complex offtake structures governed by English and international trade laws."
  },
  {
    id: "news-3",
    headline: "Dr. John J. Maalouf Honored with 11th Consecutive International Business Lawyer of the Year Accolade",
    outlet: "Global Law Experts",
    date: "October 2025",
    category: "Partner Recognition",
    summary: "Dr. Maalouf's decades-long track record in sovereign debt, cross-border corporate mergers, and international arbitration earns historic recognition.",
    details: "Global Law Experts commended Dr. Maalouf for his unmatched mastery in resolving multi-billion dollar cross-border commercial disputes and structuring high-stakes investments spanning New York, Dubai, Riyadh, and Asia."
  },
  {
    id: "news-4",
    headline: "Maalouf Ashford & Talbot Expands UAE and Saudi Litigation and Corporate Practice Groups",
    outlet: "Arabian Business Legal Review",
    date: "July 2025",
    category: "Firm Expansion",
    summary: "With increased corporate demand for Vision 2030 direct investments and DIFC court representation, the firm strengthens its regional footprint.",
    details: "The expansion enhances the firm's capacity to guide international corporations setting up regional headquarters in Riyadh, handling commercial dispute resolution, regulatory compliance, and joint venture formations across the GCC."
  }
];
