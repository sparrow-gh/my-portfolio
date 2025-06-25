'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import Toast from './Toast';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'البريد الإلكتروني',
      value: 'your-email@example.com',
      link: 'mailto:your-email@example.com'
    },
    {
      icon: PhoneIcon,
      title: 'رقم الهاتف',
      value: '+966 50 123 4567',
      link: 'tel:+966501234567'
    },
    {
      icon: MapPinIcon,
      title: 'الموقع',
      value: 'الرياض، المملكة العربية السعودية',
      link: '#'
    }
  ];

  const showToastMessage = (message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        showToastMessage('🎉 تم إرسال رسالتك بنجاح! سأقوم بالرد عليك قريباً.', 'success');
        reset();
      } else {
        showToastMessage(result.error || '❌ حدث خطأ أثناء إرسال الرسالة', 'error');
      }
    } catch (error) {
      showToastMessage('❌ حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
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
              تواصل <span className="gradient-text">معي</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              هل لديك مشروع في ذهنك؟ أو تريد مناقشة فكرة؟ لا تتردد في التواصل معي
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  أحب سماع أفكارك ومناقشة كيف يمكنني مساعدتك في تحقيق أهدافك الرقمية. 
                  تواصل معي عبر أي من الطرق التالية وسأقوم بالرد عليك في أقرب وقت ممكن.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8"
                >
                  <h4 className="font-semibold mb-4">تابعني على</h4>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    {[
                      { name: 'LinkedIn', icon: '💼', href: '#' },
                      { name: 'GitHub', icon: '🔗', href: '#' },
                      { name: 'Twitter', icon: '🐦', href: '#' },
                      { name: 'Instagram', icon: '📷', href: '#' },
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 text-xl"
                        title={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">أرسل رسالة</h3>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <p className="text-green-700 dark:text-green-300">{submitMessage}</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <ExclamationCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <p className="text-red-700 dark:text-red-300">{submitMessage}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الاسم *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'الاسم مطلوب' })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="اسمك الكامل"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'البريد الإلكتروني مطلوب',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'البريد الإلكتروني غير صحيح'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="+966 50 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الشركة
                    </label>
                    <input
                      type="text"
                      {...register('company')}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                      placeholder="اسم الشركة (اختياري)"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الموضوع *
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: 'الموضوع مطلوب' })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="موضوع الرسالة"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    الرسالة *
                  </label>
                  <textarea
                    rows={5}
                    {...register('message', { required: 'الرسالة مطلوبة' })}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-400 hover:from-blue-700 hover:to-green-500 shadow-lg hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-5 w-5" />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
