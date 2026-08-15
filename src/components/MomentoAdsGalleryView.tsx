import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Maximize2, X, ChevronLeft, ChevronRight, Play, Pause, LayoutGrid, SlidersHorizontal } from 'lucide-react';

interface MomentoAdsGalleryViewProps {
  onBack: () => void;
}

const MOMENTO_ADS_IMAGES = [
  {
    url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/M%20-%201.png',
    title: 'Momento Brand Campaign',
    description: 'Social media creative & visual identity ad'
  },
  {
    url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/POST.png',
    title: 'Promotional Ad Post',
    description: 'High-converting social advertising creative'
  },
  {
    url: 'https://raw.githubusercontent.com/Maesroursalah/portfolio/main/Screenshot%202025-01-23%20022125.png',
    title: 'Marketing Visual Layout',
    description: 'Engagement-driven feed visual format'
  }
];

export const MomentoAdsGalleryView: React.FC<MomentoAdsGalleryViewProps> = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slide' | 'grid'>('slide');

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % MOMENTO_ADS_IMAGES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + MOMENTO_ADS_IMAGES.length) % MOMENTO_ADS_IMAGES.length);
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
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 hover:text-[#fff8f0] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
          <span>Back to Graphic Design</span>
        </button>

        <div className="pt-2 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#381B19] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-mono font-bold border border-[#572A26] uppercase">
                Social Media Campaign
              </span>
              <span className="px-3 py-1 rounded-full bg-[#251110] text-rose-200/80 text-xs font-mono border border-[#381B19]">
                {MOMENTO_ADS_IMAGES.length} Creatives
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#fff8f0] tracking-tight">
              Momento ADS
            </h1>
          </div>

          {/* View Mode & Autoplay Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#1B0C0B] border border-[#572A26] rounded-xl p-1">
              <button
                onClick={() => setViewMode('slide')}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  viewMode === 'slide'
                    ? 'bg-[#381B19] text-[#D68379] shadow-sm'
                    : 'text-rose-300/60 hover:text-[#fff8f0]'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Slide View</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#381B19] text-[#D68379] shadow-sm'
                    : 'text-rose-300/60 hover:text-[#fff8f0]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- SLIDE VIEW ---------------- */}
      {viewMode === 'slide' ? (
        <div className="space-y-5">
          {/* Main Slide Stage (Compact PC Layout) */}
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
                    src={MOMENTO_ADS_IMAGES[currentIndex].url}
                    alt={MOMENTO_ADS_IMAGES[currentIndex].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain select-none rounded-xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev Slide Chevron */}
              <button
                onClick={handlePrev}
                className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#1B0C0B]/85 hover:bg-[#D68379] text-rose-100 hover:text-[#1B0C0B] border border-[#572A26] backdrop-blur-md shadow-xl transition-all z-20"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Next Slide Chevron */}
              <button
                onClick={handleNext}
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-[#1B0C0B]/85 hover:bg-[#D68379] text-rose-100 hover:text-[#1B0C0B] border border-[#572A26] backdrop-blur-md shadow-xl transition-all z-20"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Expand Fullscreen Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-3 right-3 p-2 rounded-full bg-[#1B0C0B]/85 hover:bg-[#381B19] text-[#D68379] border border-[#572A26] backdrop-blur-md transition-colors z-20"
                title="View Fullscreen"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>

              {/* Slide Counter Badge */}
              <div className="absolute top-3 left-3 z-20">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/85 text-[#D68379] border border-[#572A26] backdrop-blur-md">
                  0{currentIndex + 1} / 0{MOMENTO_ADS_IMAGES.length}
                </span>
              </div>
            </div>

            {/* Slide Details Bar & Controls */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#381B19] mt-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#fff8f0]">
                  {MOMENTO_ADS_IMAGES[currentIndex].title}
                </h3>
                <p className="text-xs text-rose-300/70 font-sans">
                  {MOMENTO_ADS_IMAGES[currentIndex].description}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-xs font-display uppercase tracking-wider text-[#fff8f0] transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-[#D68379]" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#D68379]" />
                      <span>Autoplay</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail Slider Strip */}
          <div className="max-w-2xl mx-auto space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-rose-300/60 px-1">
              <span>Select Slide ({MOMENTO_ADS_IMAGES.length} items)</span>
              <span>Slide {currentIndex + 1} of {MOMENTO_ADS_IMAGES.length}</span>
            </div>

            <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x justify-start sm:justify-center">
              {MOMENTO_ADS_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden transition-all duration-300 snap-start border-2 ${
                    currentIndex === idx
                      ? 'border-[#D68379] scale-105 shadow-md shadow-[#D68379]/30'
                      : 'border-[#381B19] opacity-50 hover:opacity-90'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-1 left-1 text-[9px] font-mono font-bold text-[#fff8f0]">
                    0{idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* ---------------- GRID VIEW ---------------- */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {MOMENTO_ADS_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => {
                setCurrentIndex(idx);
                setViewMode('slide');
              }}
              className="group relative rounded-3xl overflow-hidden bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] shadow-xl cursor-pointer transition-all duration-300"
            >
              <div className="relative aspect-square w-full bg-[#150B0A] overflow-hidden flex items-center justify-center p-2">
                <img
                  src={img.url}
                  alt={img.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out rounded-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3.5 rounded-full bg-[#D68379] text-[#fff8f0] shadow-2xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-display font-bold text-[#fff8f0] px-3 py-1 rounded-lg bg-[#1B0C0B]/90 backdrop-blur-md border border-[#381B19]">
                    {img.title}
                  </span>
                  <span className="text-[11px] font-mono text-[#D68379] px-2 py-1 rounded-md bg-[#1B0C0B]/90 backdrop-blur-md">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 bg-[#0F0706]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Bar */}
            <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="text-sm font-serif font-bold text-[#fff8f0]">
                  Momento ADS — {MOMENTO_ADS_IMAGES[currentIndex].title}
                </span>
                <span className="text-xs font-mono text-[#D68379] px-2 py-0.5 rounded-md bg-[#381B19]">
                  {currentIndex + 1} / {MOMENTO_ADS_IMAGES.length}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(false);
                }}
                className="p-2.5 rounded-full bg-[#251110] border border-[#572A26] text-rose-200 hover:text-[#fff8f0] hover:bg-[#381B19] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#251110]/80 border border-[#572A26] text-[#fff8f0] hover:bg-[#D68379] hover:text-[#1B0C0B] transition-all z-10 backdrop-blur-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Preview */}
            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-[#572A26] bg-[#150B0A]"
            >
              <img
                src={MOMENTO_ADS_IMAGES[currentIndex].url}
                alt={MOMENTO_ADS_IMAGES[currentIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full max-h-[80vh] object-contain"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#251110]/80 border border-[#572A26] text-[#fff8f0] hover:bg-[#D68379] hover:text-[#1B0C0B] transition-all z-10 backdrop-blur-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
