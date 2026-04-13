'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Code, Database, Monitor, TrendingUp, ExternalLink, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function BestworldsITPage() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const project = {
    id: 1,
    title: "Bestworlds IT Solutions",
    subtitle: "Enterprise IT Solutions Website",
    description: "A comprehensive enterprise IT solutions website showcasing services, client partnerships, and cutting-edge technology solutions. Built with modern frontend technologies delivering exceptional user experience and performance.",
    websiteUrl: "https://best-world-solution-b26s.vercel.app/",
    backgroundImage: "/placeholder-bestworlds.jpg",
    technologies: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Django Backend", "Vercel"
    ],
    role: "Frontend Developer",
    duration: "3 months",
    status: "Live",
    category: "Enterprise Website",
    features: [
      "Responsive design across all devices",
      "Modern UI/UX with smooth animations",
      "Service showcase and portfolio",
      "Client partnership integration",
      "Optimized performance with Next.js",
      "SEO-friendly architecture"
    ]
  };

  const techIcons = {
    'Next.js': Code,
    'React': Zap,
    'TypeScript': Code,
    'Tailwind CSS': TrendingUp,
    'Django Backend': Database,
    'Vercel': Globe
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 font-semibold group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold mb-6">
                <Monitor className="h-4 w-4" />
                Featured Project • Live
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
                {project.title}
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8 leading-relaxed max-w-3xl">
                {project.description}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-sm">
                  {project.status}
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-xl font-bold text-sm">
                  {project.role}
                </span>
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-extrabold hover:scale-105 transition-transform shadow-xl"
                >
                  <ExternalLink className="h-5 w-5" />
                  Visit Live Site
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Code, label: 'Frontend', value: 'Next.js + React', color: 'from-blue-500 to-cyan-500' },
              { icon: Database, label: 'Backend', value: 'Django', color: 'from-green-500 to-emerald-500' },
              { icon: Globe, label: 'Deployment', value: 'Vercel', color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, label: 'Status', value: 'Live', color: 'from-orange-500 to-red-500' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-xl"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xl font-extrabold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Live Website Display */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Live Website Preview
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Experience the actual website in real-time. Browse through the different sections to see the implementation in action.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {!isIframeLoaded && (
              <div className="h-[600px] md:h-[800px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4" />
                  <p className="text-lg font-bold text-gray-600 dark:text-gray-400">Loading website...</p>
                </div>
              </div>
            )}
            <iframe
              src={project.websiteUrl}
              className="w-full h-[600px] md:h-[800px] border-0"
              style={{ overflow: 'hidden' }}
              scrolling="no"
              title="Bestworlds IT Solutions"
              onLoad={() => setIsIframeLoaded(true)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </motion.div>
        </section>

        {/* Technologies Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              Technologies Used
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12 max-w-3xl">
              Built with modern, industry-standard technologies to ensure performance, scalability, and maintainability.
            </p>

            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => {
                const Icon = techIcons[tech as keyof typeof techIcons] || Code;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="px-6 py-4 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 flex items-center gap-3 hover:border-blue-500 dark:hover:border-blue-400 transition-colors shadow-lg"
                  >
                    <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">
                      {tech}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-3xl">
              Modern features that enhance user experience and drive business results.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Project Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                Project Overview
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                This enterprise website serves as a comprehensive digital presence for Bestworlds IT Solutions, 
                showcasing their extensive range of IT services, client partnerships, and industry expertise. 
                The project emphasizes user experience, performance optimization, and modern web standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-extrabold mb-6 tracking-tight">
                  My Contribution
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg font-semibold">Frontend architecture and component design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg font-semibold">Responsive design implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg font-semibold">Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="text-lg font-semibold">Integration with Django backend</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Back to Projects Button */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-extrabold hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to All Projects</span>
            </Link>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
}

