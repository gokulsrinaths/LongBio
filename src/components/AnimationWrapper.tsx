'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { pageTransition } from './animations';
import { AnimationProvider } from '@/context/AnimationContext';
import { ReactNode } from 'react';

export default function AnimationWrapper({ children }: { children: ReactNode }): JSX.Element {
  return (
    <AnimationProvider>
      <AnimatePresence mode="wait">
        <motion.main
          {...pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </AnimationProvider>
  );
} 