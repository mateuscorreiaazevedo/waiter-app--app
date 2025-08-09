import { createContext, type PropsWithChildren, useState } from 'react';
import type { Product } from '../../products';
import { useTableModal } from '../hooks/useTableModal';
import type { OrderProduct } from '../models/OrderProduct';

interface CartOrderContextProps {
  cartItems: OrderProduct[];
  onAddProduct(product: Product): void;
  onSubAndRemoveProduct(productId: string): void;
  onCancelOrder(): void;
  selectedTable: string | null;
  isModalTableVisible: boolean;
  onOpenTableModal(): void;
  onCloseTableModal(): void;
  onSaveTable(table: string): void;
}

export const OrderContext = createContext({} as CartOrderContextProps);

export function OrderProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<OrderProduct[]>([]);

  const {
    selectedTable,
    onOpenTableModal,
    onCloseTableModal,
    onSaveTable,
    onResetTable,
    isModalTableVisible,
  } = useTableModal({
    setCartItems,
    itemsOnCart: !!cartItems.length,
  });

  function onAddProduct(product: Product) {
    setCartItems(prev => {
      const itemIndex = prev.findIndex(
        cartItem => cartItem.product._id === product._id
      );

      if (itemIndex < 0) {
        return [...prev, { product, quantity: 1 }];
      }

      const newItems = [...prev];
      const item = newItems[itemIndex];
      newItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newItems;
    });
  }
  function onSubAndRemoveProduct(productId: string) {
    setCartItems(prev => {
      const itemIndex = prev.findIndex(
        cartItem => cartItem.product._id === productId
      );

      const item = prev[itemIndex];
      const newItems = [...prev];

      if (item.quantity === 1) {
        newItems.splice(itemIndex, 1);
        return newItems;
      }

      newItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newItems;
    });
  }

  function onCancelOrder() {
    onResetTable();
    setCartItems([]);
  }

  return (
    <OrderContext.Provider
      value={{
        onSubAndRemoveProduct,
        cartItems,
        onAddProduct,
        onCancelOrder,
        selectedTable,
        isModalTableVisible,
        onOpenTableModal,
        onCloseTableModal,
        onSaveTable,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
