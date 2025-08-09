import { type Dispatch, type SetStateAction, useState } from 'react';
import type { OrderProduct } from '../models/OrderProduct';

interface TableModalContextProps {
  setCartItems: Dispatch<SetStateAction<OrderProduct[]>>;
  itemsOnCart: boolean;
}

export function useTableModal({
  setCartItems,
  itemsOnCart,
}: TableModalContextProps) {
  const [isModalTableVisible, setIsModalTableVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  function onOpenTableModal() {
    setIsModalTableVisible(true);
  }

  function onCloseTableModal() {
    setIsModalTableVisible(false);
    if (itemsOnCart) {
      setCartItems([]);
    }
  }

  function onSaveTable(table: string) {
    setSelectedTable(table);
    setIsModalTableVisible(false);
  }

  function onResetTable() {
    setSelectedTable(null);
  }

  return {
    isModalTableVisible,
    onOpenTableModal,
    onCloseTableModal,
    onSaveTable,
    selectedTable,
    onResetTable,
  };
}
