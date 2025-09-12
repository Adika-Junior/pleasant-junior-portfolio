'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { CVData } from '@/data/cvData';
import { ResumeData } from '@/data/resumeData';
import { MailIcon, PhoneIcon, MapPinIcon, LinkedinIcon, GithubIcon } from './PDFIcons';

// Create styles following professional CV/Resume guidelines
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
    fontSize: 9,
    lineHeight: 1.1,
    fontFamily: 'Helvetica',
  },
  header: {
    backgroundColor: '#1e40af',
    color: '#ffffff',
    padding: 12,
    marginBottom: 12,
    textAlign: 'center',
  },
  headerName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.2,
    lineHeight: 1.1,
  },
  headerTitle: {
    fontSize: 10,
    marginBottom: 6,
    textAlign: 'center',
    fontWeight: 'normal',
    opacity: 0.9,
    lineHeight: 1.0,
  },
  contactInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    marginTop: 4,
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 4,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  contactText: {
    fontSize: 9,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'normal',
    lineHeight: 1.2,
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1e40af',
    marginBottom: 6,
    borderBottom: '2px solid #1e40af',
    paddingBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.2,
    lineHeight: 1.2,
  },
  subsection: {
    marginBottom: 4,
  },
  subsectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.2,
  },
  itemTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 2,
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 4,
    fontWeight: 'normal',
  },
  itemDescription: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 2,
    lineHeight: 1.3,
    wordWrap: 'break-word',
    hyphens: 'auto',
    fontStyle: 'italic',
  },
  experienceDescription: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 2,
    lineHeight: 1.5,
    wordWrap: 'break-word',
    hyphens: 'auto',
    fontStyle: 'normal',
  },
  bulletList: {
    marginLeft: 15,
    marginTop: 4,
  },
  bulletItem: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 2,
    lineHeight: 1.3,
    wordWrap: 'break-word',
    hyphens: 'auto',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  skillTag: {
    backgroundColor: '#f1f5f9',
    color: '#374151',
    padding: '3px 8px',
    borderRadius: 2,
    fontSize: 9,
    border: '0.5px solid #e2e8f0',
  },
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  leftColumn: {
    width: '65%',
  },
  rightColumn: {
    width: '30%',
    textAlign: 'right',
  },
  dateText: {
    fontSize: 9,
    color: '#6b7280',
    fontStyle: 'italic',
    lineHeight: 1.3,
  },
  locationText: {
    fontSize: 9,
    color: '#6b7280',
    lineHeight: 1.3,
  },
  summaryText: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    textAlign: 'left',
    wordWrap: 'break-word',
    hyphens: 'auto',
    textJustify: 'inter-word',
  },
  courseItem: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 2,
    paddingLeft: 8,
    wordWrap: 'break-word',
    hyphens: 'auto',
    lineHeight: 1.3,
  },
  courseCategory: {
    fontSize: 9,
    fontWeight: 'normal',
    color: '#374151',
    marginTop: 4,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  referenceItem: {
    marginBottom: 8,
  },
  referenceName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#111827',
    lineHeight: 1.3,
  },
  referenceDetails: {
    fontSize: 9,
    color: '#4b5563',
    marginTop: 2,
    wordWrap: 'break-word',
    hyphens: 'auto',
    lineHeight: 1.3,
  },
});

interface PDFDocumentProps {
  data: CVData | ResumeData;
  type: 'cv' | 'resume';
}

const PDFDocument: React.FC<PDFDocumentProps> = ({ data, type }) => {
  const isCV = type === 'cv';
  const cvData = data as CVData;
  const resumeData = data as ResumeData;

  const renderContactInfo = () => {
    const personalInfo = isCV ? cvData.personalInfo : resumeData.personalInfo;
    return (
      <View style={styles.contactInfo}>
        {/* First Row */}
        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <MailIcon size={10} color="#ffffff" />
            <Text style={[styles.contactText, { marginLeft: 6 }]}>{personalInfo.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <PhoneIcon size={10} color="#ffffff" />
            <Text style={[styles.contactText, { marginLeft: 6 }]}>{personalInfo.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <MapPinIcon size={10} color="#ffffff" />
            <Text style={[styles.contactText, { marginLeft: 6 }]}>{(personalInfo as Record<string, string>).address || (personalInfo as Record<string, string>).location}</Text>
          </View>
        </View>
        {/* Second Row */}
        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <LinkedinIcon size={10} color="#ffffff" />
            <Text style={[styles.contactText, { marginLeft: 6 }]}>{personalInfo.linkedin}</Text>
          </View>
          <View style={styles.contactItem}>
            <GithubIcon size={10} color="#ffffff" />
            <Text style={[styles.contactText, { marginLeft: 6 }]}>{personalInfo.github}</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderEducation = () => {
    if (isCV) {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          {cvData.education.map((edu, index) => (
            <View key={index} style={styles.subsection}>
              <Text style={styles.itemTitle}>{edu.degree}</Text>
              <Text style={styles.itemSubtitle}>{edu.institution}</Text>
              <Text style={styles.itemDescription}>{edu.focus}</Text>
              
              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <View style={styles.subsection}>
                  <Text style={[styles.subsectionTitle, { marginBottom: 2 }]}>Relevant Coursework:</Text>
                  {edu.coursework.map((course, idx) => {
                    if (course === "") return null;
                    if (course.endsWith(":")) {
                      const nextCourse = edu.coursework[idx + 1];
                      return (
                        <Text key={idx} style={styles.courseCategory}>
                          {course}
                          {nextCourse && !nextCourse.endsWith(":") && ` ${nextCourse}`}
                        </Text>
                      );
                    } else if (idx > 0 && edu.coursework[idx - 1].endsWith(":")) {
                      return null; // Skip as it's already displayed inline
                    } else {
                      return (
                        <Text key={idx} style={[styles.courseItem, { paddingLeft: 0 }]}>{course}</Text>
                      );
                    }
                  })}
                </View>
              )}
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>EDUCATION</Text>
          <View style={styles.subsection}>
            <Text style={styles.itemTitle}>{resumeData.education.degree}</Text>
            <Text style={styles.itemSubtitle}>{resumeData.education.institution}</Text>
            <Text style={styles.itemDescription}>Specialization: Data Science, Artificial Intelligence & Software Engineering</Text>
            
            {/* Coursework for Resume */}
            {resumeData.education.relevantCoursework && resumeData.education.relevantCoursework.length > 0 && (
              <View style={styles.subsection}>
                <Text style={[styles.subsectionTitle, { marginBottom: 2 }]}>Relevant Coursework:</Text>
                {resumeData.education.relevantCoursework.map((course, idx) => {
                  if (course === "") return null;
                  if (course.endsWith(":")) {
                    const nextCourse = resumeData.education.relevantCoursework?.[idx + 1];
                    return (
                      <Text key={idx} style={styles.courseCategory}>
                        {course}
                        {nextCourse && !nextCourse.endsWith(":") && ` ${nextCourse}`}
                      </Text>
                    );
                  } else if (idx > 0 && resumeData.education.relevantCoursework?.[idx - 1]?.endsWith(":")) {
                    return null; // Skip as it's already displayed inline
                  } else {
                    return (
                      <Text key={idx} style={[styles.courseItem, { paddingLeft: 0 }]}>{course}</Text>
                    );
                  }
                })}
              </View>
            )}
          </View>
        </View>
      );
    }
  };

  const renderExperience = () => {
    if (isCV) {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {cvData.researchExperience.map((exp, index) => (
            <View key={index} style={styles.subsection}>
              <View style={styles.twoColumn}>
                <View style={styles.leftColumn}>
                  <Text style={styles.itemTitle}>{exp.title}</Text>
                  <Text style={styles.itemSubtitle}>{exp.institution}</Text>
                </View>
                <View style={styles.rightColumn}>
                  <Text style={styles.dateText}>{exp.period}</Text>
                  <Text style={styles.locationText}>On-site</Text>
                </View>
              </View>
              <Text style={styles.experienceDescription}>{exp.description}</Text>
            </View>
          ))}
        </View>
      );
    } else {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {resumeData.experience.map((exp, index) => (
            <View key={index} style={styles.subsection}>
              <View style={styles.twoColumn}>
                <View style={styles.leftColumn}>
                  <Text style={styles.itemTitle}>{exp.title}</Text>
                  <Text style={styles.itemSubtitle}>{exp.company}</Text>
                </View>
                <View style={styles.rightColumn}>
                  <Text style={styles.dateText}>{exp.period}</Text>
                  <Text style={styles.locationText}>{exp.location}</Text>
                </View>
              </View>
              <Text style={styles.experienceDescription}>{exp.description}</Text>
              {exp.achievements.length > 0 && (
                <View style={styles.bulletList}>
                  {exp.achievements.map((achievement, idx) => (
                    <Text key={idx} style={styles.bulletItem}>• {achievement}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      );
    }
  };

  const renderSkills = () => {
    if (isCV) {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Competencies</Text>
          <View style={styles.subsection}>
            <Text style={styles.courseCategory}>Programming Languages: Python, JavaScript, Java, PHP, SQL, Bash</Text>
            <Text style={styles.courseCategory}>Frameworks & Libraries: React, Node.js, Express, Flask, Django, TypeScript</Text>
            <Text style={styles.courseCategory}>Cloud & DevOps: Kubernetes, OpenShift, Docker (Basic), GitHub Actions</Text>
            <Text style={styles.courseCategory}>Systems & Tools: Linux, Windows Server, Microsoft 365, MongoDB, MySQL</Text>
            <Text style={styles.courseCategory}>Data & AI: Machine Learning, AI Fundamentals, Data Engineering, Data Visualization</Text>
            <Text style={styles.courseCategory}>Cybersecurity: Intro to Risk Management, Secure Networking</Text>
            <Text style={styles.courseCategory}>Soft Skills: Communication, Critical Thinking, Teamwork, Presentation, Leadership, Problem Solving</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Competencies</Text>
          <View style={styles.subsection}>
            <Text style={styles.courseCategory}>Programming Languages: Python, JavaScript, Java, PHP, SQL, Bash</Text>
            <Text style={styles.courseCategory}>Frameworks & Libraries: React, Node.js, Express, Flask, Django, TypeScript</Text>
            <Text style={styles.courseCategory}>Cloud & DevOps: Kubernetes, OpenShift, Docker (Basic), GitHub Actions</Text>
            <Text style={styles.courseCategory}>Systems & Tools: Linux, Windows Server, Microsoft 365, MongoDB, MySQL</Text>
            <Text style={styles.courseCategory}>Data & AI: Machine Learning, AI Fundamentals, Data Engineering, Data Visualization</Text>
            <Text style={styles.courseCategory}>Cybersecurity: Intro to Risk Management, Secure Networking</Text>
            <Text style={styles.courseCategory}>Soft Skills: Communication, Critical Thinking, Teamwork, Presentation, Leadership, Problem Solving</Text>
          </View>
        </View>
      );
    }
  };

  const renderProjects = () => {
    if (isCV) {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects & Technical Solutions</Text>
          <View style={styles.subsection}>
            <Text style={styles.bulletItem}>• MyMental – Developed a responsive mental health chatbot using OpenAI API and MongoDB, providing users with secure, anonymous access to resources.</Text>
            <Text style={styles.bulletItem}>• MyChat – Built a PHP-based bulk messaging system with secure transmission protocols, ideal for large-scale internal communication.</Text>
            <Text style={styles.bulletItem}>• Antique Café CRM – Designed a Node.js and MySQL-based customer relationship platform with real-time analytics and document exports.</Text>
            <Text style={styles.bulletItem}>• Telecom Churn Prediction – Utilized Pandas and Scikit-learn to construct and evaluate a predictive model identifying customer churn patterns.</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects & Technical Solutions</Text>
          <View style={styles.subsection}>
            <Text style={styles.bulletItem}>• MyMental – Developed a responsive mental health chatbot using OpenAI API and MongoDB, providing users with secure, anonymous access to resources.</Text>
            <Text style={styles.bulletItem}>• MyChat – Built a PHP-based bulk messaging system with secure transmission protocols, ideal for large-scale internal communication.</Text>
            <Text style={styles.bulletItem}>• Antique Café CRM – Designed a Node.js and MySQL-based customer relationship platform with real-time analytics and document exports.</Text>
            <Text style={styles.bulletItem}>• Telecom Churn Prediction – Utilized Pandas and Scikit-learn to construct and evaluate a predictive model identifying customer churn patterns.</Text>
          </View>
        </View>
      );
    }
  };

  const renderCertifications = () => {
    const certifications = isCV ? cvData.certifications : resumeData.certifications;
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications & Professional Development</Text>
        {certifications.map((cert, index) => (
          <View key={index} style={styles.subsection}>
            <Text style={styles.bulletItem}>• {cert.name} – {cert.issuer} ({cert.date})</Text>
          </View>
        ))}
        {isCV && (
          <View style={styles.subsection}>
            <Text style={styles.bulletItem}>• Topics: Mathematics, Business, Programming, Branding</Text>
          </View>
        )}
      </View>
    );
  };

  const renderReferences = () => {
    if (isCV && cvData.references) {
      return (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>References</Text>
          {cvData.references.map((ref, index) => (
            <View key={index} style={styles.referenceItem}>
              <Text style={styles.referenceName}>{ref.name} | {ref.title} – {ref.institution}</Text>
              <Text style={styles.referenceDetails}>{ref.email} | {ref.phone}</Text>
              {index === 0 && (
                <Text style={styles.itemDescription}>Recommendation available upon request</Text>
              )}
            </View>
          ))}
        </View>
      );
    }
    return null;
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerName}>
            {isCV ? cvData.personalInfo.name : resumeData.personalInfo.name}
          </Text>
          <Text style={styles.headerTitle}>
            {isCV ? cvData.personalInfo.title : resumeData.personalInfo.title}
          </Text>
          {renderContactInfo()}
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summaryText}>
            {isCV ? cvData.professionalSummary : resumeData.professionalSummary}
          </Text>
        </View>

        {/* Education */}
        {renderEducation()}

        {/* Experience */}
        {renderExperience()}

        {/* Skills */}
        {renderSkills()}

        {/* Projects */}
        {renderProjects()}

        {/* Certifications */}
        {renderCertifications()}

        {/* References */}
        {renderReferences()}
      </Page>
    </Document>
  );
};

export default PDFDocument;
