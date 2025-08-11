'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { resourceCardInteraction, ButtonInteraction } from './animations';

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  icon: (props: any) => JSX.Element;
  isNew?: boolean;
}

export function ResourceCardSkeleton() {
  return (
    <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10" aria-hidden="true">
      <div className="animate-pulse">
        {/* Icon skeleton */}
        <div className="h-12 w-12 rounded-lg bg-white/10 mb-6" />
        
        {/* Title skeleton */}
        <div className="h-7 w-3/4 bg-white/10 mb-4 rounded" />
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-4 w-full bg-white/10 rounded" />
          <div className="h-4 w-2/3 bg-white/10 rounded" />
        </div>
        
        {/* Link skeleton */}
        <div className="h-4 w-20 bg-white/10 rounded" />
      </div>
    </div>
  );
}

export function ResourceCard({ 
  title, 
  description, 
  href, 
  icon: Icon,
  isNew 
}: ResourceCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="group relative"
      variants={resourceCardInteraction}
      initial="initial"
      whileInView="inView"
      whileHover={shouldReduceMotion ? {} : "hover"}
      whileTap={shouldReduceMotion ? {} : "tap"}
      viewport={{ once: true }}
    >
      <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl opacity-50 group-hover:opacity-100 transition-opacity" />
        
        {/* New badge */}
        {isNew && (
          <div className="absolute top-4 right-4">
            <Badge variant="subtle">New</Badge>
          </div>
        )}

        {/* Icon with animated background */}
        <div className="relative h-12 w-12 mb-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-400/20 rounded-lg"
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <div className="relative h-full w-full rounded-lg bg-blue-600/20 flex items-center justify-center">
            <Icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        <p className="text-blue-200 mb-6 group-hover:text-white/90 transition-colors">
          {description}
        </p>

        {/* Animated link */}
        <ButtonInteraction>
          <Link 
            href={href}
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
            aria-label={`Explore ${title}`}
          >
            <span className="relative">
              Explore
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400/50"
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </span>
            <motion.svg 
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={shouldReduceMotion ? {} : { x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </motion.svg>
          </Link>
        </ButtonInteraction>
      </div>
    </motion.div>
  );
}
