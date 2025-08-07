import clsx from 'clsx';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { RowFilterCategories } from '../modules/categories';
import { ListProductsMenu } from '../modules/products';
import { FooterLayout, HeaderLayout } from '../modules/shared';

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
