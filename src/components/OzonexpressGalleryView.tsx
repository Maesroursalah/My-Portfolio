import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Maximize2, X, ChevronLeft, ChevronRight, Play, Pause, LayoutGrid, SlidersHorizontal, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface OzonexpressGalleryViewProps {
  onBack: () => void;
}

export const OzonexpressGalleryView: React.FC<OzonexpressGalleryViewProps> = ({ onBack }) => {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slide' | 'grid'>('slide');

  const OZONEXPRESS_IMAGES = [
    {
      url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/FIRST.png',
      title: language === 'ar' ? 'الحملة الإعلانية البصرية 01' : language === 'fr' ? 'Campagne Visuelle 01' : 'Visual Campaign 01',
      description: language === 'ar' ? 'تصميم إعلاني ترويجي رئيسي عالي التأثير' : language === 'fr' ? 'Campagne publicitaire visuelle promotionnelle' : 'Hero promotional visual advertising campaign'
    },
    {
      url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/GI.png',
      title: language === 'ar' ? 'الحملة الإعلانية البصرية 02' : language === 'fr' ? 'Campagne Visuelle 02' : 'Visual Campaign 02',
      description: language === 'ar' ? 'تصميم جرافيكي يبرز هوية وترويج العلامة' : language === 'fr' ? 'Graphisme d’identité de marque et promotion' : 'Brand identity & promotion graphic'
    },
    {
      url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/OI.png',
      title: language === 'ar' ? 'الحملة الإعلانية البصرية 03' : language === 'fr' ? 'Campagne Visuelle 03' : 'Visual Campaign 03',
      description: language === 'ar' ? 'إبراز مزايا وخصائص المنتجات بأسلوب إبداعي' : language === 'fr' ? 'Création visuelle mettant en valeur les fonctionnalités' : 'Product feature highlight creative'
    },
    {
      url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/POST.png',
      title: language === 'ar' ? 'منشورات شبكات التواصل الاجتماعي' : language === 'fr' ? 'Publication Réseaux Sociaux' : 'Social Media Post',
      description: language === 'ar' ? 'تصاميم منشورات متناسقة وجاذبة لزيادة التفاعل' : language === 'fr' ? 'Design de publication engageant pour flux social' : 'Engaging feed post design'
    },
    {
      url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/TETOUANE.png',
      title: language === 'ar' ? 'إعلان ترويجي لمدينة تطوان' : language === 'fr' ? 'Annonce Promotionnelle Tétouan' : 'Tetouan Promotion Ad',
      description: language === 'ar' ? 'عروض خاصة وإعلانات موجهة للمناطق الجغرافية' : language === 'fr' ? 'Offres spéciales et publication régionale' : 'Special offers & regional social post'
    },
    {
      url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/Untitled-16.png',
      title: language === 'ar' ? 'إعلان إبداعي لهوية العلامة' : language === 'fr' ? 'Bannière Créative de Marque' : 'Brand Creative Ad',
      description: language === 'ar' ? 'بانر إعلاني عالي التحويل لمنصات التسويق' : language === 'fr' ? 'Bannière promotionnelle à fort taux de conversion' : 'High-conversion promotional banner'
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % OZONEXPRESS_IMAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + OZONEXPRESS_IMAGES.length) % OZONEXPRESS_IMAGES.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying || isLightboxOpen || viewMode === 'grid') return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, isLightboxOpen, viewMode]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh] space-y-8">
      {/* Navigation and Header */}
      <div className="space-y-4">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 hover:text-[#fff8f0] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#D68379] group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
          <span>{t('gallery_back')}</span>
        </button>

        <div className="pt-2 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#381B19] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-mono font-bold border border-[#572A26] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                {t('cat_social')}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#251110] text-rose-200/80 text-xs font-mono border border-[#381B19]">
                {OZONEXPRESS_IMAGES.length} Assets
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#fff8f0] tracking-tight">
              OZONEXPRESS
            </h1>
          </div>

          {/* View Mode Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#1B0C0B] border border-[#572A26] rounded-xl p-1">
              <button
                onClick={() => setViewMode('slide')}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'slide'
                    ? 'bg-[#381B19] text-[#D68379] shadow-sm'
                    : 'text-rose-300/60 hover:text-[#fff8f0]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{t('gallery_slide_view')}</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#381B19] text-[#D68379] shadow-sm'
                    : 'text-rose-300/60 hover:text-[#fff8f0]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>{t('gallery_grid_view')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- SLIDE VIEW ---------------- */}
      {viewMode === 'slide' ? (
        <div className="space-y-5">
          {/* Main Slide Stage */}
          <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden bg-[#1B0C0B] border border-[#572A26] shadow-2xl p-4 sm:p-5">
            <div className="relative aspect-square max-h-[420px] sm:max-h-[460px] w-full mx-auto rounded-2xl overflow-hidden bg-[#120706] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex items-center justify-center p-2"
                >
                  <img
                    src={OZONEXPRESS_IMAGES[currentIndex].url}
                    alt={OZONEXPRESS_IMAGES[currentIndex].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain select-none rounded-xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev Slide Chevron */}
              <button
                onClick={handlePrev}
                className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#1B0C0B]/85 hover:bg-[#D68379] text-rose-100 hover:text-[#1B0C0B] border border-[#572A26] backdrop-blur-md shadow-xl transition-all z-20 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 rtl:rotate-180" />
              </button>

              {/* Next Slide Chevron */}
              <button
                onClick={handleNext}
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#1B0C0B]/85 hover:bg-[#D68379] text-rose-100 hover:text-[#1B0C0B] border border-[#572A26] backdrop-blur-md shadow-xl transition-all z-20 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 rtl:rotate-180" />
              </button>

              {/* Expand Fullscreen Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-3 right-3 p-2 rounded-full bg-[#1B0C0B]/85 hover:bg-[#381B19] text-[#D68379] border border-[#572A26] backdrop-blur-md transition-colors z-20 cursor-pointer"
                title={t('gallery_fullscreen')}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Info in Slide Container */}
            <div className="pt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#fff8f0]">
                  {OZONEXPRESS_IMAGES[currentIndex].title}
                </h3>
                <p className="text-xs text-rose-300/70 line-clamp-1">
                  {OZONEXPRESS_IMAGES[currentIndex].description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg bg-[#251110] border border-[#572A26] text-rose-200 hover:text-[#fff8f0] text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isPlaying ? t('gallery_pause') : t('gallery_play')}</span>
                </button>
                <span className="text-xs font-mono text-[#D68379] px-2.5 py-1 rounded-lg bg-[#251110] border border-[#572A26]">
                  {currentIndex + 1} / {OZONEXPRESS_IMAGES.length}
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex items-center justify-center gap-3 overflow-x-auto py-2">
            {OZONEXPRESS_IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                  currentIndex === idx
                    ? 'border-[#D68379] scale-105 shadow-lg shadow-[#D68379]/20'
                    : 'border-[#381B19] opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover bg-[#1B0C0B]"
                />
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* ---------------- GRID VIEW ---------------- */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OZONEXPRESS_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              onClick={() => {
                setCurrentIndex(idx);
                setIsLightboxOpen(true);
              }}
              className="group cursor-pointer rounded-2xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-3 space-y-3 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#120706] flex items-center justify-center p-2">
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg"
                />
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-[#1B0C0B]/80 text-[#D68379] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                  {img.title}
                </h4>
                <p className="text-xs text-rose-300/60 line-clamp-1">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ---------------- LIGHTBOX MODAL ---------------- */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0F0706]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-[#fff8f0]">
                  {OZONEXPRESS_IMAGES[currentIndex].title}
                </h3>
                <span className="text-xs font-mono text-[#D68379]">
                  {currentIndex + 1} of {OZONEXPRESS_IMAGES.length}
                </span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2.5 rounded-full bg-[#251110] text-rose-200 hover:text-[#fff8f0] border border-[#572A26] hover:border-[#D68379] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Center Image */}
            <div className="relative flex-1 flex items-center justify-center p-4">
              <img
                src={OZONEXPRESS_IMAGES[currentIndex].url}
                alt={OZONEXPRESS_IMAGES[currentIndex].title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-xl select-none"
              />

              {/* Prev / Next buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1B0C0B]/90 hover:bg-[#D68379] text-rose-100 hover:text-[#1B0C0B] border border-[#572A26] backdrop-blur-md shadow-2xl transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 rtl:rotate-180" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1B0C0B]/90 hover:bg-[#D68379] text-rose-100 hover:text-[#1B0C0B] border border-[#572A26] backdrop-blur-md shadow-2xl transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 rtl:rotate-180" />
              </button>
            </div>

            {/* Bottom Details */}
            <div className="text-center text-xs text-rose-300/70 max-w-xl mx-auto">
              {OZONEXPRESS_IMAGES[currentIndex].description}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
