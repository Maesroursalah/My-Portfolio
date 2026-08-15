import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { Menu, X, ArrowUpRight, Sparkles, FileText, ArrowLeft, Home, Briefcase, User, Layers, Mail, Phone, Code, Palette } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Web Development', id: 'work', icon: Code },
    { name: 'Graphic Design', id: 'graphic-design', icon: Palette },
    { name: 'Skills', id: 'skills', icon: Layers },
    { name: 'Capabilities', id: 'services', icon: Sparkles },
    { name: 'About', id: 'about', icon: User },
  ];

  const handleNavClick = (pageId: string) => {
    setMobileMenuOpen(false);
    setActivePage(pageId);
    window.location.hash = pageId === 'home' ? '' : `#${pageId}`;
    setTimeout(() => {
      const el = document.getElementById(pageId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    }, 50);
  };

  const handleBackClick = () => {
    handleNavClick('home');
  };

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('CV / Resume PDF generated for Mesrour Salah Eddine (Senior Product Designer & Frontend Engineer). Navigating to HR contact options.');
    handleNavClick('contact');
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
          {/* Brand Name & Back Button */}
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
            </button>
          </div>

          {/* Desktop Navigation Links - PC View */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#251110]/90 p-1.5 rounded-full border border-[#572A26] backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
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

          {/* Right CTA & Controls */}
          <div className="flex items-center gap-2">
            {/* Contact Me Button */}
            <a
              href="tel:0652297244"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#B85C52] to-[#D68379] hover:from-[#D68379] hover:to-[#EBB5AF] text-[#150B0A] font-display font-bold text-xs shadow-md shadow-rose-950/40 transition-all hover:scale-105 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#572A26] text-rose-200 bg-[#251110]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#1B0C0B]/98 border-b border-[#572A26] p-6 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200 text-[#fff8f0] z-50">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#381B19] text-xs font-display text-rose-300">
                <span>CASABLANCA, MOROCCO</span>
                <span className="text-[#D68379] font-bold">RECRUITMENT READY</span>
              </div>
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                const IconComponent = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left text-base font-display font-medium py-2.5 px-3.5 rounded-xl transition-all flex items-center gap-3 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#fff8f0] font-bold'
                        : 'text-rose-200 hover:text-[#D68379] hover:bg-[#251110]'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 text-[#D68379]" />
                    <span>{link.name}</span>
                  </button>
                );
              })}
              <div className="pt-4 border-t border-[#381B19] flex flex-col gap-3">
                <a
                  href="tel:0652297244"
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#B85C52] to-[#D68379] text-[#150B0A] font-display font-bold text-sm tracking-wider uppercase shadow-lg shadow-rose-950/60 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Me: 0652297244</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
