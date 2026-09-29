export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  highlights: string[];
  scope: string[];
  representativeDeals: string[];
}

export interface Partner {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  longBio: string;
  location: string;
  education: string[];
  admissions: string[];
  practiceFocus: string[];
  email: string;
  phone: string;
}

export interface Office {
  id: string;
  city: string;
  country: string;
  region: string;
  address: string[];
  telephone: string;
  facsimile?: string;
  email: string;
  isHeadquarters?: boolean;
  jurisdiction: string;
  coordinates?: { lat: number; lng: number };
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: string;
  description: string;
  badgeLabel: string;
}

export interface Publication {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  downloadablePdf?: string;
}

export interface NewsArticle {
  id: string;
  headline: string;
  outlet: string;
  date: string;
  category: string;
  summary: string;
  details: string;
}
