'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TextRevealWithChars,
  SponsorCardAnimation,
  ParallaxScrollReveal,
  resourceCardInteraction,
  ButtonInteraction
} from '@/components/animations';
import { HeroBackground } from '@/components/HeroBackground';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
import { QuickNav } from '@/components/QuickNav';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function ResourceGrid(): JSX.Element {
  const resources = [
    {
      title: 'LongBio Database',
      description: 'Comprehensive directory of People, Companies, and Investors in longevity',
      href: '/database',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
    {
      title: 'Library',
      description: 'Access to papers, books, courses, videos, podcasts, and journals',
      href: '/library',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Events',
      description: 'Conferences and gatherings in the longevity space',
      href: '/events',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {resources.map((resource, index) => (
        <motion.div
          key={resource.title}
          className="group relative"
          variants={resourceCardInteraction}
          initial="initial"
          whileInView="inView"
          whileHover={shouldReduceMotion ? {} : "hover"}
          whileTap={shouldReduceMotion ? {} : "tap"}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
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
                <resource.icon className="h-6 w-6 text-blue-400" />
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-200 transition-colors">
              {resource.title}
            </h3>
            <p className="text-blue-200 mb-6 group-hover:text-white/90 transition-colors">
              {resource.description}
            </p>

            {/* Animated link */}
            <ButtonInteraction>
              <Link 
                href={resource.href}
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
                aria-label={`Explore ${resource.title}`}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </Link>
            </ButtonInteraction>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function Home(): JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="bg-blue-950 text-white min-h-screen" role="main">
      {/* Hero Section */}
      <section 
        id="top"
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Animated background gradient */}
        <HeroBackground />
        
        <div className="relative max-w-[1000px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-blue-500/10 via-blue-400/5 to-blue-500/10 blur-3xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.h1
              className="relative mx-auto max-w-[90%] text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem] font-black tracking-tight bg-gradient-to-br from-white via-blue-100 to-blue-200 bg-clip-text text-transparent text-center"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? {} : { 
                opacity: 1, 
                y: 0,
                textShadow: ["0 0 20px rgba(255,255,255,0.2)", "0 0 40px rgba(255,255,255,0.1)", "0 0 20px rgba(255,255,255,0.2)"]
              }}
              transition={{ 
                duration: 1.2,
                textShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              aria-label="Advancing the field of Longevity Biotech"
            >
                              <span>Advancing the field of Longevity Biotech</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Sponsors & Collaborators */}
      <section 
        id="sponsors"
        className="relative py-16 overflow-hidden"
        aria-label="Sponsors and collaborators"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-900/10 to-blue-900/20"
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 1.1 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                <TextRevealWithChars text="Sponsors & Collaborators" />
              </h2>
              <p className="text-blue-200 text-lg">
                Working together to advance longevity research
              </p>
            </div>
          </ParallaxScrollReveal>

          {/* Platinum Tier */}
          <div className="mb-16">
            <ParallaxScrollReveal offset={20}>
              <h3 className="text-lg text-blue-300 mb-8 text-center">
                Platinum Partners
              </h3>
            </ParallaxScrollReveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[1, 2, 3, 4].map((i) => (
                <SponsorCardAnimation key={i}>
                  <div 
                    className="group relative aspect-[3/2] p-6"
                    role="img"
                    aria-label={`Platinum Partner ${i}`}
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20" />
                    <motion.div 
                      className="relative w-full h-full bg-gradient-to-br from-white/5 to-white/10 rounded-lg"
                      whileHover={shouldReduceMotion ? {} : {
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        transition: { duration: 0.3 }
                      }}
                    />
                  </div>
                </SponsorCardAnimation>
              ))}
            </div>
          </div>

          {/* Institutional Collaborators */}
          <div>
            <ParallaxScrollReveal offset={20}>
              <h3 className="text-lg text-blue-300 mb-8 text-center">
                Institutional Collaborators
              </h3>
            </ParallaxScrollReveal>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {['GCLS', 'LBF'].map((name, _i) => (
                <SponsorCardAnimation key={name}>
                  <div 
                    className="group relative aspect-square"
                    role="img"
                    aria-label={`${name} logo`}
                  >
                    <div className="absolute inset-0 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20" />
                    <div className="relative h-full flex items-center justify-center">
                      <motion.span 
                        className="text-xl font-semibold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent"
                        whileHover={shouldReduceMotion ? {} : {
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {name}
                      </motion.span>
                    </div>
                  </div>
                </SponsorCardAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section 
        id="resources"
        className="relative py-16 sm:py-24 overflow-hidden"
        aria-label="Resources section"
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"
          initial={shouldReduceMotion ? {} : { opacity: 0, scale: 1.1 }}
          animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ParallaxScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
                <TextRevealWithChars text="Resources" />
              </h2>
              <p className="text-blue-200 text-lg max-w-2xl mx-auto">
                Access our comprehensive collection of longevity research resources
              </p>
            </div>
          </ParallaxScrollReveal>

          <Suspense fallback={<LoadingSpinner size="lg" />}>
            <ResourceGrid />
          </Suspense>
        </div>
      </section>

      {/* Quick Navigation */}
      <QuickNav />
    </main>
  );
}