import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // VERIFIED CLIENT ENDORSEMENTS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            Testimonials
          </h2>
          <p className="text-rose-200/80 max-w-xl text-base sm:text-lg font-sans font-light">
            Feedback from creative directors, founders, and product leaders across Paris, Dubai, Marrakech, and London.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-[#572A26] bg-[#251110] text-rose-100 hover:border-[#D68379] hover:text-[#D68379] transition-colors shadow-md"
            aria-label="Previous testimonial"
            data-cursor="PREV"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-[#572A26] bg-[#251110] text-rose-100 hover:border-[#D68379] hover:text-[#D68379] transition-colors shadow-md"
            aria-label="Next testimonial"
            data-cursor="NEXT"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Testimonial Card */}
      <div className="relative p-8 sm:p-14 rounded-3xl bg-[#251110] text-[#fff8f0] border border-[#572A26] shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
        {/* Background Decorative Quote */}
        <Quote className="absolute right-6 bottom-6 w-40 h-40 text-[#381B19]/60 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8 z-10"
          >
            {/* Rating Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#D68379] text-[#D68379]" />
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-xl sm:text-3xl font-serif italic text-rose-100 leading-relaxed font-light">
              "{current.quote}"
            </p>

            {/* Author Meta */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#381B19]">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#D68379]"
              />
              <div>
                <h4 className="text-lg font-serif font-bold text-[#fff8f0]">{current.author}</h4>
                <p className="text-xs font-display text-[#D68379] font-bold">{current.role}</p>
                <p className="text-xs font-display text-rose-300/70">{current.company}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2 pt-6 z-10">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-[#D68379]' : 'w-2 bg-[#381B19] hover:bg-[#572A26]'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
