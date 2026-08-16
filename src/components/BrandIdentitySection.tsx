import React, { useState } from 'react';
import { Palette, Type, Feather, Sparkles, Copy, Check, Info, Box } from 'lucide-react';
import { ColorSwatch, TypographySpec, BrandSpecs } from '../types';
import { useLanguage } from './LanguageContext';

interface BrandIdentitySectionProps {
  colorPalette?: ColorSwatch[];
  typography?: TypographySpec;
  brandSpecs?: BrandSpecs;
}

export const BrandIdentitySection: React.FC<BrandIdentitySectionProps> = ({
  colorPalette,
  typography,
  brandSpecs,
}) => {
  const { language } = useLanguage();
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  if (!colorPalette && !typography && !brandSpecs) return null;

  return (
    <div className="space-y-10 pt-6">
      <div className="flex items-center gap-3 border-b border-[#381B19] pb-4">
        <Sparkles className="w-6 h-6 text-[#D68379]" />
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
            {language === 'ar' ? 'مواصفات الهوية البصرية ونظام التصميم' : language === 'fr' ? 'CHARTE GRAPHIQUE & SPÉCIFICATIONS DESIGN SYSTEM' : 'BRAND IDENTITY & DESIGN SYSTEM SPECS'}
          </h2>
          <p className="text-xs font-display text-rose-300/70 uppercase tracking-wider">
            {language === 'ar' ? 'دليل الهوية • لوحة الألوان • الخطوط والطباعة • البنية البصرية' : 'Charte Graphique • Palette de Couleurs • Police de Caractères • Architecture Olfactive'}
          </p>
        </div>
      </div>

      {/* 1. COLOR PALETTE */}
      {colorPalette && colorPalette.length > 0 && (
        <div className="space-y-4 p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif font-bold text-[#fff8f0] flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#D68379]" />
              {language === 'ar' ? 'لوحة الألوان المتناسقة' : language === 'fr' ? 'PALETTE DE COULEURS' : 'COLOR PALETTE (PALETTE DE COULEURS)'}
            </h3>
            <span className="text-xs font-display px-3 py-1 rounded-full bg-[#381B19] text-[#D68379] border border-[#572A26]">
              {colorPalette.length} {language === 'ar' ? 'تدرجات' : 'Tones'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-2">
            {colorPalette.map((swatch, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-[#150B0A] border border-[#572A26] hover:border-[#D68379] transition-all p-3 space-y-3 shadow-md"
              >
                {/* Color Block Swatch */}
                <div
                  className="w-full h-24 rounded-xl border border-white/10 flex items-center justify-center relative shadow-inner transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: swatch.hex }}
                >
                  <button
                    onClick={() => handleCopyHex(swatch.hex)}
                    className="opacity-0 group-hover:opacity-100 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono flex items-center gap-1 transition-opacity shadow-lg cursor-pointer"
                    title="Copy HEX Code"
                  >
                    {copiedHex === swatch.hex ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>{language === 'ar' ? 'تم النسخ' : 'COPIED'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{swatch.hex}</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Swatch Details */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-sm text-[#fff8f0]">
                      {swatch.name}
                    </span>
                    <span className="text-xs font-mono text-[#D68379] font-bold">
                      {swatch.hex}
                    </span>
                  </div>
                  <p className="text-xs text-rose-200/70 font-sans leading-tight">
                    {swatch.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. TYPOGRAPHY & POLICE DE CARACTÈRES */}
      {typography && (
        <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif font-bold text-[#fff8f0] flex items-center gap-2">
              <Type className="w-5 h-5 text-[#D68379]" />
              {language === 'ar' ? 'هندسة الخطوط والطباعة' : language === 'fr' ? 'TYPOGRAPHIE & POLICE DE CARACTÈRES' : 'TYPOGRAPHY & POLICE DE CARACTÈRES'}
            </h3>
            <span className="text-xs font-display px-3 py-1 rounded-full bg-[#381B19] text-[#D68379] border border-[#572A26]">
              Font Hierarchy Specimen
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Display / Serif Font */}
            <div className="p-5 rounded-2xl bg-[#150B0A] border border-[#572A26] space-y-3">
              <div className="flex items-center justify-between border-b border-[#381B19] pb-2">
                <span className="text-xs font-display text-[#D68379] uppercase font-bold">
                  01. DISPLAY / SERIF HEADERS
                </span>
                <span className="text-[10px] font-mono text-rose-300/60">HEADLINES</span>
              </div>
              <p className="text-2xl font-serif font-bold text-[#fff8f0] tracking-tight">
                {typography.displayFont}
              </p>
              <p className="text-xs text-rose-200/70 font-sans leading-relaxed">
                {typography.displayUsage}
              </p>
              {typography.sampleText && (
                <div className="pt-2 border-t border-[#381B19]">
                  <span className="text-[10px] font-mono text-rose-300/50 uppercase block mb-1">Specimen:</span>
                  <p className="text-sm font-serif italic text-[#D68379] font-medium">
                    "{typography.sampleText}"
                  </p>
                </div>
              )}
            </div>

            {/* Arabic Calligraphy Font */}
            {typography.arabicFont && (
              <div className="p-5 rounded-2xl bg-[#150B0A] border border-[#572A26] space-y-3">
                <div className="flex items-center justify-between border-b border-[#381B19] pb-2">
                  <span className="text-xs font-display text-[#D68379] uppercase font-bold">
                    02. ARABIC CALLIGRAPHY (الخط العربي)
                  </span>
                  <span className="text-[10px] font-mono text-rose-300/60 font-serif">SLOGAN</span>
                </div>
                <p className="text-2xl font-serif font-bold text-[#fff8f0] tracking-tight">
                  {typography.arabicFont}
                </p>
                <p className="text-xs text-rose-200/70 font-sans leading-relaxed">
                  {typography.arabicUsage}
                </p>
                {typography.arabicSampleText && (
                  <div className="pt-2 border-t border-[#381B19]">
                    <span className="text-[10px] font-mono text-rose-300/50 uppercase block mb-1">Specimen:</span>
                    <p className="text-base font-serif text-[#E5C158] text-right font-bold dir-rtl">
                      "{typography.arabicSampleText}"
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Body & UI Font */}
            <div className="p-5 rounded-2xl bg-[#150B0A] border border-[#572A26] space-y-3">
              <div className="flex items-center justify-between border-b border-[#381B19] pb-2">
                <span className="text-xs font-display text-[#D68379] uppercase font-bold">
                  03. BODY &amp; E-COMMERCE UI
                </span>
                <span className="text-[10px] font-mono text-rose-300/60">SANS-SERIF</span>
              </div>
              <p className="text-2xl font-sans font-bold text-[#fff8f0] tracking-tight">
                {typography.bodyFont}
              </p>
              <p className="text-xs text-rose-200/70 font-sans leading-relaxed">
                {typography.bodyUsage}
              </p>
              <div className="pt-2 border-t border-[#381B19]">
                <span className="text-[10px] font-mono text-rose-300/50 uppercase block mb-1">Alphabet:</span>
                <p className="text-xs font-sans tracking-widest text-rose-100/90 font-medium">
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. OLFACTORY SCENT PYRAMID */}
      {brandSpecs?.scentPyramid && (
        <div className="space-y-6 p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-serif font-bold text-[#fff8f0] flex items-center gap-2">
              <Feather className="w-5 h-5 text-[#D68379]" />
              {language === 'ar' ? 'الهرم العطري والتركيبة' : language === 'fr' ? 'PYRAMIDE OLFACTIVE' : 'OLFACTORY SCENT PYRAMID (PYRAMIDE OLFACTIVE)'}
            </h3>
            <span className="text-xs font-display px-3 py-1 rounded-full bg-[#381B19] text-[#D68379] border border-[#572A26]">
              Haute Parfumerie Formulation
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Top Notes */}
            <div className="p-6 rounded-2xl bg-[#150B0A] border border-[#572A26] space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10 font-serif text-5xl font-bold text-[#D68379]">
                01
              </div>
              <div className="text-xs font-display text-[#D68379] font-bold uppercase tracking-wider">
                {language === 'ar' ? 'افتتاحية العطر (Top Notes)' : 'NOTES DE TÊTE (TOP NOTES)'}
              </div>
              <h4 className="text-lg font-serif font-bold text-[#fff8f0]">Initial Impression</h4>
              <ul className="space-y-2 text-sm text-rose-200/90 font-sans">
                {brandSpecs.scentPyramid.top.map((note, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D68379]" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Heart Notes */}
            <div className="p-6 rounded-2xl bg-[#150B0A] border border-[#572A26] space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10 font-serif text-5xl font-bold text-[#D68379]">
                02
              </div>
              <div className="text-xs font-display text-[#D68379] font-bold uppercase tracking-wider">
                {language === 'ar' ? 'قلب العطر (Heart Notes)' : 'NOTES DE CŒUR (HEART NOTES)'}
              </div>
              <h4 className="text-lg font-serif font-bold text-[#fff8f0]">The Core Essence</h4>
              <ul className="space-y-2 text-sm text-rose-200/90 font-sans">
                {brandSpecs.scentPyramid.heart.map((note, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158]" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Base Notes */}
            <div className="p-6 rounded-2xl bg-[#150B0A] border border-[#572A26] space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-10 font-serif text-5xl font-bold text-[#D68379]">
                03
              </div>
              <div className="text-xs font-display text-[#D68379] font-bold uppercase tracking-wider">
                {language === 'ar' ? 'قاعدة العطر (Base Notes)' : 'NOTES DE FOND (BASE NOTES)'}
              </div>
              <h4 className="text-lg font-serif font-bold text-[#fff8f0]">Enduring Trail &amp; Oud</h4>
              <ul className="space-y-2 text-sm text-rose-200/90 font-sans">
                {brandSpecs.scentPyramid.base.map((note, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 4. BRAND SPECS & PACKAGING OVERVIEW */}
      {brandSpecs && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {brandSpecs.logoConcept && (
            <div className="p-6 rounded-3xl bg-[#251110] border border-[#572A26] space-y-3">
              <h4 className="text-lg font-serif font-bold text-[#D68379] flex items-center gap-2">
                <Info className="w-5 h-5" />
                {language === 'ar' ? 'مفهوم الشعار والمونوغرام' : 'LOGO & MONOGRAM CONCEPT'}
              </h4>
              <p className="text-sm text-rose-200/80 leading-relaxed font-sans">
                {brandSpecs.logoConcept}
              </p>
            </div>
          )}

          {brandSpecs.packagingSpecs && (
            <div className="p-6 rounded-3xl bg-[#251110] border border-[#572A26] space-y-3">
              <h4 className="text-lg font-serif font-bold text-[#D68379] flex items-center gap-2">
                <Box className="w-5 h-5" />
                {language === 'ar' ? 'مواصفات التغليف والزجاجة' : 'PACKAGING & FLACON SPECIFICATIONS'}
              </h4>
              <p className="text-sm text-rose-200/80 leading-relaxed font-sans">
                {brandSpecs.packagingSpecs}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
