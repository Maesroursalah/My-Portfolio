export type Category = 'All' | 'Branding' | 'UI/UX' | 'Web Dev' | 'Motion' | 'Branding & Web';

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
  textColor?: string;
}

export interface TypographySpec {
  displayFont: string;
  displayUsage: string;
  arabicFont?: string;
  arabicUsage?: string;
  bodyFont: string;
  bodyUsage: string;
  sampleText?: string;
  arabicSampleText?: string;
}

export interface BrandSpecs {
  logoConcept?: string;
  slogan?: string;
  packagingSpecs?: string;
  architecture?: string;
  scentPyramid?: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  year: string;
  category: Category;
  tags: string[];
  thumbnail: string;
  heroImage: string;
  summary: string;
  problem: string;
  process: string;
  solution: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
  gallery: string[];
  liveUrl?: string;
  behanceUrl?: string;
  embedLiveUrl?: string;
  colorPalette?: ColorSwatch[];
  typography?: TypographySpec;
  brandSpecs?: BrandSpecs;

  // PDF Document Specification fields
  projectType?: string;
  industry?: string;
  targetAudience?: string;
  coreFocus?: string;
  designSystemSpecs?: {
    summary: string;
    colors: { name: string; hex: string; role: string; textColor?: string }[];
    footerNote: string;
  };
  myRoleSpecs?: {
    title: string;
    description: string;
    responsibilities: { title: string; text: string }[];
  };
  techStackTools?: string[];
  keyPlatformFeatures?: { title: string; text: string }[];
  strategicTakeaway?: {
    summary: string;
    keyGrowthTakeaway: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  timeline: string;
  impactArea?: string;
  startingPrice?: string;
  iconName: string;
}

export interface ServiceTrack {
  track: 'Design' | 'Development';
  subtitle: string;
  description: string;
  items: ServiceItem[];
}

export interface ToolStack {
  name: string;
  category: 'Design' | 'Development' | 'Workflow';
  experience: string;
  icon: string; // Lucide icon name or svg identifier
  color: string;
}

export interface TimelineItem {
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface StatItem {
  number: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface SkillCategoryGroup {
  title: string;
  icon: string;
  items: {
    name: string;
    skills: string[];
  }[];
}

export interface SoftwareToolGroup {
  category: string;
  tools: string[];
}

export interface SkillItem {
  name: string;
  category: 'Design' | 'Development';
  level: number; // 0 - 100
}
