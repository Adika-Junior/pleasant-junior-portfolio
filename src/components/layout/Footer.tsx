import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface FooterProps {
  isSidebarCollapsed: boolean;
}

export default function Footer({ isSidebarCollapsed }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/pleasant-junior',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/pleasant-junior',
      icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:pleasant.junior@email.com',
      icon: Mail,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/pleasant_junior',
      icon: Twitter,
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(156, 146, 172, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 transition-all duration-300 ${
        isSidebarCollapsed ? 'lg:pl-24' : 'lg:pl-80'
      }`}>
        {/* Top Border Line */}
        <div className="border-t-2 border-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 dark:from-blue-400/30 dark:via-purple-400/30 dark:to-pink-400/30 pt-12 -mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              Pleasant Junior
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold leading-relaxed">
              Computer Science Student | Aspiring Software Engineer & Data Scientist
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Building innovative solutions through code, data, and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#about"
                  className="group flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-base font-semibold hover:translate-x-2"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="group flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-base font-semibold hover:translate-x-2"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#experience"
                  className="group flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-base font-semibold hover:translate-x-2"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="group flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-base font-semibold hover:translate-x-2"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40 dark:border-white/20 hover:scale-110 hover:-translate-y-2 hover:bg-white/40 dark:hover:bg-white/20 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-blue-500/10 before:to-purple-600/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10"
                    aria-label={link.name}
                  >
                    <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base font-semibold leading-relaxed">
              Available for opportunities and collaborations
            </p>
          </div>
        </div>

        {/* Bottom Section - Clean 2025 Copyright */}
        <div className="mt-16 pt-8">
          <div className="flex justify-center">
            <div className="text-center">
              <p className="text-4xl font-black text-gray-600 dark:text-gray-400 tracking-widest mb-2">
                © {currentYear}
              </p>
              <p className="text-2xl font-bold text-gray-500 dark:text-gray-500 tracking-wide">
                Pleasant Junior
              </p>
              <p className="text-sm font-medium text-gray-400 dark:text-gray-600 mt-2 tracking-wide">
                All rights reserved
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
