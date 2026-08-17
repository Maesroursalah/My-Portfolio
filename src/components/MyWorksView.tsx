import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { onImageError } from '../lib/imgFallback';

interface MyWorksViewProps {
  onSelectWebDev: () => void;
  onSelectGraphicDesign: () => void;
  onNavigateHome?: () => void;
}

export const MyWorksView: React.FC<MyWorksViewProps> = ({
  onSelectWebDev,
  onSelectGraphicDesign
}) => {
  const { t } = useLanguage();

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[75vh] flex flex-col justify-center space-y-10">
      {/* ---------------- PAGE HEADER ---------------- */}
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#fff8f0] tracking-tight">
          {t('works_select_title')}
        </h1>

        <p className="text-rose-200/80 font-sans text-base sm:text-lg max-w-3xl font-light leading-relaxed">
          {t('works_select_subtitle')}
        </p>
      </div>

      {/* ---------------- TWO DISCIPLINE CHOICE CARDS / BIG BUTTONS ---------------- */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 pt-2 sm:pt-4">
        
        {/* ========================================================================= */}
        {/* CHOICE 1: GRAPHIC DESIGN BUTTON CARD                                     */}
        {/* ========================================================================= */}
        <motion.button
          type="button"
          onClick={onSelectGraphicDesign}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.99 }}
          className="group relative text-left w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#220E0D] to-[#150B0A] border sm:border-2 border-[#522521] hover:border-[#D68379] p-3.5 sm:p-6 lg:p-8 space-y-3 sm:space-y-6 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-[0_20px_50px_rgba(214,131,121,0.15)] flex flex-col justify-between cursor-pointer overflow-hidden"
          data-cursor="GRAPHIC DESIGN"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D68379]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D68379]/20 transition-all duration-500" />

          {/* Top Visual Collage Section */}
          <div className="space-y-3 sm:space-y-5 relative z-10">
            {/* Visual Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#1B0C0B] border border-[#572A26] group-hover:border-[#D68379]/50 transition-colors">
              <img
                src="https://cdn.jsdelivr.net/gh/Maesroursalah/portfolio@main/2.png"
                alt="Graphic Design Portfolio Preview"
                referrerPolicy="no-referrer"
                onError={onImageError}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/80 via-transparent to-transparent" />
            </div>

            {/* Content & Copy */}
            <div className="space-y-1.5 sm:space-y-2.5">
              <h2 className="text-sm sm:text-2xl lg:text-3xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors leading-tight">
                {t('works_choice_graphic_title')}
              </h2>

              <p className="text-xs sm:text-base text-rose-200/80 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                {t('works_choice_graphic_desc')}
              </p>
            </div>
          </div>

          {/* Action Button Strip */}
          <div className="pt-2.5 sm:pt-4 border-t border-[#381B19] flex items-center justify-end relative z-10">
            <div className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-lg shadow-rose-950/60 group-hover:brightness-110 transition-all text-center">
              <span>{t('works_choice_graphic_btn')}</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>
        </motion.button>

        {/* ========================================================================= */}
        {/* CHOICE 2: WEB DEVELOPMENT BUTTON CARD                                    */}
        {/* ========================================================================= */}
        <motion.button
          type="button"
          onClick={onSelectWebDev}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.99 }}
          className="group relative text-left w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#220E0D] to-[#150B0A] border sm:border-2 border-[#522521] hover:border-[#D68379] p-3.5 sm:p-6 lg:p-8 space-y-3 sm:space-y-6 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-[0_20px_50px_rgba(214,131,121,0.15)] flex flex-col justify-between cursor-pointer overflow-hidden"
          data-cursor="WEB DEVELOPMENT"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B85C52]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#B85C52]/20 transition-all duration-500" />

          {/* Top Visual Code / UI Section */}
          <div className="space-y-3 sm:space-y-5 relative z-10">
            {/* Visual Container */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-[#1B0C0B] border border-[#572A26] group-hover:border-[#D68379]/50 transition-colors">
              <img
                src="https://cdn.jsdelivr.net/gh/Maesroursalah/portfolio@main/1.png"
                alt="Web Development Code & Showcase Preview"
                referrerPolicy="no-referrer"
                onError={onImageError}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/80 via-transparent to-transparent" />
            </div>

            {/* Content & Copy */}
            <div className="space-y-1.5 sm:space-y-2.5">
              <h2 className="text-sm sm:text-2xl lg:text-3xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors leading-tight">
                {t('works_choice_web_title')}
              </h2>

              <p className="text-xs sm:text-base text-rose-200/80 font-sans leading-relaxed line-clamp-3 sm:line-clamp-none">
                {t('works_choice_web_desc')}
              </p>
            </div>
          </div>

          {/* Action Button Strip */}
          <div className="pt-2.5 sm:pt-4 border-t border-[#381B19] flex items-center justify-end relative z-10">
            <div className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] font-display font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-lg shadow-rose-950/60 group-hover:brightness-110 transition-all text-center">
              <span>{t('works_choice_web_btn')}</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
            </div>
          </div>
        </motion.button>

      </div>
    </div>
  );
};
