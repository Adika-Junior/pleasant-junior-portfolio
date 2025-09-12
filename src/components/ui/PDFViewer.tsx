'use client';

// import { useState } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';

interface PDFViewerProps {
  src: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function PDFViewer({ src, title, isOpen, onClose }: PDFViewerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h3 className="text-2xl font-heading text-luxury text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="flex items-center space-x-2">
            <a
              href={src}
              download
              className="p-2 rounded-full glass-button hover:bg-white/20 transition-all duration-300 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              title="Download PDF"
            >
              <Download className="h-5 w-5" />
            </a>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-button hover:bg-white/20 transition-all duration-300 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              title="Open in new tab"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full glass-button hover:bg-white/20 transition-all duration-300 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              title="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* PDF Content */}
        <div className="p-6">
          <iframe
            src={`${src}#toolbar=0&navpanes=0&scrollbar=1`}
            className="w-full h-[70vh] border-0 rounded-xl shadow-lg"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
