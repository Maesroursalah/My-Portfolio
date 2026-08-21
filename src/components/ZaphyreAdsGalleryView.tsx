import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Video, Sparkles, FolderGit2, Layers, AlertCircle, PlusCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface ZaphyreAdsGalleryViewProps {
  onBack: () => void;
}

export const ZaphyreAdsGalleryView: React.FC<ZaphyreAdsGalleryViewProps> = ({ onBack }) => {
  const { t, language } = useLanguage();

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[75vh] space-y-8">
      {/* Top Navigation & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B0C0B] hover:bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 text-xs font-mono transition-all duration-200 group cursor-pointer shadow-lg"
        >
          <ArrowLeft className="w-4 h-4 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
          <span>{t('gallery_back_btn')}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#381B19] text-[#D68379] border border-[#572A26]">
            {t('cat_social_media')}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#251110] text-rose-300/70 border border-[#381B19]">
            {language === 'ar' ? 'مشروع فارغ' : language === 'fr' ? 'Projet vide' : 'Empty Project'}
          </span>
        </div>
      </div>

      {/* Project Header Banner */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251110] border border-[#572A26] text-xs font-mono text-[#D68379]">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>ZAPHYRE PARFUMS // SOCIAL MEDIA CAMPAIGN</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#fff8f0]">
          ZAPHYRE ADS
        </h1>
        <p className="text-sm sm:text-base text-rose-300/70 max-w-3xl font-sans">
          {language === 'ar'
            ? 'حملات إعلانية وتصاميم سوشيال ميديا ترويجية مخصصة لعلامة ZAPHYRE للعطور الفاخرة.'
            : language === 'fr'
            ? 'Campagnes publicitaires et créations pour réseaux sociaux pour la marque de luxe ZAPHYRE Parfums.'
            : 'High-impact social media advertising campaigns, motion videos, and promotional creatives tailored for ZAPHYRE Parfums.'}
        </p>
      </div>

      {/* Empty State Showcase Canvas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl bg-[#1B0C0B] border border-dashed border-[#572A26] hover:border-[#D68379]/60 p-8 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#D68379]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto space-y-5">
          {/* Empty Icon Frame */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-gradient-to-b from-[#2A1311] to-[#1B0C0B] border border-[#572A26] flex items-center justify-center shadow-xl shadow-black/50">
            <Video className="w-10 h-10 text-[#D68379] stroke-1" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
              {language === 'ar' ? 'المشروع فارغ حالياً' : language === 'fr' ? 'Projet Actuellement Vide' : 'Project Currently Empty'}
            </h2>
            <p className="text-xs sm:text-sm text-rose-300/60 leading-relaxed font-sans">
              {language === 'ar'
                ? 'تم إنشاء مساحة مشروع ZAPHYRE ADS بنجاح وهي جاهزة لإضافة الفيديوهات الإعلانية والتصاميم الترويجية.'
                : language === 'fr'
                ? 'L’espace de projet ZAPHYRE ADS a été initialisé avec succès et est prêt à accueillir vos spots publicitaires et créations visuelles.'
                : 'The ZAPHYRE ADS project container is initialized and empty. Video commercials, ad banners, and motion creatives can be curated here.'}
            </p>
          </div>

          {/* Status Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            <span className="px-3.5 py-1.5 rounded-full bg-[#251110] text-[#D68379] border border-[#572A26] text-xs font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D68379] animate-ping" />
              0 Creatives
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#251110] text-rose-200/80 border border-[#572A26] text-xs font-mono">
              Status: Ready for Assets
            </span>
          </div>

          {/* Quick Back Action */}
          <div className="pt-4">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#3D1D1A] to-[#4F2320] hover:from-[#4F2320] hover:to-[#612B27] text-[#fff8f0] border border-[#D68379]/60 hover:border-[#D68379] font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-4 h-4 text-[#D68379]" />
              <span>{t('gallery_back_btn')}</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Project Meta Info Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <div className="p-5 rounded-2xl bg-[#1B0C0B] border border-[#381B19] space-y-1">
          <span className="text-[11px] font-mono text-rose-300/50 uppercase block">Client</span>
          <span className="text-base font-serif font-bold text-[#fff8f0]">ZAPHYRE Parfums</span>
        </div>
        <div className="p-5 rounded-2xl bg-[#1B0C0B] border border-[#381B19] space-y-1">
          <span className="text-[11px] font-mono text-rose-300/50 uppercase block">Category</span>
          <span className="text-base font-serif font-bold text-[#fff8f0]">{t('cat_social_media')}</span>
        </div>
        <div className="p-5 rounded-2xl bg-[#1B0C0B] border border-[#381B19] space-y-1">
          <span className="text-[11px] font-mono text-rose-300/50 uppercase block">Format</span>
          <span className="text-base font-serif font-bold text-[#fff8f0]">Motion Video & Social Ads</span>
        </div>
      </div>
    </div>
  );
};
