import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
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
  Mail,
  MessageCircle,
  Heart,
  ExternalLink,
  MapPin,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
    { name: 'Home', id: 'home', icon: Home, num: '01', desc: 'Landing overview & highlights' },
    { name: 'Web Development', id: 'work', icon: Code, num: '02', desc: 'Interactive platforms & client case studies' },
    { name: 'Graphic Design', id: 'graphic-design', icon: Palette, num: '03', desc: 'Branding charters, logos & ads' },
    { name: 'Capabilities', id: 'services', icon: Sparkles, num: '04', desc: 'End-to-end design & engineering' },
    { name: 'Skills & Stack', id: 'skills', icon: Layers, num: '05', desc: 'Software proficiencies & frameworks' },
    { name: 'Work Process', id: 'process', icon: Compass, num: '06', desc: 'From discovery to production launch' },
    { name: 'About Me', id: 'about', icon: User, num: '07', desc: 'Background & creative journey' },
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
          <div className="flex items-center gap-2.5">
            {/* Contact Me Button */}
            <a
              href="tel:0652297244"
              className="hidden xs:inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#B85C52] to-[#D68379] hover:from-[#D68379] hover:to-[#EBB5AF] text-[#150B0A] font-display font-bold text-xs shadow-md shadow-rose-950/40 transition-all hover:scale-105 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact</span>
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
                {menuOpen ? 'Close' : 'Menu'}
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
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 text-[11px] font-mono font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Available For Full-Time Role</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#251110] text-rose-200/80 border border-[#572A26] text-[11px] font-mono">
                    <MapPin className="w-3 h-3 text-[#D68379]" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
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
                        Web Development
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
                        Graphic Design & Branding
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
                      Capabilities & Services
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
                      Skills & Tech Stack
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
                      Work Process & Methodology
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
                      About Me & Journey
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
                  Back to Portfolio
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

