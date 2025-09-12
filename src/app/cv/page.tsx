'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import NewDocumentActions from '@/components/ui/NewDocumentActions';
import { CVData, defaultCVData } from '@/data/cvData';

export default function CVPage() {
  const [cvData, setCvData] = useState<CVData>(defaultCVData);
  const documentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load saved data from localStorage if available
    const savedData = localStorage.getItem('cvData');
    if (savedData) {
      setCvData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/#home" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Curriculum Vitae</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Download Button */}
        <NewDocumentActions
          data={cvData}
          type="cv"
          filename="Pleasant-Junior-CV"
        />

        {/* Document Container */}
        <div ref={documentRef} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">{cvData.personalInfo.name}</h1>
            <p className="text-lg text-blue-100 mb-6">{cvData.personalInfo.title}</p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2 text-blue-200" />
                <span className="text-blue-100">{cvData.personalInfo.email}</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2 text-blue-200" />
                <span className="text-blue-100">{cvData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-200" />
                <span className="text-blue-100">{cvData.personalInfo.address}</span>
              </div>
              <div className="flex items-center justify-center">
                <Linkedin className="h-5 w-5 mr-2 text-blue-200" />
                <span className="text-blue-100">{cvData.personalInfo.linkedin}</span>
              </div>
              <div className="flex items-center justify-center">
                <Github className="h-5 w-5 mr-2 text-blue-200" />
                <span className="text-blue-100">{cvData.personalInfo.github}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 py-6 space-y-6">
            {/* Professional Summary */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b-2 border-blue-600 pb-1">
                Professional Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{cvData.professionalSummary}</p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-blue-600 pb-3 leading-tight">
                EDUCATION
              </h2>
              {cvData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                  <p className="text-gray-800 dark:text-gray-200 font-bold text-base mb-1">{edu.institution}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-base italic mb-3">{edu.focus}</p>
                  
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="mt-2">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Relevant Coursework:</h4>
                      <div className="space-y-0.5">
                        {edu.coursework.map((course, idx) => {
                          if (course === "") return null; // Skip empty strings
                          if (course.endsWith(":")) {
                            // This is a category header - find the next course item to display inline
                            const nextCourse = edu.coursework[idx + 1];
                            return (
                              <div key={idx} className="mt-1 first:mt-0">
                                <span className="font-semibold text-gray-900 dark:text-white text-sm">
                                  {course}
                                </span>
                                {nextCourse && !nextCourse.endsWith(":") && (
                                  <span className="text-gray-800 dark:text-gray-200 text-sm ml-1">{nextCourse}</span>
                                )}
                              </div>
                            );
                          } else if (idx > 0 && edu.coursework[idx - 1].endsWith(":")) {
                            // Skip this item as it's already displayed inline with the category
                            return null;
                          } else {
                            // This is a standalone course item
                            return (
                              <div key={idx} className="ml-0">
                                <span className="text-gray-800 dark:text-gray-200 text-sm">{course}</span>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Core Competencies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-blue-600 pb-3 leading-tight">
                Core Competencies
              </h2>
              <div className="space-y-0.5">
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">Programming Languages:</span>
                  <span className="text-gray-800 dark:text-gray-200 ml-1 text-sm">Python, JavaScript, Java, PHP, SQL, Bash</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">Frameworks & Libraries:</span>
                  <span className="text-gray-800 dark:text-gray-200 ml-1 text-sm">React, Node.js, Express, Flask, Django, TypeScript</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">Cloud & DevOps:</span>
                  <span className="text-gray-800 dark:text-gray-200 ml-1 text-sm">Kubernetes, OpenShift, Docker (Basic), GitHub Actions</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">Systems & Tools:</span>
                  <span className="text-gray-800 dark:text-gray-200 ml-1 text-sm">Linux, Windows Server, Microsoft 365, MongoDB, MySQL</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">Data & AI:</span>
                  <span className="text-gray-800 dark:text-gray-200 ml-1 text-sm">Machine Learning, AI Fundamentals, Data Engineering, Data Visualization</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">Cybersecurity:</span>
                  <span className="text-gray-800 dark:text-gray-200 ml-1 text-sm">Intro to Risk Management, Secure Networking</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm">Soft Skills:</span>
                  <span className="text-gray-800 dark:text-gray-200 ml-1 text-sm">Communication, Critical Thinking, Teamwork, Presentation, Leadership, Problem Solving</span>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-blue-600 pb-3 leading-tight">
                Experience
              </h2>
              {cvData.researchExperience.map((research, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{research.title}</h3>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {research.period}
                    </span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 font-bold mb-2">{research.institution}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">On-site</p>
                  <div className="space-y-1">
                    {research.description.split('. ').map((point, idx) => (
                      point.trim() && (
                        <p key={idx} className="text-base text-gray-800 dark:text-gray-200 flex items-start">
                          <span className="text-blue-600 mr-2">-</span>
                          {point.trim()}{point.trim().endsWith('.') ? '' : '.'}
                        </p>
                      )
                    ))}
                  </div>
                </div>
              ))}
            </section>

            {/* Projects & Technical Solutions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-4 border-blue-600 pb-3 leading-tight">
                Projects & Technical Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 dark:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        MyMental
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Developed a responsive mental health chatbot using OpenAI API and MongoDB, providing users with secure, anonymous access to resources.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 dark:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                        MyChat
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Built a PHP-based bulk messaging system with secure transmission protocols, ideal for large-scale internal communication.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 dark:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        Antique Café CRM
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Designed a Node.js and MySQL-based customer relationship platform with real-time analytics and document exports.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100 dark:border-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        Telecom Churn Prediction
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Utilized Pandas and Scikit-learn to construct and evaluate a predictive model identifying customer churn patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications & Professional Development */}
            <section>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8 border-b-4 border-blue-600 pb-4 leading-tight tracking-tight">
                Certifications & Professional Development
              </h2>
              
              {/* Psychology-Optimized Card Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Kubernetes & Cloud Native Card - Glassmorphism Trust & Professionalism */}
                <div className="group relative backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/30 dark:border-white/20 hover:scale-[1.02] hover:-translate-y-3 hover:bg-white/30 dark:hover:bg-white/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-blue-500/20 before:to-indigo-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 before:-z-10">
                  {/* Status Indicator - Trust Blue */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse shadow-lg"></div>
                  
                  {/* Icon Container - Professional Authority */}
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-900 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-3xl filter drop-shadow-sm">☸️</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight break-words mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                        Kubernetes & Cloud Native
                      </h3>
                      <p className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                        Linux Foundation
                      </p>
                      <div className="mt-2 w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content - F-Pattern Scanning Optimized */}
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 dark:bg-slate-700/60 rounded-xl group-hover:bg-white/80 dark:group-hover:bg-slate-700/80 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">KCNA (2025–2027)</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">LFD259, LFS101, LFS250</span>
                    </div>
                  </div>
                </div>

                {/* IBM SkillsBuild Card - Glassmorphism Innovation & Creativity */}
                <div className="group relative backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/30 dark:border-white/20 hover:scale-[1.02] hover:-translate-y-3 hover:bg-white/30 dark:hover:bg-white/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-purple-500/20 before:to-fuchsia-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 before:-z-10">
                  {/* Status Indicator - Innovation Purple */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full animate-pulse shadow-lg"></div>
                  
                  {/* Icon Container - Creative Authority */}
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-fuchsia-200 dark:from-purple-800 dark:to-fuchsia-900 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-3xl filter drop-shadow-sm">🤖</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight break-words mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                        IBM SkillsBuild
                      </h3>
                      <p className="text-sm font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
                        IBM Corporation
                      </p>
                      <div className="mt-2 w-12 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content - Innovation Focus */}
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 dark:bg-slate-700/60 rounded-xl group-hover:bg-white/80 dark:group-hover:bg-slate-700/80 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Python for Data Science</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">AI Fundamentals</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">OpenShift & Containers</span>
                    </div>
                  </div>
                </div>

                {/* University of Colorado Boulder Card - Glassmorphism Growth & Success */}
                <div className="group relative backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/30 dark:border-white/20 hover:scale-[1.02] hover:-translate-y-3 hover:bg-white/30 dark:hover:bg-white/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-green-500/20 before:to-emerald-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 before:-z-10">
                  {/* Status Indicator - Success Green */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full animate-pulse shadow-lg"></div>
                  
                  {/* Icon Container - Academic Excellence */}
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-800 dark:to-emerald-900 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-3xl filter drop-shadow-sm">🎓</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight break-words mb-2 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300">
                        Database & Data Science
                      </h3>
                      <p className="text-sm font-bold text-green-700 dark:text-green-300 uppercase tracking-wider">
                        University of Colorado Boulder
                      </p>
                      <div className="mt-2 w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content - Academic Achievement */}
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 dark:bg-slate-700/60 rounded-xl group-hover:bg-white/80 dark:group-hover:bg-slate-700/80 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Database Design</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Algebra & Calculus</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mathematical Foundations</span>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Learning Card - Glassmorphism Energy & Enthusiasm */}
                <div className="group relative backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/30 dark:border-white/20 hover:scale-[1.02] hover:-translate-y-3 hover:bg-white/30 dark:hover:bg-white/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-orange-500/20 before:to-red-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 before:-z-10">
                  {/* Status Indicator - Energy Orange */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full animate-pulse shadow-lg"></div>
                  
                  {/* Icon Container - Professional Energy */}
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-200 dark:from-orange-800 dark:to-red-900 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-3xl filter drop-shadow-sm">💼</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight break-words mb-2 group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors duration-300">
                        Professional Development
                      </h3>
                      <p className="text-sm font-bold text-orange-700 dark:text-orange-300 uppercase tracking-wider">
                        LinkedIn Learning
                      </p>
                      <div className="mt-2 w-12 h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content - Professional Growth */}
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 dark:bg-slate-700/60 rounded-xl group-hover:bg-white/80 dark:group-hover:bg-slate-700/80 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Node.js & React.js</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">MongoDB & Java</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Cybersecurity</span>
                    </div>
                  </div>
                </div>

                {/* freeCodeCamp Card - Glassmorphism Creativity & Innovation */}
                <div className="group relative backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/30 dark:border-white/20 hover:scale-[1.02] hover:-translate-y-3 hover:bg-white/30 dark:hover:bg-white/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-cyan-500/20 before:to-teal-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 before:-z-10">
                  {/* Status Indicator - Innovation Cyan */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full animate-pulse shadow-lg"></div>
                  
                  {/* Icon Container - Creative Web Development */}
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-teal-200 dark:from-cyan-800 dark:to-teal-900 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-3xl filter drop-shadow-sm">🌐</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight break-words mb-2 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300">
                        Web Development
                      </h3>
                      <p className="text-sm font-bold text-cyan-700 dark:text-cyan-300 uppercase tracking-wider">
                        freeCodeCamp
                      </p>
                      <div className="mt-2 w-12 h-1 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content - Creative Development */}
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 dark:bg-slate-700/60 rounded-xl group-hover:bg-white/80 dark:group-hover:bg-slate-700/80 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Responsive Web Design</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Frontend Development</span>
                    </div>
                  </div>
                </div>

                {/* Core Competencies Card - Glassmorphism Wisdom & Knowledge */}
                <div className="group relative backdrop-blur-xl bg-white/20 dark:bg-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/30 dark:border-white/20 hover:scale-[1.02] hover:-translate-y-3 hover:bg-white/30 dark:hover:bg-white/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-pink-500/20 before:to-rose-600/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700 before:-z-10">
                  {/* Status Indicator - Knowledge Pink */}
                  <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full animate-pulse shadow-lg"></div>
                  
                  {/* Icon Container - Wisdom & Learning */}
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-200 dark:from-pink-800 dark:to-rose-900 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <span className="text-3xl filter drop-shadow-sm">📚</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-slate-900 dark:text-white leading-tight break-words mb-2 group-hover:text-pink-700 dark:group-hover:text-pink-300 transition-colors duration-300">
                        Core Competencies
                      </h3>
                      <p className="text-sm font-bold text-pink-700 dark:text-pink-300 uppercase tracking-wider">
                        Multi-Domain Expertise
                      </p>
                      <div className="mt-2 w-12 h-1 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Content - Knowledge Areas */}
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white/60 dark:bg-slate-700/60 rounded-xl group-hover:bg-white/80 dark:group-hover:bg-slate-700/80 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Mathematics</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Business & Programming</span>
                    </div>
                    <div className="flex items-center p-3 bg-white/40 dark:bg-slate-700/40 rounded-xl group-hover:bg-white/60 dark:group-hover:bg-slate-700/60 transition-all duration-300">
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mr-4 group-hover:scale-125 group-hover:shadow-lg transition-all duration-300"></div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Branding & Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* References */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-blue-600 pb-3 leading-tight">
                References
              </h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Ferdinand Vanja | IT Manager – IPSTC</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-blue-600" />
                      <span className="text-gray-800 dark:text-gray-200">ictmanager-cied@ipstc.org</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-blue-600" />
                      <span className="text-gray-800 dark:text-gray-200">+254 722 305 532</span>
                    </div>
                  </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">Recommendation available upon request</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">C K Aritho, Colonel for Director – IPSTC</h3>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-blue-600" />
                      <span className="text-gray-800 dark:text-gray-200">So1.plansprogske@ipstc.org</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-blue-600" />
                      <span className="text-gray-800 dark:text-gray-200">0791 574 336</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}