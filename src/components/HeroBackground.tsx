'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  // Generate a grid of DNA-like elements
  const gridElements = Array.from({ length: 20 }).map((_, i) => (
    <motion.div
      key={i}
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: i * 0.2,
        ease: "linear"
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        className="opacity-20"
      >
        <path
          d="M20 2L30 10L20 18L10 10L20 2Z"
          fill="currentColor"
          className="text-blue-300"
        />
        <path
          d="M20 22L30 30L20 38L10 30L20 22Z"
          fill="currentColor"
          className="text-blue-400"
        />
      </svg>
    </motion.div>
  ));

  // Generate connecting lines
  const lines = Array.from({ length: 10 }).map((_, i) => (
    <motion.div
      key={`line-${i}`}
      className="absolute h-px w-40 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 360}deg)`,
      }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: i * 0.3,
        ease: "linear"
      }}
    />
  ));

  // DNA Helix animation
  const helixElements = Array.from({ length: 8 }).map((_, i) => (
    <motion.div
      key={`helix-${i}`}
      className="absolute left-1/2 w-2 h-2 rounded-full bg-blue-400/30"
      style={{
        top: `${(i * 12) + 10}%`,
      }}
      animate={{
        x: [100, -100, 100],
        y: [0, 20, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeInOut"
      }}
    />
  ));

  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-900/20 to-transparent" />
      
      {/* Animated elements */}
      <div className="absolute inset-0" style={{ perspective: '1000px' }}>
        {gridElements}
        {lines}
        {helixElements}
      </div>

      {/* Overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-blue-950/50" />
    </div>
  );
}
