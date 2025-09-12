'use client';

import React, { useState, useEffect } from 'react';
import { Download, Printer } from 'lucide-react';

interface SimplePDFGeneratorProps {
  contentRef: React.RefObject<HTMLDivElement>;
  title: string;
  filename: string;
}

const SimplePDFGenerator: React.FC<SimplePDFGeneratorProps> = ({
  contentRef,
  title,
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

      // Set up the element for capture
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
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: element.scrollWidth,
        height: element.scrollHeight,
      });

      // Remove the temporary element
      document.body.removeChild(element);

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the PDF
      pdf.save(`${filename}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const printDocument = () => {
    if (!contentRef.current || !isClient) return;

    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const element = contentRef.current.cloneNode(true) as HTMLElement;
    
    // Hide elements that shouldn't be printed
    const elementsToHide = element.querySelectorAll(
      'button, .action-buttons, .glass-button, nav, header, .sidebar, .hanging-sidebar'
    );
    elementsToHide.forEach(el => {
      (el as HTMLElement).style.display = 'none';
    });

    // Set up print styles
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
    element.style.fontSize = '12px';
    element.style.lineHeight = '1.4';
    element.style.padding = '20px';
    element.style.margin = '0';

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; }
            @media print {
              body { margin: 0; padding: 0; }
              @page { margin: 0.5in; }
            }
          </style>
        </head>
        <body>
          ${element.outerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
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
    <div className="flex gap-4 justify-center mb-8">
      <button
        onClick={generatePDF}
        disabled={isGenerating}
        className="inline-flex items-center px-6 py-3 glass-button text-base font-medium rounded-lg disabled:opacity-50"
      >
        <Download className="mr-2 h-5 w-5" />
        {isGenerating ? 'Generating...' : 'Download PDF'}
      </button>
      <button
        onClick={printDocument}
        className="inline-flex items-center px-6 py-3 glass-button text-base font-medium rounded-lg"
      >
        <Printer className="mr-2 h-5 w-5" />
        Print Document
      </button>
    </div>
  );
};

export default SimplePDFGenerator;
