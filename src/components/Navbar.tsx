import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useLanguage, LANGUAGE_OPTIONS, Language } from './LanguageContext';
import {
  Menu,
  X,
  Sparkles,
  ArrowLeft,
  Home,
  User,
  Layers,
  Phone,
  Code,
  Palette,
  Compass,
  ChevronRight,
  ChevronDown,
  Mail,
  MessageCircle,
  Heart,
  ExternalLink,
  MapPin,
  Briefcase,
  Globe,
  Languages,
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { onImageError } from '../lib/imgFallback';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  menuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  menuOpen: controlledMenuOpen,
  setMenuOpen: setControlledMenuOpen
}) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);

  const menuOpen = controlledMenuOpen !== undefined ? controlledMenuOpen : internalMenuOpen;
  const setMenuOpen = setControlledMenuOpen !== undefined ? setControlledMenuOpen : setInternalMenuOpen;

  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuContainerRef = useRef<HTMLDivElement | null>(null);

  // Prevent background scroll when menu is open, handle keyboard navigation & guarantee scrollability
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      const container = menuContainerRef.current;
      
      if (container) {
        container.focus();

        // Direct wheel handler to guarantee scrolling on all devices/browsers bypassing Lenis window interception
        const handleWheel = (e: WheelEvent) => {
          e.stopPropagation();
          container.scrollTop += e.deltaY;
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
          container.removeEventListener('wheel', handleWheel);
          document.body.style.overflow = '';
          window.removeEventListener('keydown', handleKeyDown);
        };
      }

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const navLinks = [
    { name: t('nav_home'), id: 'home', icon: Home, num: '01' },
    { name: t('nav_work'), id: 'work', icon: Code, num: '02' },
    { name: t('nav_services'), id: 'services', icon: Sparkles, num: '03' },
    { name: t('nav_skills'), id: 'skills', icon: Layers, num: '04' },
    { name: t('nav_process'), id: 'process', icon: Compass, num: '05' },
    { name: t('nav_about'), id: 'about', icon: User, num: '06' },
  ];

  const handleNavClick = (pageId: string) => {
    setMenuOpen(false);
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    setTimeout(() => {
      const el = document.getElementById(pageId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 60);
  };

  const handleBackClick = () => {
    handleNavClick('home');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#150B0A]/95 backdrop-blur-md border-b border-[#572A26] py-3 shadow-lg shadow-black/40'
            : 'bg-[#150B0A]/80 backdrop-blur-sm py-4 border-b border-[#381B19]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Home Shortcut */}
          <div className="flex items-center gap-2">
            {activePage !== 'home' && (
              <button
                onClick={handleBackClick}
                className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-[#251110] border border-[#572A26] text-[#D68379] hover:bg-[#572A26] transition-all text-xs font-display font-bold mr-1"
                aria-label="Go back to home"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Back</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2.5 font-display text-sm tracking-wider font-semibold text-[#fff8f0]"
              data-cursor="HOME"
            >
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#572A26] bg-[#251110] group-hover:border-[#D68379] transition-colors shrink-0 flex items-center justify-center p-0.5 shadow-sm">
                <img
                  src={PERSONAL_INFO.logo}
                  alt="Mesrour Salah Eddine Logo"
                  referrerPolicy="no-referrer"
                  onError={onImageError}
                  decoding="async"
                  className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="hidden sm:inline font-serif font-bold text-sm tracking-tight text-[#fff8f0]">
                MESROUR
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links - PC View */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#251110]/90 p-1.5 rounded-full border border-[#572A26] backdrop-blur-md shadow-inner">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-display font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] font-bold shadow-md shadow-rose-950/50'
                      : 'text-rose-200/80 hover:text-[#fff8f0] hover:bg-[#572A26]'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right CTA & Interactive Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Selector Dropdown in Navbar */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#251110] text-rose-100 border border-[#572A26] hover:border-[#D68379] hover:bg-[#381B19] transition-all text-xs font-display font-semibold shadow-md active:scale-95 cursor-pointer"
                aria-label="Change Language"
                title="Language / Langue / اللغة"
              >
                <Languages className="w-3.5 h-3.5 text-[#D68379] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-[11px] font-bold text-[#fff8f0] uppercase tracking-wider">
                  {language === 'en' ? 'EN' : language === 'fr' ? 'FR' : 'العربية'}
                </span>
                <ChevronDown className={`w-3 h-3 text-rose-300/60 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180 text-[#D68379]' : ''}`} />
              </button>

              {/* Language Dropdown Menu */}
              <AnimatePresence>
                {langDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setLangDropdownOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className={`absolute top-full mt-2 ${isRTL ? 'left-0' : 'right-0'} z-50 w-48 rounded-2xl bg-[#1B0C0B] border border-[#572A26] shadow-2xl p-1.5 space-y-1`}
                    >
                      <div className="px-2.5 py-1.5 text-[10px] font-mono text-rose-300/60 uppercase tracking-wider border-b border-[#381B19]">
                        {t('language_select')}
                      </div>
                      {LANGUAGE_OPTIONS.map((opt) => {
                        const isSelected = language === opt.code;
                        return (
                          <button
                            key={opt.code}
                            onClick={() => {
                              setLanguage(opt.code);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-display transition-all ${
                              isSelected
                                ? 'bg-[#381B19] text-[#fff8f0] border border-[#D68379]/50 font-bold'
                                : 'text-rose-200/80 hover:bg-[#251110] hover:text-[#fff8f0]'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="w-7 h-5 rounded-md bg-[#251110] border border-[#572A26] flex items-center justify-center text-[10px] font-mono font-bold text-[#D68379] shrink-0">
                                {opt.badge}
                              </span>
                              <div className="text-left flex flex-col">
                                <span className="font-sans font-medium text-xs leading-tight">{opt.nativeLabel}</span>
                                <span className="text-[10px] text-rose-300/50 uppercase">{opt.label}</span>
                              </div>
                            </div>
                            {isSelected && <Check className="w-4 h-4 text-[#D68379]" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Me Button */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="hidden xs:inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#B85C52] to-[#D68379] hover:from-[#D68379] hover:to-[#EBB5AF] text-[#150B0A] font-display font-bold text-xs shadow-md shadow-rose-950/40 transition-all hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{t('nav_contact')}</span>
            </a>

            {/* Menu Trigger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`group flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border transition-all duration-300 font-display text-xs uppercase tracking-wider font-bold shadow-lg ${
                menuOpen
                  ? 'bg-[#D68379] text-[#150B0A] border-[#D68379]'
                  : 'bg-[#251110] text-rose-100 border-[#572A26] hover:border-[#D68379] hover:bg-[#381B19]'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              <span className="hidden sm:inline font-bold">
                {menuOpen ? t('nav_close') : t('nav_menu')}
              </span>
              <div className="relative w-4 h-4 flex items-center justify-center">
                {menuOpen ? (
                  <X className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
                ) : (
                  <Menu className="w-4 h-4 transition-transform group-hover:scale-110 duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* ------------------- FULL-SCREEN PROFILE NAVIGATION VIEW ----------------- */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuContainerRef}
            tabIndex={0}
            data-lenis-prevent="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 w-full h-full min-h-screen overflow-y-auto overscroll-contain touch-pan-y bg-[#120706] text-[#fff8f0] flex flex-col custom-scrollbar focus:outline-none select-none md:select-auto"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/* Ambient Background Glows */}
            <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-radial from-[#B85C52]/20 via-[#572A26]/10 to-transparent blur-3xl pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-radial from-[#D68379]/15 via-[#381B19]/10 to-transparent blur-3xl pointer-events-none" />

            {/* Full-width Top Cover Banner */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full bg-[#1A0B0A] overflow-hidden shrink-0">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                onError={onImageError}
                decoding="async"
                className="w-full h-full object-cover object-top brightness-90 contrast-105 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120706] via-[#120706]/40 to-black/60 pointer-events-none" />

              {/* Floating Top Controls */}
              <div className="absolute top-4 left-4 right-4 sm:left-8 sm:right-8 flex items-center justify-between z-10 max-w-4xl mx-auto">
                <div className="px-3 py-1.5 rounded-full bg-[#1B0C0B]/80 backdrop-blur-md border border-[#572A26] text-rose-100 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider">
                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="w-10 h-10 rounded-full bg-[#1B0C0B]/80 hover:bg-[#251110] backdrop-blur-md border border-[#572A26] hover:border-[#D68379] flex items-center justify-center text-rose-100 transition-all active:scale-95 shadow-lg"
                    aria-label="Like"
                  >
                    <Heart className={`w-5 h-5 ${liked ? 'fill-rose-500 text-rose-500' : 'text-rose-200'}`} />
                  </button>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="h-10 px-4 rounded-full bg-[#251110]/90 hover:bg-[#381B19] backdrop-blur-md border border-[#572A26] hover:border-[#D68379] flex items-center gap-2 text-rose-100 transition-all active:scale-95 shadow-lg font-display text-xs font-bold uppercase tracking-wider"
                    aria-label="Close menu"
                  >
                    <span>Close</span>
                    <X className="w-4 h-4 text-[#D68379]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Identity & Navigation Body */}
            <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-5 -mt-8 sm:-mt-12 relative z-10">
              {/* Profile Identity Card */}
              <div className="bg-[#1B0C0B]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-7 shadow-2xl border border-[#381B19] text-center space-y-2.5">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff8f0] tracking-tight">
                  {PERSONAL_INFO.name}
                </h2>
                <p className="text-xs sm:text-sm text-rose-200/70 font-sans max-w-md mx-auto leading-relaxed italic">
                  "Work hard in silence. Let your success be the noise."
                </p>
                <div className="pt-1 flex flex-wrap items-center justify-center gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#251110] text-rose-200/80 border border-[#572A26] text-[11px] font-mono">
                    <MapPin className="w-3 h-3 text-[#D68379]" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Language Selection Card in Menu */}
              <div className="bg-[#1B0C0B]/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-xl border border-[#381B19] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-display font-bold text-[#fff8f0] uppercase tracking-wider">
                    <Languages className="w-4 h-4 text-[#D68379]" />
                    <span>{t('nav_language')} // Language</span>
                  </div>
                  <span className="text-[11px] font-mono text-rose-300/70">
                    {language === 'en' ? 'English (EN)' : language === 'fr' ? 'Français (FR)' : 'العربية (AR)'}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {LANGUAGE_OPTIONS.map((opt) => {
                    const isSelected = language === opt.code;
                    return (
                      <button
                        key={opt.code}
                        onClick={() => setLanguage(opt.code)}
                        className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-2.5 rounded-xl border text-xs font-display font-bold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#150B0A] border-[#D68379] shadow-md shadow-rose-950/60'
                            : 'bg-[#251110] text-rose-200 border-[#572A26] hover:border-[#D68379] hover:bg-[#381B19]'
                        }`}
                      >
                        <span className="px-1.5 py-0.5 rounded bg-black/30 border border-white/10 text-[10px] font-mono font-bold">
                          {opt.badge}
                        </span>
                        <span className="font-sans text-xs">{opt.nativeLabel}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Group 1: Core Showcase & Portfolios */}
              <div className="bg-[#1B0C0B]/90 backdrop-blur-xl rounded-2xl shadow-xl border border-[#381B19] overflow-hidden divide-y divide-[#381B19]/70">
                <button
                  onClick={() => handleNavClick('work')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#251110] border border-[#572A26] text-[#D68379] flex items-center justify-center shrink-0 group-hover:border-[#D68379] transition-colors">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#fff8f0] group-hover:text-[#D68379] transition-colors block">
                        {t('nav_work')}
                      </span>
                      <span className="text-xs text-rose-300/60">
                        Interactive platforms, custom tools & SaaS interfaces
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-rose-300/40 group-hover:text-[#D68379] group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => handleNavClick('graphic-design')}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#251110] border border-[#572A26] text-amber-400 flex items-center justify-center shrink-0 group-hover:border-amber-400 transition-colors">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#fff8f0] group-hover:text-amber-400 transition-colors block">
                        {t('nav_graphic')}
                      </span>
                      <span className="text-xs text-rose-300/60">
                        Visual identities, brand guides, packaging & social ads
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-rose-300/40 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                </button>
              </div>

              {/* Group 2: Capabilities, Skills & Process */}
              <div className="bg-[#1B0C0B]/90 backdrop-blur-xl rounded-2xl shadow-xl border border-[#381B19] overflow-hidden divide-y divide-[#381B19]/70">
                <button
                  onClick={() => handleNavClick('services')}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#251110] border border-[#572A26] text-purple-400 flex items-center justify-center shrink-0 group-hover:border-purple-400 transition-colors">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-rose-100 group-hover:text-purple-300 transition-colors">
                      {t('nav_services')}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rose-300/40 group-hover:text-purple-300 group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={() => handleNavClick('skills')}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#251110] border border-[#572A26] text-blue-400 flex items-center justify-center shrink-0 group-hover:border-blue-400 transition-colors">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-rose-100 group-hover:text-blue-300 transition-colors">
                      {t('nav_skills')}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rose-300/40 group-hover:text-blue-300 group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={() => handleNavClick('process')}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#251110] border border-[#572A26] text-emerald-400 flex items-center justify-center shrink-0 group-hover:border-emerald-400 transition-colors">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-rose-100 group-hover:text-emerald-300 transition-colors">
                      {t('nav_process')}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rose-300/40 group-hover:text-emerald-300 group-hover:translate-x-0.5 transition-all" />
                </button>

                <button
                  onClick={() => handleNavClick('about')}
                  className="w-full px-5 py-3.5 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-[#251110] border border-[#572A26] text-orange-400 flex items-center justify-center shrink-0 group-hover:border-orange-400 transition-colors">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-rose-100 group-hover:text-orange-300 transition-colors">
                      {t('nav_about')}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rose-300/40 group-hover:text-orange-300 group-hover:translate-x-0.5 transition-all" />
                </button>
              </div>

              {/* Group 3: Direct Contact & Hiring */}
              <div className="bg-[#1B0C0B]/90 backdrop-blur-xl rounded-2xl shadow-xl border border-[#381B19] overflow-hidden divide-y divide-[#381B19]/70">
                <a
                  href="tel:0652297244"
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#251110] border border-[#572A26] text-[#D68379] flex items-center justify-center shrink-0 shadow-md group-hover:border-[#D68379] transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#fff8f0] block group-hover:text-[#D68379] transition-colors">
                        Call 0652297244
                      </span>
                      <span className="text-xs text-rose-300/60 font-mono">
                        Direct Phone Line & SMS
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#251110] text-[#D68379] border border-[#572A26] text-xs font-mono font-semibold">
                    Direct Call
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 flex items-center justify-center shrink-0 group-hover:border-emerald-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#fff8f0] block group-hover:text-emerald-400 transition-colors">
                        WhatsApp Chat
                      </span>
                      <span className="text-xs text-rose-300/60 font-mono">
                        Instant Message & Media
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-rose-300/40 group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-[#251110]/90 transition-colors group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#251110] border border-[#572A26] text-rose-200 flex items-center justify-center shrink-0 group-hover:border-[#D68379] transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-[#fff8f0] block group-hover:text-[#D68379] transition-colors">
                        {PERSONAL_INFO.email}
                      </span>
                      <span className="text-xs text-rose-300/60 font-mono">
                        Formal Project Proposals
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-rose-300/40 group-hover:text-[#D68379] transition-colors" />
                </a>
              </div>

              {/* Bottom Quick Return Button */}
              <div className="pt-2 pb-8 text-center">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#251110] hover:bg-[#381B19] border border-[#572A26] hover:border-[#D68379] text-rose-100 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  {t('nav_back_portfolio')}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

