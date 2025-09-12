'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pleasant.junior@email.com',
      href: 'mailto:pleasant.junior@email.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, NY',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Ready to transform your vision into reality? Let&apos;s collaborate on something extraordinary. 
            I&apos;m passionate about turning innovative ideas into powerful solutions that make a difference.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                Let&apos;s Connect
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed font-medium">
                I&apos;m currently available for internships, freelance projects, and full-time opportunities. 
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                // Research-based color schemes for optimal contact design
                const colorSchemes = [
                  { // Email - Trust and Professionalism (Soft Blue)
                    bg: 'from-blue-50/80 to-sky-50/80 dark:from-blue-900/20 dark:to-sky-900/20',
                    iconBg: 'from-blue-500 to-sky-600',
                    text: 'text-blue-900 dark:text-blue-100',
                    hoverText: 'group-hover:text-blue-700 dark:group-hover:text-blue-200',
                    border: 'border-blue-200/30 dark:border-blue-700/30'
                  },
                  { // Phone - Reliability and Connection (Balanced Green)
                    bg: 'from-emerald-50/80 to-green-50/80 dark:from-emerald-900/20 dark:to-green-900/20',
                    iconBg: 'from-emerald-500 to-green-600',
                    text: 'text-emerald-900 dark:text-emerald-100',
                    hoverText: 'group-hover:text-emerald-700 dark:group-hover:text-emerald-200',
                    border: 'border-emerald-200/30 dark:border-emerald-700/30'
                  },
                  { // Location - Stability and Presence (Neutral Gray)
                    bg: 'from-slate-50/80 to-gray-50/80 dark:from-slate-800/20 dark:to-gray-800/20',
                    iconBg: 'from-slate-600 to-gray-700',
                    text: 'text-slate-900 dark:text-slate-100',
                    hoverText: 'group-hover:text-slate-700 dark:group-hover:text-slate-200',
                    border: 'border-slate-200/30 dark:border-slate-700/30'
                  }
                ];
                
                const colors = colorSchemes[index] || colorSchemes[0];
                
                return (
                  <a
                    key={index}
                    href={info.href}
                    className={`group relative backdrop-blur-xl bg-gradient-to-br ${colors.bg} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border ${colors.border} hover:scale-[1.01] hover:-translate-y-1`}
                  >
                    <div className="flex items-center">
                      <div className={`p-3 bg-gradient-to-br ${colors.iconBg} rounded-xl mr-5 group-hover:scale-105 transition-all duration-300 shadow-md`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-lg font-bold ${colors.text} mb-1 ${colors.hoverText} transition-colors duration-300`}>
                          {info.title}
                        </h4>
                        <p className={`text-base font-semibold ${colors.text} opacity-90`}>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="relative backdrop-blur-xl bg-gradient-to-br from-slate-50/80 via-gray-50/80 to-slate-100/80 dark:from-gray-800/80 dark:via-gray-700/80 dark:to-gray-600/80 rounded-3xl p-10 shadow-2xl">
              <div className="relative z-10">
                <h4 className="text-3xl font-black mb-8 tracking-tight text-center text-gray-800 dark:text-white">Available for:</h4>
                <ul className="space-y-5 text-lg font-bold">
                  <li className="flex items-center group">
                    <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-5 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">Software Development Internships</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mr-5 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors duration-300">Data Science Projects</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mr-5 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Web Development Freelance</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-4 h-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full mr-5 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">Research Collaborations</span>
                  </li>
                  <li className="flex items-center group">
                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mr-5 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                    <span className="text-gray-700 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">Open Source Contributions</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative backdrop-blur-xl bg-white/20 dark:bg-white/5 rounded-3xl p-10 shadow-2xl border border-white/30 dark:border-white/10 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-blue-500/5 before:to-purple-600/5 before:-z-10"
          >
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-8 tracking-tight">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 font-medium border border-white/40 dark:border-white/20 transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/15"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 font-medium border border-white/40 dark:border-white/20 transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/15"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 font-medium border border-white/40 dark:border-white/20 transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/15"
                  placeholder="What&apos;s this about?"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-base font-bold text-gray-800 dark:text-gray-200 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 backdrop-blur-xl bg-white/30 dark:bg-white/10 rounded-2xl focus:ring-4 focus:ring-blue-500/30 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 font-medium border border-white/40 dark:border-white/20 transition-all duration-300 hover:bg-white/40 dark:hover:bg-white/15 resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl hover:scale-[1.02] hover:-translate-y-1"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6 mr-3" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-6 backdrop-blur-xl bg-green-500/20 dark:bg-green-500/10 text-green-800 dark:text-green-200 rounded-2xl border border-green-500/30 dark:border-green-500/20 shadow-xl"
                >
                  <CheckCircle className="h-6 w-6 mr-3" />
                  <span className="font-bold text-lg">Message sent successfully! I&apos;ll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-6 backdrop-blur-xl bg-red-500/20 dark:bg-red-500/10 text-red-800 dark:text-red-200 rounded-2xl border border-red-500/30 dark:border-red-500/20 shadow-xl"
                >
                  <AlertCircle className="h-6 w-6 mr-3" />
                  <span className="font-bold text-lg">Something went wrong. Please try again or contact me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
