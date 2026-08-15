import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Sparkles, Layers, Image as ImageIcon, Sparkle, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GraphicDesignViewProps {
  onNavigateHome?: () => void;
  onSelectProject?: (projectId: string) => void;
}

type CategoryType = 'social-media-ads' | 'logo' | 'print-works';

export const GraphicDesignView: React.FC<GraphicDesignViewProps> = ({ onNavigateHome, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('social-media-ads');

  const categories: { id: CategoryType; label: string; count: number }[] = [
    { id: 'social-media-ads', label: 'Social media ads', count: 2 },
    { id: 'logo', label: 'Logo', count: 1 },
    { id: 'print-works', label: 'Print works', count: 1 },
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[70vh] space-y-10">
      {/* Header Banner */}
      <div className="space-y-4 text-center md:text-left">
        {onNavigateHome && (
          <button
            onClick={onNavigateHome}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 hover:text-[#fff8f0] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home Overview</span>
          </button>
        )}

        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#fff8f0]">
          Graphic Design
        </h1>
      </div>

      {/* Categories Selector Bar */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-xs font-mono text-rose-300/60 uppercase tracking-wider">
          <Tag className="w-3.5 h-3.5 text-[#D68379]" />
          <span>Select Category</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-[#1B0C0B] border border-[#572A26] w-fit shadow-lg">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-[#381B19] text-[#fff8f0] border border-[#D68379] shadow-md'
                    : 'text-rose-200/70 hover:text-[#fff8f0] hover:bg-[#251110] border border-transparent'
                }`}
              >
                <span>{cat.label}</span>
                {cat.count > 0 && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      isActive
                        ? 'bg-[#D68379] text-[#1B0C0B]'
                        : 'bg-[#251110] text-rose-300/60'
                    }`}
                  >
                    {cat.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Category Content Area */}
      <div className="pt-4 border-t border-[#381B19]">
        <AnimatePresence mode="wait">
          {/* CATEGORY 1: Social Media Ads */}
          {selectedCategory === 'social-media-ads' && (
            <motion.div
              key="social-media-ads"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26] uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  Category
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
                  Social media ads
                </h2>
              </div>

              {/* Projects Grid for Social Media Ads */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* OZONEXPRESS Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject?.('ozonexpress')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW GALLERY"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/ozonexpress01/FIRST.png"
                      alt="OZONEXPRESS Campaign"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-[#150B0A]/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        6 Creatives
                      </span>
                    </div>

                    {/* Bottom Action overlay */}
                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="pt-1 flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                      OZONEXPRESS
                    </h3>
                    <span className="text-xs font-mono text-rose-300/60 uppercase">
                      View Gallery &rarr;
                    </span>
                  </div>
                </motion.div>

                {/* Momento ADS Project */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  onClick={() => onSelectProject?.('momento-ads')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW GALLERY"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-2">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/M%20-%201.png"
                      alt="Momento ADS Campaign"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        3 Creatives
                      </span>
                    </div>

                    {/* Bottom Action overlay */}
                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="pt-1 flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                      Momento ADS
                    </h3>
                    <span className="text-xs font-mono text-rose-300/60 uppercase">
                      View Gallery &rarr;
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* CATEGORY 2: Logo */}
          {selectedCategory === 'logo' && (
            <motion.div
              key="logo"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26] uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  Category
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
                  Logo
                </h2>
              </div>

              {/* Projects Grid for Logo */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject?.('belive')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-3">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/beliver/Beige%20Et%20Vert%20Elegant%20Moderne%20Et%20Simple%20Marque%20Beaut%C3%A9%20%20Logo%20-%201.png"
                      alt="BELIVE Brand Identity & Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        3 Assets
                      </span>
                    </div>

                    {/* Bottom Action overlay */}
                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="pt-1 flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                      BELIVE
                    </h3>
                    <span className="text-xs font-mono text-rose-300/60 uppercase">
                      View Gallery &rarr;
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* CATEGORY 3: Print works */}
          {selectedCategory === 'print-works' && (
            <motion.div
              key="print-works"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26] uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  Category
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0]">
                  Print works
                </h2>
              </div>

              {/* Projects Grid for Print works */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => onSelectProject?.('black-hole')}
                  className="group cursor-pointer rounded-3xl bg-[#1B0C0B] border border-[#572A26] hover:border-[#D68379] p-5 space-y-4 transition-all duration-300 shadow-xl"
                  data-cursor="VIEW"
                >
                  {/* Visual Thumbnail Frame */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#251110] border border-[#381B19] flex items-center justify-center p-2">
                    <img
                      src="https://raw.githubusercontent.com/Maesroursalah/portfolio/main/black%20hole/Golden%20Bear%20Raglan%20Wool%20Varsity%20Jackets%20(1)%20copy.jpg"
                      alt="Black hole designs - Varsity Jacket & Streetwear Prints"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A]/90 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1B0C0B]/90 text-[#D68379] border border-[#381B19] backdrop-blur-md">
                        10 Works
                      </span>
                    </div>

                    {/* Bottom Action overlay */}
                    <div className="absolute bottom-3 right-3">
                      <div className="p-3 rounded-full bg-[#D68379] text-[#fff8f0] group-hover:bg-[#ffffff] group-hover:text-[#D68379] transition-colors shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="pt-1 flex items-center justify-between">
                    <h3 className="text-xl font-serif font-bold text-[#fff8f0] group-hover:text-[#D68379] transition-colors">
                      Black hole designs
                    </h3>
                    <span className="text-xs font-mono text-rose-300/60 uppercase">
                      View Gallery &rarr;
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
