'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CalendarIcon,
  ClockIcon,
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  tags: string[];
  published: boolean;
  publishedAt?: string;
  readTime: number;
  createdAt: string;
  updatedAt: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Sample blog posts data
  const samplePosts: BlogPost[] = [
    {
      _id: '1',
      title: 'أفضل الممارسات في تطوير React',
      slug: 'react-best-practices',
      excerpt: 'تعرف على أهم النصائح والممارسات الجيدة لتطوير تطبيقات React فعالة وقابلة للصيانة',
      content: 'محتوى المقال...',
      imageUrl: '/api/placeholder/600/300',
      tags: ['React', 'JavaScript', 'Frontend'],
      published: true,
      publishedAt: '2024-01-15T10:00:00Z',
      readTime: 8,
      createdAt: '2024-01-15T10:00:00Z',
      updatedAt: '2024-01-15T10:00:00Z'
    },
    {
      _id: '2',
      title: 'مقدمة في Next.js 14',
      slug: 'nextjs-14-introduction',
      excerpt: 'استكشف الميزات الجديدة في Next.js 14 وكيفية الاستفادة منها في مشاريعك',
      content: 'محتوى المقال...',
      imageUrl: '/api/placeholder/600/300',
      tags: ['Next.js', 'React', 'SSR'],
      published: true,
      publishedAt: '2024-01-10T14:30:00Z',
      readTime: 12,
      createdAt: '2024-01-10T14:30:00Z',
      updatedAt: '2024-01-10T14:30:00Z'
    },
    {
      _id: '3',
      title: 'تحسين أداء المواقع الإلكترونية',
      slug: 'website-performance-optimization',
      excerpt: 'نصائح وتقنيات لتحسين سرعة وأداء مواقع الويب لتجربة مستخدم أفضل',
      content: 'محتوى المقال...',
      imageUrl: '/api/placeholder/600/300',
      tags: ['Performance', 'Web Development', 'SEO'],
      published: true,
      publishedAt: '2024-01-05T09:15:00Z',
      readTime: 10,
      createdAt: '2024-01-05T09:15:00Z',
      updatedAt: '2024-01-05T09:15:00Z'
    },
    {
      _id: '4',
      title: 'أساسيات TypeScript للمطورين',
      slug: 'typescript-basics',
      excerpt: 'دليل شامل لتعلم TypeScript من الصفر وكيفية استخدامه في مشاريع JavaScript',
      content: 'محتوى المقال...',
      imageUrl: '/api/placeholder/600/300',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      published: true,
      publishedAt: '2023-12-28T16:45:00Z',
      readTime: 15,
      createdAt: '2023-12-28T16:45:00Z',
      updatedAt: '2023-12-28T16:45:00Z'
    }
  ];

  const allTags = ['all', ...Array.from(new Set(samplePosts.flatMap(post => post.tags)))];

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      setLoading(true);
      // In real app: const response = await fetch('/api/blog?published=true');
      
      setTimeout(() => {
        setPosts(samplePosts);
        setLoading(false);
      }, 1000);
    };

    fetchPosts();
  }, []);

  const filteredPosts = selectedTag === 'all' 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">المدونة</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              مقالات ونصائح حول تطوير الويب والتقنيات الحديثة
            </p>
          </motion.div>

          {/* Tags Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-blue-600 to-green-400 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {tag === 'all' ? 'جميع المقالات' : tag}
              </motion.button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  {/* Post Image */}
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900 flex items-center justify-center">
                      <span className="text-4xl">📝</span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{formatDate(post.publishedAt || post.createdAt)}</span>
                      </div>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <ClockIcon className="h-4 w-4" />
                        <span>{post.readTime} دقائق</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center space-x-1 rtl:space-x-reverse px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                        >
                          <TagIcon className="h-3 w-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center space-x-2 rtl:space-x-reverse text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 group/link"
                    >
                      <span>اقرأ المزيد</span>
                      <ArrowRightIcon className="h-4 w-4 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* No Posts Message */}
          {!loading && filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-2">لا توجد مقالات</h3>
              <p className="text-gray-600 dark:text-gray-300">
                لم يتم العثور على مقالات في هذا التصنيف
              </p>
            </motion.div>
          )}

          {/* Load More Button */}
          {!loading && filteredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                تحميل المزيد من المقالات
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
