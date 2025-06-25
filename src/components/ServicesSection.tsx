'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const ServicesSection = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: 'تطوير مواقع الويب',
      description: 'تطوير مواقع ويب حديثة وسريعة باستخدام أحدث التقنيات مثل React و Next.js',
      features: ['تصميم متجاوب', 'أداء عالي', 'SEO محسن', 'أمان متقدم'],
      price: 'يبدأ من 2000 ريال',
      popular: true
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'تطوير تطبيقات الموبايل',
      description: 'تطبيقات موبايل أصلية ومتعددة المنصات لنظامي iOS و Android',
      features: ['تطبيقات أصلية', 'React Native', 'واجهة سهلة', 'تحديثات مستمرة'],
      price: 'يبدأ من 5000 ريال',
      popular: false
    },
    {
      icon: PaintBrushIcon,
      title: 'تصميم UI/UX',
      description: 'تصميم واجهات مستخدم جذابة وتجربة مستخدم استثنائية',
      features: ['تصميم عصري', 'تجربة سلسة', 'اختبار المستخدمين', 'نماذج تفاعلية'],
      price: 'يبدأ من 1500 ريال',
      popular: false
    },
    {
      icon: CloudIcon,
      title: 'الحلول السحابية',
      description: 'نشر وإدارة التطبيقات على المنصات السحابية مع ضمان الأمان والأداء',
      features: ['AWS/Azure', 'نشر آمن', 'مراقبة مستمرة', 'نسخ احتياطية'],
      price: 'يبدأ من 1000 ريال',
      popular: false
    },
    {
      icon: CogIcon,
      title: 'صيانة وتطوير',
      description: 'صيانة دورية وتطوير مستمر للمواقع والتطبيقات الموجودة',
      features: ['صيانة شهرية', 'تحديثات أمنية', 'تحسين الأداء', 'دعم فني'],
      price: 'يبدأ من 500 ريال/شهر',
      popular: false
    },
    {
      icon: ChartBarIcon,
      title: 'استشارات تقنية',
      description: 'استشارات متخصصة في اختيار التقنيات المناسبة وتخطيط المشاريع',
      features: ['تحليل المتطلبات', 'اختيار التقنيات', 'تخطيط المشروع', 'إدارة الفريق'],
      price: 'يبدأ من 300 ريال/ساعة',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
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
              خدماتي <span className="gradient-text">المتخصصة</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              أقدم مجموعة شاملة من الخدمات التقنية لتلبية جميع احتياجاتك الرقمية
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className={`relative group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-green-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      الأكثر طلباً ⭐
                    </div>
                  </div>
                )}

                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-400 rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-2xl font-bold gradient-text">
                    {service.price}
                  </span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    service.popular
                      ? 'bg-gradient-to-r from-blue-600 to-green-400 text-white shadow-lg hover:shadow-xl'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
                  }`}
                >
                  طلب الخدمة
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                كيف <span className="gradient-text">أعمل</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                عملية واضحة ومنظمة لضمان تسليم مشروعك في الوقت المحدد وبأعلى جودة
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'التشاور', description: 'مناقشة المتطلبات والأهداف', icon: '💬' },
                { step: '02', title: 'التخطيط', description: 'وضع خطة مفصلة للمشروع', icon: '📋' },
                { step: '03', title: 'التطوير', description: 'تنفيذ المشروع بأعلى جودة', icon: '⚡' },
                { step: '04', title: 'التسليم', description: 'تسليم المشروع والدعم المستمر', icon: '🚀' }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {/* Connection Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-400 opacity-30 z-0"></div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                      {process.icon}
                    </div>
                    <div className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-2">
                      {process.step}
                    </div>
                    <h4 className="text-lg font-bold mb-2">{process.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              جاهز لبدء مشروعك؟
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              تواصل معي اليوم للحصول على استشارة مجانية ومناقشة كيف يمكنني مساعدتك في تحقيق أهدافك الرقمية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                احصل على استشارة مجانية
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                عرض أعمالي السابقة
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
