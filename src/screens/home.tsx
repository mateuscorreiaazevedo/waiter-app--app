import clsx from 'clsx';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { RowFilterCategories } from '../modules/categories';
import { FooterLayout, HeaderLayout } from '../modules/core';
import { ListProductsMenu } from '../modules/products';

export function HomeScreen() {
  const isAndroid = Platform.OS === 'android';

  return (
    <>
      <SafeAreaView
        className={clsx(
          'flex-1 bg-gray100',
          isAndroid && `mt-[${StatusBar.currentHeight}px]`
        )}
      >
        <HeaderLayout />
        <RowFilterCategories />
        <ListProductsMenu />
      </SafeAreaView>
      <FooterLayout />
    </>
  );
}
