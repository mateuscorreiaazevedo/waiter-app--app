import clsx from 'clsx';
import { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { RowFilterCategories } from '../modules/categories';
import { TableModal } from '../modules/orders';
import { ListProductsMenu } from '../modules/products';
import {
  FooterLayout,
  HeaderLayout,
  validateAndroidPlatform,
} from '../modules/shared';

const isAndroid = validateAndroidPlatform();

export function HomeScreen() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  function handleOpenTableModal() {
    setIsTableModalVisible(true);
  }

  function handleCloseTableModal() {
    setIsTableModalVisible(false);
  }

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable(null);
  }

  return (
    <>
      <SafeAreaView
        className={clsx(
          'flex-1 bg-gray100',
          isAndroid && `mt-[${StatusBar.currentHeight}px]`
        )}
      >
        <HeaderLayout
          onCancelOrder={handleCancelOrder}
          selectedTable={selectedTable}
        />
        <RowFilterCategories />
        <ListProductsMenu />
      </SafeAreaView>
      <FooterLayout
        onOpenTableModal={handleOpenTableModal}
        selectedTable={selectedTable}
      />
      <TableModal
        onClose={handleCloseTableModal}
        onSave={handleSaveTable}
        visible={isTableModalVisible}
      />
    </>
  );
}
