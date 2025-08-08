import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { products } from '../../../../../mocks/products';
import type { Product } from '../../models/Product';
import { ProductModal } from '../ProductModal';
import { ProductMenuItem } from './ProductMenuItem';

export function ListProductsMenu() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
  }

  return (
    <>
      <FlatList
        className="mt-6"
        contentContainerClassName="px-6"
        data={products}
        ItemSeparatorComponent={() => (
          <View className="my-6 h-px w-full bg-gray300/30" />
        )}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <ProductMenuItem
              {...item}
              onOpenModalVisible={() => handleOpenModal(item)}
            />
          );
        }}
      />
      <ProductModal onClose={handleCloseModal} product={selectedProduct} />
    </>
  );
}
