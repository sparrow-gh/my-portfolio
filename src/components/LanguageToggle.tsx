'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageIcon } from '@heroicons/react/24/outline';

const LanguageToggle = () => {
  const { locale, changeLanguage } = useTranslation();

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    changeLanguage(newLocale);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="relative p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
      title={locale === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
    >
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <LanguageIcon className="h-4 w-4" />
        <motion.span
          key={locale}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-sm font-medium min-w-[20px] text-center"
        >
          {locale === 'ar' ? 'EN' : 'عر'}
        </motion.span>
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, transparent 70%)'
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Click ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white opacity-0"
        animate={{ scale: [0, 1], opacity: [0.3, 0] }}
        transition={{ duration: 0.6 }}
        key={locale}
      />
    </motion.button>
  );
};

export default LanguageToggle;
