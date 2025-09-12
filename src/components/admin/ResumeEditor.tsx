'use client';

import { useState } from 'react';
import { Plus, Trash2, Edit3 } from 'lucide-react';
import { ResumeData } from '@/data/resumeData';

interface ResumeEditorProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
}

export default function ResumeEditor({ resumeData, setResumeData }: ResumeEditorProps) {
  // const [isEditing, setIsEditing] = useState(false);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState<string>('');

  const startEditing = (field: string, value: string) => {
    setEditingField(field);
    setTempValue(value);
    // setIsEditing(true);
  };

  const saveEdit = () => {
    if (editingField) {
      const fieldParts = editingField.split('.');
      const newData = { ...resumeData };
      
      if (fieldParts.length === 2) {
        const [parent, child] = fieldParts;
        if (parent === 'personalInfo' && child in newData.personalInfo) {
          (newData.personalInfo as Record<string, string>)[child] = tempValue;
        }
      } else if (fieldParts.length === 3) {
        const [parent, child] = fieldParts;
        if (parent === 'technicalSkills' && child in newData.technicalSkills) {
          const skills = newData.technicalSkills as Record<string, string[]>;
          if (Array.isArray(skills[child])) {
            // This is for array fields, but we're editing a single value
            // This case might not be used in the current implementation
          }
        }
      }
      
      setResumeData(newData);
    }
    // setIsEditing(false);
    setEditingField(null);
    setTempValue('');
  };

  const cancelEdit = () => {
    // setIsEditing(false);
    setEditingField(null);
    setTempValue('');
  };

  const addItem = (arrayField: string) => {
    const newData = { ...resumeData };
    const fieldParts = arrayField.split('.');
    
    if (fieldParts.length === 2) {
      const [parent, child] = fieldParts;
      if (parent === 'technicalSkills' && child in newData.technicalSkills) {
        const skills = newData.technicalSkills as Record<string, string[]>;
        if (Array.isArray(skills[child])) {
          skills[child].push('');
        }
      }
    }
    
    setResumeData(newData);
  };

  const removeItem = (arrayField: string, index: number) => {
    const newData = { ...resumeData };
    const fieldParts = arrayField.split('.');
    
    if (fieldParts.length === 2) {
      const [parent, child] = fieldParts;
      if (parent === 'technicalSkills' && child in newData.technicalSkills) {
        const skills = newData.technicalSkills as Record<string, string[]>;
        if (Array.isArray(skills[child])) {
          skills[child].splice(index, 1);
        }
      }
    }
    
    setResumeData(newData);
  };

  const updateArrayItem = (arrayField: string, index: number, value: string) => {
    const newData = { ...resumeData };
    const fieldParts = arrayField.split('.');
    
    if (fieldParts.length === 2) {
      const [parent, child] = fieldParts;
      if (parent === 'technicalSkills' && child in newData.technicalSkills) {
        const skills = newData.technicalSkills as Record<string, string[]>;
        if (Array.isArray(skills[child])) {
          skills[child][index] = value;
        }
      }
    }
    
    setResumeData(newData);
  };

  const EditableField = ({ 
    field, 
    value, 
    label, 
    multiline = false 
  }: { 
    field: string; 
    value: string; 
    label: string; 
    multiline?: boolean;
  }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      {editingField === field ? (
        <div className="space-y-2">
          {multiline ? (
            <textarea
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              rows={4}
            />
          ) : (
            <input
              type="text"
              value={tempValue}
              onChange={(e) => setTempValue(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          )}
          <div className="flex space-x-2">
            <button
              onClick={saveEdit}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <span className="text-gray-900 dark:text-white">{value}</span>
          <button
            onClick={() => startEditing(field, value)}
            className="p-2 text-blue-600 hover:text-blue-800"
          >
            <Edit3 className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );

  const EditableArray = ({ 
    field, 
    items, 
    label 
  }: { 
    field: string; 
    items: string[]; 
    label: string; 
  }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
        <button
          onClick={() => addItem(field)}
          className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Item
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              value={item}
              onChange={(e) => updateArrayItem(field, index, e.target.value)}
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
            <button
              onClick={() => removeItem(field, index)}
              className="p-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Personal Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EditableField
            field="personalInfo.name"
            value={resumeData.personalInfo.name}
            label="Full Name"
          />
          <EditableField
            field="personalInfo.title"
            value={resumeData.personalInfo.title}
            label="Professional Title"
          />
          <EditableField
            field="personalInfo.email"
            value={resumeData.personalInfo.email}
            label="Email"
          />
          <EditableField
            field="personalInfo.phone"
            value={resumeData.personalInfo.phone}
            label="Phone"
          />
          <EditableField
            field="personalInfo.location"
            value={resumeData.personalInfo.location}
            label="Location"
          />
          <EditableField
            field="personalInfo.github"
            value={resumeData.personalInfo.github}
            label="GitHub"
          />
          <EditableField
            field="personalInfo.linkedin"
            value={resumeData.personalInfo.linkedin}
            label="LinkedIn"
          />
        </div>
      </div>

      {/* Professional Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Professional Summary
        </h2>
        <EditableField
          field="professionalSummary"
          value={resumeData.professionalSummary}
          label="Summary"
          multiline
        />
      </div>

      {/* Technical Skills */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EditableArray
            field="technicalSkills.programming"
            items={resumeData.technicalSkills.programming}
            label="Programming Languages"
          />
          <EditableArray
            field="technicalSkills.tools"
            items={resumeData.technicalSkills.tools}
            label="Tools"
          />
          <EditableArray
            field="technicalSkills.frameworks"
            items={resumeData.technicalSkills.frameworks}
            label="Frameworks"
          />
        </div>
      </div>

      {/* Experience */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Professional Experience
        </h2>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={exp.title}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.experience[index].title = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Job Title"
              />
              <input
                type="text"
                value={exp.company}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.experience[index].company = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Company"
              />
              <input
                type="text"
                value={exp.period}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.experience[index].period = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Period"
              />
              <input
                type="text"
                value={exp.location}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.experience[index].location = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Location"
              />
            </div>
            <textarea
              value={exp.description}
              onChange={(e) => {
                const newData = { ...resumeData };
                newData.experience[index].description = e.target.value;
                setResumeData(newData);
              }}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
              rows={3}
              placeholder="Job Description"
            />
            <EditableArray
              field={`experience.${index}.achievements`}
              items={exp.achievements}
              label="Key Achievements"
            />
            <button
              onClick={() => {
                const newData = { ...resumeData };
                newData.experience.splice(index, 1);
                setResumeData(newData);
              }}
              className="mt-2 p-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newData = { ...resumeData };
            newData.experience.push({
              title: '',
              company: '',
              period: '',
              location: '',
              description: '',
              achievements: [],
              technologies: []
            });
            setResumeData(newData);
          }}
          className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Experience
        </button>
      </div>

      {/* Education */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <EditableField
            field="education.degree"
            value={resumeData.education.degree}
            label="Degree"
          />
          <EditableField
            field="education.institution"
            value={resumeData.education.institution}
            label="Institution"
          />
          <EditableField
            field="education.period"
            value={resumeData.education.period}
            label="Period"
          />
          <EditableField
            field="education.gpa"
            value={resumeData.education.gpa || ''}
            label="GPA"
          />
        </div>
        <EditableArray
          field="education.relevantCoursework"
          items={resumeData.education.relevantCoursework || []}
          label="Relevant Coursework"
        />
      </div>

      {/* Projects */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Key Projects
        </h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={project.name}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.projects[index].name = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Project Name"
              />
              <input
                type="text"
                value={project.period}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.projects[index].period = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Period"
              />
            </div>
            <textarea
              value={project.description}
              onChange={(e) => {
                const newData = { ...resumeData };
                newData.projects[index].description = e.target.value;
                setResumeData(newData);
              }}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
              rows={3}
              placeholder="Project Description"
            />
            <EditableArray
              field={`projects.${index}.technologies`}
              items={project.technologies}
              label="Technologies Used"
            />
            <EditableArray
              field={`projects.${index}.achievements`}
              items={project.achievements}
              label="Key Achievements"
            />
            <button
              onClick={() => {
                const newData = { ...resumeData };
                newData.projects.splice(index, 1);
                setResumeData(newData);
              }}
              className="mt-2 p-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newData = { ...resumeData };
            newData.projects.push({
              name: '',
              period: '',
              description: '',
              technologies: [],
              achievements: []
            });
            setResumeData(newData);
          }}
          className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Project
        </button>
      </div>

      {/* Certifications */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Certifications
        </h2>
        {resumeData.certifications.map((cert, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                value={cert.name}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.certifications[index].name = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Certification Name"
              />
              <input
                type="text"
                value={cert.issuer}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.certifications[index].issuer = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Issuer"
              />
              <input
                type="text"
                value={cert.date}
                onChange={(e) => {
                  const newData = { ...resumeData };
                  newData.certifications[index].date = e.target.value;
                  setResumeData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Date"
              />
            </div>
            <button
              onClick={() => {
                const newData = { ...resumeData };
                newData.certifications.splice(index, 1);
                setResumeData(newData);
              }}
              className="mt-2 p-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newData = { ...resumeData };
            newData.certifications.push({
              name: '',
              issuer: '',
              date: ''
            });
            setResumeData(newData);
          }}
          className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Certification
        </button>
      </div>
    </div>
  );
}
