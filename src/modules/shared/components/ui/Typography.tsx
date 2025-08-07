import { cva, type VariantProps } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';

const typographyVariants = cva('text-foreground', {
  variants: {
    weigth: {
      400: 'font-inter400',
      500: 'font-inter500',
      600: 'font-inter600',
      700: 'font-inter700',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
    color: {
      foreground: 'text-foreground',
      muted: 'text-muted',
      gray900: 'text-gray900',
      gray700: 'text-gray700',
      gray500: 'text-gray500',
      gray300: 'text-gray300',
      gray100: 'text-gray100',
    },
  },
  defaultVariants: {
    weigth: 400,
    size: 'md',
    color: 'foreground',
  },
});

type Props = VariantProps<typeof typographyVariants> & {
  className?: string;
};

export function Typography({
  weigth,
  children,
  size,
  color,
  className,
}: PropsWithChildren<Props>) {
  return (
    <Text className={typographyVariants({ weigth, size, color, className })}>
      {children}
    </Text>
  );
}
