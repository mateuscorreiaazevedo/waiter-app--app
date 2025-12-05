import clsx from 'clsx';
import { useState } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RowFilterCategories, useFetchCategories } from '../modules/categories';
import { TableModal } from '../modules/orders';
import { ListProductsMenu } from '../modules/products';
import { FooterLayout, HeaderLayout } from '../modules/shared';

export function HomeScreen() {
  const [isRefetchLoading, setIsRefetchLoading] = useState(false);
  const responseCategories = useFetchCategories();
  const { top } = useSafeAreaInsets();

  return (
    <>
      <View
        className={clsx('flex-1 bg-gray100')}
        style={{
          marginTop: top,
        }}
      >
        <HeaderLayout />
        <RowFilterCategories
          responseCategories={responseCategories}
          setIsRefetchLoading={setIsRefetchLoading}
        />
        <ListProductsMenu
          isRefetchLoading={isRefetchLoading}
          onRefetchCategories={responseCategories.refetchCategories}
        />
      </View>
      <FooterLayout />
      <TableModal />
    </>
  );
}
