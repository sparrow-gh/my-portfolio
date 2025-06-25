'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Locale } from '@/locales';

interface TranslationContextType {
  locale: Locale;
  t: typeof translations.ar.common;
  changeLanguage: (newLocale: Locale) => void;
  isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('ar');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Get locale from localStorage or default to 'ar'
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'ar' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      // Update document direction and language
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = locale;
      
      // Update font family based on language
      const fontClass = locale === 'ar' ? 'font-cairo' : 'font-inter';
      document.body.className = document.body.className.replace(/font-\w+/, fontClass);
    }
  }, [locale, isClient]);

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    if (isClient) {
      localStorage.setItem('locale', newLocale);
    }
  };

  const value: TranslationContextType = {
    locale,
    t: translations[locale].common,
    changeLanguage,
    isRTL: locale === 'ar',
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
