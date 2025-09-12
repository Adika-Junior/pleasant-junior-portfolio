'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Eye } from 'lucide-react';
import Image from 'next/image';
import TypewriterEffect from '@/components/ui/TypewriterEffect';
import PDFViewer from '@/components/ui/PDFViewer';
import { useState } from 'react';

export default function HeroSection() {
  const [pdfViewer, setPdfViewer] = useState<{ isOpen: boolean; src: string; title: string }>({
    isOpen: false,
    src: '',
    title: ''
  });

  // const openPDFViewer = (src: string, title: string) => {
  //   setPdfViewer({ isOpen: true, src, title });
  // };

  const closePDFViewer = () => {
    setPdfViewer({ isOpen: false, src: '', title: '' });
  };

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

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/pleasant-junior',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/pleasant-junior',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:pleasant.junior@email.com',
      icon: Mail,
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        {/* Left Column - Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-gray-900 dark:text-white whitespace-nowrap">
                <span className="font-hero-name inline-block">
                  <TypewriterEffect
                    text="Hi, I'm Pleasant Junior"
                    speed={150}
                    delay={500}
                    className="text-gray-900 dark:text-white"
                  />
                </span>
                <div className="mt-2 h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
              </h1>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-premium text-gray-600 dark:text-gray-300 font-medium flex flex-wrap items-center justify-center lg:justify-start">
                <span className="inline-block">Computer Science Student</span>
                <span className="inline-block text-green-600 dark:text-green-400 font-semibold ml-8 relative">
                  <span className="absolute -left-5 top-1/2 transform -translate-y-1/2 text-blue-500 dark:text-blue-400 font-bold text-2xl sm:text-3xl leading-none">•</span>
                  Data Scientist
                </span>
              </div>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl text-premium leading-relaxed"
          >
            I&apos;m passionate about building innovative solutions through code, data, and artificial intelligence. 
            Currently pursuing my Computer Science degree while exploring the fascinating world of machine learning 
            and software engineering.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/cv" 
                className="inline-flex items-center justify-center px-8 py-3 glass-button text-base font-medium rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 glow-hover text-white"
              >
                <Eye className="mr-2 h-5 w-5" />
                View CV
              </a>
              <a 
                href="/resume" 
                className="inline-flex items-center justify-center px-8 py-3 glass-button text-base font-medium rounded-xl bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 glow-hover text-white"
              >
                <Eye className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </div>
            <button className="inline-flex items-center justify-center px-8 py-3 glass-button text-base font-medium rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 glow-hover text-white">
              Discover My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex space-x-4"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-button rounded-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <Icon className="h-6 w-6 text-gray-700 dark:text-gray-200 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column - Professional Photo */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Floating Background Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            />
            
            {/* Professional Photo with Advanced 2025 Styling */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10"
            >
              <Image
                src="/images/pleasant-junior-profile.jpg"
                alt="Pleasant Junior - Computer Science Student & Aspiring Data Scientist"
                width={320}
                height={320}
                className="w-full h-full object-cover object-top scale-150 group-hover:scale-175 transition-transform duration-1000 ease-out"
                priority
              />
              
              {/* Dynamic Gradient Overlay */}
              <motion.div
                animate={{
                  background: [
                    "linear-gradient(to top, rgba(0,0,0,0.3), transparent, transparent)",
                    "linear-gradient(to top, rgba(0,0,0,0.1), transparent, transparent)",
                    "linear-gradient(to top, rgba(0,0,0,0.3), transparent, transparent)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              />
              
              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 40px rgba(147, 51, 234, 0.4)",
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-3xl ring-2 ring-white/30 group-hover:ring-4 group-hover:ring-blue-400/50 transition-all duration-500"
              />
              
              {/* Floating Particles */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0,
                }}
                className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-8 right-6 w-1.5 h-1.5 bg-purple-400 rounded-full"
              />
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-6 left-6 w-1 h-1 bg-pink-400 rounded-full"
              />
            </motion.div>
            
            {/* Corner Tech Badges - Enhanced 2025 Glassmorphism Style */}
            {/* Top Left - Computer Science */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 360,
              }}
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-3 -left-3 w-14 h-14 backdrop-blur-xl bg-green-500/80 dark:bg-green-500/60 rounded-2xl flex items-center justify-center border border-white/30 dark:border-white/20 shadow-2xl group/badge"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0.5)",
                    "0 0 10px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white font-black text-sm group-hover/badge:text-green-100 transition-colors duration-300"
              >
                CS
              </motion.span>
            </motion.div>
            
            {/* Top Right - Data Science */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: -360,
              }}
              animate={{
                y: [0, -6, 0],
                scale: [1, 1.08, 1],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute -top-3 -right-3 w-14 h-14 backdrop-blur-xl bg-blue-500/80 dark:bg-blue-500/60 rounded-2xl flex items-center justify-center border border-white/30 dark:border-white/20 shadow-2xl group/badge"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0.5)",
                    "0 0 10px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white font-black text-sm group-hover/badge:text-blue-100 transition-colors duration-300"
              >
                Data
              </motion.span>
            </motion.div>

            {/* Bottom Left - Artificial Intelligence */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: 360,
              }}
              animate={{
                y: [0, 8, 0],
                scale: [1, 1.1, 1],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
              className="absolute -bottom-3 -left-3 w-14 h-14 backdrop-blur-xl bg-purple-500/80 dark:bg-purple-500/60 rounded-2xl flex items-center justify-center border border-white/30 dark:border-white/20 shadow-2xl group/badge"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0.5)",
                    "0 0 10px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white font-black text-sm group-hover/badge:text-purple-100 transition-colors duration-300"
              >
                AI
              </motion.span>
            </motion.div>

            {/* Bottom Right - Software Engineering */}
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: -360,
              }}
              animate={{
                y: [0, 6, 0],
                scale: [1, 1.08, 1],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
              className="absolute -bottom-3 -right-3 w-14 h-14 backdrop-blur-xl bg-orange-500/80 dark:bg-orange-500/60 rounded-2xl flex items-center justify-center border border-white/30 dark:border-white/20 shadow-2xl group/badge"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0.5)",
                    "0 0 10px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-white font-black text-sm group-hover/badge:text-orange-100 transition-colors duration-300"
              >
                SE
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* PDF Viewer Modal */}
      <PDFViewer
        isOpen={pdfViewer.isOpen}
        src={pdfViewer.src}
        title={pdfViewer.title}
        onClose={closePDFViewer}
      />
    </section>
  );
}
