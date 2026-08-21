import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Maximize2, X, ZoomIn, ZoomOut, RotateCcw, ExternalLink, BookOpen, Layers, CheckCircle2, Eye } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { onImageError } from '../lib/imgFallback';

interface NixxMenuGalleryViewProps {
  onBack: () => void;
}

export const NixxMenuGalleryView: React.FC<NixxMenuGalleryViewProps> = ({ onBack }) => {
  const { t, language } = useLanguage();
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const MENU_IMAGE_URL = 'https://cdn.jsdelivr.net/gh/Maesroursalah/portfolio@main/nixx%20menu_page-0001.jpg';

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.35, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.35, 0.7));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh] space-y-8">
      {/* Top Navigation & Category Pill */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B0C0B] hover:bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 text-xs font-mono transition-all duration-200 group cursor-pointer shadow-lg active:scale-95"
        >
          <ArrowLeft className="w-4 h-4 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
          <span>{t('gallery_back_btn')}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold bg-[#381B19] text-[#D68379] border border-[#572A26]">
            {t('cat_print')}
          </span>
        </div>
      </div>

      {/* Project Header Banner */}
      <div className="pt-2 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#381B19] pb-6">
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#fff8f0] tracking-tight">
            NIXX MENU
          </h1>
          <p className="text-sm sm:text-base text-rose-300/70 max-w-3xl font-sans leading-relaxed">
            {language === 'ar'
              ? 'تصميم راقٍ وشامل لقائمة طعام ومشروبات مطعم ولاونج NIXX الفاخر، مع مراعاة المعايير الطباعية الاحترافية والتنسيق البصري المتوازن وتكامل رمز QR الرقمي.'
              : language === 'fr'
              ? 'Conception sur mesure du menu gastronomique et de la carte des boissons pour le restaurant & lounge NIXX, alliant typographie éditoriale raffinée et préparation prépresse 300 DPI.'
              : 'Bespoke culinary menu layout & beverage catalog design for NIXX Restaurant & Lounge, featuring refined editorial typography, balanced grid alignment, and high-precision print production specs.'}
          </p>
        </div>

        {/* Quick Inspection Action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              setZoomLevel(1);
              setIsLightboxOpen(true);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#381B19] hover:bg-[#4F2320] border border-[#D68379]/50 hover:border-[#D68379] text-[#fff8f0] text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg hover:shadow-[#D68379]/10"
          >
            <Maximize2 className="w-4 h-4 text-[#D68379]" />
            <span>{language === 'ar' ? 'تكبير وعرض كامل' : language === 'fr' ? 'Plein Écran' : 'Full Screen'}</span>
          </button>
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left/Main Image Preview Display */}
        <div className="lg:col-span-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-3xl overflow-hidden bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379]/70 shadow-2xl transition-all duration-300"
          >
            {/* Click to Zoom Overlay Indicator */}
            <div
              onClick={() => {
                setZoomLevel(1);
                setIsLightboxOpen(true);
              }}
              className="cursor-pointer relative overflow-hidden flex items-center justify-center p-2 sm:p-4 bg-[#140808]"
            >
              <img
                src={MENU_IMAGE_URL}
                alt="NIXX Menu Editorial Print Design"
                referrerPolicy="no-referrer"
                onError={onImageError}
                loading="eager"
                decoding="async"
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Hover Badge */}
              <div className="absolute inset-0 bg-[#000000]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <div className="px-5 py-2.5 rounded-full bg-[#1B0C0B]/90 backdrop-blur-md border border-[#D68379] text-[#fff8f0] text-xs font-mono flex items-center gap-2 shadow-2xl">
                  <Eye className="w-4 h-4 text-[#D68379]" />
                  <span>{language === 'ar' ? 'انقر للمعاينة بالحجم الكامل' : language === 'fr' ? 'Cliquez pour agrandir' : 'Click to inspect full resolution'}</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar Details */}
            <div className="p-4 sm:p-5 bg-[#180A09] border-t border-[#381B19] flex items-center justify-end">
              <div className="flex items-center gap-2">
                <a
                  href={MENU_IMAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#251110] hover:bg-[#381B19] border border-[#572A26] text-rose-300 text-xs font-mono transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#D68379]" />
                  <span>{language === 'ar' ? 'فتح الرابط الأصلي' : language === 'fr' ? 'Ouvrir HD' : 'Open Raw HD'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Sidebar Specs & Highlights */}
        <div className="lg:col-span-4 space-y-6">
          {/* Project Details Card */}
          <div className="p-6 rounded-3xl bg-[#1B0C0B] border border-[#572A26] space-y-5 shadow-xl">
            <h2 className="text-xl font-serif font-bold text-[#fff8f0] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#D68379]" />
              <span>{language === 'ar' ? 'مواصفات المشروع' : language === 'fr' ? 'Détails du Projet' : 'Project Specifications'}</span>
            </h2>

            <div className="space-y-4 text-xs font-mono">
              <div className="p-3.5 rounded-2xl bg-[#251110] border border-[#381B19] space-y-1">
                <span className="text-rose-300/50 uppercase block">{language === 'ar' ? 'العميل' : language === 'fr' ? 'Client' : 'Client'}</span>
                <span className="text-sm font-serif font-bold text-[#fff8f0]">NIXX Restaurant & Lounge</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#251110] border border-[#381B19] space-y-1">
                <span className="text-rose-300/50 uppercase block">{language === 'ar' ? 'التصنيف' : language === 'fr' ? 'Catégorie' : 'Category'}</span>
                <span className="text-sm font-serif font-bold text-[#fff8f0]">{t('cat_print')}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#251110] border border-[#381B19] space-y-1">
                <span className="text-rose-300/50 uppercase block">{language === 'ar' ? 'مواصفات الطباعة' : language === 'fr' ? 'Impression' : 'Print Specs'}</span>
                <span className="text-sm font-serif font-bold text-[#fff8f0]">300 DPI CMYK High-Res Layout</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#251110] border border-[#381B19] space-y-1">
                <span className="text-rose-300/50 uppercase block">{language === 'ar' ? 'المخرجات' : language === 'fr' ? 'Livrables' : 'Deliverables'}</span>
                <span className="text-sm font-serif font-bold text-[#fff8f0]">Food Menu, Beverage List & Digital QR</span>
              </div>
            </div>
          </div>

          {/* Key Design Elements */}
          <div className="p-6 rounded-3xl bg-[#1B0C0B] border border-[#572A26] space-y-4 shadow-xl">
            <h3 className="text-lg font-serif font-bold text-[#fff8f0] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#D68379]" />
              <span>{language === 'ar' ? 'مميزات التصميم' : language === 'fr' ? 'Points Clés' : 'Design Highlights'}</span>
            </h3>

            <ul className="space-y-2.5 text-xs text-rose-200/80 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D68379] shrink-0 mt-0.5" />
                <span>{language === 'ar' ? 'تناسق بصري متقدم وتوزيع هرمي للأطباق والأسعار' : language === 'fr' ? 'Hiérarchie visuelle équilibrée et lisibilité optimale' : 'Balanced visual hierarchy with refined menu categorizations'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D68379] shrink-0 mt-0.5" />
                <span>{language === 'ar' ? 'خطوط طباعية أنيقة مخصصة لقطاع الضيافة الفاخرة' : language === 'fr' ? 'Typographie haut de gamme adaptée au secteur de la gastronomie' : 'Luxury hospitality typography tailored for fine dining'}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D68379] shrink-0 mt-0.5" />
                <span>{language === 'ar' ? 'جاهزية كاملة للطباعة مع هوامش أمان دقيقة' : language === 'fr' ? 'Gabarit prépresse prêt pour tirage avec fonds perdus précis' : 'Pre-press certified with bleed margins and color profiles'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal with Zoom Controls */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0E0606]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 max-w-7xl w-full mx-auto pb-4 border-b border-[#381B19]/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#381B19] text-[#D68379] border border-[#572A26]">
                  NIXX MENU
                </span>
                <span className="text-sm font-mono text-rose-200/80 hidden sm:inline">
                  {Math.round(zoomLevel * 100)}%
                </span>
              </div>

              {/* Zoom Controls & Close Button */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-2 rounded-xl bg-[#251110] hover:bg-[#381B19] text-rose-200 border border-[#572A26] transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-2 rounded-xl bg-[#251110] hover:bg-[#381B19] text-rose-200 border border-[#572A26] transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-2 rounded-xl bg-[#251110] hover:bg-[#381B19] text-rose-200 border border-[#572A26] transition-colors cursor-pointer"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsLightboxOpen(false);
                    setZoomLevel(1);
                  }}
                  className="p-2 rounded-xl bg-[#381B19] hover:bg-[#4F2320] text-[#fff8f0] border border-[#D68379] transition-colors cursor-pointer ml-2"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Body with Zoom */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6">
              <div
                className="transition-transform duration-200 max-w-full max-h-full flex items-center justify-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={MENU_IMAGE_URL}
                  alt="NIXX Menu Full Inspection"
                  referrerPolicy="no-referrer"
                  onError={onImageError}
                  className="max-h-[82vh] max-w-[90vw] object-contain rounded-xl shadow-2xl select-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="max-w-7xl w-full mx-auto pt-3 flex items-center justify-between text-xs font-mono text-rose-300/60 border-t border-[#381B19]/80">
              <span>{language === 'ar' ? 'استخدم أزرار التكبير للفحص الدقيق' : language === 'fr' ? 'Utilisez les contrôles de zoom pour inspecter' : 'Use zoom controls to inspect typography & details'}</span>
              <span>ESC to exit</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
