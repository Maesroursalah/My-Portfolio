import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICE_TRACKS } from '../data/portfolioData';
import { Palette, Layout, Sparkles, Code2, ShoppingBag, Zap, CheckCircle, ArrowRight, Clock, Tag } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<'Design' | 'Development'>('Design');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#D68379]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#D68379]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D68379]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#D68379]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#D68379]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#D68379]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D68379]" />;
    }
  };

  const currentTrackData = SERVICE_TRACKS.find((t) => t.track === activeTrack) || SERVICE_TRACKS[0];

  const handleSelectServiceForContact = (serviceTitle: string) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to select service in form
      const event = new CustomEvent('select-service', { detail: serviceTitle });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // CORE COMPETENCIES &amp; CAPABILITIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            Expertise &amp; Capabilities
          </h2>
          <p className="text-rose-200/80 max-w-xl text-base sm:text-lg font-sans font-light">
            Core capabilities in Graphic Design (branding, typography, Figma UI/UX) and modern Frontend Development (React, Next.js, TypeScript).
          </p>
        </div>

        {/* Track Toggle Switch */}
        <div className="flex items-center bg-[#251110] p-1.5 rounded-2xl border border-[#572A26]">
          <button
            onClick={() => setActiveTrack('Design')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-display uppercase tracking-wider font-bold transition-all ${
              activeTrack === 'Design'
                ? 'bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] shadow-md shadow-rose-950/40'
                : 'text-rose-200/70 hover:text-[#fff8f0]'
            }`}
            data-cursor="DESIGN TRACK"
          >
            <Palette className="w-4 h-4" />
            <span>DESIGN COMPETENCIES</span>
          </button>
          <button
            onClick={() => setActiveTrack('Development')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-display uppercase tracking-wider font-bold transition-all ${
              activeTrack === 'Development'
                ? 'bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] shadow-md shadow-rose-950/40'
                : 'text-rose-200/70 hover:text-[#fff8f0]'
            }`}
            data-cursor="ENGINEERING TRACK"
          >
            <Code2 className="w-4 h-4" />
            <span>ENGINEERING TRACK</span>
          </button>
        </div>
      </div>

      {/* Active Track Intro Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-display text-[#D68379] uppercase tracking-widest font-bold">
            {currentTrackData.track} SPECIALIZATION
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
            {currentTrackData.subtitle}
          </h3>
          <p className="text-sm sm:text-base text-rose-200/80 max-w-2xl font-sans font-light">
            {currentTrackData.description}
          </p>
        </div>

        <button
          onClick={() => handleSelectServiceForContact(`${currentTrackData.track} Capability Role`)}
          className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#B85C52] to-[#D68379] hover:brightness-110 text-[#fff8f0] font-bold text-xs font-display uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-rose-950/50"
          data-cursor="INQUIRE"
        >
          <span>Inquire for {currentTrackData.track} Role</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {currentTrackData.items.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group p-6 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26]">
                  {getIcon(service.iconName)}
                </div>
                <span className="text-xs font-display font-bold text-rose-200 px-3 py-1 rounded-full bg-[#381B19] border border-[#572A26]">
                  {service.impactArea || service.timeline}
                </span>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-serif font-bold text-[#fff8f0] tracking-tight">
                  {service.title}
                </h4>
                <p className="text-xs font-display text-rose-300/70">{service.tagline}</p>
              </div>

              <p className="text-sm text-rose-200/80 font-sans font-light leading-relaxed">
                {service.description}
              </p>

              {/* Deliverables checklist */}
              <div className="space-y-2 pt-2 border-t border-[#381B19]">
                <span className="text-[11px] font-display uppercase text-rose-300/60 font-semibold block">
                  TECHNICAL STANDARDS &amp; DELIVERABLES:
                </span>
                <ul className="space-y-1.5 text-xs text-rose-200/90 font-sans">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D68379] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 border-t border-[#381B19] flex items-center justify-between text-xs font-sans">
              <span className="flex items-center gap-1.5 text-rose-300/70 font-display">
                <Clock className="w-3.5 h-3.5 text-[#D68379]" />
                {service.timeline}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
