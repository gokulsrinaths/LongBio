'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  showStats?: boolean;
}

export default function PageLayout({ children, title, subtitle, showStats: _ = false }: PageLayoutProps): JSX.Element {
  return (
    <div className="min-h-screen bg-blue-950">
      {/* Page Header */}
      <section className="relative pt-28 sm:pt-32 pb-8 sm:pb-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-950">
          <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-base sm:text-lg text-blue-200/90 max-w-2xl mx-auto sm:mx-0">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Page Content */}
      <motion.div
        className="relative z-10 pb-12 sm:pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Content Background Blur */}
            <div className="absolute inset-0 bg-blue-950/30 backdrop-blur-sm rounded-2xl" />
            
            {/* Actual Content */}
            <div className="relative p-4 sm:p-6 lg:p-8">
              {children}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
