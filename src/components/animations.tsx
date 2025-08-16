import { motion, Variants, Transition, Easing } from 'framer-motion';
import { FC, ReactNode } from 'react';

// Enhanced easing curves for more natural motion
export const easings = {
  smooth: [0.4, 0.0, 0.2, 1], // Material Design standard easing
  spring: [0.175, 0.885, 0.32, 1.275], // Custom spring physics
  decelerate: [0, 0, 0.2, 1], // Smooth deceleration
  accelerate: [0.4, 0, 1, 1], // Smooth acceleration
  bounce: [0.68, -0.55, 0.265, 1.55], // Playful bounce
} as const;

// Sophisticated stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      ease: easings.smooth,
      duration: 0.5,
      when: "beforeChildren"
    } as Transition
  }
};

// Enhanced text reveal with character animation
export const TextRevealWithChars: FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const characters = text.split("");
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.03,
            delayChildren: delay
          } as Transition
        }
      }}
      aria-label={text}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
              rotateX: -90
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: {
                ease: easings.spring
              } as Transition
            }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Enhanced card interaction
export const cardInteraction: Variants = {
  initial: { 
    scale: 1,
    y: 0,
    boxShadow: "0 0 0 rgba(0,0,0,0)",
    background: "rgba(255,255,255,0.05)"
  },
  hover: {
    scale: 1.02,
    y: -4,
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    background: "rgba(255,255,255,0.1)",
    transition: {
      duration: 0.3,
      ease: easings.spring
    } as Transition
  },
  tap: {
    scale: 0.98,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.1,
      ease: easings.accelerate
    } as Transition
  }
};

// Smooth scroll reveal with parallax
export const ParallaxScrollReveal: FC<{ children: ReactNode; offset?: number }> = ({ 
  children, 
  offset = 50 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: easings.smooth
        } as Transition
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};

// Enhanced button interaction
export const ButtonInteraction: FC<{ 
  children: ReactNode;
  isLoading?: boolean;
}> = ({ children, isLoading }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        y: -2,
        transition: { 
          duration: 0.2, 
          ease: easings.spring 
        } as Transition
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { 
          duration: 0.1, 
          ease: easings.accelerate 
        } as Transition
      }}
      animate={isLoading ? {
        scale: [1, 0.98, 1],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          ease: easings.smooth
        } as Transition
      } : {}}
    >
      {children}
    </motion.div>
  );
};

// Logo animation
export const LogoAnimation: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, rotate: -10 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        rotate: 0,
        transition: {
          duration: 0.8,
          ease: easings.spring
        } as Transition
      }}
      whileHover={{
        scale: 1.05,
        rotate: 5,
        transition: {
          duration: 0.3,
          ease: easings.spring
        } as Transition
      }}
    >
      {children}
    </motion.div>
  );
};

// Sponsor card animation
export const SponsorCardAnimation: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.5,
          ease: easings.smooth
        } as Transition
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        background: "rgba(255,255,255,0.15)",
        transition: {
          duration: 0.3,
          ease: easings.spring
        } as Transition
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

// Resource card interaction
// Page transition animation
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.smooth
    } as Transition
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: easings.accelerate
    } as Transition
  }
};

// Fade up animation
export const fadeUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth
    } as Transition
  }
};

// Hover scale animation
export const hoverScale: Variants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: easings.spring
    } as Transition
  }
};

export const resourceCardInteraction: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  inView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: easings.smooth
    } as Transition
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    } as Transition
  },
  tap: {
    scale: 0.98,
    transition: {
      type: "tween",
      duration: 0.1,
      ease: easings.accelerate
    } as Transition
  }
};