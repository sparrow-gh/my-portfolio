'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon,
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

interface Project {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'جميع المشاريع', icon: '🌟' },
    { id: 'web', name: 'مواقع ويب', icon: '🌐' },
    { id: 'mobile', name: 'تطبيقات موبايل', icon: '📱' },
    { id: 'desktop', name: 'تطبيقات سطح المكتب', icon: '💻' },
    { id: 'ai', name: 'ذكاء اصطناعي', icon: '🤖' },
  ];

  // Sample projects data (in real app, this would come from API)
  const sampleProjects: Project[] = [
    {
      _id: '1',
      title: 'متجر إلكتروني متكامل',
      description: 'منصة تجارة إلكترونية شاملة مع نظام دفع آمن وإدارة المخزون',
      technologies: ['React', 'Next.js', 'MongoDB', 'Stripe'],
      imageUrl: '/api/placeholder/400/300',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      category: 'web',
      featured: true
    },
    {
      _id: '2',
      title: 'تطبيق إدارة المهام',
      description: 'تطبيق ذكي لإدارة المهام والمشاريع مع واجهة مستخدم عصرية',
      technologies: ['React Native', 'Firebase', 'Redux'],
      imageUrl: '/api/placeholder/400/300',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      category: 'mobile',
      featured: true
    },
    {
      _id: '3',
      title: 'نظام إدارة المحتوى',
      description: 'نظام CMS مخصص لإدارة المحتوى والمقالات مع محرر نصوص متقدم',
      technologies: ['Vue.js', 'Node.js', 'PostgreSQL'],
      imageUrl: '/api/placeholder/400/300',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      category: 'web',
      featured: false
    },
    {
      _id: '4',
      title: 'مساعد ذكي بالذكاء الاصطناعي',
      description: 'مساعد ذكي يستخدم تقنيات الذكاء الاصطناعي لمساعدة المستخدمين',
      technologies: ['Python', 'TensorFlow', 'FastAPI'],
      imageUrl: '/api/placeholder/400/300',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      category: 'ai',
      featured: true
    },
    {
      _id: '5',
      title: 'تطبيق محاسبة شخصية',
      description: 'تطبيق سطح مكتب لإدارة الحسابات الشخصية والميزانية',
      technologies: ['Electron', 'React', 'SQLite'],
      imageUrl: '/api/placeholder/400/300',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      category: 'desktop',
      featured: false
    },
    {
      _id: '6',
      title: 'منصة التعلم الإلكتروني',
      description: 'منصة تعليمية تفاعلية مع نظام اختبارات وتتبع التقدم',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      imageUrl: '/api/placeholder/400/300',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example',
      category: 'web',
      featured: true
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchProjects = async () => {
      setLoading(true);
      // In real app: const response = await fetch('/api/projects');
      // const data = await response.json();
      
      // Simulate loading delay
      setTimeout(() => {
        setProjects(sampleProjects);
        setFilteredProjects(sampleProjects);
        setLoading(false);
      }, 1000);
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

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
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              معرض <span className="gradient-text">أعمالي</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              مجموعة من أفضل المشاريع التي قمت بتطويرها باستخدام أحدث التقنيات
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-400 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project._id}
                    variants={itemVariants}
                    layout
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 flex items-center justify-center">
                        <span className="text-4xl">🚀</span>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                        <div className="flex space-x-4 rtl:space-x-reverse opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {project.demoUrl && (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                              <EyeIcon className="h-5 w-5" />
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
                            >
                              <CodeBracketIcon className="h-5 w-5" />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                          مميز ⭐
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-sm">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-blue-600 to-green-400 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse"
                      >
                        <span>عرض التفاصيل</span>
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Load More Button */}
          {!loading && filteredProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                عرض المزيد من المشاريع
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
