'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  Award, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ChevronLeft,
  ChevronRight,
  FileText
} from 'lucide-react';
// import { useTheme } from '@/hooks/useTheme';

interface HangingSidebarProps {
  onCollapseChange?: (isCollapsed: boolean) => void;
}

export default function HangingSidebar({ onCollapseChange }: HangingSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // const { theme } = useTheme();

  const handleCollapseToggle = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);
  };

  useEffect(() => {
    // Show sidebar after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Award },
    { name: 'Certifications', href: '#certifications', icon: FileText },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/pleasant-junior', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/pleasant-junior', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/pleasant_junior', icon: Twitter },
  ];

  if (!isVisible) return null;

  return (
    <aside className={`fixed left-4 top-16 z-40 transition-all duration-300 hidden lg:block ${
      isCollapsed ? 'w-20' : 'w-72'
    }`}>
      <div className={`backdrop-blur-xl bg-white/20 dark:bg-white/5 rounded-2xl transition-all duration-300 relative border border-white/30 dark:border-white/10 shadow-2xl ${
        isCollapsed ? 'px-3 py-6' : 'px-6 py-8'
      }`}>
        {/* Toggle Button */}
        <button
          onClick={handleCollapseToggle}
          className="absolute -right-4 top-8 w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200 z-50"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>

        {/* Profile Section */}
        <div className={`flex items-center mb-8 transition-all duration-300 ${
          isCollapsed ? 'justify-center' : 'space-x-4'
        }`}>
          <div className="relative group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden shadow-lg ring-2 ring-white/20 group-hover:ring-4 group-hover:ring-blue-400/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img
                src="/images/pleasant-junior-profile.jpg"
                alt="Pleasant Junior"
                className="w-full h-full object-cover object-top scale-150 group-hover:scale-175 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg animate-pulse group-hover:animate-bounce"></div>
            {/* Floating particles around profile */}
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
            <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700 delay-100"></div>
            <div className="absolute -bottom-2 -left-3 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-600 delay-200"></div>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-heading text-gray-900 dark:text-white truncate font-semibold drop-shadow-sm">
                Pleasant Junior
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-100 truncate text-premium font-medium drop-shadow-sm">
                CS Student & Developer
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="space-y-2 mb-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-3 rounded-xl transition-all duration-200 group ${
                  isCollapsed ? 'justify-center' : 'space-x-3'
                } hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:scale-105`}
              >
                <Icon className={`h-5 w-5 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 drop-shadow-sm ${
                  isCollapsed ? 'mx-auto' : ''
                }`} />
                {!isCollapsed && (
                  <span className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 text-premium font-medium transition-colors duration-200 drop-shadow-sm">
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Social Links */}
        {!isCollapsed && (
          <div className="space-y-4">
            <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 uppercase tracking-wider drop-shadow-sm">
                Connect
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 group border border-white/40 dark:border-white/20 shadow-lg hover:shadow-xl"
                      aria-label={link.name}
                    >
                      <Icon className="h-5 w-5 text-gray-700 dark:text-gray-200 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Collapsed Social Links */}
        {isCollapsed && (
          <div className="space-y-2">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 group mx-auto border border-white/40 dark:border-white/20 shadow-lg hover:shadow-xl"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5 text-gray-700 dark:text-gray-200 group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
