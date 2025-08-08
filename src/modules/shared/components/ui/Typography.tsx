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
      '12px': 'text-xs', // 12px
      '14px': 'text-sm', // 14px
      '16px': 'text-base', // 16px
      '18px': 'text-lg', // 18px
      '20px': 'text-xl', // 20px
      '24px': 'text-2xl', // 24px
      '30px': 'text-3xl', // 30px
      '36px': 'text-4xl', // 36px
      '48px': 'text-5xl', // 48px
      '60px': 'text-6xl', // 60px
      '72px': 'text-7xl', // 72px
      '96px': 'text-8xl', // 96px
      '128px': 'text-9xl', // 128px
    },
    color: {
      foreground: 'text-foreground',
      primary: 'text-primary',
      primaryDark: 'text-primary-dark',
      secondary: 'text-secondary',
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
    size: '16px',
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
    <Text
      className={typographyVariants({
        weigth,
        size,
        color,
        className,
      })}
    >
      {children}
    </Text>
  );
}
