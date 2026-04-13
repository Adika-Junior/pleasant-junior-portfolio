"use client";
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center mb-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Blog
              </h1>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Coming Soon - Insights, tutorials, and thoughts on technology
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl border border-gray-100 dark:border-gray-700 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Under Development
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I&apos;m currently working on creating valuable content about software development, 
                data science, and technology trends. Check back soon for:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Technical Tutorials
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Step-by-step guides on React, Python, and web development
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Project Insights
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Behind-the-scenes look at my development process
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Industry Thoughts
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    My perspective on technology trends and best practices
                  </p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Learning Journey
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Sharing my experiences as a computer science student
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:pleasantjunior7@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Notified
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
                {/* Use Next.js Link for internal navigation */}
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
