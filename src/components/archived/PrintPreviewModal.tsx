'use client';

import React, { useEffect } from 'react';
import { X, Printer, Download } from 'lucide-react';

interface PrintPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
  onDownloadPDF: () => void;
  title: string;
  children: React.ReactNode;
}

export default function PrintPreviewModal({
  isOpen,
  onClose,
  onPrint,
  onDownloadPDF,
  title,
  children
}: PrintPreviewModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('printing');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('printing');
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.classList.remove('printing');
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-b">
          <h2 className="text-xl font-semibold text-gray-900">{title} - Print Preview</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={onDownloadPDF}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </button>
            <button
              onClick={onPrint}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              <Printer className="mr-2 h-4 w-4" />
              Print
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="h-full overflow-auto bg-white">
          <div className="print-preview-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
