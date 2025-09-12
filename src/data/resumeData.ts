export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
  };
  professionalSummary: string;
  coreCompetencies: string[];
  technicalSkills: {
    programming: string[];
    frameworks: string[];
    tools: string[];
    databases: string[];
  };
  experience: {
    title: string;
    company: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    gpa?: string;
    relevantCoursework?: string[];
  };
  projects: {
    name: string;
    period: string;
    description: string;
    technologies: string[];
    achievements: string[];
    url?: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
  }[];
  languages?: {
    language: string;
    proficiency: string;
  }[];
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "PLEASANT VIEW JUNIOR",
    title: "Computer Science Graduate",
    email: "pleasantview076@gmail.com",
    phone: "+254 112 095 930",
    location: "Nairobi, Kenya",
    github: "github.com/J-VIEW",
    linkedin: "linkedin.com/in/pleasant-junior-83674223a"
  },
  professionalSummary: "Resourceful and passionate Computer Science graduate with extensive hands-on exposure to enterprise technology, cloud infrastructure, AI models, and secure data systems. Highly trained in deploying Kubernetes and managing Linux environments, developing robust full-stack applications, and applying data science principles to solve real-world challenges. Brings a well-rounded skillset spanning user support, software engineering, and system integration, gained through academic projects, certifications, and a technical internship at a regional peace support institution. Proven ability to learn rapidly, collaborate effectively, and adapt in high-demand environments.",
  coreCompetencies: [
    "Python", "JavaScript", "Java", "PHP", "SQL", "Bash",
    "React", "Node.js", "Express", "Flask", "Django", "TypeScript",
    "Kubernetes", "OpenShift", "Docker (Basic)", "GitHub Actions",
    "Linux", "Windows Server", "Microsoft 365", "MongoDB", "MySQL",
    "Machine Learning", "AI Fundamentals", "Data Engineering", "Data Visualization",
    "Intro to Risk Management", "Secure Networking",
    "Communication", "Critical Thinking", "Teamwork", "Presentation", "Leadership", "Problem Solving"
  ],
  technicalSkills: {
    programming: ["Python", "JavaScript", "Java", "TypeScript", "SQL", "R"],
    frameworks: ["React", "Node.js", "Express.js", "Django", "Flask", "Next.js"],
    tools: ["Git", "Docker", "AWS", "Jenkins", "Jupyter", "Postman"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
  },
  experience: [
    {
      title: "IT Support Intern",
      company: "International Peace Support Training Centre (IPSTC), Nairobi",
      period: "Jan 2025 – Apr 2025",
      location: "On-site",
      description: "Provided Tier-1 support across network, hardware, and Windows environments for 40+ users. Maintained and troubleshot Microsoft 365 email systems, Windows Servers, network printers, and CCTV systems. Delivered real-time user support for ongoing peacekeeping training sessions. Collaborated in system maintenance, including installation, diagnostics, and preventive IT audits. Demonstrated high professionalism, strong work ethic, and teamwork praised in formal recommendation by departmental leadership.",
      achievements: [
        "Provided Tier-1 support across network, hardware, and Windows environments for 40+ users",
        "Maintained and troubleshot Microsoft 365 email systems, Windows Servers, network printers, and CCTV systems",
        "Delivered real-time user support for ongoing peacekeeping training sessions",
        "Collaborated in system maintenance, including installation, diagnostics, and preventive IT audits",
        "Demonstrated high professionalism, strong work ethic, and teamwork praised in formal recommendation by departmental leadership"
      ],
      technologies: ["Microsoft 365", "Windows Server", "Network Infrastructure", "CCTV Systems", "IT Support"]
    }
  ],
  education: {
    degree: "Bachelor of Science in Computer Science | Expected December 2025",
    institution: "Kabarak University, Nakuru, Kenya",
    period: "2021 – Expected Dec 2025",
    gpa: "",
    relevantCoursework: [
      "Data Science:",
      "Introduction to Probability and Statistics, Database Management Systems I & II",
      "",
      "Artificial Intelligence:",
      "Artificial Intelligence",
      "",
      "Algorithms & Data Structures:",
      "Data Structures with C, Design and Analysis of Algorithms, Discrete Structures, Computer Graphics, Operations Research",
      "",
      "Software Engineering:",
      "Software Engineering, Object Oriented Programming with C++, Object Oriented Programming with Java, Software Quality Management, Team Project",
      "",
      "Professional & Research:",
      "Research Methods in Computer Science, Professional Ethics and Information Law"
    ]
  },
  projects: [
    {
      name: "MyMental",
      period: "2024",
      description: "Developed a responsive mental health chatbot using OpenAI API and MongoDB, providing users with secure, anonymous access to resources.",
      technologies: ["OpenAI API", "MongoDB", "JavaScript", "Node.js"],
      achievements: [
        "Developed responsive mental health chatbot using OpenAI API and MongoDB",
        "Provided users with secure, anonymous access to resources"
      ],
      url: ""
    },
    {
      name: "MyChat",
      period: "2024",
      description: "Built a PHP-based bulk messaging system with secure transmission protocols, ideal for large-scale internal communication.",
      technologies: ["PHP", "MySQL", "JavaScript", "Security Protocols"],
      achievements: [
        "Built PHP-based bulk messaging system with secure transmission protocols",
        "Ideal for large-scale internal communication"
      ],
      url: ""
    },
    {
      name: "Antique Café CRM",
      period: "2024",
      description: "Designed a Node.js and MySQL-based customer relationship platform with real-time analytics and document exports.",
      technologies: ["Node.js", "MySQL", "JavaScript", "Analytics"],
      achievements: [
        "Designed Node.js and MySQL-based customer relationship platform",
        "Real-time analytics and document exports"
      ],
      url: ""
    },
    {
      name: "Telecom Churn Prediction",
      period: "2024",
      description: "Utilized Pandas and Scikit-learn to construct and evaluate a predictive model identifying customer churn patterns.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
      achievements: [
        "Utilized Pandas and Scikit-learn to construct and evaluate predictive model",
        "Identifying customer churn patterns"
      ],
      url: ""
    }
  ],
  certifications: [
    {
      name: "Kubernetes and Cloud Native Associate (KCNA)",
      issuer: "Linux Foundation",
      date: "2025–2027",
      credentialId: "KCNA-2025"
    },
    {
      name: "Kubernetes for Developers (LFD259), Linux Essentials (LFS101), Cloud Native Essentials (LFS250)",
      issuer: "Linux Foundation",
      date: "2024",
      credentialId: "LFD259-LFS101-LFS250"
    },
    {
      name: "Containers and OpenShift",
      issuer: "IBM SkillsBuild",
      date: "2024",
      credentialId: "IBM-OPENSHIFT"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2024",
      credentialId: "IBM-PYTHON-DS"
    },
    {
      name: "AI Fundamentals",
      issuer: "IBM",
      date: "2024",
      credentialId: "IBM-AI-FUND"
    },
    {
      name: "Relational Database Design, Algebra & Calculus for Data Science",
      issuer: "University of Colorado Boulder",
      date: "2024",
      credentialId: "CU-DB-DS"
    },
    {
      name: "Node.js, React.js, MongoDB, Java Essentials",
      issuer: "LinkedIn Learning",
      date: "2024",
      credentialId: "LINKEDIN-TECH"
    },
    {
      name: "Cybersecurity",
      issuer: "University of Maryland",
      date: "2024",
      credentialId: "UMD-CYBERSEC"
    },
    {
      name: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialId: "FCC-RWD"
    }
  ],
  languages: [
    { language: "English", proficiency: "Native" },
    { language: "Spanish", proficiency: "Conversational" }
  ]
};

// Role-based resume variations
export const roleBasedResumeData: { [key: string]: Partial<ResumeData> } = {
  'software-engineer': {
    personalInfo: {
      name: "Pleasant Junior",
      title: "Software Engineer",
      email: "pleasant.junior@email.com",
      phone: "+1 (555) 123-4567",
      location: "City, State",
      github: "github.com/pleasant-junior",
      linkedin: "linkedin.com/in/pleasant-junior"
    },
    professionalSummary: "Passionate Software Engineer with expertise in full-stack development, system architecture, and cloud technologies. Proven ability to design and implement scalable solutions that drive business growth. Strong background in modern web technologies and agile development practices.",
    technicalSkills: {
      programming: ["JavaScript", "Python", "Java", "TypeScript"],
      frameworks: ["React", "Express.js", "Next.js", "Django", "Spring Boot", "GraphQL"],
      tools: ["Git", "Docker", "AWS", "Jenkins"],
      databases: ["MongoDB", "PostgreSQL"]
    },
    experience: [
      {
        title: "Software Development Intern",
        company: "Tech Solutions Inc.",
        period: "June 2023 - Present",
        location: "Remote",
        description: "Developed scalable web applications and microservices using modern frameworks and cloud technologies.",
        achievements: [
          "Built full-stack application serving 10,000+ daily active users",
          "Implemented microservices architecture reducing system complexity by 40%",
          "Led code reviews and mentored junior developers",
          "Optimized database queries improving response time by 60%"
        ],
        technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
      }
    ]
  },
  'data-scientist': {
    personalInfo: {
      name: "Pleasant Junior",
      title: "Data Scientist",
      email: "pleasant.junior@email.com",
      phone: "+1 (555) 123-4567",
      location: "City, State",
      github: "github.com/pleasant-junior",
      linkedin: "linkedin.com/in/pleasant-junior"
    },
    professionalSummary: "Analytical Data Scientist with expertise in machine learning, statistical analysis, and data visualization. Proven track record of extracting actionable insights from complex datasets and building predictive models that drive business decisions.",
    technicalSkills: {
      programming: ["Python", "R", "SQL"],
      frameworks: ["TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "NumPy", "Matplotlib"],
      tools: ["Jupyter", "Tableau", "Power BI", "AWS", "Docker", "Git"],
      databases: ["PostgreSQL", "MongoDB"]
    },
    experience: [
      {
        title: "Data Science Research Assistant",
        company: "University Research Lab",
        period: "January 2023 - Present",
        location: "University Campus",
        description: "Conducted advanced data analysis and machine learning research for healthcare applications.",
        achievements: [
          "Developed ML model with 94% accuracy for patient outcome prediction",
          "Created interactive data visualization dashboard using Tableau",
          "Published research findings in peer-reviewed journal",
          "Reduced data processing time by 70% through algorithm optimization"
        ],
        technologies: ["Python", "TensorFlow", "Pandas", "Tableau", "Jupyter"]
      }
    ]
  },
  'it-specialist': {
    personalInfo: {
      name: "Pleasant Junior",
      title: "IT Specialist",
      email: "pleasant.junior@email.com",
      phone: "+1 (555) 123-4567",
      location: "City, State",
      github: "github.com/pleasant-junior",
      linkedin: "linkedin.com/in/pleasant-junior"
    },
    professionalSummary: "Technical IT Specialist with expertise in system administration, network security, and infrastructure management. Proven ability to maintain and optimize IT systems while ensuring security and reliability.",
    technicalSkills: {
      programming: ["Bash", "PowerShell", "Python"],
      frameworks: ["Docker", "Kubernetes", "Ansible", "Puppet", "Nagios", "Zabbix"],
      tools: ["VMware", "Active Directory", "Firewall", "VPN", "Backup Systems", "Monitoring Tools"],
      databases: ["MySQL", "PostgreSQL"]
    },
    experience: [
      {
        title: "IT Support Specialist",
        company: "University IT Department",
        period: "September 2023 - Present",
        location: "University Campus",
        description: "Managed IT infrastructure and provided technical support for university systems and users.",
        achievements: [
          "Maintained 99.9% uptime for critical university systems",
          "Implemented security protocols reducing security incidents by 80%",
          "Led migration to cloud-based infrastructure saving 30% in costs",
          "Trained 50+ staff members on new IT systems and procedures"
        ],
        technologies: ["Linux", "Windows Server", "VMware", "Active Directory", "Docker"]
      }
    ]
  },
  'technical-assistant': {
    personalInfo: {
      name: "Pleasant Junior",
      title: "Technical Assistant",
      email: "pleasant.junior@email.com",
      phone: "+1 (555) 123-4567",
      location: "City, State",
      github: "github.com/pleasant-junior",
      linkedin: "linkedin.com/in/pleasant-junior"
    },
    professionalSummary: "Detail-oriented Technical Assistant with strong problem-solving skills and expertise in system maintenance, user support, and technical documentation. Committed to providing excellent technical assistance and ensuring smooth system operations.",
    technicalSkills: {
      programming: ["JavaScript", "Python", "SQL"],
      frameworks: ["ServiceNow", "Jira", "Confluence", "Microsoft Office", "Google Workspace", "Slack"],
      tools: ["Help Desk", "Remote Support", "Ticketing Systems", "Knowledge Base", "User Management", "Asset Management"],
      databases: ["MySQL", "MongoDB"]
    },
    experience: [
      {
        title: "Technical Support Assistant",
        company: "University Technology Department",
        period: "August 2023 - Present",
        location: "University Campus",
        description: "Provided comprehensive technical support to students, faculty, and staff across various technology platforms.",
        achievements: [
          "Resolved 95% of technical issues within 24 hours",
          "Created comprehensive knowledge base reducing support tickets by 40%",
          "Trained 200+ users on new software and systems",
          "Maintained 98% customer satisfaction rating"
        ],
        technologies: ["ServiceNow", "Jira", "Microsoft Office", "Google Workspace", "Slack"]
      }
    ]
  }
};