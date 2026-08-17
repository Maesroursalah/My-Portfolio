import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from './components/ThemeContext';
import { LanguageProvider } from './components/LanguageContext';
import { Preloader } from './components/Preloader';
import { CodeTransitionOverlay } from './components/CodeTransitionOverlay';
import { CanvasBackground } from './components/CanvasBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { WorkView } from './components/WorkView';
import { MyWorksView } from './components/MyWorksView';
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
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState('home');

  // Router active page state synced with hash
  const [activePage, setActivePage] = useState<string>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'my-works') return 'work';
    return ['home', 'work', 'my-works', 'web-dev', 'graphic-design', 'ozonexpress', 'belive', 'black-hole', 'momento-ads', 'services', 'about', 'skills', 'process', 'case-study'].includes(hash)
      ? hash
      : 'home';
  });

  // Handle hash changes for browser Back/Forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      let target = 'home';
      if (hash === 'about') {
        setActivePage('home');
        setTimeout(() => {
          const el = document.querySelector('#about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      } else if (hash === 'my-works') {
        target = 'work';
      } else if (['home', 'work', 'web-dev', 'graphic-design', 'ozonexpress', 'belive', 'black-hole', 'momento-ads', 'services', 'skills', 'process', 'case-study'].includes(hash)) {
        target = hash;
      }

      setTransitionTarget(target);
      setIsTransitioning(true);
      setTimeout(() => {
        setActivePage(target);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(0, { immediate: true });
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 160);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 550);
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

  // Page change handler that triggers the coding glitch transition
  const handlePageChange = (page: string) => {
    if (page === activePage && page !== 'about') return;

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

    // Trigger Coding / Cyberpunk Glitch Transition
    setTransitionTarget(page);
    setIsTransitioning(true);

    // Switch page after brief initial matrix burst
    setTimeout(() => {
      setActivePage(page);
      window.location.hash = page === 'home' ? '' : `#${page}`;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, 180);

    // Hide transition overlay smoothly
    setTimeout(() => {
      setIsTransitioning(false);
    }, 550);
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
      <LanguageProvider>
        <div className="relative min-h-screen bg-[#150B0A] dark:bg-[#150B0A] text-[#fff8f0] font-sans selection:bg-[#D68379] selection:text-[#ffffff] transition-colors duration-300 overflow-x-hidden">
        {/* Preloader Counter */}
        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {/* Coding & Matrix Page Transition Overlay */}
        <CodeTransitionOverlay
          isTransitioning={isTransitioning}
          targetPageName={transitionTarget}
        />

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
                <Hero onNavigate={(page) => handlePageChange(page)} />
                <Marquee />

                {/* About Me Section integrated directly into Home overview */}
                <div className="pt-8 border-t border-[#381B19]/60">
                  <About />
                </div>
              </motion.div>
            )}

            {/* ----------------- PAGE 2: MY WORKS HUB (2 CHOICES: GRAPHIC DESIGN & WEB DEV) ----------------- */}
            {activePage === 'work' && (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <MyWorksView
                  onSelectWebDev={() => handlePageChange('web-dev')}
                  onSelectGraphicDesign={() => handlePageChange('graphic-design')}
                  onNavigateHome={() => handlePageChange('home')}
                />
              </motion.div>
            )}

            {/* ----------------- PAGE: WEB DEVELOPMENT WORKS & APPLICATIONS ----------------- */}
            {activePage === 'web-dev' && (
              <motion.div
                key="web-dev"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <WorkView
                  onSelectCaseStudy={handleSelectCaseStudy}
                  onNavigateHome={() => handlePageChange('work')}
                />
              </motion.div>
            )}

            {/* ----------------- PAGE: GRAPHIC DESIGN & CREATIVE GALLERIES ----------------- */}
            {activePage === 'graphic-design' && (
              <motion.div
                key="graphic-design"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <GraphicDesignView
                  onNavigateHome={() => handlePageChange('work')}
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
              >
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
              >
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
              >
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
              >
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
      </LanguageProvider>
    </ThemeProvider>
  );
}

