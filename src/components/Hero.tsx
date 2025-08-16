'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from './advancedAnimations';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const _y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-950"
      aria-labelledby="hero-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-800/30 via-blue-900 to-blue-950"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent"
          style={{ opacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-200 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-2 animate-pulse" />
              Advancing Human Longevity
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            id="hero-heading"
            className="text-[5rem] sm:text-[7rem] lg:text-[9rem] font-bold text-white mb-12 leading-[0.9] tracking-[-0.02em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Pioneering<br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100">
              the Future
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mt-8 text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join us in revolutionizing longevity research through cutting-edge biotechnology 
            and global scientific collaboration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <MagneticButton>
              <motion.a
                href="/research"
                className="group relative inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-950 font-semibold text-lg overflow-hidden"
                whileHover="hover"
              >
                <motion.span className="relative z-10">
                  Explore Research
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.svg 
                  className="ml-2 -mr-1 w-5 h-5 relative z-10" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </motion.svg>
              </motion.a>
            </MagneticButton>

            <MagneticButton>
              <motion.a
                href="/about"
                className="inline-flex items-center px-8 py-4 rounded-lg border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Learn More
              </motion.a>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 bg-blue-400/10 blur-xl group-hover:bg-blue-400/20 transition-colors rounded-3xl"></div>
                <div className="relative p-8 border border-white/10 rounded-2xl bg-blue-950/50">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <p className="text-blue-200">{stat.label}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-8 h-14 rounded-full border-2 border-white/20 flex justify-center p-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/30 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const stats = [
  { value: '10+', label: 'Years of Research' },
  { value: '50+', label: 'Global Partners' },
  { value: '100+', label: 'Published Studies' },
]; 