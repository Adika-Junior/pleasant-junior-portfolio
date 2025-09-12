'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Code, 
  Database, 
  Brain, 
  Globe, 
  Smartphone, 
  Cloud,
  GitBranch,
  Shield,
  Zap,
  Layers
} from 'lucide-react';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('programming');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const categories = [
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'frameworks', name: 'Frameworks', icon: Globe },
    { id: 'tools', name: 'Tools', icon: Zap },
    { id: 'soft-skills', name: 'Soft Skills', icon: Brain },
  ];

  const skills = {
    programming: [
      { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
      { name: 'Python', level: 90, color: 'bg-blue-500' },
      { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
      { name: 'Java', level: 75, color: 'bg-red-500' },
      { name: 'C++', level: 70, color: 'bg-blue-700' },
      { name: 'SQL', level: 85, color: 'bg-orange-500' },
    ],
    frameworks: [
      { name: 'React', level: 88, color: 'bg-cyan-500' },
      { name: 'Next.js', level: 85, color: 'bg-gray-800' },
      { name: 'Node.js', level: 80, color: 'bg-green-500' },
      { name: 'Express.js', level: 75, color: 'bg-gray-600' },
      { name: 'Django', level: 70, color: 'bg-green-600' },
      { name: 'Flask', level: 65, color: 'bg-gray-500' },
    ],
    tools: [
      { name: 'Git', level: 90, color: 'bg-orange-600' },
      { name: 'Docker', level: 75, color: 'bg-blue-500' },
      { name: 'AWS', level: 70, color: 'bg-orange-500' },
      { name: 'MongoDB', level: 80, color: 'bg-green-500' },
      { name: 'PostgreSQL', level: 85, color: 'bg-blue-600' },
      { name: 'Figma', level: 75, color: 'bg-purple-500' },
    ],
    'soft-skills': [
      { name: 'Problem Solving', level: 95, color: 'bg-purple-500' },
      { name: 'Team Collaboration', level: 90, color: 'bg-green-500' },
      { name: 'Communication', level: 88, color: 'bg-blue-500' },
      { name: 'Leadership', level: 80, color: 'bg-red-500' },
      { name: 'Time Management', level: 85, color: 'bg-orange-500' },
      { name: 'Adaptability', level: 92, color: 'bg-indigo-500' },
    ],
  };

  const techStack = [
    { name: 'Frontend', icon: Globe, technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Database, technologies: ['Node.js', 'Python', 'Express.js', 'Django'] },
    { name: 'Mobile', icon: Smartphone, technologies: ['React Native', 'Flutter', 'Progressive Web Apps'] },
    { name: 'Cloud', icon: Cloud, technologies: ['AWS', 'Vercel', 'Netlify', 'Docker'] },
    { name: 'Data Science', icon: Brain, technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'] },
    { name: 'DevOps', icon: GitBranch, technologies: ['Git', 'CI/CD', 'Docker', 'Linux'] },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical skills and professional competencies
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h4>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12"
          >
            Technology Stack
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((stack) => {
              const Icon = stack.icon;
              return (
                <motion.div
                  key={stack.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                      <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {stack.name}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Learning Goals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold mb-6 text-center"
          >
            Currently Learning
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Machine Learning</h4>
              <p className="text-sm opacity-90">Advanced ML algorithms and deep learning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Cloud className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Cloud Architecture</h4>
              <p className="text-sm opacity-90">AWS, Azure, and microservices</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">Cybersecurity</h4>
              <p className="text-sm opacity-90">Security best practices and ethical hacking</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Layers className="h-8 w-8" />
              </div>
              <h4 className="font-semibold mb-2">System Design</h4>
              <p className="text-sm opacity-90">Scalable architecture patterns</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
