'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  'relative rounded-2xl overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-white/10 backdrop-blur-sm',
        solid: 'bg-blue-950',
        glass: 'bg-white/5 backdrop-blur-sm',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        none: '',
        lift: 'hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10',
        glow: 'hover:shadow-lg hover:shadow-blue-500/20 hover:bg-white/15',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      hover: 'none',
    },
  }
);

export interface CardProps
  extends Omit<HTMLMotionProps<"div">, keyof VariantProps<typeof cardVariants>>,
    VariantProps<typeof cardVariants> {
  isInteractive?: boolean;
  href?: string;
}

export function Card({
  className,
  variant,
  size,
  hover,
  isInteractive = false,
  children,
  ...props
}: CardProps): JSX.Element {
  return (
    <motion.div
      className={cardVariants({ variant, size, hover, className })}
      whileHover={isInteractive ? { scale: 1.02 } : undefined}
      whileTap={isInteractive ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
