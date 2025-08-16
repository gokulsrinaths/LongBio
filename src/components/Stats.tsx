'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StatProps {
  label: string;
  value: string;
}

function Stat({ label, value }: StatProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="text-center"
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-3xl font-bold text-white mb-2"
        initial={shouldReduceMotion ? {} : { scale: 0.9 }}
        whileInView={shouldReduceMotion ? {} : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {value}
      </motion.div>
      <div className="text-blue-200 text-sm font-medium tracking-wide uppercase">
        {label}
      </div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section 
      className="py-12 bg-white/5 backdrop-blur-sm border-y border-white/10"
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          <Stat label="Research Papers" value="1000+" />
          <Stat label="Partner Institutions" value="50+" />
          <Stat label="Active Researchers" value="200+" />
        </div>
      </div>
    </section>
  );
}
