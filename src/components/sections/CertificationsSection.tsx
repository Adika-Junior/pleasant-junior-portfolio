'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Download, Calendar, Eye } from 'lucide-react';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

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

  // Certificates organized by field/skill area
  const certificates = [
    // COMMUNICATION & LEADERSHIP
    {
      id: 'communication-foundations',
      title: 'Communication Foundations',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Mastered essential communication skills for professional environments, including verbal and written communication strategies.',
      filename: 'linkedin-communication-foundations.pdf',
      category: 'Communication & Leadership',
      skills: ['Public Speaking', 'Written Communication', 'Presentation Skills', 'Team Communication']
    },
    {
      id: 'communication-foundations-advanced',
      title: 'Communication Foundations - Advanced',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Advanced communication strategies for leadership and professional growth, including conflict resolution and persuasive communication.',
      filename: 'linkedin-communication-foundations-advanced.pdf',
      category: 'Communication & Leadership',
      skills: ['Leadership Communication', 'Conflict Resolution', 'Persuasive Speaking', 'Executive Presence']
    },
    {
      id: 'communication-foundations-expert',
      title: 'Communication Foundations - Expert Level',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Expert-level communication mastery including cross-cultural communication and advanced presentation techniques.',
      filename: 'linkedin-communication-foundations-expert.pdf',
      category: 'Communication & Leadership',
      skills: ['Cross-Cultural Communication', 'Advanced Presentations', 'Executive Communication', 'Strategic Messaging']
    },
    {
      id: 'public-speaking',
      title: 'Public Speaking - Find Your Confidence',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Overcame public speaking anxiety and developed confidence in presenting to various audiences.',
      filename: 'linkedin-public-speaking.pdf',
      category: 'Communication & Leadership',
      skills: ['Public Speaking', 'Presentation Skills', 'Confidence Building', 'Communication']
    },
    {
      id: 'leadership-purpose',
      title: 'Finding Your Leadership Purpose',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Developed leadership skills and discovered personal leadership style through guided exercises and assessments.',
      filename: 'linkedin-leadership-purpose.pdf',
      category: 'Communication & Leadership',
      skills: ['Leadership', 'Personal Development', 'Team Management', 'Strategic Thinking']
    },
    {
      id: '3-minute-rule',
      title: 'The 3-Minute Rule - Say Less to Get More',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Mastered the art of concise communication and effective messaging in professional settings.',
      filename: 'linkedin-3-minute-rule.pdf',
      category: 'Communication & Leadership',
      skills: ['Concise Communication', 'Professional Messaging', 'Effective Communication', 'Business Communication']
    },
    // DATA ANALYSIS & PRODUCTIVITY
    {
      id: 'excel-essential-training',
      title: 'Excel Essential Training Microsoft 365',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Comprehensive training in Microsoft Excel 365, covering advanced formulas, data analysis, and visualization techniques.',
      filename: 'linkedin-excel-essential-training.pdf',
      category: 'Data Analysis & Productivity',
      skills: ['Excel', 'Data Analysis', 'Spreadsheets', 'Microsoft 365']
    },
    {
      id: 'excel-advanced-techniques',
      title: 'Excel Advanced Techniques',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Advanced Excel techniques including complex formulas, pivot tables, macros, and automation for professional data management.',
      filename: 'linkedin-excel-advanced-techniques.pdf',
      category: 'Data Analysis & Productivity',
      skills: ['Advanced Excel', 'Pivot Tables', 'Macros', 'Data Automation', 'Complex Formulas']
    },
    {
      id: '4-hour-workweek',
      title: 'The 4-Hour Workweek - Blinkist Summary',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Learned productivity and time management strategies from Tim Ferriss\'s revolutionary approach to work-life balance.',
      filename: 'linkedin-4-hour-workweek.pdf',
      category: 'Data Analysis & Productivity',
      skills: ['Time Management', 'Productivity', 'Work-Life Balance', 'Efficiency']
    },
    // DESIGN & DEVELOPMENT
    {
      id: 'figma-basics',
      title: 'Figma Essential Training - The Basics',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Learned the fundamentals of Figma for UI/UX design, including creating wireframes, prototypes, and design systems.',
      filename: 'linkedin-figma-essentials.pdf',
      category: 'Design & Development',
      skills: ['Figma', 'UI Design', 'UX Design', 'Prototyping', 'Design Systems']
    },
    {
      id: 'figma-css-implementation',
      title: 'Figma From Design to CSS Implementation',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Advanced course on converting Figma designs to CSS, bridging the gap between design and development.',
      filename: 'linkedin-figma-to-css.pdf',
      category: 'Design & Development',
      skills: ['Figma', 'CSS', 'Web Development', 'Design Implementation', 'Frontend Development']
    },
    {
      id: 'linkedin-learning-platform',
      title: 'How to Use LinkedIn Learning',
      issuer: 'LinkedIn Learning',
      date: '2024',
      description: 'Mastered the LinkedIn Learning platform for continuous professional development and skill enhancement.',
      filename: 'linkedin-learning-platform.pdf',
      category: 'Professional Development',
      skills: ['Online Learning', 'Professional Development', 'Skill Enhancement', 'Continuous Learning']
    },
    // DATA SCIENCE & MACHINE LEARNING
    {
      id: 'coursera-machine-learning',
      title: 'Machine Learning Fundamentals',
      issuer: 'Coursera',
      date: '2024',
      description: 'Comprehensive course covering machine learning algorithms, data preprocessing, and model evaluation techniques.',
      filename: 'coursera-machine-learning-fundamentals.pdf',
      category: 'Data Science & Machine Learning',
      skills: ['Machine Learning', 'Python', 'Data Analysis', 'Algorithms', 'Statistics']
    },
    {
      id: 'coursera-data-science',
      title: 'Data Science Specialization',
      issuer: 'Coursera',
      date: '2024',
      description: 'Advanced specialization in data science covering R programming, statistical analysis, and machine learning applications.',
      filename: 'coursera-data-science-specialization.pdf',
      category: 'Data Science & Machine Learning',
      skills: ['R Programming', 'Statistical Analysis', 'Data Visualization', 'Machine Learning', 'Big Data']
    },
    // WEB & MOBILE DEVELOPMENT
    {
      id: 'coursera-web-development',
      title: 'Web Development Specialization',
      issuer: 'Coursera',
      date: '2024',
      description: 'Full-stack web development course covering HTML, CSS, JavaScript, and modern frameworks.',
      filename: 'coursera-web-development-specialization.pdf',
      category: 'Web & Mobile Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Full-Stack Development']
    },
    {
      id: 'coursera-mobile-development',
      title: 'Mobile App Development',
      issuer: 'Coursera',
      date: '2024',
      description: 'Cross-platform mobile app development using React Native and Flutter frameworks.',
      filename: 'coursera-mobile-app-development.pdf',
      category: 'Web & Mobile Development',
      skills: ['React Native', 'Flutter', 'Mobile Development', 'Cross-Platform', 'App Design']
    },
    // CLOUD & INFRASTRUCTURE
    {
      id: 'coursera-cloud-computing',
      title: 'Cloud Computing Fundamentals',
      issuer: 'Coursera',
      date: '2024',
      description: 'Introduction to cloud computing concepts, AWS services, and cloud architecture patterns.',
      filename: 'coursera-cloud-computing-fundamentals.pdf',
      category: 'Cloud & Infrastructure',
      skills: ['AWS', 'Cloud Computing', 'DevOps', 'Infrastructure', 'Scalability']
    },
    {
      id: 'coursera-database',
      title: 'Database Management Systems',
      issuer: 'Coursera',
      date: '2024',
      description: 'Comprehensive database design, SQL optimization, and database administration techniques.',
      filename: 'coursera-database-management-systems.pdf',
      category: 'Cloud & Infrastructure',
      skills: ['SQL', 'Database Design', 'PostgreSQL', 'MySQL', 'Database Optimization']
    },
    // CYBERSECURITY
    {
      id: 'coursera-cybersecurity',
      title: 'Cybersecurity Essentials',
      issuer: 'Coursera',
      date: '2024',
      description: 'Fundamental cybersecurity concepts, threat analysis, and security best practices for developers.',
      filename: 'coursera-cybersecurity-essentials.pdf',
      category: 'Cybersecurity',
      skills: ['Cybersecurity', 'Security Analysis', 'Threat Detection', 'Security Best Practices']
    },
    // ACADEMIC & PROFESSIONAL EXCELLENCE
    {
      id: 'digital-skills',
      title: 'Digital Skills Certificate',
      issuer: 'Digital Skills Academy',
      date: '2024',
      description: 'Comprehensive digital skills certification covering modern technology tools and digital literacy.',
      filename: 'digital-skills-academy-certificate.pdf',
      category: 'Academic & Professional Excellence',
      skills: ['Digital Literacy', 'Technology Tools', 'Online Collaboration', 'Digital Communication']
    },
    {
      id: 'university-california',
      title: 'University of California Certificate',
      issuer: 'University of California',
      date: '2024',
      description: 'Advanced certification from University of California covering specialized technical skills and academic excellence.',
      filename: 'university-california-certificate.pdf',
      category: 'Academic & Professional Excellence',
      skills: ['Academic Excellence', 'Advanced Technical Skills', 'Research Methods', 'Critical Thinking']
    }
  ];

  const categories = [
    'All',
    'Communication & Leadership',
    'Data Analysis & Productivity',
    'Design & Development',
    'Data Science & Machine Learning',
    'Web & Mobile Development',
    'Cloud & Infrastructure',
    'Cybersecurity',
    'Academic & Professional Excellence',
    'Professional Development'
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = certificates.filter(cert => 
    activeCategory === 'All' || cert.category === activeCategory
  );

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Certifications & Achievements
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Professional certifications and achievements that demonstrate my commitment to continuous learning
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {cert.date}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    {cert.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mb-6">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedCert(cert.filename)}
                    className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </button>
                  <a
                    href={`/certificates/${cert.filename}`}
                    download
                    className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificate Modal - Glassmorphic Design */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="glass-card rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <h3 className="text-2xl font-heading text-luxury text-gray-900 dark:text-white">
                  Certificate Preview
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full glass-button hover:bg-white/20 transition-all duration-300 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <iframe
                  src={`/certificates/${selectedCert}#toolbar=0`}
                  className="w-full h-[70vh] border-0 rounded-xl shadow-lg"
                  title="Certificate Preview"
                />
                <div className="flex justify-end space-x-3 mt-6">
                  <a
                    href={`/certificates/${selectedCert}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-6 py-3 glass-button text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Open Full Size
                  </a>
                  <a
                    href={`/certificates/${selectedCert}`}
                    download
                    className="flex items-center px-6 py-3 glass-button text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
