'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight',
      h2: 'font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight',
      h3: 'font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight',
      h4: 'font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-tight',
      h5: 'font-serif text-lg sm:text-xl lg:text-2xl font-bold leading-tight',
      h6: 'font-serif text-base sm:text-lg lg:text-xl font-bold leading-tight',
      subtitle1: 'text-xl font-medium leading-relaxed',
      subtitle2: 'text-lg font-medium leading-relaxed',
      body1: 'text-base leading-relaxed',
      body2: 'text-sm leading-relaxed',
      caption: 'text-sm leading-normal',
      overline: 'text-xs uppercase tracking-wider font-medium',
    },
    color: {
      primary: 'text-primary-navy-900',
      secondary: 'text-primary-navy-600',
      tertiary: 'text-primary-navy-400',
      white: 'text-white',
      gold: 'text-primary-gold-500',
      success: 'text-primary-green-600',
      error: 'text-red-600',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'body1',
    color: 'primary',
    align: 'left',
    weight: 'normal',
  },
});

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  component?: keyof JSX.IntrinsicElements;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant,
      color,
      align,
      weight,
      component,
      children,
      ...props
    },
    ref
  ) => {
    const Component = component || getDefaultComponent(variant);

    return React.createElement(
      Component,
      {
        ref,
        className: typographyVariants({ variant, color, align, weight, className }),
        ...props,
      },
      children
    );
  }
);

function getDefaultComponent(variant: string | null | undefined): keyof JSX.IntrinsicElements {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'subtitle1':
    case 'subtitle2':
      return 'h6';
    case 'body1':
    case 'body2':
      return 'p';
    case 'caption':
      return 'span';
    case 'overline':
      return 'span';
    default:
      return 'p';
  }
}

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
