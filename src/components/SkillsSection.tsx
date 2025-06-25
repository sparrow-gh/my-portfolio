'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '🔺' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'JavaScript', level: 94, icon: '💛' },
        { name: 'HTML/CSS', level: 96, icon: '🌐' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express.js', level: 82, icon: '🚀' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'REST APIs', level: 88, icon: '🔗' },
        { name: 'GraphQL', level: 70, icon: '📊' },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '🐙' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Figma', level: 85, icon: '🎯' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Postman', level: 88, icon: '📮' },
      ]
    },
    {
      title: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 92, icon: '🧩' },
        { name: 'Team Work', level: 88, icon: '👥' },
        { name: 'Communication', level: 85, icon: '💬' },
        { name: 'Time Management', level: 90, icon: '⏰' },
        { name: 'Leadership', level: 80, icon: '👑' },
        { name: 'Creativity', level: 87, icon: '💡' },
      ]
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10">
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
              مهاراتي <span className="gradient-text">التقنية</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              خبرة واسعة في أحدث التقنيات والأدوات المستخدمة في تطوير الويب
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                          <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                            {skill.icon}
                          </span>
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="bg-gradient-to-r from-blue-500 to-green-400 h-2 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-300 opacity-50 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                التعلم المستمر
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                أؤمن بأهمية التطوير المستمر والتعلم الدائم في مجال التكنولوجيا. 
                أتابع أحدث التطورات والتقنيات الجديدة وأطبقها في مشاريعي لضمان تقديم 
                أفضل الحلول العصرية والمبتكرة.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {[
                  { label: 'سنوات الخبرة', value: '3+', icon: '📅' },
                  { label: 'تقنية متقنة', value: '20+', icon: '⚡' },
                  { label: 'مشروع مكتمل', value: '50+', icon: '🚀' },
                  { label: 'عميل راضي', value: '30+', icon: '😊' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
