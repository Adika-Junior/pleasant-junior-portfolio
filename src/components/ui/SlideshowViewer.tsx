'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';
import Image from 'next/image';

interface SlideshowViewerProps {
  slides: string[];
  isOpen: boolean;
  onClose: () => void;
  initialSlide?: number;
}

export default function SlideshowViewer({ slides, isOpen, onClose, initialSlide = 0 }: SlideshowViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSlide, slides.length]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-6xl max-h-[90vh] w-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Smart Waste Management System
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {currentSlide + 1} of {slides.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Play className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>

          {/* Main Slide Display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src={slides[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative flex-shrink-0 w-20 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentSlide
                      ? 'border-blue-500 ring-2 ring-blue-200'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <Image
                    src={slide}
                    alt={`Thumbnail ${index + 1}`}
                    width={80}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
