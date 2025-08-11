import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-bold',
      h5: 'text-lg font-bold',
      h6: 'text-base font-bold',
      subtitle1: 'text-lg font-medium',
      subtitle2: 'text-base font-medium',
      body1: 'text-base',
      body2: 'text-sm',
      caption: 'text-sm text-gray-500',
      overline: 'text-xs uppercase tracking-wider'
    },
    textColor: {
      primary: 'text-gray-900',
      secondary: 'text-gray-600',
      gold: 'text-amber-500',
      white: 'text-white',
      error: 'text-red-500',
      success: 'text-green-500',
      tertiary: 'text-gray-400'
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
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

type AllowedElements = Extract<keyof JSX.IntrinsicElements, 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div'>;

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  component?: AllowedElements;
}

export const Typography: React.FC<TypographyProps> = ({
  component = 'p',
  variant,
  textColor,
  align,
  weight,
  className,
  ...props
}) => {
  const Component = component as keyof JSX.IntrinsicElements;
  return React.createElement(
    Component,
    {
      className: typographyVariants({ variant, textColor, align, weight, className }),
      ...props
    }
  );
};