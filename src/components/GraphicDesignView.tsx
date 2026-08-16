import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Layers, Video, Palette, Printer, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';

interface GraphicDesignViewProps {
  onNavigateHome?: () => void;
  onSelectProject?: (projectId: string) => void;
}

type CategoryType = 'all' | 'social-media-ads' | 'logo' | 'print-works';

export const GraphicDesignView: React.FC<GraphicDesignViewProps> = ({ onNavigateHome, onSelectProject }) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');

  const categories: { id: CategoryType; label: string; count: number; icon: React.FC<{ className?: string }> }[] = [
    { id: 'all', label: t('cat_all'), count: 4, icon: LayoutGrid },
    { id: 'social-media-ads', label: t('cat_social_media'), count: 2, icon: Video },
    { id: 'logo', label: t('cat_logo'), count: 1, icon: Palette },
    { id: 'print-works', label: t('cat_print'), count: 1, icon: Printer },
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] space-y-10">
      {/* Header Banner */}
      <div className="space-y-4 text-center md:text-left">
        {onNavigateHome && (
          <button
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 hover:text-[#fff8f0] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md mb-2 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
            <span>{t('nav_back_home')}</span>
          </button>
        )}

        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#fff8f0]">
          {t('graphic_view_title')}
        </h1>
      </div>

      {/* Categories Selector Bar */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-300/70 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D68379] animate-pulse" />
            <span>{t('graphic_filter_category')}</span>
          </div>
          <span className="text-[11px] font-mono text-rose-300/50">
            {t('graphic_categories_available')}
          </span>
        </div>

        {/* Redesigned Category Selector Container */}
        <div className="relative inline-flex flex-wrap items-center gap-2 p-2 rounded-2xl bg-gradient-to-b from-[#220E0D] to-[#160807] border border-[#522521] shadow-2xl backdrop-blur-xl">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative z-10 px-4 sm:px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 select-none cursor-pointer ${
                  isActive
                    ? 'text-[#fff8f0]'
                    : 'text-rose-200/65 hover:text-[#fff8f0] hover:bg-[#2C1311]/50'
                }`}
              >
                {/* Active Animated Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#3D1D1A] to-[#4F2320] border border-[#D68379]/70 shadow-lg shadow-[#D68379]/15"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-2">
                  <Icon
                    className={`w-3.5 h-3.5 transition-colors ${
                      isActive ? 'text-[#D68379]' : 'text-rose-300/60'
                    }`}
                  />
                  <span>{cat.label}</span>
                </span>

                {cat.count > 0 && (
                  <span
                    className={`relative z-10 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold transition-colors ${
                      isActive
                        ? 'bg-[#D68379] text-[#1B0C0B] shadow-sm'
                        : 'bg-[#2A1211] text-rose-300/70 border border-[#431B18]'
                    }`}
                  >
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Category Content Area */}
      <div className="pt-4 border-t border-[#381B19]">
        <AnimatePresence mode="wait">
          {/* CATEGORY: ALL */}
          {selectedCategory === 'all' && (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26] uppercase tracking-wider">
                  <LayoutGrid className="w-3.5 h-3.5" />
                  {t('cat_all')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
                  {t('cat_all')} (4 Projects)
                </h2>
              </div>

              {/* Projects Grid for ALL */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1. OZONEXPRESS Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject?.('ozonexpress')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW GALLERY"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/FIRST.png"
                      alt="OZONEXPRESS Campaign"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-[#150B0A]/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        6 Creatives
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase text-[#D68379] bg-[#381B19] px-2 py-0.5 rounded-md border border-[#572A26]">
                          {t('cat_social_media')}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                        {t('project_ozonexpress_title')}
                      </h3>
                      <p className="text-xs text-rose-300/60 line-clamp-1 mt-0.5 font-sans">
                        {t('project_ozonexpress_desc')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-rose-300/60 uppercase shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>

                {/* 2. Momento ADS Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 }}
                  onClick={() => onSelectProject?.('momento-ads')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW GALLERY"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-2">
                    <video
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/momento%20ads/momento.webm"
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md flex items-center gap-1.5">
                        <Video className="w-3 h-3" />
                        3 Motion Ads
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase text-[#D68379] bg-[#381B19] px-2 py-0.5 rounded-md border border-[#572A26]">
                          {t('cat_social_media')}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                        {t('project_momento_title')}
                      </h3>
                      <p className="text-xs text-rose-300/60 line-clamp-1 mt-0.5 font-sans">
                        {t('project_momento_desc')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-rose-300/60 uppercase shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>

                {/* 3. Belive Logo Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.16 }}
                  onClick={() => onSelectProject?.('belive')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-3">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/beliver/Beige%20Et%20Vert%20Elegant%20Moderne%20Et%20Simple%20Marque%20Beaut%C3%A9%20%20Logo%20-%201.png"
                      alt="BELIVE Brand Identity & Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        3 Assets
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase text-[#D68379] bg-[#381B19] px-2 py-0.5 rounded-md border border-[#572A26]">
                          {t('cat_logo')}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                        {t('project_belive_title')}
                      </h3>
                      <p className="text-xs text-rose-300/60 line-clamp-1 mt-0.5 font-sans">
                        {t('project_belive_desc')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-rose-300/60 uppercase shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>

                {/* 4. Black Hole Streetwear Print Works Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.24 }}
                  onClick={() => onSelectProject?.('black-hole')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-2">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/black%20hole/Golden%20Bear%20Raglan%20Wool%20Varsity%20Jackets%20(1)%20copy.jpg"
                      alt="Black hole designs - Varsity Jacket & Streetwear Prints"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        10 Works
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase text-[#D68379] bg-[#381B19] px-2 py-0.5 rounded-md border border-[#572A26]">
                          {t('cat_print')}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                        {t('project_blackhole_title')}
                      </h3>
                      <p className="text-xs text-rose-300/60 line-clamp-1 mt-0.5 font-sans">
                        {t('project_blackhole_desc')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-rose-300/60 uppercase shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* CATEGORY 1: Social Media Ads */}
          {selectedCategory === 'social-media-ads' && (
            <motion.div
              key="social-media-ads"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26] uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  {t('cat_social_media')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
                  {t('cat_social_media')}
                </h2>
              </div>

              {/* Projects Grid for Social Media Ads */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* OZONEXPRESS Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject?.('ozonexpress')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW GALLERY"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/FIRST.png"
                      alt="OZONEXPRESS Campaign"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-[#150B0A]/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        6 Creatives
                      </span>
                    </div>

                    {/* Bottom Action overlay */}
                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="pt-1 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                        {t('project_ozonexpress_title')}
                      </h3>
                      <p className="text-xs text-rose-300/60 line-clamp-1 mt-0.5 font-sans">
                        {t('project_ozonexpress_desc')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-rose-300/60 uppercase shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>

                {/* Momento ADS Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  onClick={() => onSelectProject?.('momento-ads')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW GALLERY"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-2">
                    <video
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/momento%20ads/momento.webm"
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md flex items-center gap-1.5">
                        <Video className="w-3 h-3" />
                        3 Motion Ads
                      </span>
                    </div>

                    {/* Bottom Action overlay */}
                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="pt-1 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                        {t('project_momento_title')}
                      </h3>
                      <p className="text-xs text-rose-300/60 line-clamp-1 mt-0.5 font-sans">
                        {t('project_momento_desc')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-rose-300/60 uppercase shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* CATEGORY 2: Logo */}
          {selectedCategory === 'logo' && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26] uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  {t('cat_logo')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
                  {t('cat_logo')}
                </h2>
              </div>

              {/* Projects Grid for Logo */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject?.('belive')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-3">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/beliver/Beige%20Et%20Vert%20Elegant%20Moderne%20Et%20Simple%20Marque%20Beaut%C3%A9%20%20Logo%20-%201.png"
                      alt="BELIVE Brand Identity & Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        3 Assets
                      </span>
                    </div>

                    {/* Bottom Action overlay */}
                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="pt-1 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                        {t('project_belive_title')}
                      </h3>
                      <p className="text-xs text-rose-300/60 line-clamp-1 mt-0.5 font-sans">
                        {t('project_belive_desc')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-rose-300/60 uppercase shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* CATEGORY 3: Print works */}
          {selectedCategory === 'print-works' && (
            <motion.div
              key="print-works"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26] uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  {t('cat_print')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
                  {t('cat_print')}
                </h2>
              </div>

              {/* Projects Grid for Print works */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject?.('black-hole')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-2">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/black%20hole/Golden%20Bear%20Raglan%20Wool%20Varsity%20Jackets%20(1)%20copy.jpg"
                      alt="Black hole designs - Varsity Jacket & Streetwear Prints"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        10 Works
                      </span>
                    </div>

                    {/* Bottom Action overlay */}
                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="pt-1 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                        {t('project_blackhole_title')}
                      </h3>
                      <p className="text-xs text-rose-300/60 line-clamp-1 mt-0.5 font-sans">
                        {t('project_blackhole_desc')}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-rose-300/60 uppercase shrink-0">
                      &rarr;
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
