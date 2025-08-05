import clsx from 'clsx';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { RowFilterCategories } from '../components/features/categories';
import { ListProductsMenu } from '../components/features/products';
import { FooterLayout, HeaderLayout } from '../components/layout';

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
