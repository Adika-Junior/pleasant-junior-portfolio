'use client';

import { ReactNode, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import HangingSidebar from './HangingSidebar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarCollapseChange = (isCollapsed: boolean) => {
    setIsSidebarCollapsed(isCollapsed);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <HangingSidebar onCollapseChange={handleSidebarCollapseChange} />
      <main className={`pt-16 min-h-screen transition-all duration-300 ${
        isSidebarCollapsed ? 'lg:pl-24' : 'lg:pl-80'
      }`}>
        {children}
      </main>
      <Footer isSidebarCollapsed={isSidebarCollapsed} />
    </div>
  );
}
