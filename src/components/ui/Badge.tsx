'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-100 text-blue-800",
        subtle: "bg-white/10 text-white backdrop-blur-sm",
        success: "bg-green-100 text-green-800",
        warning: "bg-yellow-100 text-yellow-800",
        error: "bg-red-100 text-red-800",
      },
      interactive: {
        true: "cursor-pointer hover:opacity-80",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      interactive: false,
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Badge({ 
  children, 
  variant, 
  interactive,
  className = "",
  onClick 
}: BadgeProps) {
  const Component = onClick ? motion.button : motion.span;
  
  return (
    <Component
      className={badgeVariants({ variant, interactive, className })}
      onClick={onClick}
      whileHover={interactive ? { scale: 1.05 } : undefined}
      whileTap={interactive ? { scale: 0.95 } : undefined}
      role={onClick ? "button" : undefined}
    >
      {children}
    </Component>
  );
}
