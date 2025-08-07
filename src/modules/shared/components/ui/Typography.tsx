import { cva, type VariantProps } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';

const typographyVariants = cva('foreground text-base', {
  variants: {
    weigth: {
      400: 'font-inter400',
      500: 'font-inter500',
      600: 'font-inter600',
      700: 'font-inter700',
    },
  },
  defaultVariants: {
    weigth: 400,
  },
});

type Props = VariantProps<typeof typographyVariants> & {
  className?: string;
};

export function Typography({
  weigth,
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <Text className={typographyVariants({ weigth, className })}>
      {children}
    </Text>
  );
}
