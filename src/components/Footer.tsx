import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Clock, MapPin, Sparkles, FileText, Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [casablancaTime, setCasablancaTime] = useState<string>('');
  const [currentMonthYear, setCurrentMonthYear] = useState<string>('August 2026');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);

      const formattedMonthYear = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Casablanca',
        month: 'long',
        year: 'numeric',
      }).format(now);

      setCasablancaTime(formattedTime);
      setCurrentMonthYear(formattedMonthYear);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleNav = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  return (
    <footer className="bg-[#150B0A] text-[#fff8f0] border-t border-[#381B19] py-8 z-10 relative font-display text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-rose-300/60 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-serif font-bold text-[#fff8f0] text-sm tracking-tight">
            MESROUR SALAH EDDINE
          </span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <button
          onClick={handleScrollToTop}
          className="group p-2.5 rounded-full bg-[#251110] border border-[#572A26] text-rose-100 hover:border-[#D68379] hover:text-[#D68379] transition-all flex items-center justify-center shadow-md"
          aria-label="Back to top"
          data-cursor="TOP"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

