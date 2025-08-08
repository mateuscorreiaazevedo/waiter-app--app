import { createContext, type PropsWithChildren, useState } from 'react';
import { products } from '../../../../mocks/products';
import type { OrderProduct } from '../models/OrderProduct';

interface CartOrderContextProps {
  cartItems: OrderProduct[];
}

export const CartOrderContext = createContext({} as CartOrderContextProps);

export function CartOrderProvider({ children }: PropsWithChildren) {
  const [cartItems] = useState<OrderProduct[]>([
    {
      product: products[0],
      quantity: 1,
    },
    {
      product: products[1],
      quantity: 1,
    },
  ]);

  return (
    <CartOrderContext.Provider value={{ cartItems }}>
      {children}
    </CartOrderContext.Provider>
  );
}
