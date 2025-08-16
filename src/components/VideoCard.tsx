'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FuturisticText as _FuturisticText } from './advancedAnimations';
import { easings } from './animations';

interface VideoCardProps {
  title: string;
  speaker: string;
  date: string;
  description: string;
  url: string;
}

export default function VideoCard({ title, speaker, date, description, url }: VideoCardProps) {
  return (
    <motion.div 
      className="bg-white/5 backdrop-blur-sm rounded-md overflow-hidden border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: easings.smooth }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="aspect-w-16 aspect-h-9 bg-blue-900/20 flex items-center justify-center">
          <motion.div 
            className="text-blue-400"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="w-12 h-12 sm:w-16 sm:h-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
            {title}
          </h3>
          
          <div className="space-y-1 mt-2">
            <p className="text-xs sm:text-sm text-blue-200">
              Speaker: {speaker}
            </p>
            <p className="text-xs sm:text-sm text-blue-200">
              Date: {date}
            </p>
          </div>

          <p className="mt-2 text-blue-100 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none opacity-80">
            {description}
          </p>

          <motion.div 
            className="mt-3 sm:mt-4 inline-flex items-center text-white text-sm sm:text-base font-medium"
            whileHover={{ x: 4 }}
          >
            Watch Video
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.div>
        </div>
      </a>
    </motion.div>
  );
} 