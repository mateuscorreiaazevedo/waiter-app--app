import { FlatList, View } from 'react-native';
import { products } from '../../../../../mocks/products';
import { ProductMenuItem } from './ProductMenuItem';

export function ListProductsMenu() {
  return (
    <FlatList
      className="mt-6"
      contentContainerClassName="px-6"
      data={products}
      ItemSeparatorComponent={() => (
        <View className="my-6 h-px w-full bg-gray300/30" />
      )}
      keyExtractor={item => item._id}
      renderItem={({ item }) => {
        return <ProductMenuItem {...item} />;
      }}
    />
  );
}
