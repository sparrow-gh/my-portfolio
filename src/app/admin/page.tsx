'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  DocumentTextIcon,
  FolderIcon,
  EnvelopeIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

interface DashboardStats {
  totalProjects: number;
  totalPosts: number;
  totalContacts: number;
  newContacts: number;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState<DashboardStats>({
    totalProjects: 0,
    totalPosts: 0,
    totalContacts: 0,
    newContacts: 0
  });

  const tabs = [
    { id: 'dashboard', name: 'لوحة التحكم', icon: ChartBarIcon },
    { id: 'projects', name: 'المشاريع', icon: FolderIcon },
    { id: 'blog', name: 'المدونة', icon: DocumentTextIcon },
    { id: 'contacts', name: 'الرسائل', icon: EnvelopeIcon },
  ];

  useEffect(() => {
    // Simulate fetching stats
    setStats({
      totalProjects: 12,
      totalPosts: 8,
      totalContacts: 25,
      newContacts: 3
    });
  }, []);

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-full ${color.replace('border-l-', 'bg-').replace('-500', '-100')} dark:bg-opacity-20`}>
          <Icon className={`h-8 w-8 ${color.replace('border-l-', 'text-')}`} />
        </div>
      </div>
    </motion.div>
  );

  const DashboardContent = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="إجمالي المشاريع"
          value={stats.totalProjects}
          icon={FolderIcon}
          color="border-l-blue-500"
        />
        <StatCard
          title="مقالات المدونة"
          value={stats.totalPosts}
          icon={DocumentTextIcon}
          color="border-l-green-500"
        />
        <StatCard
          title="إجمالي الرسائل"
          value={stats.totalContacts}
          icon={EnvelopeIcon}
          color="border-l-purple-500"
        />
        <StatCard
          title="رسائل جديدة"
          value={stats.newContacts}
          icon={EnvelopeIcon}
          color="border-l-red-500"
        />
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-semibold mb-4">إجراءات سريعة</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
          >
            <PlusIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="font-medium">إضافة مشروع جديد</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors duration-200"
          >
            <PlusIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
            <span className="font-medium">كتابة مقال جديد</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 rtl:space-x-reverse p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors duration-200"
          >
            <EyeIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            <span className="font-medium">مراجعة الرسائل</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
      >
        <h3 className="text-lg font-semibold mb-4">النشاط الأخير</h3>
        <div className="space-y-4">
          {[
            { action: 'تم إضافة مشروع جديد', time: 'منذ ساعتين', type: 'project' },
            { action: 'رسالة جديدة من أحمد محمد', time: 'منذ 3 ساعات', type: 'contact' },
            { action: 'تم نشر مقال جديد', time: 'منذ يوم واحد', type: 'blog' },
            { action: 'تم تحديث معلومات المشروع', time: 'منذ يومين', type: 'project' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'project' ? 'bg-blue-500' :
                activity.type === 'contact' ? 'bg-red-500' : 'bg-green-500'
              }`}></div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  const ProjectsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">إدارة المشاريع</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary flex items-center space-x-2 rtl:space-x-reverse"
        >
          <PlusIcon className="h-5 w-5" />
          <span>إضافة مشروع</span>
        </motion.button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-right py-3 px-4">العنوان</th>
              <th className="text-right py-3 px-4">التصنيف</th>
              <th className="text-right py-3 px-4">التاريخ</th>
              <th className="text-right py-3 px-4">الحالة</th>
              <th className="text-right py-3 px-4">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {[
              { title: 'متجر إلكتروني', category: 'ويب', date: '2024-01-15', featured: true },
              { title: 'تطبيق موبايل', category: 'موبايل', date: '2024-01-10', featured: false },
              { title: 'نظام إدارة', category: 'ويب', date: '2024-01-05', featured: true },
            ].map((project, index) => (
              <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                <td className="py-3 px-4 font-medium">{project.title}</td>
                <td className="py-3 px-4">{project.category}</td>
                <td className="py-3 px-4">{project.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.featured 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {project.featured ? 'مميز' : 'عادي'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2 rtl:space-x-reverse">
                    <button className="p-1 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30 rounded">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    <button className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  const BlogContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">إدارة المدونة</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary flex items-center space-x-2 rtl:space-x-reverse"
        >
          <PlusIcon className="h-5 w-5" />
          <span>مقال جديد</span>
        </motion.button>
      </div>
      
      <div className="space-y-4">
        {[
          { title: 'أفضل الممارسات في React', status: 'منشور', date: '2024-01-15' },
          { title: 'مقدمة في Next.js 14', status: 'مسودة', date: '2024-01-10' },
          { title: 'تحسين أداء المواقع', status: 'منشور', date: '2024-01-05' },
        ].map((post, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div>
              <h4 className="font-medium">{post.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className={`px-2 py-1 rounded-full text-xs ${
                post.status === 'منشور'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
              }`}>
                {post.status}
              </span>
              <div className="flex space-x-1 rtl:space-x-reverse">
                <button className="p-1 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded">
                  <EyeIcon className="h-4 w-4" />
                </button>
                <button className="p-1 text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30 rounded">
                  <PencilIcon className="h-4 w-4" />
                </button>
                <button className="p-1 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const ContactsContent = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-6">الرسائل الواردة</h3>
      
      <div className="space-y-4">
        {[
          { name: 'أحمد محمد', email: 'ahmed@example.com', subject: 'استفسار عن الخدمات', status: 'جديد', date: '2024-01-15' },
          { name: 'فاطمة علي', email: 'fatima@example.com', subject: 'طلب عرض سعر', status: 'مقروء', date: '2024-01-14' },
          { name: 'محمد سالم', email: 'mohammed@example.com', subject: 'تعاون في مشروع', status: 'تم الرد', date: '2024-01-13' },
        ].map((contact, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex-1">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-1">
                <h4 className="font-medium">{contact.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  contact.status === 'جديد' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' :
                  contact.status === 'مقروء' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' :
                  'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                }`}>
                  {contact.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{contact.subject}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{contact.email} • {contact.date}</p>
            </div>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <button className="p-2 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded">
                <EyeIcon className="h-4 w-4" />
              </button>
              <button className="p-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30 rounded">
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'blog':
        return <BlogContent />;
      case 'contacts':
        return <ContactsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">لوحة التحكم</h1>
            <p className="text-gray-600 dark:text-gray-300">إدارة المحتوى والمشاريع</p>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-1 rtl:space-x-reverse bg-white dark:bg-gray-800 rounded-xl p-1 mb-8 shadow-lg"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 rtl:space-x-reverse px-4 py-3 rounded-lg font-medium transition-all duration-200 flex-1 justify-center ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-green-400 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
