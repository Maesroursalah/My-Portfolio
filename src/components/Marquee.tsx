import React from 'react';
import { CLIENT_LOGOS } from '../data/portfolioData';
import { useLanguage } from './LanguageContext';

export const Marquee: React.FC = () => {
  const { t } = useLanguage();
  // Duplicate logos for seamless infinite loop effect
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-8 bg-[#251110] text-[#fff8f0] border-y border-[#572A26] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-4 flex items-center justify-between text-xs font-display text-rose-300/80">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#D68379]" />
          {t('marquee_trusted')}
        </span>
        <span className="hidden sm:inline tracking-widest uppercase">{t('marquee_global')}</span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Left & Right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#251110] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#251110] to-transparent z-10" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-12 sm:gap-16 items-center">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-3 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              data-cursor="BRAND"
            >
              <div className="h-2 w-2 rounded-full bg-[#D68379]/60 group-hover:bg-[#D68379] transition-colors" />
              <span className="text-sm sm:text-base font-display font-bold tracking-widest uppercase text-rose-100 group-hover:text-[#D68379] transition-colors">
                {client.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
