'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroBackground } from '@/components/HeroBackground';

export default function Home() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.165, 0.84, 0.44, 1] // smooth easing
          }
        }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 max-w-4xl mx-auto leading-[0.95] pb-2"
        >
          <span>Advancing the field of Longevity Biotech</span>
        </motion.h1>
      </motion.div>
    </div>
  );
}