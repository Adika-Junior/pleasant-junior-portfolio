export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    github: string;
    linkedin: string;
    website: string;
  };
  professionalSummary: string;
  education: {
    degree: string;
    period: string;
    institution: string;
    location: string;
    gpa: string;
    focus: string;
    achievements: string[];
    coursework: string[];
    thesis?: string;
    advisor?: string;
  }[];
  researchExperience: {
    title: string;
    period: string;
    institution: string;
    supervisor: string;
    description: string;
    publications: string[];
    funding?: string;
    collaborators?: string[];
  }[];
  publications: {
    title: string;
    authors: string;
    journal: string;
    year: string;
    doi: string;
    type: 'journal' | 'conference' | 'book' | 'book-chapter' | 'preprint';
    impactFactor?: string;
    citations?: number;
  }[];
  presentations: {
    title: string;
    event: string;
    date: string;
    location: string;
    type: 'oral' | 'poster' | 'keynote' | 'workshop';
    audience?: string;
  }[];
  awards: {
    title: string;
    organization: string;
    date: string;
    description: string;
    monetaryValue?: string;
  }[];
  grants: {
    title: string;
    fundingAgency: string;
    amount: string;
    period: string;
    role: string;
    status: 'awarded' | 'pending' | 'completed';
  }[];
  teachingExperience: {
    course: string;
    institution: string;
    period: string;
    level: 'undergraduate' | 'graduate' | 'postgraduate';
    description: string;
  }[];
  technicalSkills: {
    programmingLanguages: string[];
    frameworks: string[];
    tools: string[];
    databases: string[];
    cloud: string[];
    operatingSystems: string[];
    methodologies: string[];
  };
  certifications: {
    name: string;
    issuer: string;
    date: string;
    credentialId: string;
    expirationDate?: string;
  }[];
  languages: {
    language: string;
    proficiency: 'native' | 'fluent' | 'conversational' | 'basic';
    certifications?: string[];
  }[];
  professionalMemberships: {
    organization: string;
    role: string;
    period: string;
    activities?: string[];
  }[];
  references: {
    name: string;
    title: string;
    institution: string;
    email: string;
    phone: string;
    relationship: string;
  }[];
}

export const defaultCVData: CVData = {
  personalInfo: {
    name: "PLEASANT VIEW JUNIOR",
    title: "Computer Science Graduate",
    email: "pleasantview076@gmail.com",
    phone: "+254 112 095 930",
    address: "Nairobi, Kenya",
    github: "github.com/J-VIEW",
    linkedin: "linkedin.com/in/pleasant-junior-83674223a",
    website: ""
  },
  professionalSummary: "Resourceful and passionate Computer Science graduate with extensive hands-on exposure to enterprise technology, cloud infrastructure, AI models, and secure data systems. Highly trained in deploying Kubernetes and managing Linux environments, developing robust full-stack applications, and applying data science principles to solve real-world challenges. Brings a well-rounded skillset spanning user support, software engineering, and system integration, gained through academic projects, certifications, and a technical internship at a regional peace support institution. Proven ability to learn rapidly, collaborate effectively, and adapt in high-demand environments.",
  education: [
    {
      degree: "Bachelor of Science in Computer Science | Expected December 2025",
      period: "2021 - Expected Dec 2025",
      institution: "Kabarak University, Nakuru, Kenya",
      location: "Nakuru, Kenya",
      gpa: "",
      focus: "Specialization: Data Science, Artificial Intelligence & Software Engineering",
      achievements: [],
      coursework: [
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
      ],
      thesis: "",
      advisor: ""
    }
  ],
  researchExperience: [
    {
      title: "IT Support Intern",
      period: "Jan 2025 – Apr 2025",
      institution: "International Peace Support Training Centre (IPSTC), Nairobi",
      supervisor: "Ferdinand Vanja - IT Manager",
      description: "Provided Tier-1 support across network, hardware, and Windows environments for 40+ users. Maintained and troubleshot Microsoft 365 email systems, Windows Servers, network printers, and CCTV systems. Delivered real-time user support for ongoing peacekeeping training sessions. Collaborated in system maintenance, including installation, diagnostics, and preventive IT audits. Demonstrated high professionalism, strong work ethic, and teamwork praised in formal recommendation by departmental leadership.",
      publications: [],
      funding: "",
      collaborators: []
    }
  ],
  publications: [
    {
      title: "MyMental – Mental Health Chatbot",
      authors: "Pleasant View Junior",
      journal: "Personal Project",
      year: "2024",
      doi: "",
      type: "journal",
      impactFactor: "",
      citations: 0
    },
    {
      title: "MyChat – Bulk Messaging System",
      authors: "Pleasant View Junior",
      journal: "Personal Project",
      year: "2024",
      doi: "",
      type: "journal",
      citations: 0
    },
    {
      title: "Antique Café CRM – Customer Relationship Platform",
      authors: "Pleasant View Junior",
      journal: "Personal Project",
      year: "2024",
      doi: "",
      type: "journal",
      citations: 0
    },
    {
      title: "Telecom Churn Prediction – Predictive Model",
      authors: "Pleasant View Junior",
      journal: "Data Science Project",
      year: "2024",
      doi: "",
      type: "journal",
      citations: 0
    }
  ],
  presentations: [
    {
      title: "AI in Healthcare: Current Trends and Future Directions",
      event: "Computer Science Research Symposium",
      date: "March 2024",
      location: "University Campus",
      type: "oral",
      audience: "Academic researchers and students"
    },
    {
      title: "Machine Learning for Medical Diagnosis",
      event: "IEEE Healthcare Technology Conference",
      date: "June 2024",
      location: "San Francisco, CA",
      type: "poster",
      audience: "Healthcare professionals and researchers"
    }
  ],
  awards: [
    {
      title: "Outstanding Research Contribution",
      organization: "Computer Science Department",
      date: "2024",
      description: "Recognized for exceptional contribution to machine learning research project",
      monetaryValue: "$1,000"
    },
    {
      title: "Academic Excellence Scholarship",
      organization: "University Foundation",
      date: "2022-2024",
      description: "Merit-based scholarship for outstanding academic performance",
      monetaryValue: "$5,000 per year"
    }
  ],
  grants: [
    {
      title: "Undergraduate Research in Machine Learning",
      fundingAgency: "National Science Foundation",
      amount: "$5,000",
      period: "2023-2024",
      role: "Principal Investigator",
      status: "awarded"
    }
  ],
  teachingExperience: [
    {
      course: "Introduction to Programming",
      institution: "University Name",
      period: "Fall 2023",
      level: "undergraduate",
      description: "Assisted in teaching Python programming fundamentals to 50+ students"
    },
    {
      course: "Data Structures and Algorithms",
      institution: "University Name",
      period: "Spring 2024",
      level: "undergraduate",
      description: "Led lab sessions and provided tutoring for 30+ students"
    }
  ],
  technicalSkills: {
    programmingLanguages: ["Python", "JavaScript", "Java", "PHP", "SQL", "Bash"],
    frameworks: ["React", "Node.js", "Express", "Flask", "Django", "TypeScript"],
    tools: ["Kubernetes", "OpenShift", "Docker", "GitHub Actions", "Linux", "Windows Server", "Microsoft 365", "MongoDB", "MySQL"],
    databases: ["MongoDB", "MySQL"],
    cloud: ["Kubernetes", "OpenShift", "Docker"],
    operatingSystems: ["Linux", "Windows Server"],
    methodologies: ["Machine Learning", "AI Fundamentals", "Data Engineering", "Data Visualization", "Cybersecurity", "Risk Management", "Secure Networking"]
  },
  certifications: [
    {
      name: "Kubernetes and Cloud Native Associate (KCNA)",
      issuer: "Linux Foundation",
      date: "2025–2027",
      credentialId: "KCNA-2025",
      expirationDate: "2027"
    },
    {
      name: "Kubernetes for Developers (LFD259), Linux Essentials (LFS101), Cloud Native Essentials (LFS250)",
      issuer: "Linux Foundation",
      date: "2024",
      credentialId: "LFD259-LFS101-LFS250",
      expirationDate: ""
    },
    {
      name: "Containers and OpenShift",
      issuer: "IBM SkillsBuild",
      date: "2024",
      credentialId: "IBM-OPENSHIFT",
      expirationDate: ""
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2024",
      credentialId: "IBM-PYTHON-DS",
      expirationDate: ""
    },
    {
      name: "AI Fundamentals",
      issuer: "IBM",
      date: "2024",
      credentialId: "IBM-AI-FUND",
      expirationDate: ""
    },
    {
      name: "Relational Database Design, Algebra & Calculus for Data Science",
      issuer: "University of Colorado Boulder",
      date: "2024",
      credentialId: "CU-DB-DS",
      expirationDate: ""
    },
    {
      name: "Node.js, React.js, MongoDB, Java Essentials",
      issuer: "LinkedIn Learning",
      date: "2024",
      credentialId: "LINKEDIN-TECH",
      expirationDate: ""
    },
    {
      name: "Cybersecurity",
      issuer: "University of Maryland",
      date: "2024",
      credentialId: "UMD-CYBERSEC",
      expirationDate: ""
    },
    {
      name: "Responsive Web Design Certification",
      issuer: "freeCodeCamp",
      date: "2024",
      credentialId: "FCC-RWD",
      expirationDate: ""
    }
  ],
  languages: [
    { language: "English", proficiency: "native", certifications: ["TOEFL: 110/120"] },
    { language: "Spanish", proficiency: "conversational" },
    { language: "French", proficiency: "basic" }
  ],
  professionalMemberships: [
    {
      organization: "Association for Computing Machinery (ACM)",
      role: "Student Member",
      period: "2022 - Present",
      activities: ["Attended annual conferences", "Participated in local chapter events"]
    },
    {
      organization: "IEEE Computer Society",
      role: "Student Member",
      period: "2023 - Present",
      activities: ["Access to research publications", "Networking events"]
    }
  ],
  references: [
    {
      name: "Ferdinand Vanja",
      title: "IT Manager",
      institution: "IPSTC",
      email: "ictmanager-cied@ipstc.org",
      phone: "+254 722 305 532",
      relationship: "IT Manager - IPSTC"
    },
    {
      name: "C K Aritho",
      title: "Colonel for Director",
      institution: "IPSTC",
      email: "So1.plansprogske@ipstc.org",
      phone: "0791 574 336",
      relationship: "Colonel for Director - IPSTC"
    }
  ]
};
