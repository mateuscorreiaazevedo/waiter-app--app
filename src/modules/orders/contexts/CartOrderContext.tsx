import { createContext, type PropsWithChildren, useState } from 'react';
import type { OrderProduct } from '../models/OrderProduct';

interface CartOrderContextProps {
  cartItems: OrderProduct[];
}

export const CartOrderContext = createContext({} as CartOrderContextProps);

export function CartOrderProvider({ children }: PropsWithChildren) {
  const [cartItems] = useState<OrderProduct[]>([]);

  return (
    <CartOrderContext.Provider value={{ cartItems }}>
      {children}
    </CartOrderContext.Provider>
  );
}
