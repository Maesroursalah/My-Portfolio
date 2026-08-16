import { CaseStudy, ServiceTrack, ToolStack, TimelineItem, Testimonial, StatItem, SkillItem, SkillCategoryGroup, SoftwareToolGroup } from '../types';

export const PERSONAL_INFO = {
  name: "MESROUR SALAH EDDINE",
  logo: "https://i.postimg.cc/rs1xF7y9/Change-logo-color-and-delete-202608040456.jpg",
  title: "Graphic Designer x Developer",
  tagline: "Solo Graphic Designer & Developer (Hybrid Specialist) actively seeking a full-time job role.",
  bio: "I am a multidisciplinary creator specializing in end-to-end Brand Identity Design and Web Development. From conceptualizing unique logos and comprehensive graphic charters to writing clean code for fully tailored websites, I ensure that every touchpoint is visually striking and technically optimized.",
  avatar: "https://i.postimg.cc/WbzYf3hk/Untitled-design-(37).png",
  location: "Casablanca Sidi Maarouf, Morocco",
  email: "messroursalah@gmail.com",
  phone: "0652297244",
  whatsapp: "https://wa.me/212652297244",
  availability: "Actively Looking for a Full-Time Job Role (Graphic Designer x Developer)",
  socials: {
    behance: "https://behance.net/mesroursalaheddine",
    dribbble: "https://dribbble.net/mesroursalah",
    github: "https://github.com/mesroursalah",
    linkedin: "https://linkedin.com/in/mesroursalaheddine",
    instagram: "https://instagram.com/mesrour.design",
  }
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "zaphyre",
    title: "ZAPHYRE",
    client: "ZAPHYRE Parfums",
    year: "2025",
    category: "Branding & Web",
    tags: ["E-Commerce", "Luxury Perfume", "B2B / B2C", "Brand Experience"],
    thumbnail: "https://noureddinelmobaraki-web.github.io/nl-audio-cdn/BG.SITES/1.png",
    heroImage: "https://noureddinelmobaraki-web.github.io/nl-audio-cdn/BG.SITES/1.png",
    summary: "Premium Fragrances E-Commerce Ecosystem & Brand Experience",
    projectType: "E-Commerce Ecosystem (B2C & B2B Wholesale)",
    industry: "Luxury Perfumery & Cosmetics",
    targetAudience: "Retail Consumers & Fragrance Wholesalers / Distributors",
    coreFocus: "Visual Identity UI Design & Localized Fulfillment Logistics",
    process: "ZAPHYRE is a high-end, minimalist e-commerce platform dedicated to showcasing premium fragrances. Built on a hybrid commercial framework, the platform serves a dual business pipeline: delivering bespoke custom perfume vaults to retail end-consumers (B2C), and providing a fast path for corporate bulk buyers and verified distributors (B2B). The goal was to build an elite digital experience that seamlessly handles localized logistical needs alongside luxury branding.",
    designSystemSpecs: {
      summary: "The visual strategy was explicitly tailored to convey elegance, prestige, and extreme layout clarity. Breaking away from cluttered e-commerce designs, the interface works with a clean, high-contrast color strategy:",
      colors: [
        { name: "Deep Sapphire Blue", hex: "#0E1E38", role: "Primary Authority", textColor: "#ffffff" },
        { name: "Muted Desert Gold", hex: "#D4AF37", role: "Luxury Accents", textColor: "#000000" }
      ],
      footerNote: "This palette provides sharp hierarchy across user triggers, navigation states, and selective high-end categories while keeping a clean layout flow."
    },
    problem: "The B2C/B2B Friction: Designing an intuitive platform layout that keeps custom retail packages (\"Les Packs de Zaphyre\") active and easy to discover, while providing high-volume wholesale accounts (\"Grossiste Parfum\") a quick gateway to access dedicated bulk digital catalogs with strict Minimal Order Quantities (MOQ: 24 Pieces).",
    solution: "Localized Fulfillment Integration: Setting up a seamless delivery calculation module built completely into the shopping funnel (\"Votre Ville\"). The logic handles urban logistics pricing automatically, displaying immediate city-wide transport distributions and flat rates dynamically across major local economic hubs.",
    myRoleSpecs: {
      title: "Lead Full-Stack Designer & Developer",
      description: "As the Lead Full-Stack Designer & Developer, I held complete ownership of the system architecture from production prototyping to structural layout rollout:",
      responsibilities: [
        { title: "Visual Identity & UX", text: "Developed custom typography hierarchies, UI design systems, and responsive asset grids." },
        { title: "Logistics Engineering", text: "Integrated real-time shipping selectors managing variable city-wide distribution pathways." },
        { title: "Frontend Development", text: "Built the modular, highly optimized responsive interfaces ensuring fluid, mobile-first shopping loops." }
      ]
    },
    techStackTools: [],
    keyPlatformFeatures: [
      { title: "Dual-Tier Gateway", text: "Targeted landing pathways cleanly splitting workflows for retail shoppers and private wholesale catalog buyers." },
      { title: "Smart Delivery Matrix Engine", text: "Interactive city selection elements auto-adjusting logistics fees based on distribution distance at checkout." },
      { title: "Refined Minimalist Navigation", text: "Clean filtering grids segmented clearly by user preference profiles (Tout, Homme, Femme, Unisexe, Packs, Grossiste)." }
    ],
    strategicTakeaway: {
      summary: "The production layout successfully launched a credible, highly structured digital storefront for ZAPHYRE, perfectly merging luxury visuals with complex commercial features.",
      keyGrowthTakeaway: "Pairing an authoritarian visual theme (Sapphire & Gold) with localized, high-utility delivery systems significantly maximizes user trust, driving up conversion metrics across both single retail buyers and major wholesale pipelines."
    },
    metrics: [
      { label: "Channel Pipeline", value: "B2C / B2B" },
      { label: "MOQ Standard", value: "24 Pcs" },
      { label: "Logistics Modules", value: "Real-time" },
      { label: "Checkout Conversion", value: "Optimized" }
    ],
    deliverables: [
      "End-to-End UX/UI Architecture & Responsive Asset Grids",
      "Dual-Tier Retail & Wholesale Catalog Pathways",
      "Sapphire & Gold Luxury Visual Design System",
      "Localized City Delivery Calculation Module ('Votre Ville')",
      "Minimalist Filter Navigation (Tout, Homme, Femme, Unisexe, Packs, Grossiste)",
      "Fluid Mobile-First Shopping Loops"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&q=80&w=1200"
    ],
    liveUrl: "https://zaphyre.netlify.app/",
    behanceUrl: "https://behance.net/mesroursalaheddine",
    colorPalette: [
      { name: "Obsidian Dark", hex: "#0F0706", role: "Primary Canvas / Deep Background", textColor: "#ffffff" },
      { name: "Deep Crimson Velvet", hex: "#381B19", role: "Structural Borders & Framing", textColor: "#ffffff" },
      { name: "Rose Gold Metallic", hex: "#D68379", role: "Primary Brand Accent & Gold Foil", textColor: "#000000" },
      { name: "Warm Silk Cream", hex: "#FFF8F0", role: "Serif Typography & Contrast Text", textColor: "#000000" },
      { name: "Oud Royal Gold", hex: "#E5C158", role: "Flacon Accent & Emblem Stamp", textColor: "#000000" }
    ],
    typography: {
      displayFont: "Playfair Display / Cormorant Garamond",
      displayUsage: "Luxury Serif Header & Product Nomenclature (Titles, Headlines, Edition Numbers)",
      arabicFont: "Amiri / Traditional Naskh Calligraphy",
      arabicUsage: "Official Brand Slogan: 'فن العطر الراقي' (The Art of Refined Fragrance)",
      bodyFont: "Plus Jakarta Sans / Outfit",
      bodyUsage: "E-Commerce Controls, Olfactory Pyramid Notes, Specifications & Navigation",
      sampleText: "ZAPHYRE — L'essence du luxe — Extrait de Parfum 100ml",
      arabicSampleText: "زافير — فن العطر الراقي — عطور فاخرة مخصصة"
    },
    brandSpecs: {
      logoConcept: "Bespoke 'Z' Monogram intertwined within concentric gold-embossed rings and geometric Arabic star lattice lines, symbolizing timeless haute parfumerie heritage.",
      slogan: "L'essence du luxe — فن العطر الراقي",
      packagingSpecs: "100ml Heavy crystal glass flacon with magnetic obsidian cap, hand-foiled rose gold typography, and velvet-lined luxury unboxing drawer.",
      architecture: "Headless e-commerce application deployed on Netlify (zaphyre.netlify.app) with sub-second page rendering and dual LTR/RTL support.",
      scentPyramid: {
        top: ["Bergamote de Calabre", "Safran d'Iran", "Cardamome Verte"],
        heart: ["Rose de Mai (Grasse)", "Jasmin Sambac", "Iris Noir Noble"],
        base: ["Oud Royal du Laos", "Ambre Gris Intense", "Bois de Santal", "Vanille de Madagascar"]
      }
    }
  },
  {
    id: "prism",
    title: "PRISM",
    client: "PRISM",
    year: "2024",
    category: "Web Dev",
    tags: ["E-Commerce", "Branding", "Tailwind CSS", "Motion"],
    thumbnail: "https://noureddinelmobaraki-web.github.io/nl-audio-cdn/BG.SITES/3.png",
    heroImage: "https://noureddinelmobaraki-web.github.io/nl-audio-cdn/BG.SITES/3.png",
    summary: "Rebranding and global direct-to-consumer digital portal showcasing hand-carved Moroccan luxury goods.",
    problem: "Local Moroccan master artisans were struggling to reach international buyers because existing marketplaces lacked premium visual storytelling.",
    process: "Combined authentic Amazigh geometric motifs with Swiss typographic layout principles. Built a fast, mobile-first WebGL scrollable showcase with multi-language (EN/FR/AR) support.",
    solution: "An immersive e-commerce experience where visitors explore artisan stories, provenance certificates, and order custom pieces with global DHL tracking.",
    metrics: [
      { label: "International Revenue", value: "+310%" },
      { label: "Mobile Traffic Share", value: "78%" },
      { label: "Lighthouse Score", value: "98/100" }
    ],
    deliverables: [
      "Visual Brand Identity & Logotype",
      "Multilingual Next.js Storefront",
      "Artisan Documentary Video Direction",
      "Custom Packaging & Certificate Inserts"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200"
    ],
    liveUrl: "https://prismmoo.github.io/ma/",
    behanceUrl: "https://behance.net/gallery/atlas-artisans"
  },
  {
    id: "momento",
    title: "MOMENTO",
    client: "Casa Watch Boutique",
    year: "2025",
    category: "Branding & Web",
    tags: ["Horology", "Luxury E-Commerce", "CRO & AOV", "Direct-To-Consumer"],
    thumbnail: "https://noureddinelmobaraki-web.github.io/nl-audio-cdn/BG.SITES/2.png",
    heroImage: "https://noureddinelmobaraki-web.github.io/nl-audio-cdn/BG.SITES/2.png",
    summary: "Casa Watch Boutique • Luxury E-Commerce Platform & High-Velocity Conversion Architecture",
    projectType: "Luxury E-Commerce Platform (Direct-To-Consumer)",
    industry: "Horology & Premium Watches",
    targetAudience: "Morocco (High-Intent Consumer Base)",
    coreFocus: "Average Order Value (AOV) Optimization & Low-Friction Cart Engineering",
    process: "MOMENTO (Casa Watch Boutique) is a highly stylized, performance-oriented e-commerce storefront showcasing premium, design-inspired timepieces. Built entirely around modern local conversion strategies, the platform bridges traditional horology prestige with highly optimized, direct-response transactional pipelines tailored to high-velocity social commerce workflows.",
    designSystemSpecs: {
      summary: "The interface rejects heavy retail clutter, preferring an editorial design language similar to international luxury lookbooks. The inclusion of explicit inline credibility anchors like 'Real Photos' and 'Cash on Delivery' works actively to dissolve common local trust barriers directly at the discovery viewport.",
      colors: [
        { name: "Soft Ivory / Cream", hex: "#FDFBF7", role: "Anti-Fatigue Canvas", textColor: "#000000" },
        { name: "Obsidian Black", hex: "#111111", role: "Transactional Contrast", textColor: "#ffffff" },
        { name: "Muted Gold", hex: "#C5A059", role: "Horology Authority", textColor: "#000000" }
      ],
      footerNote: "Editorial typography and negative space layout structure engineered for maximum brand prestige and conversion velocity."
    },
    problem: "1. Catalog Navigation & Brand Curation: Segmenting an expansive multi-brand directory (53 Timepieces) without complicating user flow. 2. Maximizing AOV: Capturing higher margins per checkout. 3. Checkout Friction Removal: Reducing multi-step drop-offs in local markets.",
    solution: "1. Horizontal Slider Matrix: Distinct collection cards (Men / Women) paired with an elegant horizontal slider filtering premium tiers (Boss, Cartier, Casio) immediately. 2. Native Upsell Drawer: Single-click gift box package addition ('Avez-vous besoin du coffret de la montre? +25 dh') directly inside the slide-out mini-cart. 3. Inline Checkout Drawer: Single-stage fulfillment matrix capturing customer details and dynamic local city routing fees (e.g., Casablanca 20 dh).",
    myRoleSpecs: {
      title: "Art Direction, CRO & Local Market Engineering",
      description: "Complete technical and design ownership across editorial curation, conversion optimization, and local logistics workflows:",
      responsibilities: [
        { title: "Interface Curation & Art Direction", text: "Managed typography styling using premium Serif structures and visual negative space configurations." },
        { title: "Conversion Rate Optimization (CRO)", text: "Implemented strategic checkout behaviors including high-urgency call-to-actions ('Acquire' framework) and cart drawers." },
        { title: "Local Market Engineering", text: "Managed localized validation protocols including automated shipping cost assignments and cash-on-delivery flows." }
      ]
    },
    techStackTools: [
      "Figma",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Drawer Checkout Funnel",
      "AOV Native Upsell",
      "Dynamic City Logistics"
    ],
    keyPlatformFeatures: [
      { title: "Fluid Multi-Tier Filters", text: "Fast navigation controls enabling shoppers to cross-filter by gender categories and explicit horology brands (Boss, Cartier, Casio) seamlessly." },
      { title: "High-Intent Product Display", text: "Minimalist pricing callouts, persistent secondary action links, and clear image carousels emphasizing macro-lens structural authenticity." },
      { title: "Integrated Drawer Checkout Funnel", text: "A dynamic cart layout supporting real-time product counts, instant upsells ('Coffret Montre'), and immediate city shipping data calculations." }
    ],
    strategicTakeaway: {
      summary: "The architectural deployment of MOMENTO serves as an ideal framework for scalable, localized luxury commerce. By designing cross-sell components directly inside the transaction loop and pairing them with high-end editorial visuals, the storefront effectively secures consumer validation while maximizing gross margins per single-user order.",
      keyGrowthTakeaway: "Strategic UX Takeaway: High conversion rates do not require aggressive sales badges. An elegant brand canvas paired with single-tap checkout enhancements proves that premium aesthetic layouts can achieve superior financial efficiency."
    },
    metrics: [
      { label: "Catalog Scale", value: "53 Timepieces" },
      { label: "Checkout Engine", value: "1-Step Drawer" },
      { label: "AOV Upsell", value: "Native +25 DH" },
      { label: "Trust Anchor", value: "Cash on Delivery" }
    ],
    deliverables: [
      "Casa Watch Boutique Editorial Design Language & Lookbook Layout",
      "Horizontal Multi-Tier Slider Matrix (Boss, Cartier, Casio Filters)",
      "Slide-Out Mini-Cart Drawer with Native Gift Box Upsell ('+25 dh')",
      "Single-Stage Inline Checkout Drawer with Dynamic City Logistics (Casablanca 20 dh)",
      "Localized Credibility Anchors ('Real Photos' & 'Cash on Delivery')",
      "High-Intent Macro-Lens Product Carousel Display"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=1200"
    ],
    liveUrl: "https://momentowatch.github.io/ma/",
    colorPalette: [
      { name: "Soft Ivory / Cream", hex: "#FDFBF7", role: "Anti-Fatigue Canvas", textColor: "#000000" },
      { name: "Obsidian Black", hex: "#111111", role: "Transactional Contrast", textColor: "#ffffff" },
      { name: "Muted Gold", hex: "#C5A059", role: "Horology Authority", textColor: "#000000" }
    ],
    typography: {
      displayFont: "Didot / Playfair Display",
      displayUsage: "Editorial Serif Titles, Horology Brand Headings & Watch Model Nomenclature",
      bodyFont: "Plus Jakarta Sans / Swiss Clean Sans",
      bodyUsage: "Product Specifications, City Logistics Dropdowns & Cart Upsell Controls",
      sampleText: "MOMENTO — Casa Watch Boutique — Premium Horology Timepieces"
    },
    brandSpecs: {
      logoConcept: "Editorial minimalist serif typography with refined letter-spacing, conveying Swiss watchmaking heritage and Casablanca luxury boutique curation.",
      slogan: "Casa Watch Boutique • Luxury E-Commerce Case Study",
      packagingSpecs: "Optional presentation gift box upgrade ('Coffret Montre') integrated directly in mini-cart drawer (+25 DH)."
    }
  }
];

export const SERVICE_TRACKS: ServiceTrack[] = [
  {
    track: "Design",
    subtitle: "Enterprise UI/UX Strategy & Design Systems",
    description: "Architecting accessible design tokens, atomic Figma libraries, and user-centered interfaces for complex enterprise software products.",
    items: [
      {
        id: "design-systems",
        title: "Atomic Design Systems & Tokens",
        tagline: "Figma design tokens, component libraries & documentation",
        description: "Standardizing visual elements into scalable atomic design tokens (colors, typography, spacing, dark/light themes) with comprehensive developer specs.",
        deliverables: [
          "Figma Component Library & Design Tokens",
          "WCAG AAA Accessibility Contrast Tokens",
          "Interactive Component Guidelines & Specs",
          "Light & Dark Mode Theme Infrastructure",
          "Cross-Platform UI Design Handoff"
        ],
        timeline: "Core Competency",
        impactArea: "Zero UI Inconsistency",
        iconName: "Palette"
      },
      {
        id: "ui-ux-architecture",
        title: "Product UI/UX & Information Architecture",
        tagline: "User flows, high-fidelity UI & interactive prototypes",
        description: "Research-backed web application interfaces engineered for complex workflows, multi-step SaaS portals, and high-frequency dashboards.",
        deliverables: [
          "User Flow Mapping & Information Architecture",
          "High-Fidelity Wireframes & App Layouts",
          "Clickable Interactive Figma Prototypes",
          "User Journey Micro-Interactions",
          "Usability Evaluation & Design Specs"
        ],
        timeline: "Core Competency",
        impactArea: "+65% Workflow Speed",
        iconName: "Layout"
      },
      {
        id: "brand-art-direction",
        title: "Product Identity & Brand Systems",
        tagline: "Visual brand language, typography & corporate identity",
        description: "Creating cohesive visual identities for digital products, tech ventures, and enterprise software suites that convey market leadership.",
        deliverables: [
          "Corporate Brand Identity & Visual Guidelines",
          "Custom Typography Scale & Pairing Rules",
          "Iconography & Vector Illustration Library",
          "Digital & Print Collateral Templates",
          "Brand Manual & Visual Asset Repository"
        ],
        timeline: "Core Competency",
        impactArea: "100% Brand Cohesion",
        iconName: "Sparkles"
      }
    ]
  },
  {
    track: "Development",
    subtitle: "Full-Stack Web Engineering & React Architecture",
    description: "Translating product specs into clean, modular Next.js 15 & React 19 codebases engineered for speed, security, and enterprise scalability.",
    items: [
      {
        id: "nextjs-web-apps",
        title: "Next.js 15 & React 19 Engineering",
        tagline: "Modern full-stack web platforms built for performance & scale",
        description: "Production web applications engineered with Next.js App Router, React Server Components, TypeScript, and clean architectural patterns.",
        deliverables: [
          "Clean Modular TypeScript Architecture",
          "Tailwind CSS v4 Responsive Layouts",
          "Framer Motion / Micro-Interaction Animation",
          "State Management & API Integration",
          "Automated Container & Cloud Deployment"
        ],
        timeline: "Core Competency",
        impactArea: "Production Grade",
        iconName: "Code2"
      },
      {
        id: "ecommerce-headless",
        title: "Headless E-Commerce & Web Engines",
        tagline: "High-conversion storefronts & transactional UI architectures",
        description: "Custom digital storefronts engineered for sub-second page loads, custom configurators, and seamless international checkout flows.",
        deliverables: [
          "Interactive Product Configurator UI",
          "Secure Payment Gateway Integrations",
          "Cart & Checkout Conversion Optimization",
          "Inventory & REST API Synchronization",
          "Real-time Analytics & Pixel Tracking"
        ],
        timeline: "Core Competency",
        impactArea: "Sub-Second Speed",
        iconName: "ShoppingBag"
      },
      {
        id: "performance-seo",
        title: "Core Web Vitals & Frontend Optimization",
        tagline: "Refactoring web applications for 95+ Lighthouse scores",
        description: "Deep technical optimization to eliminate layout shifts (CLS), reduce largest contentful paint (LCP), and meet strict enterprise SLA performance targets.",
        deliverables: [
          "Core Web Vitals Diagnosis & Refactoring",
          "Image & Asset Optimization Pipelines",
          "Code Splitting & Bundle Size Minimization",
          "WCAG AA Accessibility Compliance Fixes",
          "Structured Data & Schema SEO Architecture"
        ],
        timeline: "Core Competency",
        impactArea: "Lighthouse 95+",
        iconName: "Zap"
      }
    ]
  }
];

export const TOOL_STACK: ToolStack[] = [
  { name: "Figma", category: "Design", experience: "9+ Yrs", icon: "Figma", color: "#F24E1E" },
  { name: "Adobe Illustrator", category: "Design", experience: "8+ Yrs", icon: "PenTool", color: "#FF9A00" },
  { name: "Adobe Photoshop", category: "Design", experience: "8+ Yrs", icon: "Image", color: "#31A8FF" },
  { name: "After Effects", category: "Design", experience: "6+ Yrs", icon: "Film", color: "#9999FF" },
  { name: "Next.js 15", category: "Development", experience: "5+ Yrs", icon: "Globe", color: "#000000" },
  { name: "React 19", category: "Development", experience: "6+ Yrs", icon: "Atom", color: "#61DAFB" },
  { name: "TypeScript", category: "Development", experience: "5+ Yrs", icon: "FileCode", color: "#3178C6" },
  { name: "Tailwind CSS v4", category: "Development", experience: "5+ Yrs", icon: "Wind", color: "#06B6D4" },
  { name: "Motion / Framer", category: "Development", experience: "4+ Yrs", icon: "Layers", color: "#0055FF" },
  { name: "Node.js & Express", category: "Development", experience: "5+ Yrs", icon: "Server", color: "#339933" },
  { name: "Git & GitHub", category: "Workflow", experience: "7+ Yrs", icon: "GitBranch", color: "#F05032" },
  { name: "Vercel / Cloud", category: "Workflow", experience: "5+ Yrs", icon: "Cloud", color: "#000000" },
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024 — Present",
    role: "Lead Designer & Senior Frontend Engineer",
    company: "Apex Digital Agency",
    location: "Casablanca Sidi Maarouf, Morocco",
    description: "Architecting enterprise digital platforms, graphic design systems, and React/Next.js web applications as a solo hybrid Designer & Developer.",
    skills: ["Next.js", "Design Systems", "Product Strategy", "TypeScript", "Team Leadership"]
  },
  {
    year: "2022 — 2024",
    role: "Senior UI/UX Product Engineer",
    company: "TechPulse Enterprise Solutions",
    location: "Casablanca, Morocco",
    description: "Designed and engineered multi-currency fintech web applications, healthcare dashboards, and high-traffic e-commerce systems. Standardized cross-department Figma-to-Code component tokens.",
    skills: ["Figma Tokens", "Tailwind CSS", "React 18", "Fintech UX", "REST APIs"]
  },
  {
    year: "2020 — 2022",
    role: "UI/UX & Frontend Developer",
    company: "Global Media Systems",
    location: "Casablanca Sidi Maarouf, Morocco",
    description: "Engineered responsive web portals, internal management software, and client-facing dashboards with strict WCAG accessibility and performance targets.",
    skills: ["React", "UI Components", "Accessibility (WCAG)", "TypeScript", "HTML5/CSS3"]
  },
  {
    year: "2018 — 2020",
    role: "Visual Designer & Frontend Specialist",
    company: "Creative Vision Studio",
    location: "Casablanca, Morocco",
    description: "Created corporate visual identities, kinetic motion graphics campaigns, and responsive web layouts for commercial enterprise brands.",
    skills: ["Illustrator", "Photoshop", "After Effects", "Typography", "Web Engineering"]
  }
];

export const STATS: StatItem[] = [];

export const GRAPHIC_BRAND_SKILLS = {
  title: "Graphic & Brand Design Skills",
  items: [
    {
      name: "Brand Identity & Strategy",
      skills: ["Logo Design", "Visual Identity", "Brand Guidelines (Charte Graphique)", "Brand Storytelling"]
    },
    {
      name: "Graphic Design & Print",
      skills: ["Typography", "Color Theory", "Layout Design", "Packaging", "Print Production", "Posters & Vector Art"]
    },
    {
      name: "Digital & Social Media Design",
      skills: ["Social Media Kits", "Digital Ads", "Banners", "Marketing Collateral"]
    },
    {
      name: "UI/UX Design",
      skills: ["Wireframing", "Prototyping", "User Flow", "Interface Design", "Design Systems"]
    }
  ]
};

export const WEB_DEV_SKILLS = {
  title: "Web Development & Technical Skills",
  items: [
    {
      name: "Front-End Development",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Modern CSS Frameworks (Tailwind CSS, Bootstrap)"]
    },
    {
      name: "Web Design & CMS Platforms",
      skills: ["Responsive Web Design", "Webflow", "WordPress", "Elementor"]
    },
    {
      name: "Performance & Standards",
      skills: ["Cross-Browser Compatibility", "Web Accessibility (WCAG)", "Basic SEO", "Site Speed Optimization"]
    },
    {
      name: "Deployment & Management",
      skills: ["Domain Setup", "Hosting Management", "CPanel", "Basic Version Control (Git/GitHub)"]
    }
  ]
};

export const SOFTWARE_TOOLS: SoftwareToolGroup[] = [
  {
    category: "Design & Branding",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"]
  },
  {
    category: "UI/UX & Prototyping",
    tools: ["Figma", "Adobe XD"]
  },
  {
    category: "Development & Code",
    tools: ["VS Code", "Git", "GitHub"]
  },
  {
    category: "Content & Web",
    tools: ["WordPress", "Webflow"]
  }
];

export const SKILLS: SkillItem[] = [];

export const TESTIMONIALS: Testimonial[] = [];

export const CLIENT_LOGOS = [
  { name: "PRISM", logo: "PRISM" },
  { name: "ZAPHYRE", logo: "ZAPHYRE" },
  { name: "MOMENTO", logo: "MOMENTO" },
  { name: "OZONEXPRESS", logo: "OZONEXPRESS" },
  { name: "BELIVER", logo: "BELIVER" }
];

export const PROCESS_STEPS: Array<{
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyActions: string[];
}> = [];
