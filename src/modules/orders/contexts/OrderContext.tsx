import { createContext, type PropsWithChildren, useState } from 'react';
import type { Product } from '../../products';
import { useTableModal } from '../hooks/useTableModal';
import type { OrderProduct } from '../models/OrderProduct';

interface CartOrderContextProps {
  cartItems: OrderProduct[];
  onAddProduct(product: Product): void;
  onSubQuantity(productId: string): void;
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
      let newCartItems = [...prev];

      const productExists = newCartItems.find(
        item => item.product._id === product._id
      );

      if (productExists) {
        newCartItems = newCartItems.map(item => {
          if (item.product._id === product._id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });

        return newCartItems;
      }

      return [...newCartItems, { product, quantity: 1 }];
    });
  }
  function onSubQuantity(productId: string) {
    setCartItems(prev => {
      let newCartItems = [...prev];

      const product = newCartItems.find(item => item.product._id === productId);

      if (product?.quantity === 1) {
        return newCartItems.filter(item => item.product._id !== productId);
      }

      newCartItems = newCartItems.map(item => {
        if (item.product._id === productId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });

      return newCartItems;
    });
  }

  function onCancelOrder() {
    onResetTable();
    setCartItems([]);
  }

  return (
    <OrderContext.Provider
      value={{
        onSubQuantity,
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
