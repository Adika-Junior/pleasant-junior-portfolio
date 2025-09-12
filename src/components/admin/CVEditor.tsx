'use client';

import { useState } from 'react';
import { Plus, Trash2, Edit3 } from 'lucide-react';
import { CVData } from '@/data/cvData';

interface CVEditorProps {
  cvData: CVData;
  setCvData: (data: CVData) => void;
}

export default function CVEditor({ cvData, setCvData }: CVEditorProps) {
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
      const newData = { ...cvData };
      
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
      
      setCvData(newData);
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
    const newData = { ...cvData };
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
    
    setCvData(newData);
  };

  const removeItem = (arrayField: string, index: number) => {
    const newData = { ...cvData };
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
    
    setCvData(newData);
  };

  const updateArrayItem = (arrayField: string, index: number, value: string) => {
    const newData = { ...cvData };
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
    
    setCvData(newData);
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
            value={cvData.personalInfo.name}
            label="Full Name"
          />
          <EditableField
            field="personalInfo.title"
            value={cvData.personalInfo.title}
            label="Title"
          />
          <EditableField
            field="personalInfo.email"
            value={cvData.personalInfo.email}
            label="Email"
          />
          <EditableField
            field="personalInfo.phone"
            value={cvData.personalInfo.phone}
            label="Phone"
          />
          <EditableField
            field="personalInfo.address"
            value={cvData.personalInfo.address}
            label="Address"
          />
          <EditableField
            field="personalInfo.github"
            value={cvData.personalInfo.github}
            label="GitHub"
          />
          <EditableField
            field="personalInfo.linkedin"
            value={cvData.personalInfo.linkedin}
            label="LinkedIn"
          />
          <EditableField
            field="personalInfo.website"
            value={cvData.personalInfo.website}
            label="Website"
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
          value={cvData.professionalSummary}
          label="Summary"
          multiline
        />
      </div>

      {/* Education */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Education
        </h2>
        {cvData.education.map((edu, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.education[index].degree = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Degree"
              />
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.education[index].institution = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Institution"
              />
              <input
                type="text"
                value={edu.period}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.education[index].period = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Period"
              />
              <input
                type="text"
                value={edu.location}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.education[index].location = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Location"
              />
              <input
                type="text"
                value={edu.gpa}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.education[index].gpa = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="GPA"
              />
              <input
                type="text"
                value={edu.focus}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.education[index].focus = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Focus Areas"
              />
            </div>
            <EditableArray
              field={`education.${index}.achievements`}
              items={edu.achievements}
              label="Achievements"
            />
            <EditableArray
              field={`education.${index}.coursework`}
              items={edu.coursework}
              label="Relevant Coursework"
            />
            <button
              onClick={() => {
                const newData = { ...cvData };
                newData.education.splice(index, 1);
                setCvData(newData);
              }}
              className="mt-2 p-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newData = { ...cvData };
            newData.education.push({
              degree: '',
              period: '',
              institution: '',
              location: '',
              gpa: '',
              focus: '',
              achievements: [],
              coursework: []
            });
            setCvData(newData);
          }}
          className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Education
        </button>
      </div>

      {/* Research Experience */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Research Experience
        </h2>
        {cvData.researchExperience.map((research, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                value={research.title}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.researchExperience[index].title = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Research Title"
              />
              <input
                type="text"
                value={research.period}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.researchExperience[index].period = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Period"
              />
              <input
                type="text"
                value={research.institution}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.researchExperience[index].institution = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Institution"
              />
              <input
                type="text"
                value={research.supervisor}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.researchExperience[index].supervisor = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Supervisor"
              />
            </div>
            <textarea
              value={research.description}
              onChange={(e) => {
                const newData = { ...cvData };
                newData.researchExperience[index].description = e.target.value;
                setCvData(newData);
              }}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white mb-4"
              rows={3}
              placeholder="Research Description"
            />
            <EditableArray
              field={`researchExperience.${index}.publications`}
              items={research.publications}
              label="Publications"
            />
            <button
              onClick={() => {
                const newData = { ...cvData };
                newData.researchExperience.splice(index, 1);
                setCvData(newData);
              }}
              className="mt-2 p-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newData = { ...cvData };
            newData.researchExperience.push({
              title: '',
              period: '',
              institution: '',
              supervisor: '',
              description: '',
              publications: []
            });
            setCvData(newData);
          }}
          className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Research Experience
        </button>
      </div>

      {/* Technical Skills */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EditableArray
            field="technicalSkills.programmingLanguages"
            items={cvData.technicalSkills.programmingLanguages}
            label="Programming Languages"
          />
          <EditableArray
            field="technicalSkills.frameworks"
            items={cvData.technicalSkills.frameworks}
            label="Frameworks"
          />
          <EditableArray
            field="technicalSkills.tools"
            items={cvData.technicalSkills.tools}
            label="Tools"
          />
          <EditableArray
            field="technicalSkills.databases"
            items={cvData.technicalSkills.databases}
            label="Databases"
          />
          <EditableArray
            field="technicalSkills.cloud"
            items={cvData.technicalSkills.cloud}
            label="Cloud Platforms"
          />
        </div>
      </div>

      {/* Publications */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Publications
        </h2>
        {cvData.publications.map((pub, index) => (
          <div key={index} className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <input
                type="text"
                value={pub.title}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.publications[index].title = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Publication Title"
              />
              <input
                type="text"
                value={pub.authors}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.publications[index].authors = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Authors"
              />
              <input
                type="text"
                value={pub.journal}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.publications[index].journal = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Journal"
              />
              <input
                type="text"
                value={pub.year}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.publications[index].year = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="Year"
              />
              <input
                type="text"
                value={pub.doi}
                onChange={(e) => {
                  const newData = { ...cvData };
                  newData.publications[index].doi = e.target.value;
                  setCvData(newData);
                }}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                placeholder="DOI"
              />
            </div>
            <button
              onClick={() => {
                const newData = { ...cvData };
                newData.publications.splice(index, 1);
                setCvData(newData);
              }}
              className="mt-2 p-2 text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            const newData = { ...cvData };
            newData.publications.push({
              title: '',
              authors: '',
              journal: '',
              year: '',
              doi: '',
              type: 'journal' as const
            });
            setCvData(newData);
          }}
          className="flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Publication
        </button>
      </div>
    </div>
  );
}
