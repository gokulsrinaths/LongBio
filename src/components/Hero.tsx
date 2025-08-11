import React from 'react';
import { motion } from 'framer-motion';
import { easings } from './animations';
import HeroBackground from './HeroBackground';

const Hero: React.FC = () => {
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
            ease: easings.smooth
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
};

export default Hero;