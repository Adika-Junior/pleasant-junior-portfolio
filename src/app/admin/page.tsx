'use client';

import { useState, useEffect } from 'react';
import { Save, Eye, ArrowLeft, FileText, Briefcase, Lock } from 'lucide-react';
import Link from 'next/link';
import { ResumeData, defaultResumeData } from '@/data/resumeData';
import { CVData, defaultCVData } from '@/data/cvData';
import AdminAuth from '@/components/auth/AdminAuth';
import CVEditor from '@/components/admin/CVEditor';
import ResumeEditor from '@/components/admin/ResumeEditor';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'cv' | 'resume'>('cv');
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [cvData, setCvData] = useState<CVData>(defaultCVData);

  useEffect(() => {
    // Check authentication
    const isAuth = sessionStorage.getItem('adminAuthenticated') === 'true';
    setIsAuthenticated(isAuth);

    // Load saved data from localStorage if available
    const savedResumeData = localStorage.getItem('resumeData');
    if (savedResumeData) {
      setResumeData(JSON.parse(savedResumeData));
    }

    const savedCVData = localStorage.getItem('cvData');
    if (savedCVData) {
      setCvData(JSON.parse(savedCVData));
    }
  }, []);

  const saveData = () => {
    if (activeTab === 'cv') {
      localStorage.setItem('cvData', JSON.stringify(cvData));
      alert('CV data saved successfully!');
    } else {
      localStorage.setItem('resumeData', JSON.stringify(resumeData));
      alert('Resume data saved successfully!');
    }
  };

  const resetData = () => {
    if (activeTab === 'cv') {
      setCvData(defaultCVData);
      localStorage.removeItem('cvData');
      alert('CV data reset to default!');
    } else {
      setResumeData(defaultResumeData);
      localStorage.removeItem('resumeData');
      alert('Resume data reset to default!');
    }
  };

  const logout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    setIsAuthenticated(false);
  };


  // Show authentication if not authenticated
  if (!isAuthenticated) {
    return <AdminAuth onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="inline-flex items-center px-4 py-2 glass-button text-sm font-medium rounded-lg"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Admin Panel
              </h1>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={saveData}
                className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </button>
              <button
                onClick={resetData}
                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Reset to Default
              </button>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                <Lock className="mr-2 h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('cv')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'cv'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <FileText className="inline-block mr-2 h-4 w-4" />
              CV (Academic)
            </button>
            <button
              onClick={() => setActiveTab('resume')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'resume'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              <Briefcase className="inline-block mr-2 h-4 w-4" />
              Resume (Professional)
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'cv' ? (
          <CVEditor cvData={cvData} setCvData={setCvData} />
        ) : (
          <ResumeEditor resumeData={resumeData} setResumeData={setResumeData} />
        )}

        {/* Preview Actions */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/cv"
            className="inline-flex items-center px-6 py-3 glass-button text-base font-medium rounded-lg"
          >
            <Eye className="mr-2 h-5 w-5" />
            Preview CV
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center px-6 py-3 glass-button text-base font-medium rounded-lg"
          >
            <Eye className="mr-2 h-5 w-5" />
            Preview Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
