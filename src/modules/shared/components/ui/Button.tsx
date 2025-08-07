import { cva, type VariantProps } from 'class-variance-authority';
import { TouchableOpacity, type TouchableOpacityProps } from 'react-native';
import { Typography } from './Typography';

const buttonVariants = cva('w-full items-center justify-center gap-2', {
  variants: {
    variant: {
      primary:
        'rounded-[48px] bg-primary bg-primary px-6 py-3.5 disabled:bg-gray500 disabled:opacity-50',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonProps = Omit<TouchableOpacityProps, 'activeOpacity'> &
  VariantProps<typeof buttonVariants>;

export function Button({
  children,
  className,
  variant,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.7}
      className={buttonVariants({ variant, className })}
    >
      <Typography className="text-white" weigth={600}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
}
