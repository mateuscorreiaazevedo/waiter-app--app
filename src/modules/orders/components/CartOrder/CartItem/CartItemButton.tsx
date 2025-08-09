import type { PropsWithChildren } from 'react';
import { TouchableOpacity } from 'react-native';
import { ACTIVE_OPACITY } from '../../../../shared';

interface CartItemButtonProps {
  onPress: () => void;
}

export function CartItemButton({
  onPress,
  children,
}: PropsWithChildren<CartItemButtonProps>) {
  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      className="items-center justify-center p-2.5"
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
