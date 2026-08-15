import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../types';
import { X, ExternalLink, CheckCircle2, TrendingUp, Calendar, Tag, Layers, ArrowLeft, Globe, Eye } from 'lucide-react';
import { BrandIdentitySection } from './BrandIdentitySection';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (caseStudy) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F0706]/90 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl h-full sm:h-[90vh] bg-[#150B0A] border border-[#572A26] sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-[#fff8f0]"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#150B0A]/95 backdrop-blur-md border-b border-[#381B19]">
            <button
              onClick={onClose}
              className="group flex items-center gap-2 text-xs font-display font-bold text-rose-300/80 hover:text-[#D68379] transition-colors"
              data-cursor="BACK"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>CLOSE CASE STUDY</span>
            </button>

            <div className="flex items-center gap-3">
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden px-4 py-1.5 rounded-full bg-gradient-to-r from-[#B85C52] via-[#C8746B] to-[#D68379] text-[#fff8f0] font-display font-bold text-xs flex items-center gap-2 transition-all duration-300 animate-pulse-glow hover:scale-105 active:scale-95 shadow-md"
                  data-cursor="VISIT"
                >
                  {/* Live Ping Dot */}
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_6px_#34d399]"></span>
                  </span>

                  {/* Shimmer sweep */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />

                  <span className="relative z-10 tracking-wide">View Live</span>
                  <ExternalLink className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </a>
              )}
              <span className="text-xs font-display px-3 py-1 rounded-full bg-[#381B19] text-[#D68379] font-bold border border-[#572A26]">
                {caseStudy.category}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-[#572A26] bg-[#251110] hover:border-[#D68379] text-rose-200 hover:text-[#D68379] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Modal Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-10">
            {/* Title & Client Banner */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-display text-rose-300/60 border-b border-[#381B19] pb-3">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#D68379]" />
                  CLIENT: <strong className="text-[#fff8f0] font-bold">{caseStudy.client}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#D68379]" />
                  YEAR: <strong className="text-[#fff8f0] font-bold">{caseStudy.year}</strong>
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-[#fff8f0]">
                {caseStudy.title}
              </h1>

              <p className="text-lg sm:text-xl text-rose-200/80 max-w-3xl leading-relaxed font-sans font-light">
                {caseStudy.summary}
              </p>

              {/* Top Prominent Action Links */}
              {caseStudy.liveUrl && (
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B85C52] via-[#C8746B] to-[#D68379] text-[#fff8f0] font-display font-bold text-sm flex items-center gap-3 transition-all duration-300 animate-pulse-glow hover:scale-105 active:scale-95 shadow-xl"
                    data-cursor="VISIT"
                  >
                    {/* Live Radar Ping Dot */}
                    <span className="relative flex h-3 w-3 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-[0_0_10px_#34d399]"></span>
                    </span>

                    {/* Shimmer sweep */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:animate-shimmer" />

                    <span className="relative z-10 tracking-wide">View Live Prototype</span>
                    <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              )}

              {/* Project Specification Metadata Table */}
              {(caseStudy.projectType || caseStudy.industry || caseStudy.targetAudience || caseStudy.coreFocus) && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#251110] border border-[#572A26] text-xs font-sans">
                  {caseStudy.projectType && (
                    <div className="space-y-1">
                      <span className="font-display font-bold text-[#D68379] uppercase block">Project Type</span>
                      <span className="text-[#fff8f0] font-medium">{caseStudy.projectType}</span>
                    </div>
                  )}
                  {caseStudy.industry && (
                    <div className="space-y-1">
                      <span className="font-display font-bold text-[#D68379] uppercase block">Industry</span>
                      <span className="text-[#fff8f0] font-medium">{caseStudy.industry}</span>
                    </div>
                  )}
                  {caseStudy.targetAudience && (
                    <div className="space-y-1">
                      <span className="font-display font-bold text-[#D68379] uppercase block">Target Audience</span>
                      <span className="text-[#fff8f0] font-medium">{caseStudy.targetAudience}</span>
                    </div>
                  )}
                  {caseStudy.coreFocus && (
                    <div className="space-y-1">
                      <span className="font-display font-bold text-[#D68379] uppercase block">Core Focus</span>
                      <span className="text-[#fff8f0] font-medium">{caseStudy.coreFocus}</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 1. PROJECT OVERVIEW */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] space-y-3">
              <h3 className="text-xl font-serif font-bold text-[#D68379] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D68379]" />
                1. PROJECT OVERVIEW
              </h3>
              <p className="text-sm sm:text-base text-rose-200/90 leading-relaxed font-sans font-light">
                {caseStudy.process}
              </p>
            </div>

            {/* 2. DESIGN SYSTEM & BRAND IDENTITY */}
            {caseStudy.designSystemSpecs && (
              <div className="p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#D68379] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D68379]" />
                  2. DESIGN SYSTEM &amp; BRAND IDENTITY
                </h3>
                <p className="text-sm sm:text-base text-rose-200/90 leading-relaxed font-sans font-light">
                  {caseStudy.designSystemSpecs.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {caseStudy.designSystemSpecs.colors.map((c, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-[#150B0A] border border-[#381B19]">
                      <div
                        className="w-10 h-10 rounded-xl border border-white/20 shrink-0 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div>
                        <span className="text-sm font-serif font-bold text-[#fff8f0] block">{c.name}</span>
                        <span className="text-xs font-mono text-[#D68379]">{c.role} ({c.hex})</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-rose-300/80 italic font-sans">
                  {caseStudy.designSystemSpecs.footerNote}
                </p>
              </div>
            )}

            {/* 3. THE CHALLENGE & CORE SOLUTIONS */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] space-y-5">
              <h3 className="text-xl font-serif font-bold text-[#D68379] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                3. THE CHALLENGE &amp; CORE SOLUTIONS
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#150B0A] border border-[#381B19] space-y-2">
                  <span className="text-xs font-display font-bold text-rose-400 uppercase block">The Challenge</span>
                  <p className="text-sm text-rose-200/80 leading-relaxed font-sans font-light">
                    {caseStudy.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#150B0A] border border-[#381B19] space-y-2">
                  <span className="text-xs font-display font-bold text-emerald-400 uppercase block">Core Solution</span>
                  <p className="text-sm text-rose-200/80 leading-relaxed font-sans font-light">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. MY ROLE */}
            {caseStudy.myRoleSpecs && (
              <div className="p-6 rounded-3xl bg-[#251110] border border-[#572A26] space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-[#D68379] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D68379]" />
                    3. MY ROLE — {caseStudy.myRoleSpecs.title}
                  </h3>
                  <p className="text-sm text-rose-200/80 font-sans">
                    {caseStudy.myRoleSpecs.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {caseStudy.myRoleSpecs.responsibilities.map((resp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#150B0A] border border-[#381B19] space-y-2">
                      <span className="text-xs font-display font-bold text-[#D68379] uppercase block">{resp.title}</span>
                      <p className="text-xs text-rose-200/80 font-sans leading-relaxed">{resp.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. TECH STACK & PROFESSIONAL TOOLS */}
            {caseStudy.techStackTools && caseStudy.techStackTools.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#251110] border border-[#572A26] space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#D68379] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D68379]" />
                  4. TECH STACK &amp; PROFESSIONAL TOOLS
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {caseStudy.techStackTools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-[#150B0A] border border-[#572A26] text-xs font-mono text-[#fff8f0] shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 5. KEY PLATFORM FEATURES */}
            {caseStudy.keyPlatformFeatures && caseStudy.keyPlatformFeatures.length > 0 && (
              <div className="p-6 rounded-3xl bg-[#251110] border border-[#572A26] space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#D68379] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D68379]" />
                  5. KEY PLATFORM FEATURES
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.keyPlatformFeatures.map((feat, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-[#150B0A] border border-[#381B19] space-y-2">
                      <h4 className="text-sm font-serif font-bold text-[#fff8f0] flex items-center gap-2">
                        <span className="text-[#D68379] font-mono text-xs">0{idx + 1}.</span>
                        {feat.title}
                      </h4>
                      <p className="text-xs text-rose-200/80 font-sans leading-relaxed">{feat.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. PROJECT RESULTS & STRATEGIC TAKEAWAYS */}
            {caseStudy.strategicTakeaway && (
              <div className="p-6 rounded-3xl bg-[#251110] border border-[#572A26] space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#D68379] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  6. PROJECT RESULTS &amp; STRATEGIC TAKEAWAYS
                </h3>
                <p className="text-sm sm:text-base text-rose-200/90 leading-relaxed font-sans font-light">
                  {caseStudy.strategicTakeaway.summary}
                </p>
                <div className="p-5 rounded-2xl bg-[#150B0A] border border-[#D68379]/40 space-y-2">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase block">Key Growth Takeaway</span>
                  <p className="text-xs sm:text-sm text-[#fff8f0] font-sans leading-relaxed italic">
                    "{caseStudy.strategicTakeaway.keyGrowthTakeaway}"
                  </p>
                </div>
              </div>
            )}

            {/* Brand Identity & Design System Specs (Color Palette, Police de caractères, Scent Pyramid) */}
            <BrandIdentitySection
              colorPalette={caseStudy.colorPalette}
              typography={caseStudy.typography}
              brandSpecs={caseStudy.brandSpecs}
            />

            {/* Metrics Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#251110] border border-[#572A26]">
              {caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-xs font-display text-rose-300/70 uppercase flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-[#D68379]" />
                    {metric.label}
                  </span>
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-[#D68379]">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>



            {/* Key Deliverables */}
            <div className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#251110] text-[#fff8f0] border border-[#572A26]">
              <h3 className="text-lg font-serif font-bold text-[#D68379] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#D68379]" />
                KEY DELIVERABLES &amp; ASSETS PRODUCED
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-rose-200/90 font-sans">
                {caseStudy.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#D68379] font-display font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Showcase */}
            {caseStudy.gallery && caseStudy.gallery.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-[#fff8f0] flex items-center gap-2">
                  <Tag className="w-5 h-5 text-[#D68379]" />
                  VISUAL GALLERY &amp; DESIGN SYSTEM SHOWCASE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden border border-[#572A26] aspect-[4/3] shadow-md"
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#381B19]">
              <div className="flex items-center gap-4">
                {caseStudy.liveUrl && (
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r from-[#B85C52] via-[#C8746B] to-[#D68379] text-[#fff8f0] font-display font-bold text-sm flex items-center gap-3 transition-all duration-300 animate-pulse-glow hover:scale-105 active:scale-95 shadow-xl"
                    data-cursor="VISIT"
                  >
                    {/* Live Radar Ping Dot */}
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-90"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                    </span>

                    {/* Shimmer sweep */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:animate-shimmer" />

                    <span className="relative z-10 tracking-wide">View Live Prototype</span>
                    <ExternalLink className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-[#251110] border border-[#572A26] text-rose-200 hover:text-[#fff8f0] font-display text-xs"
              >
                Close Window Esc
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
