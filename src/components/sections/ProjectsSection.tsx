'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

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

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'ai', name: 'AI/ML' },
    { id: 'mobile', name: 'Mobile' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Analytics Dashboard',
      description: 'A comprehensive dashboard for analyzing e-commerce data with real-time insights, customer behavior tracking, and sales forecasting using machine learning algorithms.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Chart.js'],
      category: 'data-science',
      status: 'completed',
      date: '2024',
      githubUrl: 'https://github.com/pleasant-junior/ecommerce-dashboard',
      demoUrl: 'https://ecommerce-dashboard-demo.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'AI-Powered Study Assistant',
      description: 'An intelligent study companion that uses natural language processing to create personalized study plans, generate practice questions, and track learning progress.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'MongoDB', 'Tailwind CSS'],
      category: 'ai',
      status: 'in-progress',
      date: '2024',
      githubUrl: 'https://github.com/pleasant-junior/ai-study-assistant',
      demoUrl: 'https://ai-study-assistant.vercel.app',
      featured: true,
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, featuring dark mode, smooth animations, and a clean, professional design.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'web',
      status: 'completed',
      date: '2024',
      githubUrl: 'https://github.com/pleasant-junior/portfolio',
      demoUrl: 'https://pleasant-junior.vercel.app',
      featured: true,
    },
    {
      id: 4,
      title: 'Weather Prediction Model',
      description: 'Machine learning model for weather prediction using historical data, featuring data preprocessing, model training, and accuracy visualization.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
      category: 'data-science',
      status: 'completed',
      date: '2023',
      githubUrl: 'https://github.com/pleasant-junior/weather-prediction',
      demoUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: 'Task Management Mobile App',
      description: 'A cross-platform mobile application for task management with real-time synchronization, team collaboration features, and offline support.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      category: 'mobile',
      status: 'completed',
      date: '2023',
      githubUrl: 'https://github.com/pleasant-junior/task-manager-app',
      demoUrl: null,
      featured: false,
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      description: 'A secure, transparent voting system built on blockchain technology, ensuring vote integrity and providing real-time results.',
      image: '/api/placeholder/600/400',
      technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum'],
      category: 'web',
      status: 'in-progress',
      date: '2024',
      githubUrl: 'https://github.com/pleasant-junior/blockchain-voting',
      demoUrl: null,
      featured: false,
    },
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A showcase of my best work, demonstrating my skills in web development, 
            data science, and artificial intelligence
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => {
            const colors = [
              { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-100', dot: 'bg-blue-600', hover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400', accent: 'text-blue-600' },
              { bg: 'from-green-50 to-emerald-50', border: 'border-green-100', dot: 'bg-green-600', hover: 'group-hover:text-green-600 dark:group-hover:text-green-400', accent: 'text-green-600' },
              { bg: 'from-purple-50 to-violet-50', border: 'border-purple-100', dot: 'bg-purple-600', hover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400', accent: 'text-purple-600' },
              { bg: 'from-orange-50 to-red-50', border: 'border-orange-100', dot: 'bg-orange-600', hover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400', accent: 'text-orange-600' }
            ];
            const colorScheme = colors[index % colors.length];
            
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`group bg-gradient-to-br ${colorScheme.bg} dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${colorScheme.border} dark:border-gray-700 overflow-hidden`}
              >
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className={`w-2 h-2 ${colorScheme.dot} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${colorScheme.hover} transition-colors duration-300 leading-tight`}>
                          {project.title}
                        </h3>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.date}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-base font-medium break-words hyphens-auto">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold border border-gray-200 dark:border-gray-600 break-words"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 border border-gray-200 dark:border-gray-600 font-semibold`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-2 ${colorScheme.accent} text-white rounded-lg hover:opacity-90 transition-opacity duration-200 font-semibold`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* All Projects with Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-8 tracking-tight"
          >
            All Projects
          </motion.h3>
          
          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => {
              const colors = [
                { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-100', dot: 'bg-blue-600', hover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400', accent: 'text-blue-600' },
                { bg: 'from-green-50 to-emerald-50', border: 'border-green-100', dot: 'bg-green-600', hover: 'group-hover:text-green-600 dark:group-hover:text-green-400', accent: 'text-green-600' },
                { bg: 'from-purple-50 to-violet-50', border: 'border-purple-100', dot: 'bg-purple-600', hover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400', accent: 'text-purple-600' },
                { bg: 'from-orange-50 to-red-50', border: 'border-orange-100', dot: 'bg-orange-600', hover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400', accent: 'text-orange-600' },
                { bg: 'from-pink-50 to-rose-50', border: 'border-pink-100', dot: 'bg-pink-600', hover: 'group-hover:text-pink-600 dark:group-hover:text-pink-400', accent: 'text-pink-600' },
                { bg: 'from-cyan-50 to-teal-50', border: 'border-cyan-100', dot: 'bg-cyan-600', hover: 'group-hover:text-cyan-600 dark:group-hover:text-cyan-400', accent: 'text-cyan-600' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`group bg-gradient-to-br ${colorScheme.bg} dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border ${colorScheme.border} dark:border-gray-700 overflow-hidden`}
                >
                  <div className="relative h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20"></div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'completed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {project.status === 'completed' ? 'Done' : 'In Progress'}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 flex space-x-1">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-white/20 backdrop-blur-sm rounded hover:bg-white/30 transition-colors duration-200"
                        >
                          <Github className="h-3 w-3 text-gray-700 dark:text-gray-300" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-white/20 backdrop-blur-sm rounded hover:bg-white/30 transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3 text-gray-700 dark:text-gray-300" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start space-x-2 mb-3">
                      <div className={`w-1.5 h-1.5 ${colorScheme.dot} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`text-lg font-bold text-gray-900 dark:text-white ${colorScheme.hover} transition-colors duration-300 leading-tight break-words`}>
                            {project.title}
                          </h4>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs font-medium">
                            <Calendar className="h-3 w-3 mr-1" />
                            {project.date}
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed font-medium break-words hyphens-auto">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold border border-gray-200 dark:border-gray-600 break-words"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold border border-gray-200 dark:border-gray-600">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 border border-gray-200 dark:border-gray-600 font-semibold"
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center px-3 py-1.5 ${colorScheme.accent} text-white rounded text-sm hover:opacity-90 transition-opacity duration-200 font-semibold`}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
