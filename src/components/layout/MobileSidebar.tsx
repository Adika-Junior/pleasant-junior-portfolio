'use client';

// import { useState } from 'react';
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
  X
} from 'lucide-react';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Experience', href: '#experience', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/pleasant-junior', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/pleasant-junior', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/pleasant_junior', icon: Twitter },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden transform transition-transform duration-300">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/images/pleasant-junior-profile.jpg"
                  alt="Pleasant Junior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-heading text-gray-900 dark:text-white">
                  Pleasant Junior
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-premium">
                  CS Student & Developer
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-200"
                >
                  <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300 text-premium">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
            <div>
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
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
                      className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-200"
                      aria-label={link.name}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
