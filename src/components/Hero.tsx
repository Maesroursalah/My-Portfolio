import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from './LanguageContext';
import { onImageError } from '../lib/imgFallback';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Smooth scroll animations for the hero image card
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.14]);

  const handleNav = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      const el = document.querySelector(`#${pageId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} id="hero" className="relative min-h-[85vh] flex flex-col justify-between pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto space-y-8 sm:space-y-12 z-10">
        {/* Main Profile Showcase Card with Scroll Interaction */}
        <div className="flex flex-col items-center justify-center text-center py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ y, scale, opacity }}
            className="relative group w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#572A26] bg-[#251110] shadow-2xl shadow-black/80 hover:border-[#D68379] transition-colors duration-500 will-change-transform"
          >
            {/* Profile Image of Me with smooth dynamic zoom effect */}
            <motion.img
              style={{ scale: imgScale }}
              src={PERSONAL_INFO.avatar}
              alt="Mesrour Salah Eddine"
              referrerPolicy="no-referrer"
              onError={onImageError}
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A] via-transparent to-transparent opacity-40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

