'use client';

import { FileText, MessageCircle, FolderKanban } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function FloatingButtons() {
  const [, setIsHovering] = useState<string | null>(null);

  const handleDownloadCV = () => {
    // Open CV page in new tab for viewing/downloading
    window.open('/cv', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Get in Touch Button */}
      <Link 
        href="/contact"
        className="group relative flex items-center bg-gradient-to-br from-[#FF8906] to-[#FF6B00] rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(255,137,6,0.6)] transition-all duration-300 hover:scale-105 pr-6 overflow-hidden"
        aria-label="Get in Touch"
        onMouseEnter={() => setIsHovering('contact')}
        onMouseLeave={() => setIsHovering(null)}
      >
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <span className="text-white font-semibold text-sm whitespace-nowrap drop-shadow-md">Contact</span>
      </Link>

      {/* View Projects Button */}
      <Link 
        href="/projects"
        className="group relative flex items-center bg-gradient-to-br from-[#FF8906] to-[#FF6B00] rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(255,137,6,0.6)] transition-all duration-300 hover:scale-105 pr-6 overflow-hidden"
        aria-label="View Projects"
        onMouseEnter={() => setIsHovering('projects')}
        onMouseLeave={() => setIsHovering(null)}
      >
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
          <FolderKanban className="h-6 w-6 text-white" />
        </div>
        <span className="text-white font-semibold text-sm whitespace-nowrap drop-shadow-md">Projects</span>
      </Link>

      {/* View/Download CV Button */}
      <button
        onClick={handleDownloadCV}
        className="group relative flex items-center bg-gradient-to-br from-[#FF8906] to-[#FF6B00] rounded-full shadow-2xl hover:shadow-[0_8px_30px_rgba(255,137,6,0.6)] transition-all duration-300 hover:scale-105 pr-6 overflow-hidden"
        aria-label="View/Download CV"
        onMouseEnter={() => setIsHovering('cv')}
        onMouseLeave={() => setIsHovering(null)}
      >
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
          <FileText className="h-6 w-6 text-white" />
        </div>
        <span className="text-white font-semibold text-sm whitespace-nowrap drop-shadow-md">CV</span>
      </button>
    </div>
  );
}

