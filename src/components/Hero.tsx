import React from 'react';
import { motion } from 'motion/react';
import { FolderGit2, ArrowRight, Palette, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleNav = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      const el = document.querySelector(`#${pageId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-between pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto space-y-8 sm:space-y-12 z-10">
        {/* Main Profile Showcase Card */}
        <div className="flex flex-col items-center justify-center text-center gap-8 py-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[#572A26] bg-[#251110] shadow-2xl shadow-black/80 hover:border-[#D68379] transition-all duration-500"
          >
            {/* Profile Image of Me */}
            <img
              src={PERSONAL_INFO.avatar}
              alt="Mesrour Salah Eddine"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A] via-transparent to-transparent opacity-90" />
            
            {/* Top Status Badge */}
            <div className="absolute top-4 right-4 flex items-center justify-end">
              <span className="px-3 py-1.5 rounded-full bg-[#381B19]/90 backdrop-blur-md border border-[#572A26] text-xs font-mono text-[#D68379] font-bold shadow-lg">
                CASABLANCA, MOROCCO
              </span>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#150B0A]/95 backdrop-blur-md border border-[#572A26] space-y-1.5 text-left shadow-2xl">
              <div className="text-base sm:text-lg font-display font-bold text-[#fff8f0]">
                MESROUR SALAH EDDINE
              </div>
              <div className="text-xs text-[#D68379] font-mono font-medium">
                Graphic Designer x Web Developer
              </div>
              <div className="text-xs text-rose-200/90 font-sans flex items-center justify-between pt-1.5 border-t border-[#381B19]">
                <span className="flex items-center gap-1 text-[#EBB5AF]"><Palette className="w-3.5 h-3.5 text-[#D68379]" /> Brand Identity</span>
                <span className="flex items-center gap-1 text-[#EBB5AF]"><Code className="w-3.5 h-3.5 text-[#D68379]" /> Web Architecture</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons & Navigation CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <button
            onClick={() => handleNav('work')}
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full bg-gradient-to-r from-[#B85C52] via-[#C8746B] to-[#D68379] text-[#fff8f0] font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-rose-950/60 hover:shadow-[#D68379]/30"
            data-cursor="DEVELOPMENT"
          >
            <Code className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap">View The Works</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            onClick={() => handleNav('graphic-design')}
            className="group w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full bg-[#251110] border-2 border-[#572A26] hover:border-[#D68379] text-[#fff8f0] font-display font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 hover:bg-[#381B19] transition-all shadow-xl shadow-black/60"
            data-cursor="GRAPHIC DESIGN"
          >
            <Palette className="w-4 h-4 text-[#D68379] shrink-0" />
            <span className="whitespace-nowrap">Graphic Design</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D68379] shrink-0" />
          </button>
        </motion.div>


      </div>
    </section>
  );
};

