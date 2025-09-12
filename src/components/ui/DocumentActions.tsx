'use client';

import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

interface DocumentActionsProps {
  contentRef: React.RefObject<HTMLDivElement>;
  title: string;
  filename: string;
}

const DocumentActions: React.FC<DocumentActionsProps> = ({
  contentRef,
  filename
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generatePDF = async () => {
    if (!contentRef.current || !isClient) return;

    setIsGenerating(true);
    try {
      // Dynamically import jsPDF and html2canvas only on client side
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import('jspdf'),
        import('html2canvas')
      ]);

      // Create a clone of the content to avoid affecting the original
      const element = contentRef.current.cloneNode(true) as HTMLElement;
      
      // Hide elements that shouldn't be in PDF
      const elementsToHide = element.querySelectorAll(
        'button, .action-buttons, .glass-button, nav, header, .sidebar, .hanging-sidebar'
      );
      elementsToHide.forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });

      // Remove problematic CSS classes and replace with simple styles
      const allElements = element.querySelectorAll('*');
      allElements.forEach((el) => {
        // Only process elements that have className property and it's a string
        if (el instanceof HTMLElement && el.className && typeof el.className === 'string') {
          // Remove gradient classes and replace with solid colors
          el.className = el.className
            .replace(/bg-gradient-to-[a-z-]+/g, '')
            .replace(/from-[a-z0-9-]+/g, '')
            .replace(/to-[a-z0-9-]+/g, '')
            .replace(/via-[a-z0-9-]+/g, '');
        }
        
        // Set simple background colors for elements that had gradients
        if (el instanceof HTMLElement) {
          if (el.classList.contains('bg-blue-600') || el.classList.contains('bg-blue-700')) {
            el.style.backgroundColor = '#2563eb';
            el.style.color = '#ffffff';
          }
          if (el.classList.contains('text-white')) {
            el.style.color = '#ffffff';
          }
          if (el.classList.contains('bg-white')) {
            el.style.backgroundColor = '#ffffff';
          }
          if (el.classList.contains('text-gray-900')) {
            el.style.color = '#111827';
          }
          if (el.classList.contains('text-gray-700')) {
            el.style.color = '#374151';
          }
          if (el.classList.contains('text-gray-600')) {
            el.style.color = '#4b5563';
          }
          if (el.classList.contains('bg-gray-50')) {
            el.style.backgroundColor = '#f9fafb';
          }
          if (el.classList.contains('bg-gray-100')) {
            el.style.backgroundColor = '#f3f4f6';
          }
          if (el.classList.contains('border-blue-600')) {
            el.style.borderColor = '#2563eb';
          }
          if (el.classList.contains('border-gray-300')) {
            el.style.borderColor = '#d1d5db';
          }
        }
      });

      // Set up the element for capture
      element.classList.add('pdf-generation');
      element.style.position = 'absolute';
      element.style.left = '-9999px';
      element.style.top = '0';
      element.style.width = '210mm'; // A4 width
      element.style.backgroundColor = 'white';
      element.style.color = 'black';
      element.style.fontSize = '12px';
      element.style.lineHeight = '1.4';
      element.style.padding = '20mm';
      element.style.boxSizing = 'border-box';
      
      document.body.appendChild(element);

      // Capture the element
      const canvas = await html2canvas(element, {
        scale: 1.5,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#ffffff',
        width: element.scrollWidth,
        height: element.scrollHeight,
        logging: false,
        removeContainer: true,
        foreignObjectRendering: false,
        ignoreElements: (element) => {
          // Ignore elements that might cause issues
          return element.classList.contains('glass-button') || 
                 element.classList.contains('action-buttons') ||
                 element.tagName === 'BUTTON';
        }
      });

      // Remove the temporary element
      document.body.removeChild(element);

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      // const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= 297;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= 297;
      }

      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      
      // Try a simpler approach if the first one fails
      try {
        console.log('Attempting fallback PDF generation...');
        
        // Create a simpler version without complex styling
        const simpleElement = contentRef.current.cloneNode(true) as HTMLElement;
        
        // Remove all classes and apply basic styling
        const allElements = simpleElement.querySelectorAll('*');
        allElements.forEach((el) => {
          // Only process elements that have className property and it's a string
          if (el instanceof HTMLElement) {
            if (el.className && typeof el.className === 'string') {
              el.className = '';
            }
            el.style.margin = '0';
            el.style.padding = '0';
            el.style.border = 'none';
            el.style.background = 'none';
          }
        });
        
        // Apply basic styling to the main element
        simpleElement.classList.add('pdf-generation');
        simpleElement.style.backgroundColor = 'white';
        simpleElement.style.color = 'black';
        simpleElement.style.fontFamily = 'Arial, sans-serif';
        simpleElement.style.fontSize = '12px';
        simpleElement.style.lineHeight = '1.4';
        simpleElement.style.padding = '20px';
        simpleElement.style.width = '210mm';
        
        // Hide buttons and navigation
        const buttons = simpleElement.querySelectorAll('button, nav, .action-buttons');
        buttons.forEach(btn => (btn as HTMLElement).style.display = 'none');
        
        simpleElement.style.position = 'absolute';
        simpleElement.style.left = '-9999px';
        simpleElement.style.top = '0';
        
        document.body.appendChild(simpleElement);
        
        const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
          import('jspdf'),
          import('html2canvas')
        ]);
        
        const canvas = await html2canvas(simpleElement, {
          scale: 1,
          backgroundColor: '#ffffff',
          logging: false
        });
        
        document.body.removeChild(simpleElement);
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210;
        // const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${filename}.pdf`);
        
      } catch (fallbackError) {
        console.error('Fallback PDF generation also failed:', fallbackError);
        alert('Error generating PDF. The content may contain unsupported styling. Please try again or contact support.');
      }
    } finally {
      setIsGenerating(false);
    }
  };


  // Don't render until client-side
  if (!isClient) {
    return (
      <div className="flex gap-4 justify-center mb-8">
        <div className="inline-flex items-center px-6 py-3 glass-button text-base font-medium rounded-lg opacity-50">
          <Download className="mr-2 h-5 w-5" />
          Loading PDF Tools...
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 hover:scale-105 transition-all duration-200 disabled:hover:scale-100"
      >
        <Download className="mr-3 h-6 w-6" />
        {isGenerating ? 'Generating PDF...' : 'Download PDF'}
      </button>
    </div>
  );
};

export default DocumentActions;
