import { motion, Variants, Transition } from 'framer-motion';
import { FC, ReactNode } from 'react';

// Enhanced easing curves for more natural motion
export const easings = {
  smooth: [0.4, 0.0, 0.2, 1], // Material Design standard easing
  spring: [0.175, 0.885, 0.32, 1.275], // Custom spring physics
  decelerate: [0, 0, 0.2, 1], // Smooth deceleration
  accelerate: [0.4, 0, 1, 1], // Smooth acceleration
  bounce: [0.68, -0.55, 0.265, 1.55], // Playful bounce
} as const;

// Rest of the file remains the same...
[Previous content from line 13 to the end, but without the unused Easing import]