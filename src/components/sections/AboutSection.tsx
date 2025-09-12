'use client';

import { motion } from 'framer-motion';
import { Code, Database, Brain, BookOpen, Users, Target, Play, Download, MessageCircle, Star, CheckCircle } from 'lucide-react';

export default function AboutSection() {
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

  const interests = [
    {
      icon: Code,
      title: 'Software Engineering',
      description: 'Building scalable applications and solving complex problems through clean, efficient code.',
    },
    {
      icon: Database,
      title: 'Data Science',
      description: 'Extracting insights from data and building predictive models to drive decision-making.',
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Exploring machine learning algorithms and AI applications for real-world problems.',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and industry best practices.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and contributing to open-source projects.',
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Approaching challenges with analytical thinking and creative solutions.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed font-light"
          >
            Resourceful and passionate Computer Science graduate with hands-on experience at IPSTC in Microsoft 365, 
            Windows Servers, network systems, and IT user support. I bring a well-rounded skillset spanning enterprise technology, 
            cloud infrastructure, AI models, and secure data systems, gained through academic projects, certifications, and technical internships.
          </motion.p>
        </motion.div>

        {/* Elevator Pitch Video Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            My Elevator Pitch
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl"
          >
            {/* Video Placeholder */}
            <div className="relative aspect-video bg-gray-900 dark:bg-gray-700 rounded-xl overflow-hidden mb-6">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-700 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Elevator Pitch Video</h4>
                  <p className="text-gray-300 text-sm">Coming Soon - Watch my story unfold</p>
                </div>
              </div>
              {/* Video Overlay Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-white rounded"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white"></div>
              </div>
            </div>
            
            {/* Pitch Summary */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
                In 60 seconds, here&apos;s what I bring to the table:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center space-y-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                    <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Full-Stack Developer</span>
                </div>
                <div className="flex flex-col items-center space-y-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    <Database className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Data Science Specialist</span>
                </div>
                <div className="flex flex-col items-center space-y-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-full">
                    <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">AI & Cloud Expert</span>
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium max-w-4xl mx-auto">
                Computer Science graduate with hands-on experience at IPSTC in Microsoft 365, Windows Servers, 
                network systems, and IT user support. Ready to solve real-world challenges with innovative solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                My Professional Journey
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a Computer Science student at <span className="text-blue-600 dark:text-blue-400 font-semibold">Kabarak University</span>, 
                  I&apos;ve specialized in <span className="text-purple-600 dark:text-purple-400 font-semibold">Data Science, Artificial Intelligence & Software Engineering</span>. 
                  My journey has been marked by hands-on experience with enterprise technology, cloud infrastructure, and AI models.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Through my technical internship at the <span className="text-green-600 dark:text-green-400 font-semibold">International Peace Support Training Centre (IPSTC)</span>, 
                  I gained hands-on experience with <span className="text-blue-600 dark:text-blue-400 font-semibold">Microsoft 365 email systems, Windows Servers, network printers, and CCTV maintenance</span>. 
                  I provided comprehensive IT user support for multiple peacekeeping courses and demonstrated expertise in troubleshooting and system repairs.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  My passion lies in applying <span className="text-orange-600 dark:text-orange-400 font-semibold">data science principles to solve real-world challenges</span> 
                  while building secure, scalable systems. I bring proven ability to learn rapidly, collaborate effectively, and adapt in high-demand environments.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                Current Focus & Achievements
              </h4>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4 mt-2 group-hover:bg-blue-600 transition-colors"></span>
                  <span className="text-lg leading-relaxed font-medium">Completing Bachelor of Science in Computer Science at Kabarak University (Expected December 2025)</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 mt-2 group-hover:bg-green-600 transition-colors"></span>
                  <span className="text-lg leading-relaxed font-medium">Specializing in Data Science, Artificial Intelligence & Software Engineering</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-4 mt-2 group-hover:bg-purple-600 transition-colors"></span>
                  <span className="text-lg leading-relaxed font-medium">Technical internship at IPSTC (Jan-Apr 2025) - Microsoft 365, Windows Servers, network systems, and IT user support</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-4 mt-2 group-hover:bg-orange-600 transition-colors"></span>
                  <span className="text-lg leading-relaxed font-medium">Expertise in Kubernetes deployment and Linux environment management</span>
                </li>
                <li className="flex items-start group">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 mt-2 group-hover:bg-red-600 transition-colors"></span>
                  <span className="text-lg leading-relaxed font-medium">Building robust full-stack applications and secure data systems</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center tracking-tight"
            >
              Core Competencies
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                const colors = [
                  { bg: 'bg-blue-50 dark:bg-blue-900/20', icon: 'text-blue-600 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-800' },
                  { bg: 'bg-green-50 dark:bg-green-900/20', icon: 'text-green-600 dark:text-green-400', border: 'border-green-200 dark:border-green-800' },
                  { bg: 'bg-purple-50 dark:bg-purple-900/20', icon: 'text-purple-600 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-800' },
                  { bg: 'bg-orange-50 dark:bg-orange-900/20', icon: 'text-orange-600 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-800' },
                  { bg: 'bg-red-50 dark:bg-red-900/20', icon: 'text-red-600 dark:text-red-400', border: 'border-red-200 dark:border-red-800' },
                  { bg: 'bg-indigo-50 dark:bg-indigo-900/20', icon: 'text-indigo-600 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-800' }
                ];
                const colorScheme = colors[index % colors.length];
                
                return (
                  <motion.div
                    key={interest.title}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                    className={`group relative p-6 ${colorScheme.bg} rounded-2xl border-2 ${colorScheme.border} hover:shadow-2xl transition-all duration-300 overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br from-white to-transparent"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-gradient-to-tr from-white to-transparent"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className={`p-4 ${colorScheme.bg} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className={`h-8 w-8 ${colorScheme.icon}`} />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                          {interest.title}
                        </h4>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-medium group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {interest.description}
                      </p>
                      
                      {/* Skill Level Indicator */}
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i < 4 ? colorScheme.icon.replace('text-', 'bg-') : 'bg-gray-300 dark:bg-gray-600'
                              } transition-all duration-300`}
                            ></div>
                          ))}
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Advanced
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Services/Expertise Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center tracking-tight"
          >
            Services & Expertise
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Web Development
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-base leading-relaxed font-medium">
                Full-stack web applications using React, Node.js, and modern frameworks.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  API Development
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Database Integration
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                  <Database className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Data Science
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-base leading-relaxed font-medium">
                Data analysis, machine learning models, and business intelligence solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Predictive Modeling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Data Visualization
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Statistical Analysis
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                  <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  AI Solutions
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-base leading-relaxed font-medium">
                Artificial intelligence applications and machine learning implementations.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  NLP Applications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Computer Vision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                  Chatbot Development
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center tracking-tight"
          >
            Testimonials & Recommendations
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">FV</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">To Be Updated</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">To Be Updated</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-medium">
                &ldquo;Exceptional problem-solving skills and dedication to delivering high-quality solutions. 
                A true professional who consistently exceeds expectations.&rdquo;
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">CA</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">To Be Updated</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">To Be Updated</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed font-medium">
                &ldquo;Outstanding technical expertise combined with excellent communication skills. 
                Highly recommend for any complex project requiring innovative solutions.&rdquo;
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-3xl font-bold mb-6 tracking-tight">Ready to Work Together?</h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed font-medium">
              Let&apos;s discuss how I can help bring your ideas to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get In Touch
              </a>
              <a
                href="/cv"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Download className="h-5 w-5 mr-2" />
                Download CV
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
          >
            My Values
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Innovation
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Always looking for better ways to solve problems and improve existing solutions.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to continuous growth and staying updated with the latest technologies.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Impact
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Focused on creating solutions that make a positive difference in people&apos;s lives.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
