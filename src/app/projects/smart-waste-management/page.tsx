'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Users, Award, Calendar, Globe, Code, Cpu, Smartphone, BarChart3, QrCode, MapPin as MapPinIcon, MessageSquare, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';

export default function SmartWasteManagementPage() {
  const [currentSlide, setCurrentSlide] = useState(0);


  const project = {
    id: 1,
    title: "Smart Waste Management System",
    subtitle: "Transforming Urban Waste Management in Africa",
    description: "A comprehensive smart waste management ecosystem designed for rapidly urbanizing African cities. The system integrates IoT-enabled smart bins, AI-powered sorting, mobile technology, and data dashboards to transform waste management from reactive cleanup to proactive, technology-driven sustainability.",
    problemStatement: "In rapidly urbanizing African cities, waste generation exceeds collection capacity, leading to overflowing dumpsites, uncollected garbage in residential areas, and increasing public health concerns. Existing systems rely on manual processes with limited tracking, weak incentives for proper disposal, and minimal public education.",
    proposedSolution: "Our solution introduces a smart waste management ecosystem that integrates mobile technology, IoT-enabled smart bins, AI-powered sorting, user incentives, and data dashboards for city authorities. This enables efficient collection scheduling, encourages citizen participation, and reduces landfill pressure by promoting circular waste practices.",
    implementationPlan: "Phase 1: IoT sensor deployment and mobile app development. Phase 2: AI integration and informal sector onboarding. Phase 3: City-wide rollout and data analytics implementation.",
    expectedImpact: "Increase collection efficiency by 30%, boost recycling rates by 50%, and serve 4.4M+ Nairobi residents with 90% smartphone penetration.",
    backgroundImage: "/slides/images/1.png",
    slides: [
      "/slides/images/1.png",
      "/slides/images/2.png",
      "/slides/images/3.png",
      "/slides/images/4.png",
      "/slides/images/5.png",
      "/slides/images/6.png",
      "/slides/images/7.png",
      "/slides/images/8.png",
      "/slides/images/9.png",
      "/slides/images/10.png",
      "/slides/images/11.png",
      "/slides/images/12.png",
      "/slides/images/13.png",
      "/slides/images/14.png",
      "/slides/images/15.png"
    ],
    video: "/videos/pitch.mp4",
    technologies: [
      "IoT Sensors", "AI/ML", "Mobile App", "Data Analytics", 
      "QR Codes", "GPS Tracking", "Dashboard", "USSD/SMS"
    ],
    team: "ALX Team Project",
    duration: "3 months",
    status: "In Progress",
    category: "Smart City & Sustainability"
  };

  const techIcons = {
    'IoT Sensors': Cpu,
    'AI/ML': Zap,
    'Mobile App': Smartphone,
    'Data Analytics': BarChart3,
    'QR Codes': QrCode,
    'GPS Tracking': MapPinIcon,
    'Dashboard': Globe,
    'USSD/SMS': MessageSquare
  };

  // Auto-sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % project.slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [project.slides.length]);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section - Full Screen Carousel */}
        <div className="relative h-screen max-h-[800px] overflow-hidden bg-gray-900">
          <div className="flex h-full w-full">
            {project.slides.map((slide, index) => (
              <motion.div
                key={index}
                className="w-full h-full flex-shrink-0"
                animate={{ 
                  x: `-${currentSlide * 100}%`,
                  opacity: index === currentSlide ? 1 : 0
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ position: 'absolute', left: `${index * 100}%` }}
              >
                <Image
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          {/* Project Title Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center max-w-4xl"
            >
              <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold text-white mb-6 inline-block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {project.subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Project Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <Users className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
              <div className="text-3xl font-extrabold text-blue-900 dark:text-blue-100">{project.team}</div>
              <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">Team</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
              <Calendar className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
              <div className="text-3xl font-extrabold text-purple-900 dark:text-purple-100">{project.duration}</div>
              <div className="text-sm text-purple-700 dark:text-purple-300 mt-1">Duration</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
              <Award className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
              <div className="text-3xl font-extrabold text-green-900 dark:text-green-100">{project.status}</div>
              <div className="text-sm text-green-700 dark:text-green-300 mt-1">Status</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-6 border border-orange-200 dark:border-orange-800">
              <Code className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-3" />
              <div className="text-3xl font-extrabold text-orange-900 dark:text-orange-100">{project.technologies.length}</div>
              <div className="text-sm text-orange-700 dark:text-orange-300 mt-1">Technologies</div>
            </div>
          </div>

          {/* Project Description */}
          <section className="mb-20">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                Overview
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl">
                {project.description}
              </p>
            </motion.div>
          </section>

          {/* Technologies Grid */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 tracking-tight text-center">
                Tech Stack
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.technologies.map((tech, idx) => {
                  const Icon = techIcons[tech as keyof typeof techIcons] || Code;
                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
                    >
                      <Icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-extrabold text-gray-900 dark:text-white text-sm">{tech}</h3>
                </div>
                  );
                })}
              </div>
            </motion.div>
          </section>

            {/* Video Section */}
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 tracking-tight text-center">
                Project Pitch
              </h2>
              <div className="relative w-full h-[600px] bg-gray-900 rounded-2xl overflow-hidden group shadow-2xl">
                <video
                  src={project.video}
                  className="w-full h-full object-contain"
                  controls
                  poster="/slides/images/1.png"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                  </div>
            </motion.div>
          </section>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-8 border border-red-200 dark:border-red-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                  <Zap className="h-6 w-6 text-red-600 dark:text-red-400" />
                        </div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  The Problem
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-8 border border-green-200 dark:border-green-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                  <Globe className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  The Solution
                </h2>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.proposedSolution}
                </p>
            </motion.section>
              </div>

          {/* Implementation & Impact */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                Implementation
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.implementationPlan}
                </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                Expected Impact
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.expectedImpact}
                </p>
            </motion.section>
          </div>

          {/* Back to Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
              <Link
                href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-extrabold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
              <ArrowLeft className="h-5 w-5" />
                Back to All Projects
              </Link>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
