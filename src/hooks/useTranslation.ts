import { useState, useEffect } from 'react';
import { translations, type Locale, type TranslationKeys } from '@/locales';

export const useTranslation = () => {
  const [locale, setLocale] = useState<Locale>('ar');

  useEffect(() => {
    // Get locale from localStorage or default to 'ar'
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'ar' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  const t = translations[locale].common;

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return {
    t,
    locale,
    changeLanguage,
    isRTL: locale === 'ar',
  };
};
