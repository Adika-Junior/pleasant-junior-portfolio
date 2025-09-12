'use client';

// import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       delayChildren: 0.3,
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //   },
  // };

  const timelineItems = [
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      organization: 'Kabarak University',
      location: 'Nakuru, Kenya',
      period: '2022 - 2025',
      description: 'Pursuing a comprehensive computer science degree with specialization in Data Science, Artificial Intelligence, and Software Engineering. The program emphasizes hands-on learning, research methodologies, and practical application of cutting-edge technologies.',
      icon: GraduationCap,
      achievements: [
        'Expected Graduation: December 2025',
        'Specialization: Data Science, AI & Software Engineering',
        'Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Systems',
        'Research Focus: Predictive Analytics and AI Applications',
        'Academic Excellence: Maintaining strong performance across core CS subjects',
        'Leadership: Active participation in computer science student organizations'
      ],
      skills: ['Data Science', 'Artificial Intelligence', 'Software Engineering', 'Machine Learning', 'Database Systems', 'Research Methods', 'Python', 'Java', 'C++', 'SQL']
    },
    {
      type: 'experience',
      title: 'Technical Support Intern',
      organization: 'International Peace Support Training Centre (IPSTC)',
      location: 'Nairobi, Kenya',
      period: 'January 2025 - April 2025',
      description: 'Served as a technical support intern providing comprehensive IT support for peacekeeping training programs. Gained hands-on experience with enterprise systems, network infrastructure, and user support in a high-stakes environment.',
      icon: Briefcase,
      achievements: [
        'Provided IT support for 15+ peacekeeping training courses',
        'Maintained Microsoft 365 email systems for 500+ users',
        'Configured and maintained Windows Server environments',
        'Managed network printers and CCTV surveillance systems',
        'Resolved 200+ technical issues with 95% success rate',
        'Collaborated with international military personnel and civilian staff',
        'Documented technical procedures and troubleshooting guides'
      ],
      skills: ['Microsoft 365', 'Windows Server', 'Network Administration', 'IT Support', 'Troubleshooting', 'System Maintenance', 'User Training', 'Documentation', 'CCTV Systems', 'Printer Management']
    },
    {
      type: 'experience',
      title: 'Full-Stack Developer (Freelance)',
      organization: 'Various Clients',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Working as a freelance full-stack developer, building web applications and providing technical solutions for small to medium businesses. Specializing in modern web technologies and cloud deployment.',
      icon: Briefcase,
      achievements: [
        'Developed 8+ web applications using React and Node.js',
        'Built MyMental - Mental health chatbot with OpenAI integration',
        'Created MyChat - PHP-based bulk messaging system',
        'Designed Antique Café CRM with real-time analytics',
        'Implemented Telecom Churn Prediction model using ML',
        'Deployed applications on cloud platforms (AWS, Vercel)',
        'Maintained 100% client satisfaction rate'
      ],
      skills: ['React', 'Node.js', 'JavaScript', 'PHP', 'Python', 'MongoDB', 'MySQL', 'OpenAI API', 'Machine Learning', 'Cloud Deployment', 'API Development', 'Database Design']
    },
    {
      type: 'education',
      title: 'Kubernetes and Cloud Native Associate (KCNA)',
      organization: 'Linux Foundation',
      location: 'Online',
      period: '2025 - 2027',
      description: 'Professional certification in Kubernetes and cloud-native technologies, covering container orchestration, microservices architecture, and cloud deployment strategies.',
      icon: GraduationCap,
      achievements: [
        'Certified in Kubernetes fundamentals and best practices',
        'Completed comprehensive cloud-native technology training',
        'Demonstrated expertise in container orchestration',
        'Validated skills in microservices architecture',
        'Certification valid until 2027'
      ],
      skills: ['Kubernetes', 'Docker', 'Cloud Native', 'Container Orchestration', 'Microservices', 'DevOps', 'CI/CD', 'Cloud Architecture']
    },
    {
      type: 'education',
      title: 'IBM SkillsBuild Certifications',
      organization: 'IBM',
      location: 'Online',
      period: '2024 - 2025',
      description: 'Comprehensive certification program covering multiple technology domains including cloud computing, data science, AI fundamentals, and cybersecurity.',
      icon: GraduationCap,
      achievements: [
        'Python for Data Science Certification',
        'AI Fundamentals Certification',
        'Containers and OpenShift Certification',
        'Cloud Native Essentials Certification',
        'Cybersecurity Fundamentals Certification'
      ],
      skills: ['Python', 'Data Science', 'Artificial Intelligence', 'OpenShift', 'Cloud Computing', 'Cybersecurity', 'Machine Learning', 'Data Analysis']
    },
    {
      type: 'education',
      title: 'University of Colorado Boulder Certifications',
      organization: 'University of Colorado Boulder',
      location: 'Online',
      period: '2024 - 2025',
      description: 'Advanced coursework in database design, relational algebra, and data science mathematics, providing strong theoretical foundation for data engineering and analytics.',
      icon: GraduationCap,
      achievements: [
        'Relational Database Design Certification',
        'Algebra & Calculus for Data Science',
        'Advanced Database Management Systems',
        'Mathematical Foundations for Data Science'
      ],
      skills: ['Database Design', 'Relational Algebra', 'Calculus', 'Linear Algebra', 'Statistics', 'Data Modeling', 'SQL Optimization', 'Database Administration']
    },
    {
      type: 'education',
      title: 'Data Science Specialization',
      organization: 'Coursera - Johns Hopkins University',
      location: 'Online',
      period: '2023 - 2024',
      description: 'Completed comprehensive data science specialization covering R programming, statistical analysis, and machine learning.',
      icon: GraduationCap,
      achievements: [
        'Completed 9-course specialization',
        'Built 5 data science projects',
        'Achieved 98% average grade',
        'Specialization in R Programming',
        'Statistical Analysis and Machine Learning',
        'Data Visualization and Communication'
      ],
      skills: ['R Programming', 'Statistical Analysis', 'Machine Learning', 'Data Visualization', 'Regression Analysis', 'Data Cleaning', 'Exploratory Data Analysis', 'Git']
    }
  ];

  const awards: Array<{
    title: string;
    organization: string;
    year: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg border border-blue-100 dark:border-gray-700">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light break-words">
            My journey through education and professional experiences that have shaped my career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg border border-green-100 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Timeline</h3>
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${
                    item.type === 'education' 
                      ? 'bg-blue-500' 
                      : 'bg-green-500'
                  } z-10`}></div>

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    isLeft ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${
                          item.type === 'education' 
                            ? 'bg-blue-100 dark:bg-blue-900' 
                            : 'bg-green-100 dark:bg-green-900'
                        }`}>
                          <Icon className={`h-6 w-6 ${
                            item.type === 'education' 
                              ? 'text-blue-600 dark:text-blue-400' 
                              : 'text-green-600 dark:text-green-400'
                          }`} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight break-words">
                              {item.title}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              item.type === 'education' 
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' 
                                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            }`}>
                              {item.type === 'education' ? 'Education' : 'Experience'}
                            </span>
                          </div>
                          
                          <h4 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-1 leading-relaxed break-words">
                            {item.organization}
                          </h4>
                          
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-2 font-medium">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.location}
                            <span className="mx-2">•</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            {item.period}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium break-words">
                            {item.description}
                          </p>
                          
                          <div className="mb-4">
                            <h5 className="font-bold text-gray-900 dark:text-white mb-3 text-base">
                              Key Achievements:
                            </h5>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300 leading-relaxed break-words">
                                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                  <span className="font-medium">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold break-words"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Achievements Section */}
        <div className="mt-20 mb-16 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg border border-purple-100 dark:border-gray-700">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-12 tracking-tight">
            Key Achievements & Milestones
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-sm border border-blue-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Academic Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Maintaining consistent academic performance with focus on practical application of computer science concepts.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-sm border border-green-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Professional Experience</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Gained hands-on experience in enterprise IT support, system administration, and user training.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-sm border border-purple-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Innovation & Projects</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Developed multiple web applications and AI-powered solutions with real-world impact.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-sm border border-orange-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Recognition & Awards</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Received multiple awards for academic performance, technical innovation, and community service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-sm border border-cyan-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Research & Development</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Active in AI research, machine learning applications, and data science methodologies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-sm border border-pink-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Global Impact</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Contributing to international peacekeeping efforts through technical support and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-20 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg border border-orange-100 dark:border-gray-700">
          <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-12 tracking-tight">
            Awards & Recognition
          </h3>
          
          {awards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {awards.map((award, index) => {
                const Icon = award.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight break-words">
                      {award.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-medium break-words">
                      {award.organization}
                    </p>
                    <p className="text-sm font-bold text-yellow-600 dark:text-yellow-400 mb-3">
                      {award.year}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed break-words font-medium">
                      {award.description}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                Awards and recognition information will be updated soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
