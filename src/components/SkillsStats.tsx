import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Code, 
  Layers, 
  PenTool, 
  BookOpen, 
  Layout, 
  Image as ImageIcon, 
  Cpu, 
  Workflow, 
  Zap, 
  Smartphone 
} from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const SkillsStats: React.FC = () => {
  const { t, language } = useLanguage();

  const creativeSkills = [
    {
      title: language === 'ar' ? 'تصميم الهوية البصرية والعلامة التجارية' : language === 'fr' ? 'Design d’Identité Visuelle & Logo' : 'Brand Identity Design',
      description: language === 'ar' ? 'ابتكار شعارات فريدة، وبناء هويات بصرية متكاملة، وصياغة أنظمة تصميم مؤسسية دقيقة.' : language === 'fr' ? 'Conception de logos uniques, création d’identités de marque cohérentes et de systèmes graphiques stricts.' : 'Conceptualizing unique logos, establishing cohesive visual identities, and defining strict corporate design systems.',
      icon: PenTool,
      badge: language === 'ar' ? 'الشعارات والهوية' : language === 'fr' ? 'LOGOS & IDENTITÉ' : 'LOGOS & IDENTITY'
    },
    {
      title: language === 'ar' ? 'المواثيق والأدلة الإرشادية للعلامة' : language === 'fr' ? 'Chartes Graphiques & Directives' : 'Graphic Charters & Guidelines',
      description: language === 'ar' ? 'توثيق معايير العلامة، وتناسق الخطوط، ومصفوفات الألوان لضمان التناسق عبر جميع الوسائط.' : language === 'fr' ? 'Documentation des règles de marque, hiérarchies typographiques et palettes pour une cohérence sur tous supports.' : 'Documenting brand rules, typography hierarchies, and color matrices to ensure brand consistency across all media.',
      icon: BookOpen,
      badge: language === 'ar' ? 'أنظمة التصميم' : language === 'fr' ? 'DESIGN SYSTEMS' : 'DESIGN SYSTEMS'
    },
    {
      title: language === 'ar' ? 'تصميم واجهات وتجربة المستخدم UI/UX' : language === 'fr' ? 'Design UI/UX & Prototypage' : 'UI/UX Design',
      description: language === 'ar' ? 'رسم المخططات الشبكية وتخطيط مسارات المستخدمين السلسة التي تجمع بين الجمالية العالية والسهولة الفائقة.' : language === 'fr' ? 'Conception de wireframes et de parcours utilisateurs fluides alliant élégance visuelle et utilisabilité optimale.' : 'Wireframing layouts and mapping fluid user journeys that balance aesthetic elegance with flawless usability.',
      icon: Layout,
      badge: language === 'ar' ? 'النماذج والتجربة' : language === 'fr' ? 'PROTOTYPAGE & UX' : 'PROTOTYPING & UX'
    },
    {
      title: language === 'ar' ? 'إنشاء الأصول والمواد البصرية' : language === 'fr' ? 'Création d’Actifs Visuels' : 'Visual Asset Creation',
      description: language === 'ar' ? 'إنتاج تصاميم رقمية عالية الدقة، وتراكيب فيكتورية، وعناصر بصرية هيكلية من الصفر.' : language === 'fr' ? 'Création d’images numériques haute résolution, compositions vectorielles et éléments graphiques sur-mesure.' : 'Crafting high-resolution digital imagery, vector compositions, and structured visual elements from scratch.',
      icon: ImageIcon,
      badge: language === 'ar' ? 'فيكتور ورسوم' : language === 'fr' ? 'VECTEURS & ASSETS' : 'VECTORS & RASTERS'
    }
  ];

  const engineeringSkills = [
    {
      title: language === 'ar' ? 'تطوير مواقع الويب المتكاملة Full-Stack' : language === 'fr' ? 'Développement Web Full-Stack' : 'Full-Stack Web Development',
      description: language === 'ar' ? 'برمجة منصات وتطبيقات ويب مخصصة بالكامل من البنية الأساسية إلى الواجهات التفاعلية المتجاوبة.' : language === 'fr' ? 'Développement de plateformes web sur-mesure, de la base architecturale aux interfaces interactives responsives.' : 'Engineering fully custom web platforms from structural foundation to responsive frontend interface.',
      icon: Cpu,
      badge: language === 'ar' ? 'تطوير ويب شامل' : language === 'fr' ? 'WEB END-TO-END' : 'END-TO-END WEB'
    },
    {
      title: language === 'ar' ? 'معمارية جافاسكريبت المخصصة Clean JS' : language === 'fr' ? 'Architecture JavaScript Modulaire' : 'Custom JavaScript Architecture',
      description: language === 'ar' ? 'كتابة شيفرات برمجية نظيفة ومنطقية ومعيارية للتعامل مع التطبيقات المعقدة دون بطء أو حمولة زائدة.' : language === 'fr' ? 'Écriture de scripts propres, modulaires et performants pour gérer des logiques applicatives complexes sans surcoût.' : 'Writing clean, logical, and modular scripts to handle complex applications without bloated overhead.',
      icon: Layers,
      badge: language === 'ar' ? 'جافاسكريبت معياري' : language === 'fr' ? 'JS MODULAIRE' : 'MODULAR JS'
    },
    {
      title: language === 'ar' ? 'ربط الواجهات البرمجية APIs والمنطق' : language === 'fr' ? 'Intégration d’APIs & Logique Backend' : 'API Integration & Logic',
      description: language === 'ar' ? 'ربط مكونات الواجهة الأمامية بالخوادم وقواعد البيانات وإدارة تدفق البيانات بسلاسة وأمان.' : language === 'fr' ? 'Connexion des interfaces utilisateur aux systèmes backend et gestion fluide des flux de données.' : 'Connecting front-end components to robust back-end systems and managing smooth data flows.',
      icon: Workflow,
      badge: language === 'ar' ? 'خوادم و APIs' : language === 'fr' ? 'BACKEND & APIS' : 'BACKEND & APIS'
    },
    {
      title: language === 'ar' ? 'تحسين الأداء وسرعة التحميل' : language === 'fr' ? 'Optimisation des Performances' : 'Performance Optimization',
      description: language === 'ar' ? 'فحص الشيفرة، وضغط الأصول والوسائط، وتحسين العمليات لتحقيق سرعات تحميل استثنائية.' : language === 'fr' ? 'Audit du code, compression des médias et optimisation de l’exécution pour une vitesse de chargement fulgurante.' : 'Auditing codebases, compressing assets, and refining logic to secure blazing-fast load speeds.',
      icon: Zap,
      badge: language === 'ar' ? 'مؤشرات الويب الأساسية' : language === 'fr' ? 'CORE WEB VITALS' : 'CORE WEB VITALS'
    },
    {
      title: language === 'ar' ? 'التصميم المتجاوب لجميع الشاشات' : language === 'fr' ? 'Design Web Responsive Multi-Écrans' : 'Responsive Web Design',
      description: language === 'ar' ? 'بناء شبكات مرنة ومكونات سلسة تبدو نقية ومثالية على أي شاشة، من الهواتف إلى شاشات 4K.' : language === 'fr' ? 'Création de grilles fluides s’adaptant avec une précision chirurgicale sur tous les formats d’écrans.' : 'Building flexible grids and fluid components that look immaculate on any screen size, from mobile to 4K displays.',
      icon: Smartphone,
      badge: language === 'ar' ? 'كل أحجام الشاشات' : language === 'fr' ? 'TOUS ÉCRANS' : 'ALL SCREEN SIZES'
    }
  ];

  return (
    <section id="skills" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            {t('skills_title')}
          </h2>
          <p className="text-rose-200/80 max-w-2xl text-base sm:text-lg font-sans font-light leading-relaxed">
            {t('skills_subtitle')}
          </p>
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Pillar 1: Creative & Strategic Skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Pillar Header */}
          <div className="p-6 rounded-3xl bg-[#D68379] text-[#150B0A] flex items-center justify-between shadow-2xl relative overflow-hidden border border-[#EBB5AF]">
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3.5 rounded-2xl bg-[#150B0A] text-[#D68379] shadow-md">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#150B0A]/80 font-extrabold tracking-widest block uppercase">
                  {language === 'ar' ? 'الفن والهوية' : language === 'fr' ? 'ART & IDENTITÉ' : 'ARTISTRY & IDENTITY'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#150B0A]">
                  {t('skills_creative_title')}
                </h3>
              </div>
            </div>
          </div>

          {/* Skill Items Cards */}
          <div className="space-y-4">
            {creativeSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-3 shadow-lg group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#1D0D0C] border border-[#381B19] text-[#D68379] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-serif font-bold text-[#fff8f0]">
                        {skill.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#1D0D0C] text-rose-300 border border-[#572A26] uppercase">
                      {skill.badge}
                    </span>
                  </div>
                  <p className="text-sm text-rose-200/80 font-sans font-light leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Pillar 2: Technical & Engineering Skills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6"
        >
          {/* Pillar Header */}
          <div className="p-6 rounded-3xl bg-[#2A1311] text-[#fff8f0] flex items-center justify-between shadow-2xl relative overflow-hidden border border-[#572A26]">
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-3.5 rounded-2xl bg-[#150B0A] text-[#D68379] border border-[#572A26] shadow-md">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#D68379] font-extrabold tracking-widest block uppercase">
                  {language === 'ar' ? 'البرمجة والمعمارية' : language === 'fr' ? 'CODE & ARCHITECTURE' : 'LOGIC & ARCHITECTURE'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
                  {t('skills_tech_title')}
                </h3>
              </div>
            </div>
          </div>

          {/* Skill Items Cards */}
          <div className="space-y-4">
            {engineeringSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-6 rounded-2xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-3 shadow-lg group"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#1D0D0C] border border-[#381B19] text-[#D68379] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-serif font-bold text-[#fff8f0]">
                        {skill.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[#1D0D0C] text-rose-300 border border-[#572A26] uppercase">
                      {skill.badge}
                    </span>
                  </div>
                  <p className="text-sm text-rose-200/80 font-sans font-light leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
