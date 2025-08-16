'use client';

import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue, MotionValue as _MotionValue } from 'framer-motion';
import React, { FC, ReactNode, useRef, useState } from 'react';
import { easings } from './animations';

// Futuristic 3D card effect
export const ParallaxCard: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const rotateX = useTransform(
    useMotionValue(mousePosition.y),
    [0, 1],
    [-10, 10]
  );
  const rotateY = useTransform(
    useMotionValue(mousePosition.x),
    [0, 1],
    [10, -10]
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0.5, y: 0.5 })}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className="relative transition-transform duration-200 ease-out"
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic effect for buttons and interactive elements
export const MagneticButton: FC<{ children: ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!ref.current || !isHovered) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x, y });
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(position.x, springConfig);
  const ySpring = useSpring(position.y, springConfig);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: isHovered ? xSpring : 0,
        y: isHovered ? ySpring : 0,
      }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

// Futuristic text reveal effect
export const FuturisticText: FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  return (
    <motion.div className="overflow-hidden">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.03,
            ease: easings.smooth,
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Smooth scroll-linked parallax
export const ParallaxSection: FC<{ children: ReactNode; speed?: number }> = ({ children, speed = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative will-change-transform"
    >
      {children}
    </motion.div>
  );
};

// Gradient blur effect
export const GradientBlur: FC<{ children: ReactNode }> = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const mouseXTemplate = useMotionTemplate`${mouseX}px`;
  const mouseYTemplate = useMotionTemplate`${mouseY}px`;

  return (
    <motion.div
      onMouseMove={(e) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }}
      className="relative overflow-hidden group"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              circle 8rem at ${mouseXTemplate} ${mouseYTemplate},
              rgba(30, 64, 175, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </motion.div>
  );
};

// Morphing background
export const MorphingBackground: FC = () => {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      initial={{ filter: "blur(50px)" }}
      animate={{
        background: [
          "radial-gradient(circle at 0% 0%, #1E40AF 0%, transparent 50%)",
          "radial-gradient(circle at 100% 100%, #1E40AF 0%, transparent 50%)",
          "radial-gradient(circle at 50% 50%, #1E40AF 0%, transparent 50%)",
          "radial-gradient(circle at 0% 100%, #1E40AF 0%, transparent 50%)",
          "radial-gradient(circle at 100% 0%, #1E40AF 0%, transparent 50%)",
        ],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  );
};

// Glitch effect
export const GlitchText: FC<{ text: string }> = ({ text }) => {
  return (
    <motion.div
      className="relative inline-block"
      whileHover={{
        filter: [
          "none",
          "blur(1px) hue-rotate(90deg)",
          "none",
          "blur(2px) hue-rotate(-90deg)",
          "none",
        ],
        x: [0, -2, 2, -1, 0],
        y: [0, 1, -1, 1, 0],
      }}
      transition={{
        duration: 0.2,
        repeat: 2,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.div>
  );
};

// Liquid button effect
export const LiquidButton: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.button
      className="relative overflow-hidden group"
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"
        variants={{
          hover: {
            scale: 1.5,
            rotate: 45,
            borderRadius: "30%",
            transition: { duration: 0.4 },
          },
          tap: {
            scale: 1.2,
            rotate: 0,
            borderRadius: "40%",
            transition: { duration: 0.2 },
          },
        }}
      />
      <motion.span
        className="relative z-10"
        variants={{
          hover: { y: -2 },
          tap: { y: 1 },
        }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};

// Floating elements effect
export const FloatingElement: FC<{ children: ReactNode; speed?: number }> = ({ children, speed = 1 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, 0],
      }}
      transition={{
        duration: 4 / speed,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}; 