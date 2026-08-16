import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface WorkViewProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onNavigateHome?: () => void;
}

export const WorkView: React.FC<WorkViewProps> = ({ onSelectCaseStudy, onNavigateHome }) => {
  const { t } = useLanguage();
  const [subFilter, setSubFilter] = useState<string>('All');

  const websiteDevProjects = CASE_STUDIES.filter(
    (item) => item.category === 'Web Dev' || item.category === 'UI/UX' || item.tags.some(t => t.includes('Next.js') || t.includes('React') || t.includes('E-Commerce'))
  );

  const devFilters = [
    { id: 'All', label: t('dev_filter_all') },
    { id: 'Next.js & React', label: t('dev_filter_nextjs') },
    { id: 'Headless E-Commerce', label: t('dev_filter_ecommerce') },
    { id: 'Fintech & SaaS', label: t('dev_filter_saas') },
    { id: 'Design System Code', label: t('dev_filter_design_system') }
  ];

  const filteredProjects = websiteDevProjects.filter((project) => {
    if (subFilter === 'All') return true;
    if (subFilter === 'Next.js & React') return project.tags.some(t => t.includes('Next.js') || t.includes('React') || t.includes('TypeScript'));
    if (subFilter === 'Headless E-Commerce') return project.tags.some(t => t.includes('E-Commerce') || t.includes('Store'));
    if (subFilter === 'Fintech & SaaS') return project.tags.some(t => t.includes('Fintech') || t.includes('Dashboard') || t.includes('Medical'));
    if (subFilter === 'Design System Code') return project.tags.some(t => t.includes('Design System') || t.includes('Tailwind'));
    return true;
  });

  return (
    <div className="space-y-12 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {t('dev_view_title')}
        </h1>

        <p className="text-rose-200/80 font-sans text-base sm:text-lg max-w-3xl font-light leading-relaxed">
          {t('dev_view_subtitle')}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            onClick={() => onSelectCaseStudy(project)}
            className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
            data-cursor="VIEW WORK"
          >
            {/* Thumbnail Image Container */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#150B0A]">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent opacity-80" />

              {/* Bottom Action overlay */}
              <div className="absolute bottom-3 right-3">
                <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="pt-1">
              <h3 className="text-2xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
