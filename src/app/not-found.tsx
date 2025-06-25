'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HomeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-8xl font-bold gradient-text mb-4">404</div>
          <div className="text-6xl mb-4">🔍</div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            الصفحة غير موجودة
          </h1>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            عذراً، لا يمكن العثور على الصفحة التي تبحث عنها. 
            ربما تم نقلها أو حذفها أو أن الرابط غير صحيح.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-4"
        >
          <Link
            href="/"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-blue-600 to-green-400 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
          >
            <HomeIcon className="h-5 w-5" />
            <span>العودة للرئيسية</span>
          </Link>
          
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              <span>العودة للصفحة السابقة</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold mb-4">روابط مفيدة</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <Link
              href="/#about"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              نبذة عني
            </Link>
            <Link
              href="/#projects"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              أعمالي
            </Link>
            <Link
              href="/#services"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              خدماتي
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              المدونة
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-green-500/5 rounded-full blur-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
