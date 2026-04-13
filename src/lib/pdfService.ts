import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    website: string;
  };
  summary: string;
  skills: {
    category: string;
    skills: string[];
  }[];
  experience: {
    title: string;
    company: string;
    location: string;
    duration: string;
    description: string;
    achievements: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    location: string;
    year: string;
    gpa?: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
    credentialId?: string;
  }[];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    minimumFractionDigits: 2
  }).format(amount);
}

export async function generatePortfolioPDF(portfolioData: PortfolioData): Promise<Uint8Array> {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();
  
  // Add a page
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 size
  
  // Get professional fonts for CV/Resume
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helveticaObliqueFont = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  // TimesRoman fonts reserved for future use
  await pdfDoc.embedFont(StandardFonts.TimesRoman);
  await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const primaryColor = rgb(0.2, 0.4, 0.8); // Blue color
  const secondaryColor = rgb(0.1, 0.3, 0.6); // Dark blue
  // accentColor reserved for future use
  const textColor = rgb(0.2, 0.2, 0.2); // Dark gray for text
  const lightGray = rgb(0.6, 0.6, 0.6); // Light gray
  const veryLightGray = rgb(0.9, 0.9, 0.9); // Very light gray
  
  // Draw header background
  page.drawRectangle({
    x: 0,
    y: 750,
    width: 595.28,
    height: 100,
    color: rgb(0.95, 0.97, 1.0), // Very light blue background
  });
  
  // Name and title - Professional CV standards
  page.drawText(portfolioData.personalInfo.name, {
    x: 50,
    y: 800,
    size: 20, // Professional name size
    font: helveticaBoldFont,
    color: primaryColor,
  });
  
  page.drawText(portfolioData.personalInfo.title, {
    x: 50,
    y: 775,
    size: 12, // Professional title size
    font: helveticaObliqueFont,
    color: secondaryColor,
  });
  
  // Contact information
  const contactInfo = [
    `Email: ${portfolioData.personalInfo.email}`,
    `Phone: ${portfolioData.personalInfo.phone}`,
    `Location: ${portfolioData.personalInfo.location}`,
    `LinkedIn: ${portfolioData.personalInfo.linkedin}`,
    `GitHub: ${portfolioData.personalInfo.github}`,
    `Website: ${portfolioData.personalInfo.website}`
  ];
  
  contactInfo.forEach((info, index) => {
    page.drawText(info, {
      x: 50,
      y: 750 - (index * 12),
      size: 10, // Professional contact info size
      font: helveticaFont,
      color: lightGray,
    });
  });
  
  // Professional Summary
  let currentY = 650;
  
  page.drawRectangle({
    x: 40,
    y: currentY - 20,
    width: 515,
    height: 30,
    color: veryLightGray,
  });
  
  page.drawText('PROFESSIONAL SUMMARY', {
    x: 50,
    y: currentY,
    size: 14, // Professional section heading size
    font: helveticaBoldFont,
    color: primaryColor,
  });
  currentY -= 40;
  
  // Wrap text for summary
  const words = portfolioData.summary.split(' ');
  let line = '';
  const lines: string[] = [];
  
  for (const word of words) {
    const testLine = line + (line ? ' ' : '') + word;
    if (testLine.length > 85) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  }
  if (line) lines.push(line);
  
    lines.slice(0, 6).forEach((textLine, lineIdx) => {
      page.drawText(textLine, {
        x: 50,
        y: currentY - (lineIdx * 12),
        size: 11, // Professional body text size
        font: helveticaFont,
        color: textColor,
      });
    });
  currentY -= (Math.min(lines.length, 6) * 12) + 30;
  
  // Skills Section
  page.drawRectangle({
    x: 40,
    y: currentY - 20,
    width: 515,
    height: 30,
    color: veryLightGray,
  });
  
  page.drawText('TECHNICAL SKILLS', {
    x: 50,
    y: currentY,
    size: 14,
    font: helveticaBoldFont,
    color: primaryColor,
  });
  currentY -= 40;
  
  portfolioData.skills.forEach((skillGroup) => {
    if (currentY < 200) {
      // Add new page if needed
      pdfDoc.addPage([595.28, 841.89]);
      currentY = 750;
    }
    
    page.drawText(`${skillGroup.category}:`, {
      x: 50,
      y: currentY,
      size: 11,
      font: helveticaBoldFont,
      color: secondaryColor,
    });
    
    const skillsText = skillGroup.skills.join(' • ');
    page.drawText(skillsText, {
      x: 70,
      y: currentY - 15,
      size: 10,
      font: helveticaFont,
      color: textColor,
    });
    
    currentY -= 35;
  });
  currentY -= 20;
  
  // Experience Section
  page.drawRectangle({
    x: 40,
    y: currentY - 20,
    width: 515,
    height: 30,
    color: veryLightGray,
  });
  
  page.drawText('PROFESSIONAL EXPERIENCE', {
    x: 50,
    y: currentY,
    size: 14,
    font: helveticaBoldFont,
    color: primaryColor,
  });
  currentY -= 40;
  
  portfolioData.experience.forEach((exp) => {
    if (currentY < 200) {
      // Add new page if needed
      pdfDoc.addPage([595.28, 841.89]);
      currentY = 750;
    }
    
    page.drawText(exp.title, {
      x: 50,
      y: currentY,
      size: 12,
      font: helveticaBoldFont,
      color: textColor,
    });
    
    page.drawText(`${exp.company} | ${exp.location} | ${exp.duration}`, {
      x: 50,
      y: currentY - 15,
      size: 10,
      font: helveticaObliqueFont,
      color: secondaryColor,
    });
    
    currentY -= 35;
    
    // Description
    const descWords = exp.description.split(' ');
    let descLine = '';
    const descLines: string[] = [];
    
    for (const word of descWords) {
      const testLine = descLine + (descLine ? ' ' : '') + word;
      if (testLine.length > 85) {
        descLines.push(descLine);
        descLine = word;
      } else {
        descLine = testLine;
      }
    }
    if (descLine) descLines.push(descLine);
    
    descLines.slice(0, 3).forEach((textLine, lineIndex) => {
      page.drawText(textLine, {
        x: 50,
        y: currentY - (lineIndex * 12),
        size: 10,
        font: helveticaFont,
        color: textColor,
      });
    });
    currentY -= (Math.min(descLines.length, 3) * 12) + 20;
    
    // Key achievements
    if (exp.achievements && exp.achievements.length > 0) {
      exp.achievements.slice(0, 3).forEach((achievement, achIndex) => {
        page.drawText(`• ${achievement}`, {
          x: 60,
          y: currentY - (achIndex * 12),
          size: 9,
          font: helveticaFont,
          color: textColor,
        });
      });
      currentY -= (Math.min(exp.achievements.length, 3) * 12) + 20;
    }
    
    currentY -= 10;
  });
  
  // Education Section
  page.drawRectangle({
    x: 40,
    y: currentY - 20,
    width: 515,
    height: 30,
    color: veryLightGray,
  });
  
  page.drawText('EDUCATION', {
    x: 50,
    y: currentY,
    size: 14,
    font: helveticaBoldFont,
    color: primaryColor,
  });
  currentY -= 40;
  
  portfolioData.education.forEach((edu) => {
    if (currentY < 200) {
      // Add new page if needed
      pdfDoc.addPage([595.28, 841.89]);
      currentY = 750;
    }
    
    page.drawText(edu.degree, {
      x: 50,
      y: currentY,
      size: 12,
      font: helveticaBoldFont,
      color: textColor,
    });
    
    page.drawText(`${edu.institution} | ${edu.location} | ${edu.year}`, {
      x: 50,
      y: currentY - 15,
      size: 10,
      font: helveticaObliqueFont,
      color: secondaryColor,
    });
    
    if (edu.gpa) {
      page.drawText(`GPA: ${edu.gpa}`, {
        x: 50,
        y: currentY - 30,
        size: 10,
        font: helveticaFont,
        color: textColor,
      });
      currentY -= 45;
    } else {
      currentY -= 30;
    }
  });
  
  // Projects Section
  page.drawRectangle({
    x: 40,
    y: currentY - 20,
    width: 515,
    height: 30,
    color: veryLightGray,
  });
  
  page.drawText('KEY PROJECTS', {
    x: 50,
    y: currentY,
    size: 14,
    font: helveticaBoldFont,
    color: primaryColor,
  });
  currentY -= 40;
  
  portfolioData.projects.slice(0, 3).forEach((project) => {
    if (currentY < 200) {
      // Add new page if needed
      pdfDoc.addPage([595.28, 841.89]);
      currentY = 750;
    }
    
    page.drawText(project.title, {
      x: 50,
      y: currentY,
      size: 11,
      font: helveticaBoldFont,
      color: textColor,
    });
    
    currentY -= 20;
    
    // Project description
    const projWords = project.description.split(' ');
    let projLine = '';
    const projLines: string[] = [];
    
    for (const word of projWords) {
      const testLine = projLine + (projLine ? ' ' : '') + word;
      if (testLine.length > 85) {
        projLines.push(projLine);
        projLine = word;
      } else {
        projLine = testLine;
      }
    }
    if (projLine) projLines.push(projLine);
    
    projLines.slice(0, 2).forEach((textLine, lineIndex) => {
      page.drawText(textLine, {
        x: 50,
        y: currentY - (lineIndex * 12),
        size: 9,
        font: helveticaFont,
        color: textColor,
      });
    });
    currentY -= (Math.min(projLines.length, 2) * 12) + 15;
    
    // Technologies
    const techText = `Technologies: ${project.technologies.join(', ')}`;
    page.drawText(techText, {
      x: 50,
      y: currentY,
      size: 9,
      font: helveticaObliqueFont,
      color: lightGray,
    });
    
    currentY -= 30;
  });
  
  // Certifications Section
  if (portfolioData.certifications.length > 0) {
    page.drawRectangle({
      x: 40,
      y: currentY - 20,
      width: 515,
      height: 30,
      color: veryLightGray,
    });
    
    page.drawText('CERTIFICATIONS', {
      x: 50,
      y: currentY,
      size: 14,
      font: helveticaBoldFont,
      color: primaryColor,
    });
    currentY -= 40;
    
    portfolioData.certifications.slice(0, 5).forEach((cert) => {
      if (currentY < 200) {
        // Add new page if needed
        pdfDoc.addPage([595.28, 841.89]);
        currentY = 750;
      }
      
      page.drawText(cert.name, {
        x: 50,
        y: currentY,
        size: 10,
        font: helveticaBoldFont,
        color: textColor,
      });
      
      page.drawText(`${cert.issuer} | ${cert.date}`, {
        x: 50,
        y: currentY - 12,
        size: 9,
        font: helveticaFont,
        color: lightGray,
      });
      
      currentY -= 30;
    });
  }
  
  // Footer
  page.drawRectangle({
    x: 0,
    y: 0,
    width: 595.28,
    height: 40,
    color: rgb(0.95, 0.97, 1.0),
  });
  
  page.drawText('Generated by Pleasant Junior Portfolio', {
    x: 297.64, // Center of page
    y: 25,
    size: 8,
    font: helveticaFont,
    color: lightGray,
  });
  
  page.drawText('For more information, visit pleasantjunior.dev', {
    x: 297.64, // Center of page
    y: 15,
    size: 8,
    font: helveticaFont,
    color: lightGray,
  });
  
  // Serialize the PDF
  return await pdfDoc.save();
}

export function downloadPDF(pdfBytes: Uint8Array, filename: string): void {
  const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Sample portfolio data for testing
export const samplePortfolioData: PortfolioData = {
  personalInfo: {
    name: "Pleasant Junior",
    title: "Computer Science Graduate & Full-Stack Developer",
    email: "pleasantjunior7@gmail.com",
    phone: "Available on Request",
    location: "Available for Remote Work",
    linkedin: "linkedin.com/in/pleasant-junior-83674223a/",
    github: "github.com/Adika-Junior",
    website: "pleasantjunior.dev"
  },
  summary: "Passionate Computer Science graduate with hands-on experience in full-stack development, data science, and cloud computing. Proven ability to build scalable applications and AI-powered solutions that drive business value. Ready to contribute to innovative teams with expertise in React, Python, Node.js, and AWS.",
  skills: [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"]
    },
    {
      category: "Frontend Technologies",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Django", "Flask", "REST APIs", "GraphQL"]
    },
    {
      category: "Database & Cloud",
      skills: ["MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Linux"]
    },
    {
      category: "Data Science & AI",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Visualization"]
    }
  ],
  experience: [
    {
      title: "IT Support Specialist",
      company: "IPSTC",
      location: "Nairobi, Kenya",
      duration: "2023 - 2024",
      description: "Provided technical support for Microsoft 365, Windows Servers, and network systems. Managed user training and technical documentation.",
      achievements: [
        "Improved system uptime by 15% through proactive maintenance",
        "Reduced support tickets by 20% through better documentation",
        "Trained 50+ users on new software implementations"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Kabarak University",
      location: "Nakuru, Kenya",
      year: "2020 - 2024",
      gpa: "3.8/4.0"
    }
  ],
  projects: [
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Built a comprehensive analytics platform that increased sales insights by 40% through real-time data visualization and predictive modeling.",
      technologies: ["React", "Python", "Django", "PostgreSQL", "Chart.js"],
      githubUrl: "https://github.com/Adika-Junior/ecommerce-dashboard",
      demoUrl: "https://ecommerce-dashboard-demo.vercel.app"
    },
    {
      title: "AI-Powered Study Assistant",
      description: "Developed an intelligent learning platform using OpenAI API and natural language processing to create personalized study plans.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/Adika-Junior/ai-study-assistant",
      demoUrl: "https://ai-study-assistant.vercel.app"
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a fully responsive portfolio website with 95%+ performance score and SEO optimization.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Adika-Junior/portfolio",
      demoUrl: "https://pleasant-junior.vercel.app"
    }
  ],
  certifications: [
    {
      name: "Data Science Specialization",
      issuer: "Coursera",
      date: "2024",
      credentialId: "Coursera-DS-2024"
    },
    {
      name: "Cloud Computing Fundamentals",
      issuer: "Coursera",
      date: "2024",
      credentialId: "Coursera-CC-2024"
    },
    {
      name: "Machine Learning Fundamentals",
      issuer: "Coursera",
      date: "2024",
      credentialId: "Coursera-ML-2024"
    },
    {
      name: "Excel Essential Training",
      issuer: "LinkedIn Learning",
      date: "2024",
      credentialId: "LinkedIn-Excel-2024"
    },
    {
      name: "Communication Foundations",
      issuer: "LinkedIn Learning",
      date: "2024",
      credentialId: "LinkedIn-Comm-2024"
    }
  ]
};
