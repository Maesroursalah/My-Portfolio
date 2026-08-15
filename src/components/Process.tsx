import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  if (!PROCESS_STEPS || PROCESS_STEPS.length === 0) {
    return null;
  }

  return (
    <section id="process" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // METHODOLOGY &amp; WORKFLOW</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            The 4-Step Process
          </h2>
          <p className="text-rose-200/80 max-w-xl text-base sm:text-lg font-sans font-light">
            A battle-tested workflow ensuring predictable timelines, transparent milestones, and zero technical debt.
          </p>
        </div>
      </div>

      {/* 4-Step Cards Grid / Sticky List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group p-8 sm:p-10 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 shadow-xl space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-4xl sm:text-5xl font-serif font-bold text-[#D68379]">
                  {step.step}
                </span>
                <span className="text-xs font-display px-3 py-1 rounded-full bg-[#381B19] text-rose-200 border border-[#572A26] uppercase">
                  PHASE {idx + 1}
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold text-[#fff8f0] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs font-display text-[#D68379] font-bold uppercase tracking-wider">
                  {step.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-rose-200/80 font-sans font-light leading-relaxed">
                {step.description}
              </p>
            </div>

            {/* Key Actions List */}
            <div className="pt-4 border-t border-[#381B19] space-y-2">
              <span className="text-[11px] font-display uppercase text-rose-300/60 font-semibold block">
                DELIVERABLE MILESTONES:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-rose-200/90 font-sans">
                {step.keyActions.map((action, aIdx) => (
                  <li key={aIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D68379] shrink-0" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
