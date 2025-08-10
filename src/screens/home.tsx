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
  const [isRefetchLoading, setIsRefetchLoading] = useState(false);

  return (
    <>
      <SafeAreaView
        className={clsx(
          'flex-1 bg-gray100',
          isAndroid && `mt-[${StatusBar.currentHeight}px]`
        )}
      >
        <HeaderLayout />
        <RowFilterCategories setIsRefetchLoading={setIsRefetchLoading} />
        <ListProductsMenu isRefetchLoading={isRefetchLoading} />
      </SafeAreaView>
      <FooterLayout />
      <TableModal />
    </>
  );
}
