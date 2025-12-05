import { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { colors } from "../../../../assets/styles/colors";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import type { ProductModel } from "../../models/Product";
import { ProductModal } from "../ProductModal";
import { ListProductsMenuEmptyState } from "./EmptyState";
import { ProductMenuItem } from "./ProductMenuItem";

interface ListProductsMenuProps {
  isRefetchLoading?: boolean;
  onRefetchCategories?(): Promise<void>;
}

export function ListProductsMenu({
  isRefetchLoading,
  onRefetchCategories,
}: ListProductsMenuProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(
    null
  );

  const { products, isFetched, isLoading, refetchProducts } =
    useFetchProducts();

  function handleOpenModal(product: ProductModel) {
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
  }

  const loading = isLoading || isRefetchLoading;
  const isLoaded = isFetched && !loading;

  async function refetchHomeScreen() {
    await Promise.allSettled([
      refetchProducts(),
      onRefetchCategories ? onRefetchCategories() : Promise.resolve(),
    ]);
  }

  return (
    <>
      {loading && (
        <View className="flex-1 items-center justify-center gap-8">
          <ActivityIndicator color={colors.primary} size={"large"} />
        </View>
      )}
      {isLoaded && !products?.length && <ListProductsMenuEmptyState />}
      {isLoaded && !!products?.length && (
        <FlatList
          className="mt-6"
          contentContainerClassName="px-6"
          data={products}
          ItemSeparatorComponent={() => (
            <View className="my-6 h-px w-full bg-gray300/30" />
          )}
          keyExtractor={(item) => item._id}
          onRefresh={refetchHomeScreen}
          refreshing={loading}
          renderItem={({ item }) => {
            return (
              <ProductMenuItem
                {...item}
                onOpenModalVisible={() => handleOpenModal(item)}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
      <ProductModal onClose={handleCloseModal} product={selectedProduct} />
    </>
  );
}
