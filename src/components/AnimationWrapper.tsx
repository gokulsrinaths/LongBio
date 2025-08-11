'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from './animations';
import { AnimationProvider } from '@/context/AnimationContext';
import { ReactNode } from 'react';

export default function AnimationWrapper({ children }: { children: ReactNode }) {
  return (
    <AnimationProvider>
      <AnimatePresence mode="wait">
        <motion.div
          {...pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </AnimationProvider>
  );
} 