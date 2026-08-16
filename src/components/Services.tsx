import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Layout, Sparkles, Code2, ShoppingBag, Zap, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTrack, setActiveTrack] = useState<'Design' | 'Development'>('Design');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#D68379]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#D68379]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D68379]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#D68379]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#D68379]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#D68379]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D68379]" />;
    }
  };

  const designServices = [
    {
      id: 'design-systems',
      title: language === 'ar' ? 'أنظمة التصميم ورموز Figma الذرية' : language === 'fr' ? 'Design Systems Atomiques & Tokens' : 'Atomic Design Systems & Tokens',
      tagline: language === 'ar' ? 'مكتبات العناصر، رموز الألوان والتوثيق البرمجي' : language === 'fr' ? 'Tokens Figma, bibliothèques de composants & documentation' : 'Figma design tokens, component libraries & documentation',
      description: language === 'ar' ? 'توحيد العناصر البصرية في رموز تصميم معيارية (الألوان، الخطوط، المسافات، أنماط العرض الفاتحة والداكنة) مع أدلة شاملة للمطورين.' : language === 'fr' ? 'Standardisation des éléments visuels en tokens atomiques évolutifs (couleurs, typographie, espacement, thèmes) avec spécifications techniques.' : 'Standardizing visual elements into scalable atomic design tokens (colors, typography, spacing, dark/light themes) with comprehensive developer specs.',
      deliverables: language === 'ar' 
        ? ['مكتبة مكونات Figma ورموز التصميم', 'رموز التباين وسهولة الوصول WCAG AAA', 'دليل المكونات التفاعلية للمطورين', 'بنية الثيم الفاتح والداكن', 'تسليم الواجهات البرمجية للمطورين']
        : language === 'fr'
        ? ['Bibliothèque de composants Figma & Tokens', 'Tokens d’accessibilité et contraste WCAG AAA', 'Guides de composants interactifs & spécifications', 'Infrastructure de thèmes clair & sombre', 'Handoff de design UI multi-plateforme']
        : ['Figma Component Library & Design Tokens', 'WCAG AAA Accessibility Contrast Tokens', 'Interactive Component Guidelines & Specs', 'Light & Dark Mode Theme Infrastructure', 'Cross-Platform UI Design Handoff'],
      timeline: language === 'ar' ? 'تخصص أساسي' : language === 'fr' ? 'Compétence Clé' : 'Core Competency',
      impactArea: language === 'ar' ? 'تناسق بصري 100%' : language === 'fr' ? 'Zéro Incohérence UI' : 'Zero UI Inconsistency',
      iconName: 'Palette'
    },
    {
      id: 'ui-ux-architecture',
      title: language === 'ar' ? 'تصميم واجهات وتجربة المستخدم UI/UX' : language === 'fr' ? 'Architecture UI/UX & Design Produit' : 'Product UI/UX & Information Architecture',
      tagline: language === 'ar' ? 'مسارات المستخدم، نماذج عالية الدقة وبروتوتايب تفاعلي' : language === 'fr' ? 'Flux utilisateurs, UI haute fidélité & prototypes interactifs' : 'User flows, high-fidelity UI & interactive prototypes',
      description: language === 'ar' ? 'واجهات برمجية مبنية على أبحاث سلوك المستخدمين للأنظمة المعقدة ولوحات البيانات السريعة ومنصات SaaS متعددة الخطوات.' : language === 'fr' ? 'Interfaces d’applications web pensées pour les flux complexes, les portails SaaS multi-étapes et les tableaux de bord à haute densité.' : 'Research-backed web application interfaces engineered for complex workflows, multi-step SaaS portals, and high-frequency dashboards.',
      deliverables: language === 'ar'
        ? ['هندسة المعلومات ورسم مسارات الاستخدام', 'مخططات شبكية وواجهات عالية الدقة', 'نماذج تفاعلية قابلة للنقر على Figma', 'تفاعلات دقيقة وحركات سلسة للواجهات', 'تقييم سهولة الاستخدام والمواصفات']
        : language === 'fr'
        ? ['Cartographie des flux utilisateurs & architecture d’information', 'Wireframes haute fidélité & mises en page d’application', 'Prototypes Figma interactifs cliquables', 'Micro-interactions du parcours utilisateur', 'Évaluation de l’utilisabilité & spécifications']
        : ['User Flow Mapping & Information Architecture', 'High-Fidelity Wireframes & App Layouts', 'Clickable Interactive Figma Prototypes', 'User Journey Micro-Interactions', 'Usability Evaluation & Design Specs'],
      timeline: language === 'ar' ? 'تخصص أساسي' : language === 'fr' ? 'Compétence Clé' : 'Core Competency',
      impactArea: language === 'ar' ? '+65% سرعة إنجاز المهام' : language === 'fr' ? '+65% Rapidité de Flux' : '+65% Workflow Speed',
      iconName: 'Layout'
    },
    {
      id: 'brand-art-direction',
      title: language === 'ar' ? 'الهوية البصرية والأنظمة التجارية' : language === 'fr' ? 'Identité de Marque & Direction Artistique' : 'Product Identity & Brand Systems',
      tagline: language === 'ar' ? 'اللغة البصرية للعلامة، الخطوط والدليل الإرشادي' : language === 'fr' ? 'Langage visuel de marque, typographie & identité d’entreprise' : 'Visual brand language, typography & corporate identity',
      description: language === 'ar' ? 'ابتكار هويات بصرية متكاملة للمنتجات الرقمية والشركات الناشئة والمؤسسات تبرز الريادة السوقية.' : language === 'fr' ? 'Création d’identités visuelles cohérentes pour produits numériques, startups technologiques et suites logicielles d’entreprise.' : 'Creating cohesive visual identities for digital products, tech ventures, and enterprise software suites that convey market leadership.',
      deliverables: language === 'ar'
        ? ['الهوية التجارية والمبادئ التوجيهية البصرية', 'تراتبية الخطوط وقواعد التنسيق الطباعي', 'مكتبة الأيقونات والرسوم الفيكتورية', 'قوالب المواد الرقمية والمطبوعة', 'الدليل الإرشادي الشامل ومستودع الأصول']
        : language === 'fr'
        ? ['Identité visuelle de marque & charte graphique', 'Échelle typographique personnalisée & règles d’association', 'Bibliothèque d’iconographie & d’illustrations vectorielles', 'Modèles de supports imprimés et numériques', 'Manuel de marque & référentiel d’actifs visuels']
        : ['Corporate Brand Identity & Visual Guidelines', 'Custom Typography Scale & Pairing Rules', 'Iconography & Vector Illustration Library', 'Digital & Print Collateral Templates', 'Brand Manual & Visual Asset Repository'],
      timeline: language === 'ar' ? 'تخصص أساسي' : language === 'fr' ? 'Compétence Clé' : 'Core Competency',
      impactArea: language === 'ar' ? '100% تماسك بصري' : language === 'fr' ? '100% Cohérence de Marque' : '100% Brand Cohesion',
      iconName: 'Sparkles'
    }
  ];

  const devServices = [
    {
      id: 'nextjs-web-apps',
      title: language === 'ar' ? 'برمجة وتطوير Next.js 15 و React 19' : language === 'fr' ? 'Ingénierie Next.js 15 & React 19' : 'Next.js 15 & React 19 Engineering',
      tagline: language === 'ar' ? 'منصات ويب حديثة متكاملة مبنية للأداء الفائق وقابلية التوسع' : language === 'fr' ? 'Plateformes web modernes full-stack pour la performance et l’échelle' : 'Modern full-stack web platforms built for performance & scale',
      description: language === 'ar' ? 'تطبيقات ويب للإنتاج الفعلي مبنية بتقنيات Next.js App Router و React Server Components و TypeScript وأنماط معمارية نظيفة.' : language === 'fr' ? 'Applications web de production développées avec Next.js App Router, React Server Components, TypeScript et une architecture propre.' : 'Production web applications engineered with Next.js App Router, React Server Components, TypeScript, and clean architectural patterns.',
      deliverables: language === 'ar'
        ? ['بنية برمجية معيارية ونظيفة بـ TypeScript', 'تنسيقات متجاوبة بتقنية Tailwind CSS v4', 'حركات تفاعلية فائقة السلاسة بـ Framer Motion', 'إدارة الحالة والربط مع الواجهات البرمجية APIs', 'النشر السحابي الآلي والحاويات المدارة']
        : language === 'fr'
        ? ['Architecture TypeScript modulaire et propre', 'Mises en page responsives Tailwind CSS v4', 'Animations et micro-interactions Framer Motion', 'Gestion d’état & intégration d’APIs', 'Déploiement conteneurisé et cloud automatisé']
        : ['Clean Modular TypeScript Architecture', 'Tailwind CSS v4 Responsive Layouts', 'Framer Motion / Micro-Interaction Animation', 'State Management & API Integration', 'Automated Container & Cloud Deployment'],
      timeline: language === 'ar' ? 'تخصص أساسي' : language === 'fr' ? 'Compétence Clé' : 'Core Competency',
      impactArea: language === 'ar' ? 'معايير الإنتاج الاحترافي' : language === 'fr' ? 'Niveau Production' : 'Production Grade',
      iconName: 'Code2'
    },
    {
      id: 'ecommerce-headless',
      title: language === 'ar' ? 'متاجر التجارة الإلكترونية المتقدمة Headless' : language === 'fr' ? 'E-Commerce Headless & Moteurs Web' : 'Headless E-Commerce & Web Engines',
      tagline: language === 'ar' ? 'واجهات شراء سريعة ومحسنة لمعدلات التحويل العالية' : language === 'fr' ? 'Boutiques à forte conversion & architectures transactionnelles' : 'High-conversion storefronts & transactional UI architectures',
      description: language === 'ar' ? 'متاجر رقمية مخصصة ومصممة للتحميل في أقل من ثانية، مع خيارات تخصيص المنتجات وتدفقات الدفع السلسة.' : language === 'fr' ? 'Vitrines numériques sur-mesure conçues pour un chargement instantané, des configurateurs personnalisés et des flux d’achat fluides.' : 'Custom digital storefronts engineered for sub-second page loads, custom configurators, and seamless international checkout flows.',
      deliverables: language === 'ar'
        ? ['واجهات تفاعلية لتخصيص المنتجات', 'ربط بوابات الدفع الإلكتروني الآمنة', 'تحسين سلة الشراء ومعدلات إتمام الطلب', 'مزامنة المخزون والواجهات البرمجية REST', 'تتبع التحليلات والبيانات اللحظية']
        : language === 'fr'
        ? ['Interface de configuration de produit interactive', 'Intégration de passerelles de paiement sécurisées', 'Optimisation de la conversion panier & commande', 'Synchronisation d’inventaire & APIs REST', 'Analytique en temps réel & suivi pixels']
        : ['Interactive Product Configurator UI', 'Secure Payment Gateway Integrations', 'Cart & Checkout Conversion Optimization', 'Inventory & REST API Synchronization', 'Real-time Analytics & Pixel Tracking'],
      timeline: language === 'ar' ? 'تخصص أساسي' : language === 'fr' ? 'Compétence Clé' : 'Core Competency',
      impactArea: language === 'ar' ? 'سرعة استجابة فورية' : language === 'fr' ? 'Vitesse Sous la Seconde' : 'Sub-Second Speed',
      iconName: 'ShoppingBag'
    },
    {
      id: 'performance-seo',
      title: language === 'ar' ? 'تحسين الأداء وسرعة Core Web Vitals' : language === 'fr' ? 'Core Web Vitals & Optimisation Frontend' : 'Core Web Vitals & Frontend Optimization',
      tagline: language === 'ar' ? 'إعادة ضبط التطبيقات لتحقيق درجات 95+ في مؤشرات Lighthouse' : language === 'fr' ? 'Optimisation pour atteindre un score Lighthouse de 95+' : 'Refactoring web applications for 95+ Lighthouse scores',
      description: language === 'ar' ? 'تحسين تقني عميق للقضاء على انزياح التنسيق (CLS) وتسريع تحميل أكبر عنصر مرئي (LCP) ومطابقة أعلى المعايير.' : language === 'fr' ? 'Optimisation technique poussée pour éliminer les décalages de mise en page (CLS), accélérer le LCP et respecter les SLA d’entreprise.' : 'Deep technical optimization to eliminate layout shifts (CLS), reduce largest contentful paint (LCP), and meet strict enterprise SLA performance targets.',
      deliverables: language === 'ar'
        ? ['تشخيص وإصلاح مؤشرات Core Web Vitals', 'خطوط أنابيب ضغط وتحسين الصور والأصول', 'تقسيم الكود وتقليل حجم حزم التحميل', 'مطابقة معايير سهولة الوصول WCAG AA', 'بنية البيانات المنظمة وتحسين محركات البحث SEO']
        : language === 'fr'
        ? ['Diagnostic & refactorisation Core Web Vitals', 'Pipelines d’optimisation des images & ressources', 'Découpage du code & réduction du bundle', 'Conformité d’accessibilité WCAG AA', 'Architecture de données structurées & SEO']
        : ['Core Web Vitals Diagnosis & Refactoring', 'Image & Asset Optimization Pipelines', 'Code Splitting & Bundle Size Minimization', 'WCAG AA Accessibility Compliance Fixes', 'Structured Data & Schema SEO Architecture'],
      timeline: language === 'ar' ? 'تخصص أساسي' : language === 'fr' ? 'Compétence Clé' : 'Core Competency',
      impactArea: language === 'ar' ? 'درجة 95+ في Lighthouse' : language === 'fr' ? 'Score Lighthouse 95+' : 'Lighthouse 95+',
      iconName: 'Zap'
    }
  ];

  const currentTrackItems = activeTrack === 'Design' ? designServices : devServices;
  const currentTrackTitle = activeTrack === 'Design' ? t('track_design_sub') : t('track_dev_sub');
  const currentTrackDesc = activeTrack === 'Design' ? t('track_design_desc') : t('track_dev_desc');

  const handleSelectServiceForContact = (serviceTitle: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const event = new CustomEvent('select-service', { detail: serviceTitle });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('services_kicker')}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            {t('services_title')}
          </h2>
          <p className="text-rose-200/80 max-w-xl text-base sm:text-lg font-sans font-light">
            {t('services_subtitle')}
          </p>
        </div>

        {/* Track Toggle Switch */}
        <div className="flex items-center bg-[#251110] p-1.5 rounded-2xl border border-[#572A26]">
          <button
            onClick={() => setActiveTrack('Design')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-display uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTrack === 'Design'
                ? 'bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] shadow-md shadow-rose-950/40'
                : 'text-rose-200/70 hover:text-[#fff8f0]'
            }`}
            data-cursor="DESIGN TRACK"
          >
            <Palette className="w-4 h-4" />
            <span>{t('track_design_btn')}</span>
          </button>
          <button
            onClick={() => setActiveTrack('Development')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-display uppercase tracking-wider font-bold transition-all cursor-pointer ${
              activeTrack === 'Development'
                ? 'bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] shadow-md shadow-rose-950/40'
                : 'text-rose-200/70 hover:text-[#fff8f0]'
            }`}
            data-cursor="ENGINEERING TRACK"
          >
            <Code2 className="w-4 h-4" />
            <span>{t('track_engineering_btn')}</span>
          </button>
        </div>
      </div>

      {/* Active Track Intro Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-display text-[#D68379] uppercase tracking-widest font-bold">
            {activeTrack === 'Design' ? t('track_design_btn') : t('track_engineering_btn')}
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
            {currentTrackTitle}
          </h3>
          <p className="text-sm sm:text-base text-rose-200/80 max-w-2xl font-sans font-light">
            {currentTrackDesc}
          </p>
        </div>

        <button
          onClick={() => handleSelectServiceForContact(`${activeTrack} Capability Role`)}
          className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#B85C52] to-[#D68379] hover:brightness-110 text-[#fff8f0] font-bold text-xs font-display uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-rose-950/50 cursor-pointer"
          data-cursor="INQUIRE"
        >
          <span>{t('service_request_btn')}</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {currentTrackItems.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26]">
                  {getIcon(service.iconName)}
                </div>
                <span className="text-xs font-display font-bold text-rose-200 px-3 py-1 rounded-full bg-[#381B19] border border-[#572A26]">
                  {service.impactArea || service.timeline}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-serif font-bold text-[#fff8f0] tracking-tight">
                  {service.title}
                </h4>
                <p className="text-xs font-display text-rose-300/70">{service.tagline}</p>
              </div>

              <p className="text-sm text-rose-200/80 font-sans font-light leading-relaxed">
                {service.description}
              </p>

              {/* Deliverables checklist */}
              <div className="space-y-2 pt-2 border-t border-[#381B19]">
                <span className="text-[11px] font-display uppercase text-rose-300/60 font-semibold block">
                  {t('service_deliverables_label')}
                </span>
                <ul className="space-y-1.5 text-xs text-rose-200/90 font-sans">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D68379] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 border-t border-[#381B19] flex items-center justify-between text-xs font-sans">
              <span className="flex items-center gap-1.5 text-rose-300/70 font-display">
                <Clock className="w-3.5 h-3.5 text-[#D68379]" />
                {service.timeline}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
