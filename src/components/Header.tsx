'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  SunIcon, 
  MoonIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'الرئيسية', href: '#home', isInternal: true },
    { name: 'نبذة عني', href: '#about', isInternal: true },
    { name: 'المهارات', href: '#skills', isInternal: true },
    { name: 'الأعمال', href: '#projects', isInternal: true },
    { name: 'الخدمات', href: '#services', isInternal: true },
    { name: 'المدونة', href: '/blog', isInternal: false },
    { name: 'تواصل معي', href: '#contact', isInternal: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isInternal: boolean) => {
    if (isInternal) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home', true);
              }}
              className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              Portfolio
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, item.isInternal);
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="relative p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-yellow-400 dark:to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5 group-hover:animate-spin" />
                ) : (
                  <MoonIcon className="h-5 w-5 group-hover:animate-pulse" />
                )}
              </motion.div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30"
                style={{
                  background: theme === 'dark'
                    ? 'radial-gradient(circle, rgba(255,255,0,0.5) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, transparent 70%)'
                }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.isInternal);
                    }}
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200 font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
