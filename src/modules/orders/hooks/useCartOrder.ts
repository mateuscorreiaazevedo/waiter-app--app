import { use } from 'react';
import { CartOrderContext } from '../contexts/CartOrderContext';

export function useCartOrder() {
  const context = use(CartOrderContext);

  if (!context) {
    throw new Error('useCartOrder must be used within a CartOrderProvider');
  }

  return { ...context };
}
