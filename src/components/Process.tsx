import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Process: React.FC = () => {
  const { t, language } = useLanguage();

  const processSteps = [
    {
      step: '01',
      title: language === 'ar' ? 'الاستكشاف والتحليل الاستراتيجي' : language === 'fr' ? 'Découverte & Alignement Stratégique' : 'Discovery & Strategic Alignment',
      subtitle: language === 'ar' ? 'البحث وتحديد الأهداف والنطاق' : language === 'fr' ? 'Recherche & Cadrage du Projet' : 'Scope & Research',
      description: language === 'ar' ? 'جلسات تشخيص متعمقة لفهم هوية العلامة والجمهور المستهدف وتحديد الأهداف التقنية والتصميمية بدقة.' : language === 'fr' ? 'Sessions d’immersion pour cerner l’identité de marque, les attentes des utilisateurs et établir une feuille de route claire.' : 'Deep-dive architectural workshops to map business objectives, user journeys, target audiences, and technical requirements.',
      keyActions: language === 'ar'
        ? ['تحليل متطلبات المشروع', 'أبحاث السوق والمنافسين', 'تحديد المتطلبات التقنية', 'تحديد الجدول الزمني']
        : language === 'fr'
        ? ['Cadrage des exigences', 'Analyse concurrentielle', 'Spécifications techniques', 'Feuille de route du projet']
        : ['Stakeholder Interviews', 'Competitor Landscape Audit', 'Technical Architecture Specs', 'Milestone & Delivery Roadmap']
    },
    {
      step: '02',
      title: language === 'ar' ? 'تصميم الهوية والأنظمة البصرية' : language === 'fr' ? 'Design de Marque & Direction Visuelle' : 'Identity & Visual Systems',
      subtitle: language === 'ar' ? 'الشعار ورموز التصميم و Figma' : language === 'fr' ? 'Identité & Design System' : 'Branding & Tokens',
      description: language === 'ar' ? 'ابتكار هوية بصرية متميزة تشمل الشعار ومجموعات الألوان ونظام التصميم الذري في Figma لضمان التناسق الكامل.' : language === 'fr' ? 'Création de l’identité graphique, des logos et d’un design system complet sous Figma pour une cohérence absolue.' : 'Crafting distinct brand identities, typography hierarchies, vector assets, and scalable Figma design systems with design tokens.',
      keyActions: language === 'ar'
        ? ['استكشاف مفاهيم الشعار', 'مكتبة مكونات Figma', 'أدلة إرشادات العلامة', 'نماذج تفاعلية عالية الدقة']
        : language === 'fr'
        ? ['Exploration de concepts de logo', 'Bibliothèque de composants Figma', 'Charte graphique complète', 'Prototypes haute fidélité']
        : ['Logo Concept Explorations', 'Figma Component Library', 'Brand Guidelines Manual', 'High-Fidelity UI Prototypes']
    },
    {
      step: '03',
      title: language === 'ar' ? 'التطوير البرمجي والهندسة المتقدمة' : language === 'fr' ? 'Ingénierie & Développement Moderne' : 'Frontend & Full-Stack Development',
      subtitle: language === 'ar' ? 'Next.js و TypeScript و Tailwind' : language === 'fr' ? 'Next.js & TypeScript' : 'Next.js & React 19',
      description: language === 'ar' ? 'تحويل التصاميم إلى تطبيقات ويب فائقة السرعة والاستجابة باستخدام أحدث تقنيات React و TypeScript مع مراعاة أعلى معايير الأمان.' : language === 'fr' ? 'Transformation des maquettes en plateformes web fluides et ultra-rapides avec React, TypeScript et Tailwind CSS.' : 'Translating approved designs into pixel-perfect, accessible, and performant web platforms with clean TypeScript architecture.',
      keyActions: language === 'ar'
        ? ['بنية برمجية معيارية', 'تنسيق متجاوب بالكامل', 'حركات وتفاعلات سلسة', 'ربط الخوادم وقواعد البيانات']
        : language === 'fr'
        ? ['Codebase TypeScript modulaire', 'Mise en page 100% responsive', 'Micro-animations fluides', 'Intégration d’APIs backend']
        : ['Modular TypeScript Codebase', 'Responsive Tailwind Styling', 'Fluid Motion & Interactions', 'API & Backend Integration']
    },
    {
      step: '04',
      title: language === 'ar' ? 'فحص الجودة والنشر والتحسين' : language === 'fr' ? 'Optimisation, Déploiement & Lancement' : 'Optimization, Launch & Handover',
      subtitle: language === 'ar' ? 'أداء 95+ و SEO والإطلاق' : language === 'fr' ? 'Lighthouse 95+ & Mise en Ligne' : '95+ Lighthouse & Handover',
      description: language === 'ar' ? 'فحوصات شاملة لمؤشرات Core Web Vitals والتوافق عبر الأجهزة، مع النشر السحابي الآمن وتوثيق كامل للأصول.' : language === 'fr' ? 'Tests rigoureux de performance, conformité SEO et mise en production avec documentation détaillée pour une autonomie totale.' : 'Rigorous performance audits, Core Web Vitals tuning, SEO optimization, and seamless cloud deployment with comprehensive handover.',
      keyActions: language === 'ar'
        ? ['تدقيق سرعة 95+ Lighthouse', 'فحص سهولة الوصول WCAG', 'النشر السحابي الآلي', 'تسليم الملفات والأصول الكاملة']
        : language === 'fr'
        ? ['Audit de vitesse 95+ Lighthouse', 'Vérification accessibilité WCAG', 'Mise en ligne cloud sécurisée', 'Passation complète des actifs']
        : ['95+ Lighthouse Audit', 'Cross-Browser & WCAG Testing', 'Automated Cloud Deployment', 'Asset & Documentation Handoff']
    }
  ];

  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('process_kicker')}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            {t('process_title')}
          </h2>
          <p className="text-rose-200/80 max-w-xl text-base sm:text-lg font-sans font-light">
            {t('process_subtitle')}
          </p>
        </div>
      </div>

      {/* 4-Step Cards Grid / Sticky List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {processSteps.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 sm:p-10 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 shadow-xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-[#D68379]">
                  {step.step}
                </span>
                <span className="text-xs font-display px-3 py-1 rounded-full bg-[#381B19] text-rose-200 border border-[#572A26] uppercase">
                  {t('phase_label')} {idx + 1}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold text-[#fff8f0] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-display text-[#D68379] font-bold uppercase tracking-wider">
                  {step.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-rose-200/80 font-sans font-light leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Key Actions List */}
            <div className="pt-4 border-t border-[#381B19] space-y-2">
              <span className="text-[11px] font-display uppercase text-rose-300/60 font-semibold block">
                {t('milestones_label')}
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-rose-200/90 font-sans">
                {step.keyActions.map((action, aIdx) => (
                  <li key={aIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D68379] shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
