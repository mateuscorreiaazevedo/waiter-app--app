import { use } from 'react';
import { OrderContext } from '../contexts/OrderContext';

export function useOrder() {
  const context = use(OrderContext);

  if (!context) {
    throw new Error('useOrder must be used within a OrderProvider');
  }

  return { ...context };
}
