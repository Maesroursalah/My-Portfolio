import React from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface SelectedWorkProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectCaseStudy }) => {
  const { t } = useLanguage();

  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('work_kicker')}</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            {t('work_title')}
          </h2>
          <p className="text-rose-200/80 max-w-xl text-base sm:text-lg font-sans font-light">
            {t('work_subtitle')}
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {CASE_STUDIES.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => onSelectCaseStudy(project)}
            className="group cursor-pointer space-y-4"
            data-cursor="CASE STUDY"
          >
            {/* Thumbnail Box */}
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-[#572A26] group-hover:border-[#D68379] bg-[#1B0C0B] shadow-xl transition-all duration-500">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/95 via-[#150B0A]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

              {/* Category Badge & Year */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3.5 py-1 rounded-full text-xs font-display font-bold bg-[#381B19]/90 text-rose-100 backdrop-blur-md shadow-sm border border-[#572A26]">
                  {project.category}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#150B0A]/80 text-rose-300 backdrop-blur-md border border-[#381B19]">
                  {project.year}
                </span>
              </div>

              {/* Hover Trigger Banner */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#fff8f0] z-10">
                <div>
                  <span className="text-xs font-display text-[#D68379] block uppercase tracking-widest font-bold">
                    {project.client}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff8f0] tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Summary & Metrics bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2 text-xs font-sans text-rose-200/70">
              <p className="line-clamp-1 text-rose-200/90 text-sm font-sans">
                {project.summary}
              </p>
              <span className="shrink-0 text-[#D68379] font-display font-bold">
                {project.metrics[0]?.label}: {project.metrics[0]?.value}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
