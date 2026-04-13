import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Helvetica',
  src: 'https://fonts.gstatic.com/s/helvetica/v1/helvetica.ttf',
});

Font.register({
  family: 'Helvetica-Bold',
  src: 'https://fonts.gstatic.com/s/helvetica/v1/helvetica-bold.ttf',
});

Font.register({
  family: 'Helvetica-Oblique',
  src: 'https://fonts.gstatic.com/s/helvetica/v1/helvetica-oblique.ttf',
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    backgroundColor: '#F8FAFF',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  name: {
    fontSize: 20, // Professional CV name size
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8,
  },
  title: {
    fontSize: 12, // Professional CV title size
    color: '#3B82F6',
    fontStyle: 'italic',
    marginBottom: 15,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  contactItem: {
    fontSize: 10, // Professional contact info size
    color: '#6B7280',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14, // Professional section heading size
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E7EB',
  },
  summary: {
    fontSize: 11, // Professional body text size
    lineHeight: 1.5,
    color: '#374151',
    textAlign: 'justify',
  },
  skillCategory: {
    marginBottom: 8,
  },
  skillCategoryTitle: {
    fontSize: 11, // Professional subsection size
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: 4,
  },
  skillList: {
    fontSize: 10, // Professional body text size
    color: '#374151',
    lineHeight: 1.4,
  },
  experienceItem: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  jobTitle: {
    fontSize: 12, // Professional job title size
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  companyInfo: {
    fontSize: 10, // Professional company info size
    color: '#6B7280',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  jobDescription: {
    fontSize: 10, // Professional body text size
    color: '#374151',
    lineHeight: 1.4,
    marginBottom: 6,
  },
  achievements: {
    marginLeft: 10,
  },
  achievement: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  educationInfo: {
    fontSize: 10,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.3,
    marginBottom: 4,
  },
  projectTech: {
    fontSize: 8,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  certificationItem: {
    marginBottom: 8,
  },
  certName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  certInfo: {
    fontSize: 9,
    color: '#6B7280',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 8,
    color: '#9CA3AF',
  },
});

interface PortfolioData {
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

interface PortfolioPDFProps {
  data: PortfolioData;
}

const PortfolioPDF: React.FC<PortfolioPDFProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.personalInfo.name}</Text>
        <Text style={styles.title}>{data.personalInfo.title}</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>📧 {data.personalInfo.email}</Text>
          <Text style={styles.contactItem}>📱 {data.personalInfo.phone}</Text>
          <Text style={styles.contactItem}>📍 {data.personalInfo.location}</Text>
          <Text style={styles.contactItem}>💼 {data.personalInfo.linkedin}</Text>
          <Text style={styles.contactItem}>🐙 {data.personalInfo.github}</Text>
          <Text style={styles.contactItem}>🌐 {data.personalInfo.website}</Text>
        </View>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.summary}>{data.summary}</Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
        {data.skills.map((skillGroup, index) => (
          <View key={index} style={styles.skillCategory}>
            <Text style={styles.skillCategoryTitle}>{skillGroup.category}:</Text>
            <Text style={styles.skillList}>{skillGroup.skills.join(' • ')}</Text>
          </View>
        ))}
      </View>

      {/* Professional Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>
        {data.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.jobTitle}>{exp.title}</Text>
            <Text style={styles.companyInfo}>
              {exp.company} | {exp.location} | {exp.duration}
            </Text>
            <Text style={styles.jobDescription}>{exp.description}</Text>
            {exp.achievements && exp.achievements.length > 0 && (
              <View style={styles.achievements}>
                {exp.achievements.map((achievement, achIndex) => (
                  <Text key={achIndex} style={styles.achievement}>
                    • {achievement}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION</Text>
        {data.education.map((edu, index) => (
          <View key={index} style={styles.educationItem}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.educationInfo}>
              {edu.institution} | {edu.location} | {edu.year}
              {edu.gpa && ` | GPA: ${edu.gpa}`}
            </Text>
          </View>
        ))}
      </View>

      {/* Key Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>KEY PROJECTS</Text>
        {data.projects.slice(0, 3).map((project, index) => (
          <View key={index} style={styles.projectItem}>
            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.projectDescription}>{project.description}</Text>
            <Text style={styles.projectTech}>
              Technologies: {project.technologies.join(', ')}
            </Text>
          </View>
        ))}
      </View>

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
          {data.certifications.slice(0, 5).map((cert, index) => (
            <View key={index} style={styles.certificationItem}>
              <Text style={styles.certName}>{cert.name}</Text>
              <Text style={styles.certInfo}>
                {cert.issuer} | {cert.date}
                {cert.credentialId && ` | ID: ${cert.credentialId}`}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Footer */}
      <Text style={styles.footer}>
        Generated by Pleasant Junior Portfolio • For more information, visit pleasantjunior.dev
      </Text>
    </Page>
  </Document>
);

export default PortfolioPDF;
