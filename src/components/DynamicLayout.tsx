'use client';

import React, { useEffect } from 'react';
import { useTranslation } from '@/hooks/useTranslation';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

const DynamicLayout: React.FC<DynamicLayoutProps> = ({ children }) => {
  const { locale, isRTL } = useTranslation();

  useEffect(() => {
    // Update document direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    
    // Update font family based on language
    const fontClass = locale === 'ar' ? 'font-cairo' : 'font-inter';
    document.body.className = document.body.className.replace(/font-\w+/, fontClass);
  }, [locale, isRTL]);

  return <>{children}</>;
};

export default DynamicLayout;
