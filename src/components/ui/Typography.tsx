import { HTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold sm:text-5xl md:text-6xl',
      h2: 'text-3xl font-bold sm:text-4xl md:text-5xl',
      h3: 'text-2xl font-bold sm:text-3xl',
      h4: 'text-xl font-bold sm:text-2xl',
      h5: 'text-lg font-bold',
      h6: 'text-base font-bold',
      subtitle1: 'text-xl',
      subtitle2: 'text-lg',
      body1: 'text-base',
      body2: 'text-sm',
      caption: 'text-xs',
      overline: 'text-xs uppercase tracking-wider'
    },
    textColor: {
      primary: 'text-blue-900 dark:text-blue-100',
      secondary: 'text-blue-700 dark:text-blue-300',
      tertiary: 'text-blue-500 dark:text-blue-400',
      white: 'text-white',
      error: 'text-red-600 dark:text-red-400',
      success: 'text-green-600 dark:text-green-400',
      gold: 'text-yellow-600 dark:text-yellow-400'
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold'
    }
  },
  defaultVariants: {
    variant: 'body1',
    textColor: 'primary',
    align: 'left',
    weight: 'normal'
  }
});

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface BaseTypographyProps extends HTMLAttributes<HTMLElement> {
  as?: TypographyElement;
}

interface TypographyProps extends BaseTypographyProps, VariantProps<typeof typographyVariants> {
  textColor?: VariantProps<typeof typographyVariants>['textColor'];
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as: Component = 'p', variant, textColor, align, weight, className, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, textColor, align, weight }), className)}
        {...props}
      />
    );
  }
);

Typography.displayName = 'Typography';