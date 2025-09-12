'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Github, Code, Database, Shield, Wrench } from 'lucide-react';
import Link from 'next/link';
import NewDocumentActions from '@/components/ui/NewDocumentActions';
import { ResumeData, defaultResumeData, roleBasedResumeData } from '@/data/resumeData';

const roleOptions = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    icon: Code,
    description: 'Full-stack development, system architecture, and software engineering',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-700 dark:text-blue-300'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    icon: Database,
    description: 'Machine learning, data analysis, and AI/ML solutions',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-700 dark:text-green-300'
  },
  {
    id: 'it-specialist',
    title: 'IT Specialist',
    icon: Shield,
    description: 'System administration, cybersecurity, and IT infrastructure',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    textColor: 'text-purple-700 dark:text-purple-300'
  },
  {
    id: 'technical-assistant',
    title: 'Technical Assistant',
    icon: Wrench,
    description: 'Technical support, troubleshooting, and system maintenance',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    textColor: 'text-orange-700 dark:text-orange-300'
  }
];

export default function ResumePage() {
  const [selectedRole, setSelectedRole] = useState(roleOptions[0]);
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const documentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load saved data from localStorage if available
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      setResumeData(JSON.parse(savedData));
    }
  }, []);

  // Get role-specific data
  const roleData = roleBasedResumeData[selectedRole.id];
  const currentResume = {
    ...resumeData,
    ...roleData,
    personalInfo: { ...resumeData.personalInfo, ...roleData.personalInfo },
  };

  const getRoleSpecificContent = (roleId: string) => {
    const content = {
      'software-engineer': {
        title: 'Software Engineer Resume',
        description: 'Full-stack development, system architecture, and software engineering expertise'
      },
      'data-scientist': {
        title: 'Data Scientist Resume',
        description: 'Machine learning, data analysis, and AI/ML solutions specialist'
      },
      'it-specialist': {
        title: 'IT Specialist Resume',
        description: 'System administration, cybersecurity, and IT infrastructure expert'
      },
      'technical-assistant': {
        title: 'Technical Assistant Resume',
        description: 'Technical support, troubleshooting, and system maintenance professional'
      }
    };
    return content[roleId as keyof typeof content] || content['software-engineer'];
  };

  const roleContent = getRoleSpecificContent(selectedRole.id);

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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{roleContent.title}</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="bg-white dark:bg-gray-800 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Select Your Role Focus
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roleOptions.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedRole.id === role.id
                    ? `${role.bgColor} ring-2 ring-current`
                    : 'bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600'
                }`}
              >
                <role.icon className={`h-8 w-8 mb-3 ${selectedRole.id === role.id ? role.textColor : 'text-gray-600 dark:text-gray-300'}`} />
                <h3 className={`font-semibold mb-2 ${selectedRole.id === role.id ? role.textColor : 'text-gray-900 dark:text-white'}`}>
                  {role.title}
                </h3>
                <p className={`text-sm ${selectedRole.id === role.id ? role.textColor : 'text-gray-600 dark:text-gray-300'}`}>
                  {role.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Download Button */}
        <NewDocumentActions
          data={currentResume}
          type="resume"
          filename={`Pleasant-Junior-${selectedRole.title.replace(/\s+/g, '-')}`}
        />

        {/* Document Container */}
        <div ref={documentRef} className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className={`bg-gradient-to-r ${selectedRole.color} text-white px-6 py-8 text-center`}>
            <h1 className="text-3xl font-bold mb-4">{currentResume.personalInfo.name}</h1>
            <p className="text-lg text-white/90 mb-6">{currentResume.personalInfo.title}</p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 mr-2 text-white/80" />
                <span className="text-white/90">{currentResume.personalInfo.email}</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2 text-white/80" />
                <span className="text-white/90">{currentResume.personalInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 mr-2 text-white/80" />
                <span className="text-white/90">{currentResume.personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-center">
                <Linkedin className="h-5 w-5 mr-2 text-white/80" />
                <span className="text-white/90">{currentResume.personalInfo.linkedin}</span>
              </div>
              <div className="flex items-center justify-center">
                <Github className="h-5 w-5 mr-2 text-white/80" />
                <span className="text-white/90">{currentResume.personalInfo.github}</span>
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
              <p className="text-gray-700 leading-relaxed">{currentResume.professionalSummary}</p>
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

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b-4 border-blue-600 pb-3 leading-tight">
                EDUCATION
              </h2>
              <div className="border-l-4 border-blue-600 pl-4 py-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{currentResume.education.degree}</h3>
                <p className="text-gray-800 dark:text-gray-200 font-bold text-base mb-1">{currentResume.education.institution}</p>
                <p className="text-gray-700 dark:text-gray-300 text-base italic mb-3">Specialization: Data Science, Artificial Intelligence & Software Engineering</p>
                
                {currentResume.education.relevantCoursework && currentResume.education.relevantCoursework.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Relevant Coursework:</h4>
                    <div className="space-y-0.5">
                      {currentResume.education.relevantCoursework.map((course, idx) => {
                        if (course === "") return null; // Skip empty strings
                        if (course.endsWith(":")) {
                          // This is a category header - find the next course item to display inline
                          const nextCourse = currentResume.education.relevantCoursework?.[idx + 1];
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
                        } else if (idx > 0 && currentResume.education.relevantCoursework?.[idx - 1]?.endsWith(":")) {
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
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b-2 border-blue-600 pb-1">
                Professional Experience
              </h2>
              {currentResume.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-gray-600 text-sm mb-3">{exp.location}</p>
                  <p className="text-gray-700 mb-3">{exp.description}</p>
                  {exp.achievements.length > 0 && (
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                  {exp.technologies.length > 0 && (
                    <div className="mt-3">
                      <span className="font-medium text-sm text-gray-700">Technologies:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exp.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b-4 border-blue-600 pb-3 leading-tight">
                Key Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentResume.projects.map((project, index) => {
                  const colors = [
                    { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-100', dot: 'bg-blue-600', hover: 'group-hover:text-blue-600 dark:group-hover:text-blue-400' },
                    { bg: 'from-green-50 to-emerald-50', border: 'border-green-100', dot: 'bg-green-600', hover: 'group-hover:text-green-600 dark:group-hover:text-green-400' },
                    { bg: 'from-purple-50 to-violet-50', border: 'border-purple-100', dot: 'bg-purple-600', hover: 'group-hover:text-purple-600 dark:group-hover:text-purple-400' },
                    { bg: 'from-orange-50 to-red-50', border: 'border-orange-100', dot: 'bg-orange-600', hover: 'group-hover:text-orange-600 dark:group-hover:text-orange-400' }
                  ];
                  const colorScheme = colors[index % colors.length];
                  
                  return (
                    <div key={index} className={`group p-4 bg-gradient-to-br ${colorScheme.bg} dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border ${colorScheme.border} dark:border-gray-700`}>
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 ${colorScheme.dot} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}></div>
                        <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                            <h3 className={`font-bold text-gray-900 dark:text-white text-base mb-1 ${colorScheme.hover} transition-colors duration-300`}>
                              {project.name}
                            </h3>
                            <span className="text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {project.period}
                    </span>
                  </div>
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                            {project.description}
                          </p>
                          
                  {project.technologies.length > 0 && (
                    <div className="mb-3">
                              <span className="font-medium text-xs text-gray-600 dark:text-gray-400 mb-2 block">Technologies:</span>
                              <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                                    className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-full border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                          
                  {project.achievements.length > 0 && (
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start">
                                  <span className={`${colorScheme.dot} w-1 h-1 rounded-full mr-2 mt-2 flex-shrink-0`}></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                          
                  {project.url && (
                    <div className="mt-3">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                                className={`text-xs font-medium ${colorScheme.hover} hover:underline transition-colors duration-300`}
                      >
                        View Project →
                      </a>
                    </div>
                  )}
                </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 border-b-2 border-blue-600 pb-1">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(currentResume.technicalSkills).map(([category, skills]) => (
                  <div key={category} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                </div>
              ))}
            </div>
            </section>

            {/* Certifications */}
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
          </div>
        </div>
      </div>
    </div>
  );
}