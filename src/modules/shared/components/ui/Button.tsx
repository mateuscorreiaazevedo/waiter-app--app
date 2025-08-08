import { cva, type VariantProps } from 'class-variance-authority';
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
  };

export function Button({
  children,
  className,
  variant,
  textColor = 'muted',
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={ACTIVE_OPACITY}
      className={buttonVariants({ variant, className })}
    >
      <Typography color={textColor} weigth={600}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
}
