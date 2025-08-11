import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue, MotionValue } from 'framer-motion';
import React, { FC, ReactNode, useRef, useEffect, useState } from 'react';
import { easings } from './animations';

// Futuristic 3D card effect
export const ParallaxCard: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });
    };

    ref.current?.addEventListener('mousemove', handleMouseMove);
    return () => ref.current?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const rotateX = useTransform(
    useMotionValue(mousePosition.y),
    [0, 1],
    [-10, 10]
  );

  const rotateY = useTransform(
    useMotionValue(mousePosition.x),
    [0, 1],
    [-10, 10]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={{ scale: 1.02 }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

// Smooth scroll progress indicator
export const ScrollProgress: FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
    />
  );
};

// Animated section reveal
export const SectionReveal: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

// Magnetic button effect
export const MagneticButton: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = 20;

    x.set((e.clientX - centerX) / distance);
    y.set((e.clientY - centerY) / distance);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
      className="relative"
    >
      {children}
    </motion.button>
  );
};