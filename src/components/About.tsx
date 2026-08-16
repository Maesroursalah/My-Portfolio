import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Code, 
  Zap, 
  Smartphone, 
  MessageCircle,
  Mail,
  Copy, 
  Check, 
  ArrowUpRight, 
  Compass,
  FileCode2,
  Wrench,
  Lightbulb,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from './LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 relative">
      {/* Section Header */}
      <div className="border-b border-[#572A26] pb-8">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
          {t('about_title')}
        </h2>
      </div>

      {/* Hero Narrative & Introduction Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Main Intro Hero Box */}
        <div className="lg:col-span-12 p-8 sm:p-12 rounded-3xl bg-[#251110] border border-[#572A26] shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D68379]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#381B19] text-[#D68379] border border-[#572A26] font-semibold">
                SALAH EDDINE MESROUR
              </span>
              <span className="text-xs font-mono text-rose-300/70">
                {t('about_location')}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-[#fff8f0] leading-tight">
              {t('about_greeting_prefix')} <span className="text-[#D68379]">{t('about_greeting_name')}</span>.
            </h3>

            <p className="text-lg sm:text-2xl font-sans text-rose-100 font-normal leading-relaxed border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#D68379] pl-6 rtl:pl-0 rtl:pr-6 italic max-w-4xl">
              {t('about_quote')}
            </p>
          </div>

          <div className="pt-6 border-t border-[#381B19] flex flex-wrap gap-6 text-sm font-display text-rose-200/80">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D68379]" />
              <span>{t('about_tag_brand')}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-[#D68379]" />
              <span>{t('about_tag_web')}</span>
            </div>
          </div>
        </div>

        {/* Narrative & Approach Side Boxes */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-[#1D0D0C] border border-[#572A26] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-[#D68379] font-display text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>{t('about_bespoke_title')}</span>
            </div>
            <p className="text-sm sm:text-base font-sans text-rose-200/90 leading-relaxed font-light">
              {t('about_bespoke_desc')}
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#1D0D0C] border border-[#572A26] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-[#D68379] font-display text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>{t('about_structural_title')}</span>
            </div>
            <p className="text-sm sm:text-base font-sans text-rose-200/90 leading-relaxed font-light">
              {t('about_structural_desc')}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Skills & Technologies Showcase */}
      <div className="space-y-8 pt-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold uppercase tracking-widest">
            <Wrench className="w-4 h-4" />
            <span>{t('about_toolkit_kicker')}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff8f0]">
            {t('about_toolkit_title')}
          </h3>
          <p className="text-rose-200/80 font-sans text-sm sm:text-base max-w-3xl font-light">
            {t('about_toolkit_desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Brand Identity & Design */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] space-y-6 shadow-2xl relative overflow-hidden group hover:border-[#D68379]/70 transition-all duration-300"
          >
            <div className="flex items-center justify-between border-b border-[#381B19] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26]">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                    {t('about_design_toolkit_title')}
                  </h4>
                  <span className="text-xs font-mono text-rose-300/60 block">{t('about_design_toolkit_sub')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Tool 1 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Vector & Identity Design
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    ADOBE ILLUSTRATOR
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  Logos, Graphic Charters, Brand Guidelines & Vector Assets
                </p>
              </div>

              {/* Tool 2 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Visual Assets & Compositing
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    ADOBE PHOTOSHOP
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  Image Editing, Visual Concepts & Digital Compositing
                </p>
              </div>

              {/* Tool 3 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    UI/UX Prototyping
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    FIGMA
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  Interface Layouts, Wireframing & Design Systems
                </p>
              </div>
            </div>
          </motion.div>

          {/* Web Development & Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] space-y-6 shadow-2xl relative overflow-hidden group hover:border-[#D68379]/70 transition-all duration-300"
          >
            <div className="flex items-center justify-between border-b border-[#381B19] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26]">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                    {t('about_dev_toolkit_title')}
                  </h4>
                  <span className="text-xs font-mono text-rose-300/60 block">{t('about_dev_toolkit_sub')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Stack 1 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Front-End Engineering
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    UI FRAMEWORKS
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  HTML5, CSS3, Modern JavaScript (ES6+), Tailwind CSS
                </p>
              </div>

              {/* Stack 2 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Back-End & Logic
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    SERVER & APIS
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  Node.js, Custom JavaScript Architecture, API Integration
                </p>
              </div>

              {/* Stack 3 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Environment & Version Control
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    DEV PIPELINE
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  VS Code, Git, GitHub
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Philosophy Grid */}
      <div className="space-y-8 pt-6 border-t border-[#572A26]">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>{t('about_principles_title')}</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff8f0]">
            {t('about_principles_title')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26] w-fit group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                {t('about_perf_title')}
              </h4>
              <p className="text-sm font-sans text-rose-200/80 leading-relaxed font-light">
                {t('about_perf_desc')}
              </p>
            </div>
            <div className="pt-3 border-t border-[#381B19] text-xs font-mono text-[#D68379] uppercase tracking-wider">
              LIGHTNING-FAST LOAD
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26] w-fit group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                {t('about_responsive_title')}
              </h4>
              <p className="text-sm font-sans text-rose-200/80 leading-relaxed font-light">
                {t('about_responsive_desc')}
              </p>
            </div>
            <div className="pt-3 border-t border-[#381B19] text-xs font-mono text-[#D68379] uppercase tracking-wider">
              PIXEL-PERFECT ON ALL DEVICES
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Box: Let's Build Something Meaningful */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#251110] via-[#1D0D0C] to-[#150B0A] border-2 border-[#572A26] shadow-2xl relative overflow-hidden space-y-8"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D68379]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-mono font-bold border border-[#572A26]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COLLABORATION & INQUIRIES</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-serif font-bold text-[#fff8f0] tracking-tight">
            🚀 {t('contact_title')}
          </h3>
          <p className="text-base sm:text-lg font-sans text-rose-200/90 font-light leading-relaxed">
            {t('contact_subtitle')}
          </p>
        </div>

        {/* Contact CTA buttons */}
        <div className="flex flex-wrap items-center gap-4 relative z-10 pt-2">
          {/* WhatsApp Direct Chat Button */}
          <a
            href={PERSONAL_INFO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-display font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-emerald-950/50 flex items-center gap-2.5 group active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('chat_whatsapp')}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Direct Gmail / Email Button */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-6 py-3.5 rounded-2xl bg-[#381B19] hover:bg-[#572A26] border border-[#572A26] hover:border-[#D68379] text-[#fff8f0] font-display font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-2.5 group shadow-lg"
          >
            <Mail className="w-4 h-4 text-[#D68379]" />
            <span>{PERSONAL_INFO.email}</span>
            <ArrowUpRight className="w-4 h-4 text-rose-300/60 group-hover:text-[#D68379] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="px-4 py-3.5 rounded-2xl bg-[#251110] hover:bg-[#381B19] border border-[#572A26] hover:border-[#D68379] text-rose-200 font-display text-xs font-medium transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            title="Copy email to clipboard"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">{t('email_copied')}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#D68379]" />
                <span>{t('copy_email')}</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
