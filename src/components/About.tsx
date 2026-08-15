import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  MapPin, 
  Palette, 
  Code, 
  Terminal, 
  Cpu, 
  Layers, 
  Zap, 
  Smartphone, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight, 
  ShieldCheck, 
  Compass,
  FileCode2,
  Wrench,
  Lightbulb
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0652297244');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#572A26] pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // CREATIVE &amp; TECHNICAL BLUEPRINT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-[#fff8f0]">
            About Me
          </h2>
          <p className="text-rose-200/80 max-w-2xl text-base sm:text-lg font-sans font-light leading-relaxed">
            Brand Identity Designer &amp; Full-Stack Web Developer — Crafting cohesive visual ecosystems and clean software architectures.
          </p>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] text-xs font-display text-rose-200/90 shadow-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D68379] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D68379]"></span>
          </span>
          <MapPin className="w-3.5 h-3.5 text-[#D68379]" />
          <span>Casablanca, Sidi Maarouf</span>
        </div>
      </div>

      {/* Hero Narrative & Introduction Card with Profile Picture */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
      >
        {/* Profile Picture Card */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <div className="relative group w-full aspect-[4/5] max-w-sm rounded-3xl overflow-hidden border-2 border-[#572A26] bg-[#251110] shadow-2xl shadow-black/80 hover:border-[#D68379] transition-all duration-500">
            <img
              src={PERSONAL_INFO.avatar}
              alt="Salah Eddine Mesrour"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150B0A] via-transparent to-transparent opacity-90" />
            
            {/* Location Tag Overlay */}
            <div className="absolute top-4 right-4 flex items-center justify-end">
              <span className="px-3 py-1.5 rounded-full bg-[#381B19]/90 backdrop-blur-md border border-[#572A26] text-xs font-mono text-[#D68379] font-bold shadow-lg">
                CASABLANCA, MOROCCO
              </span>
            </div>

            {/* Bottom Info Bar Overlay */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#150B0A]/95 backdrop-blur-md border border-[#572A26] space-y-1 text-left shadow-2xl">
              <div className="text-base sm:text-lg font-display font-bold text-[#fff8f0]">
                SALAH EDDINE MESROUR
              </div>
              <div className="text-xs text-[#D68379] font-mono font-medium">
                Brand Designer x Full-Stack Dev
              </div>
            </div>
          </div>
        </div>

        {/* Main Intro Hero Box */}
        <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#251110] border border-[#572A26] shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D68379]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#381B19] text-[#D68379] border border-[#572A26] font-semibold">
                SALAH EDDINE MESROUR
              </span>
              <span className="text-xs font-mono text-rose-300/70">
                CASABLANCA, SIDI MAAROUF
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#fff8f0] leading-tight">
              Hi, I'm <span className="text-[#D68379]">Salah Eddine Mesrour</span>.
            </h3>

            <p className="text-lg sm:text-xl font-sans text-rose-100 font-normal leading-relaxed border-l-2 border-[#D68379] pl-4 italic">
              "I bridge the gap between creative artistry and logical engineering. I don’t just build websites, and I don’t just design logos—I craft the complete visual and technical blueprint for brands from the ground up."
            </p>
          </div>

          <div className="pt-4 border-t border-[#381B19] flex flex-wrap gap-4 text-xs font-display text-rose-200/80">
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#D68379]" />
              <span>Complete Brand Identity</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileCode2 className="w-4 h-4 text-[#D68379]" />
              <span>Full-Stack Web Engineering</span>
            </div>
          </div>
        </div>

        {/* Narrative & Approach Side Boxes */}
        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-[#1D0D0C] border border-[#572A26] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-[#D68379] font-display text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4" />
              <span>Bespoke Approach</span>
            </div>
            <p className="text-sm sm:text-base font-sans text-rose-200/90 leading-relaxed font-light">
              I believe that a great digital presence starts with a rock-solid visual foundation (the logo, the color palette, the typography) and ends with clean, custom-written code that performs flawlessly. By mastering both ends of the spectrum, I ensure that nothing is lost in translation between the design concept and the live website.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#1D0D0C] border border-[#572A26] space-y-3 shadow-xl">
            <div className="flex items-center gap-2 text-[#D68379] font-display text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Visual &amp; Structural Focus</span>
            </div>
            <p className="text-sm sm:text-base font-sans text-rose-200/90 leading-relaxed font-light">
              When I’m not sketching concepts or structuring code architectures, I’m constantly looking at how structural components fit together—whether that's fine-tuning a visual grid or building out seamless user experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Skills & Technologies Showcase */}
      <div className="space-y-8 pt-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold uppercase tracking-widest">
            <Wrench className="w-4 h-4" />
            <span>TOOLKIT &amp; CAPABILITIES</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff8f0]">
            Core Skills &amp; Technologies
          </h3>
          <p className="text-rose-200/80 font-sans text-sm sm:text-base max-w-3xl font-light">
            I keep my workflow sharp, modern, and focused on tools that allow me to create custom, scalable assets without relying on generic templates or shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Brand Identity & Design */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] space-y-6 shadow-2xl relative overflow-hidden group hover:border-[#D68379]/70 transition-all duration-300"
          >
            <div className="flex items-center justify-between border-b border-[#381B19] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26]">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                    Brand Identity &amp; Design
                  </h4>
                  <span className="text-xs font-mono text-rose-300/60 block">CREATIVE DIRECTION &amp; UI</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Tool 1 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Vector &amp; Identity Design
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    ADOBE ILLUSTRATOR
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  Logos, Graphic Charters, Brand Guidelines &amp; Vector Assets
                </p>
              </div>

              {/* Tool 2 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Visual Assets &amp; Compositing
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    ADOBE PHOTOSHOP
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  Image Editing, Visual Concepts &amp; Digital Compositing
                </p>
              </div>

              {/* Tool 3 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    UI/UX Prototyping
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    FIGMA
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  Interface Layouts, Wireframing &amp; Design Systems
                </p>
              </div>
            </div>
          </motion.div>

          {/* Web Development & Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 sm:p-8 rounded-3xl bg-[#251110] border border-[#572A26] space-y-6 shadow-2xl relative overflow-hidden group hover:border-[#D68379]/70 transition-all duration-300"
          >
            <div className="flex items-center justify-between border-b border-[#381B19] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26]">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                    Web Development &amp; Architecture
                  </h4>
                  <span className="text-xs font-mono text-rose-300/60 block">FULL-STACK ENGINE</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Stack 1 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Front-End Engineering
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    UI FRAMEWORKS
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  HTML5, CSS3, Modern JavaScript (ES6+), Tailwind CSS
                </p>
              </div>

              {/* Stack 2 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Back-End &amp; Logic
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    SERVER &amp; APIS
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  Node.js, Custom JavaScript Architecture, API Integration
                </p>
              </div>

              {/* Stack 3 */}
              <div className="p-4 rounded-2xl bg-[#1D0D0C] border border-[#381B19] space-y-1.5 hover:border-[#572A26] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-[#D68379] uppercase tracking-wider">
                    Environment &amp; Version Control
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#381B19] text-rose-200">
                    DEV PIPELINE
                  </span>
                </div>
                <p className="text-sm font-sans text-[#fff8f0] font-normal">
                  VS Code, Git, GitHub
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Philosophy Grid */}
      <div className="space-y-8 pt-6 border-t border-[#572A26]">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-display text-[#D68379] font-bold uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>CORE PRINCIPLES</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#fff8f0]">
            My Philosophy
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26] w-fit group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                Clean Code Architecture
              </h4>
              <p className="text-sm font-sans text-rose-200/80 leading-relaxed font-light">
                I write clean, structured, and semantic code that is built to last, making sure the backbone of your project is as elegant as its interface.
              </p>
            </div>
            <div className="pt-3 border-t border-[#381B19] text-xs font-mono text-[#D68379] uppercase tracking-wider">
              BUILT FOR SCALABILITY
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26] w-fit group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                Performance Optimization
              </h4>
              <p className="text-sm font-sans text-rose-200/80 leading-relaxed font-light">
                A beautiful design is useless if it doesn't load. I optimize assets, clean up logic, and ensure fast loading speeds across the board.
              </p>
            </div>
            <div className="pt-3 border-t border-[#381B19] text-xs font-mono text-[#D68379] uppercase tracking-wider">
              LIGHTNING-FAST LOAD
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-7 rounded-3xl bg-[#251110] border border-[#572A26] hover:border-[#D68379] transition-all duration-300 space-y-4 shadow-xl flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-2xl bg-[#381B19] text-[#D68379] border border-[#572A26] w-fit group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif font-bold text-[#fff8f0]">
                Responsive Web Design
              </h4>
              <p className="text-sm font-sans text-rose-200/80 leading-relaxed font-light">
                Your brand needs to look flawless on every single screen, from a 5-inch smartphone to a 32-inch 4K desktop monitor.
              </p>
            </div>
            <div className="pt-3 border-t border-[#381B19] text-xs font-mono text-[#D68379] uppercase tracking-wider">
              PIXEL-PERFECT ON ALL DEVICES
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action Box: Let's Build Something Meaningful */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#251110] via-[#1D0D0C] to-[#150B0A] border-2 border-[#572A26] shadow-2xl relative overflow-hidden space-y-8"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D68379]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#381B19] text-[#D68379] text-xs font-mono font-bold border border-[#572A26]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COLLABORATION &amp; INQUIRIES</span>
          </div>
          <h3 className="text-3xl sm:text-5xl font-serif font-bold text-[#fff8f0] tracking-tight">
            🚀 Let's Build Something Meaningful
          </h3>
          <p className="text-base sm:text-lg font-sans text-rose-200/90 font-light leading-relaxed">
            Whether you need to establish a brand identity from scratch or develop a fully tailored digital experience, I bring the technical execution and the creative vision to make it happen.
          </p>
        </div>

        {/* Contact CTA buttons */}
        <div className="flex flex-wrap items-center gap-4 relative z-10 pt-2">
          {/* Direct Phone Button */}
          <a
            href="tel:0652297244"
            className="px-6 py-3.5 rounded-2xl bg-[#D68379] hover:bg-[#EBB5AF] text-[#150B0A] font-display font-bold text-sm sm:text-base transition-all duration-300 shadow-xl flex items-center gap-2.5 group"
          >
            <Phone className="w-4 h-4" />
            <span>Call / WhatsApp: 0652297244</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Copy Phone Button */}
          <button
            onClick={handleCopyPhone}
            className="px-5 py-3.5 rounded-2xl bg-[#381B19] hover:bg-[#572A26] border border-[#572A26] text-[#fff8f0] font-display font-semibold text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            {copiedPhone ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#D68379]" />
                <span>Copy Phone Number</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
