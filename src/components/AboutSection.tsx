'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  const features = [
    {
      icon: CodeBracketIcon,
      title: 'تطوير متقدم',
      description: 'خبرة في أحدث تقنيات الويب والبرمجة'
    },
    {
      icon: PaintBrushIcon,
      title: 'تصميم إبداعي',
      description: 'تصاميم عصرية وتجربة مستخدم استثنائية'
    },
    {
      icon: RocketLaunchIcon,
      title: 'أداء سريع',
      description: 'مواقع سريعة ومحسنة لمحركات البحث'
    },
    {
      icon: HeartIcon,
      title: 'شغف بالتميز',
      description: 'التزام بتقديم أفضل الحلول التقنية'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-gray-800/50 dark:via-blue-900/10 dark:to-green-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              نبذة <span className="gradient-text">عني</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              مطور ويب شغوف بإنشاء تجارب رقمية مميزة ومبتكرة
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image & Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Profile Image Placeholder */}
              <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl transform rotate-6"></div>
                <div className="relative w-full h-full bg-gray-200 dark:bg-gray-700 rounded-2xl flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">سنوات خبرة</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                >
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">مشروع مكتمل</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">مرحباً، أنا مطور ويب متخصص</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  أعمل في مجال تطوير الويب منذ أكثر من 3 سنوات، متخصص في إنشاء مواقع ويب 
                  وتطبيقات تفاعلية باستخدام أحدث التقنيات. أؤمن بأن التصميم الجيد والكود 
                  النظيف هما أساس أي مشروع ناجح.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  أحب التحديات التقنية وأسعى دائماً لتعلم التقنيات الجديدة وتطبيقها في 
                  مشاريعي. هدفي هو مساعدة العملاء على تحقيق رؤيتهم الرقمية بأفضل شكل ممكن.
                </p>
              </div>

              {/* Skills Progress */}
              <div className="space-y-4">
                {[
                  { skill: 'React & Next.js', percentage: 95 },
                  { skill: 'TypeScript', percentage: 90 },
                  { skill: 'Node.js', percentage: 85 },
                  { skill: 'UI/UX Design', percentage: 80 }
                ].map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{item.skill}</span>
                      <span className="text-sm text-gray-500">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="bg-gradient-to-r from-blue-600 to-green-400 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download CV Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2 rtl:space-x-reverse"
              >
                <span>تحميل السيرة الذاتية</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
