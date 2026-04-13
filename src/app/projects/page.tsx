'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Award, ChevronRight, Filter, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "Bestworlds IT Solutions",
      description: "Enterprise IT solutions website showcasing comprehensive services, client partnerships, and cutting-edge technology solutions. Built with Next.js, React, TypeScript, and Tailwind CSS, with Django backend integration. Currently deployed and live on Vercel.",
      image: "/placeholder-bestworlds.jpg",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Django Backend", "Vercel"],
      status: "Live",
      category: "Enterprise Website",
      href: "/projects/bestworlds-it-solutions",
      featured: true,
      year: "2024",
      role: "Frontend Developer"
    },
    {
      id: 2,
      title: "Eco Citizen",
      description: "A sustainability and environmental awareness concept that combines storytelling, data visualisation and citizen engagement around smart waste and green living.",
      image: "/images/project-portfolio.svg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Data Visualization"],
      status: "Concept",
      category: "Sustainability & Civic Tech",
      href: "#",
      featured: false,
      year: "2024"
    }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Minimalist Hero */}
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-4 tracking-wider uppercase">
                Portfolio
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-none">
                Selected<br />Work
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Innovative solutions addressing real-world challenges through technology, design, and collaborative problem-solving.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="sticky top-20 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Filter by</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedFilter(category)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                      selectedFilter === category
                        ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <AnimatePresence mode="wait">
          <motion.div
              key={selectedFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group relative"
                >
                  <div className="grid grid-cols-12 gap-8 items-center">
                    {/* Project Number */}
                    <div className="col-span-1">
                      <div className="text-6xl md:text-7xl font-extrabold text-gray-200 dark:text-gray-800 group-hover:text-blue-100 dark:group-hover:text-blue-900 transition-colors duration-300">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-11">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                          {project.image.includes('placeholder') ? (
                            <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 flex items-center justify-center">
                              <div className="text-center">
                                <FileText className="h-24 w-24 text-white/30 mx-auto mb-4" />
                                <p className="text-white/40 font-semibold">Coming Soon</p>
                              </div>
                            </div>
                          ) : (
                            <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </>
                          )}
                          
                          {/* Hover Overlay */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 flex items-center justify-center"
                          >
                            {project.href !== '#' ? (
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Link
                                  href={project.href}
                                  className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 rounded-2xl font-bold text-gray-900 dark:text-white shadow-2xl"
                                >
                                  <Eye className="h-5 w-5" />
                                  View Project
                                </Link>
                              </motion.div>
                            ) : (
                              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-900/90 rounded-2xl font-semibold text-gray-700 dark:text-gray-300">
                                <Award className="h-5 w-5" />
                                Coming Soon
                    </div>
                            )}
                          </motion.div>
                  </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold">
                              {project.year}
                            </span>
                            <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-bold">
                              {project.category}
                            </span>
                </div>

                          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h2>
                          
                          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>

                          {/* Technologies - Compact */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.technologies.slice(0, 6).map((tech, idx) => (
                          <span
                            key={idx}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                  </div>

                          {/* Action */}
                          {project.href !== '#' ? (
                    <Link
                      href={project.href}
                              className="inline-flex items-center gap-3 group/link text-gray-900 dark:text-white"
                    >
                              <span className="font-extrabold text-lg">View Case Study</span>
                              <ChevronRight className="h-6 w-6 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                          ) : (
                            <div className="inline-flex items-center gap-2 text-gray-500">
                              <Award className="h-5 w-5" />
                              <span className="font-semibold">Launching Soon</span>
                            </div>
                          )}
                        </div>
                      </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <FileText className="h-20 w-20 text-gray-300 dark:text-gray-700 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                No projects found
                </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try selecting a different category.
              </p>
            </motion.div>
          )}
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div className="text-center">
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3">{projects.length}</div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3">{projects.filter(p => p.featured).length}</div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3">{projects.filter(p => p.status === 'In Progress').length}</div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Active</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3">100%</div>
                <div className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Quality</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
