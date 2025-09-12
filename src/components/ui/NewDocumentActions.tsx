'use client';

import React, { useState, useEffect } from 'react';
import { Download, Eye, X } from 'lucide-react';
import { CVData } from '@/data/cvData';
import { ResumeData } from '@/data/resumeData';

interface NewDocumentActionsProps {
  data: CVData | ResumeData;
  type: 'cv' | 'resume';
  filename: string;
}

const NewDocumentActions: React.FC<NewDocumentActionsProps> = ({ data, type, filename }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [PDFComponents, setPDFComponents] = useState<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PDFDownloadLink: React.ComponentType<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PDFViewer: React.ComponentType<any>;
    PDFDocument: React.ComponentType<{ data: CVData | ResumeData; type: 'cv' | 'resume' }>;
  } | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import PDF components only on client side
    const loadPDFComponents = async () => {
      const { PDFDownloadLink, PDFViewer } = await import('@react-pdf/renderer');
      const PDFDocument = (await import('@/components/pdf/ReactPDFGenerator')).default;
      setPDFComponents({ PDFDownloadLink, PDFViewer, PDFDocument });
    };
    loadPDFComponents();
  }, []);

  // const handleDownload = async () => {
  //   try {
  //     const { PDFDownloadLink, PDFViewer } = await import('@react-pdf/renderer');
  //     const PDFDocument = (await import('@/components/pdf/ReactPDFGenerator')).default;
      
  //     // Create a temporary link to trigger download
  //     const link = document.createElement('a');
  //     link.href = `data:application/pdf;base64,${btoa('PDF content')}`;
  //     link.download = `${filename}.pdf`;
  //     link.click();
  //   } catch (error) {
  //     console.error('Error downloading PDF:', error);
  //   }
  // };

  if (!isClient || !PDFComponents) {
    return (
      <div className="flex justify-center gap-4 mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-gray-400 text-white text-base font-medium rounded-lg opacity-50">
          <Download className="mr-2 h-5 w-5" />
          Loading PDF Tools...
        </div>
      </div>
    );
  }

  const { PDFDownloadLink, PDFViewer, PDFDocument } = PDFComponents;

  return (
    <div className="flex justify-center gap-4 mb-8">
      {/* Preview Button */}
      <button
        onClick={() => setShowPreview(true)}
        className="inline-flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-base font-medium rounded-lg transition-colors duration-200"
      >
        <Eye className="mr-2 h-5 w-5" />
        Preview PDF
      </button>

      {/* Download Button */}
      <PDFDownloadLink
        document={<PDFDocument data={data} type={type} />}
        fileName={`${filename}.pdf`}
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-700 dark:to-blue-800 text-white text-base font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        {({ loading }: { loading: boolean }) => (
          <>
            <Download className="mr-2 h-5 w-5" />
            {loading ? 'Generating PDF...' : 'Download PDF'}
          </>
        )}
      </PDFDownloadLink>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 transition-opacity"
              onClick={() => setShowPreview(false)}
            />
            
            {/* Modal */}
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  PDF Preview - {type === 'cv' ? 'Curriculum Vitae' : 'Resume'}
                </h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {/* PDF Viewer */}
              <div className="h-[calc(90vh-80px)]">
                <PDFViewer width="100%" height="100%">
                  <PDFDocument data={data} type={type} />
                </PDFViewer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewDocumentActions;
