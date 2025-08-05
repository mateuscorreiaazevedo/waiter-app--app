import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { Text } from 'react-native';

type Props = {
  className?: string;
  weigth?: 400 | 500 | 600 | 700;
};

export function Typograph({
  weigth = 400,
  children,
  className,
}: PropsWithChildren<Props>) {
  const fontWeight = {
    400: 'font-inter400',
    500: 'font-inter500',
    600: 'font-inter600',
    700: 'font-inter700',
  };

  return (
    <Text className={clsx(fontWeight[weigth], className, 'text-foreground')}>
      {children}
    </Text>
  );
}
