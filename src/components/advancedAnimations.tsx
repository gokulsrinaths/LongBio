import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export function MouseTracker() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useMousePosition(ref);

  const springConfig = { damping: 25, stiffness: 700 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const centerX = useTransform(mouseX, (latest) => latest - (ref.current?.offsetWidth ?? 0) / 2);
  const centerY = useTransform(mouseY, (latest) => latest - (ref.current?.offsetHeight ?? 0) / 2);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-full"
      style={{
        perspective: 600
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX: useTransform(centerY, [-100, 100], [30, -30]),
          rotateY: useTransform(centerX, [-100, 100], [-30, 30])
        }}
      />
    </motion.div>
  );
}

export function FloatingElement() {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-xl" />
      <div className="relative bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6">
        <slot />
      </div>
    </motion.div>
  );
}