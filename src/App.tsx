import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './components/ThemeContext';
import { Preloader } from './components/Preloader';
import { CanvasBackground } from './components/CanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { SelectedWork } from './components/SelectedWork';
import { WorkView } from './components/WorkView';
import { GraphicDesignView } from './components/GraphicDesignView';
import { OzonexpressGalleryView } from './components/OzonexpressGalleryView';
import { BeliveGalleryView } from './components/BeliveGalleryView';
import { BlackHoleGalleryView } from './components/BlackHoleGalleryView';
import { MomentoAdsGalleryView } from './components/MomentoAdsGalleryView';
import { Services } from './components/Services';
import { About } from './components/About';
import { SkillsStats } from './components/SkillsStats';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { CaseStudyView } from './components/CaseStudyView';
import { CaseStudy } from './types';
import { CASE_STUDIES, PERSONAL_INFO } from './data/portfolioData';
import { ArrowRight, ArrowLeft, Sparkles, FolderGit2, ShieldCheck, Briefcase, FileText, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showSelectedWork, setShowSelectedWork] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Router active page state synced with hash
  const [activePage, setActivePage] = useState<string>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    return ['home', 'work', 'graphic-design', 'ozonexpress', 'belive', 'black-hole', 'momento-ads', 'services', 'about', 'skills', 'process', 'case-study'].includes(hash)
      ? hash
      : 'home';
  });

  // Handle hash changes for browser Back/Forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash === 'about') {
        setActivePage('home');
        setTimeout(() => {
          const el = document.querySelector('#about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else if (['home', 'work', 'graphic-design', 'ozonexpress', 'belive', 'black-hole', 'momento-ads', 'services', 'skills', 'process', 'case-study'].includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    // Check initial hash on mount
    if (window.location.hash.includes('about')) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Ref to Lenis instance for programmatic instant scrolling
  const lenisRef = React.useRef<Lenis | null>(null);

  // Page change handler that resets scroll or scrolls to target section
  const handlePageChange = (page: string) => {
    if (page === 'about') {
      setActivePage('home');
      window.location.hash = '#about';
      setTimeout(() => {
        const el = document.querySelector('#about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setActivePage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleSelectCaseStudy = (cs: CaseStudy) => {
    setSelectedCaseStudy(cs);
    handlePageChange('case-study');
  };

  // Initialize Lenis Smooth Scroll with crisp, fast settings (no heavy lag)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#150B0A] dark:bg-[#150B0A] text-[#fff8f0] font-sans selection:bg-[#D68379] selection:text-[#ffffff] transition-colors duration-300 overflow-x-hidden">
        {/* Preloader Counter */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* Canvas Background Interactive Mesh */}
        <CanvasBackground />

        {/* Fixed Navigation Bar synced with active page */}
        <Navbar activePage={activePage} setActivePage={handlePageChange} />

        {/* Multi-Page Views Container */}
        <main className="relative z-10 pt-20">
          <AnimatePresence mode="wait">
            {/* ----------------- PAGE 1: HOME OVERVIEW ----------------- */}
            {activePage === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-16"
              >
                <Hero onNavigate={(page) => {
                  if (page === 'work') {
                    setShowSelectedWork(true);
                    setTimeout(() => {
                      const el = document.querySelector('#work');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  } else {
                    handlePageChange(page);
                  }
                }} />
                <Marquee />

                {/* Selected Works section revealed on click */}
                {showSelectedWork && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="max-w-7xl mx-auto px-4 flex justify-end">
                      <button
                        onClick={() => setShowSelectedWork(false)}
                        className="px-4 py-1.5 rounded-full bg-[#251110] hover:bg-[#381B19] border border-[#572A26] text-rose-300 text-xs font-mono transition-colors"
                      >
                        ✕ Hide Works Section
                      </button>
                    </div>
                    <SelectedWork onSelectCaseStudy={handleSelectCaseStudy} />
                  </motion.div>
                )}

                {/* About Me Section integrated directly into Home overview */}
                <div className="pt-8 border-t border-[#381B19]/60">
                  <About />
                </div>
              </motion.div>
            )}

            {/* ----------------- PAGE 2: WORK / WEB DEVELOPMENT DIRECTORY ----------------- */}
            {activePage === 'work' && (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <WorkView
                  onSelectCaseStudy={handleSelectCaseStudy}
                  onNavigateHome={() => handlePageChange('home')}
                />
              </motion.div>
            )}

            {/* ----------------- PAGE: GRAPHIC DESIGN ----------------- */}
            {activePage === 'graphic-design' && (
              <motion.div
                key="graphic-design"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <GraphicDesignView
                  onNavigateHome={() => handlePageChange('home')}
                  onSelectProject={(id) => handlePageChange(id)}
                />
              </motion.div>
            )}

            {/* ----------------- PAGE: OZONEXPRESS GALLERY ----------------- */}
            {activePage === 'ozonexpress' && (
              <motion.div
                key="ozonexpress"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <OzonexpressGalleryView
                  onBack={() => handlePageChange('graphic-design')}
                />
              </motion.div>
            )}

            {/* ----------------- PAGE: BELIVE GALLERY ----------------- */}
            {activePage === 'belive' && (
              <motion.div
                key="belive"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <BeliveGalleryView
                  onBack={() => handlePageChange('graphic-design')}
                />
              </motion.div>
            )}

            {/* ----------------- PAGE: BLACK HOLE GALLERY ----------------- */}
            {activePage === 'black-hole' && (
              <motion.div
                key="black-hole"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <BlackHoleGalleryView
                  onBack={() => handlePageChange('graphic-design')}
                />
              </motion.div>
            )}

            {/* ----------------- PAGE: MOMENTO ADS GALLERY ----------------- */}
            {activePage === 'momento-ads' && (
              <motion.div
                key="momento-ads"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <MomentoAdsGalleryView
                  onBack={() => handlePageChange('graphic-design')}
                />
              </motion.div>
            )}

            {/* ----------------- PAGE 3: SERVICES & CAPABILITIES ----------------- */}
            {activePage === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12 py-8"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center md:text-left">
                  <button
                    onClick={() => handlePageChange('home')}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 hover:text-[#fff8f0] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md mb-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home Overview</span>
                  </button>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26]">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>PAGE // CAPABILITIES &amp; TECHNICAL STANDARDS</span>
                    </span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#fff8f0]">
                    Core Competencies &amp; Services
                  </h1>
                  <p className="text-rose-200/80 font-sans text-lg max-w-3xl font-light">
                    Commercial capabilities split into two core pillars: High-fidelity Graphic &amp; UI/UX Design and Production-grade Frontend Engineering.
                  </p>
                </div>

                {/* Main Services Component */}
                <Services />
              </motion.div>
            )}

            {/* ----------------- PAGE 4: ABOUT ME & CULTURE FIT ----------------- */}
            {activePage === 'about' && (
              <motion.div
                key="about"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12 py-8"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center md:text-left">
                  <button
                    onClick={() => handlePageChange('home')}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 hover:text-[#fff8f0] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md mb-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home Overview</span>
                  </button>
                </div>

                {/* Main About Component */}
                <About />
              </motion.div>
            )}

            {/* ----------------- PAGE 5: SKILL MATRIX & TOOL STACK ----------------- */}
            {activePage === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12 py-8"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center md:text-left">
                  <button
                    onClick={() => handlePageChange('home')}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 hover:text-[#fff8f0] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md mb-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home Overview</span>
                  </button>
                </div>

                {/* Main Skills Component */}
                <SkillsStats />
              </motion.div>
            )}

            {/* ----------------- PAGE 6: DELIVERY PROCESS ----------------- */}
            {activePage === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-12 py-8"
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center md:text-left">
                  <button
                    onClick={() => handlePageChange('home')}
                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251110] border border-[#572A26] hover:border-[#D68379] text-rose-200 hover:text-[#fff8f0] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md mb-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-[#D68379] group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Home Overview</span>
                  </button>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#381B19] text-[#D68379] text-xs font-display font-bold border border-[#572A26]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>PAGE // PRODUCT DELIVERY &amp; QA METHODOLOGY</span>
                    </span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-serif font-bold text-[#fff8f0]">
                    Engineering &amp; Design Process
                  </h1>
                  <p className="text-rose-200/80 font-sans text-lg max-w-3xl font-light">
                    A structured 4-phase framework ensuring seamless team handoff, robust design token synchronization, and high core web vitals performance.
                  </p>
                </div>

                {/* Main Process Component */}
                <Process />
              </motion.div>
            )}

            {/* ----------------- PAGE: DEDICATED CASE STUDY PAGE ----------------- */}
            {activePage === 'case-study' && (
              <motion.div
                key="case-study"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <CaseStudyView
                  caseStudy={selectedCaseStudy || CASE_STUDIES[0]}
                  onBack={() => handlePageChange('work')}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer with Page Navigation Directory */}
        <div className="pb-16 lg:pb-0">
          <Footer onNavigate={handlePageChange} />
        </div>

        {/* Mobile App Dock Navigation Bar */}
        <MobileBottomNav activePage={activePage} setActivePage={handlePageChange} />
      </div>
    </ThemeProvider>
  );
}

