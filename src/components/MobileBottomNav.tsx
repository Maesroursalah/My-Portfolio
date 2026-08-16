import React from 'react';
import { Home, Briefcase, Wrench, User, Layers, Mail, FileText } from 'lucide-react';
import { useLanguage } from './LanguageContext';

interface MobileBottomNavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ activePage, setActivePage }) => {
  const { t } = useLanguage();

  const tabs = [
    { id: 'home', label: t('nav_home'), icon: Home },
    { id: 'work', label: t('nav_work'), icon: Briefcase },
    { id: 'services', label: t('nav_services'), icon: Wrench },
    { id: 'about', label: t('nav_about'), icon: User },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#150B0A]/95 backdrop-blur-xl border-t border-[#572A26] px-2 py-1.5 shadow-[0_-8px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activePage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActivePage(tab.id);
                window.location.hash = tab.id === 'home' ? '' : `#${tab.id}`;
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all min-w-[56px] min-h-[48px] ${
                isActive
                  ? 'text-[#fff8f0] bg-gradient-to-b from-[#B85C52] to-[#D68379] shadow-md shadow-rose-950/80 scale-105 font-bold'
                  : 'text-rose-200/70 hover:text-rose-100 hover:bg-[#251110]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#fff8f0]' : 'text-[#EBB5AF]/80'}`} />
              <span className="text-[10px] font-display uppercase tracking-tight mt-1">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
