import { cva, type VariantProps } from 'class-variance-authority';
import { useEffect, useState } from 'react';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { ACTIVE_OPACITY } from '../../constants/active-opacity-constant';
import { Typography } from './Typography';

const buttonVariants = cva(
  'w-fit max-w-full flex-row items-center justify-center',
  {
    variants: {
      variant: {
        primary:
          'rounded-[44px] bg-primary bg-primary px-6 py-3.5 disabled:bg-gray500 disabled:opacity-50',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

type ButtonProps = Omit<TouchableOpacityProps, 'activeOpacity'> &
  VariantProps<typeof buttonVariants> & {
    textColor?: 'foreground' | 'muted';
    isLoading?: boolean;
  };

export function Button({
  children,
  className,
  variant,
  textColor = 'muted',
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  const [reticenceLoading, setReticenceLoading] = useState<string[]>(['.']);
  const INTERVAL_IN_MS = 500;

  useEffect(() => {
    function generateReticence() {
      if (isLoading) {
        const interval = setInterval(() => {
          setReticenceLoading(prev => {
            if (prev.length === 3) {
              return ['.'];
            }

            return [...prev, '.'];
          });
        }, INTERVAL_IN_MS);

        return () => clearInterval(interval);
      }
    }

    generateReticence();
  }, [isLoading]);

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={ACTIVE_OPACITY}
      className={buttonVariants({ variant, className })}
      disabled={isLoading || disabled}
    >
      {isLoading && (
        <Typography color="white" weigth={600}>
          Aguarde{reticenceLoading.join('')}
        </Typography>
      )}

      {!isLoading && (
        <Typography color={textColor} weigth={600}>
          {children}
        </Typography>
      )}
    </TouchableOpacity>
  );
}
