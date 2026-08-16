import React, { createContext, useContext, useEffect, useState } from 'react';
import { DICTIONARY } from '../data/translations';

export type Language = 'en' | 'fr' | 'ar';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  badge: string;
}

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', badge: 'EN' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', badge: 'FR' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', badge: 'AR' },
];

export const translations = DICTIONARY;

export type TranslationKey = keyof typeof DICTIONARY.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-language') as Language | null;
      if (saved && (saved === 'en' || saved === 'fr' || saved === 'ar')) {
        return saved;
      }
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    const htmlEl = document.documentElement;
    htmlEl.lang = language;
    if (language === 'ar') {
      htmlEl.dir = 'rtl';
      htmlEl.classList.add('lang-ar');
    } else {
      htmlEl.dir = 'ltr';
      htmlEl.classList.remove('lang-ar');
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const currentDict = (DICTIONARY as Record<string, Record<string, string>>)[language] || DICTIONARY.en;
    return currentDict[key] || (DICTIONARY.en as Record<string, string>)[key] || key;
  };

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
