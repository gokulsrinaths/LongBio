'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  // Base styles
  'rounded-lg overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-white border border-primary-navy-100',
        elevated: 'bg-white shadow-lg',
        filled: 'bg-primary-navy-50',
        outlined: 'border-2 border-primary-navy-200',
        glass: 'bg-white/10 backdrop-blur-md border border-white/20',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        none: '',
        lift: 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        glow: 'transition-all duration-300 hover:shadow-lg hover:shadow-primary-navy-100/50',
        scale: 'transition-all duration-300 hover:scale-[1.02]',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
      hover: 'none',
    },
  }
);

export interface CardProps
  extends Omit<HTMLMotionProps<"div">, keyof VariantProps<typeof cardVariants>>,
    VariantProps<typeof cardVariants> {
  isInteractive?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps & { ref?: React.Ref<HTMLDivElement> }>(
  (
    {
      className,
      variant,
      padding,
      hover,
      isInteractive = false,
      children,
      ...props
    },
    ref
  ) => {
    const Component = (isInteractive ? motion.div : 'div') as typeof motion.div;

    return (
      <Component
        ref={ref}
        className={cardVariants({ variant, padding, hover, className })}
        whileHover={isInteractive ? "hover" : undefined}
        whileTap={isInteractive ? "tap" : undefined}
        variants={{
          hover: { scale: 1.02 },
          tap: { scale: 0.98 }
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = 'Card';

export { Card, cardVariants };