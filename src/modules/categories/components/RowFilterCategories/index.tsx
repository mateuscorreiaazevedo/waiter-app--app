import { FlatList, View } from "react-native";
import type { useFetchCategories } from "../../hooks/useFetchCategories";
import { useFetchProductsByCategory } from "../../hooks/useFetchProductsByCategory";
import { FilterCategoryItem } from "./FilterCategoryItem";
import { FilterCategorySkeleton } from "./FilterCategorySkeleton";

interface RowFilterCategoriesProps {
  setIsRefetchLoading?: (value: boolean) => void;
  responseCategories: ReturnType<typeof useFetchCategories>;
}

const SKELETON_LENGHT = 8;

export function RowFilterCategories({
  setIsRefetchLoading,
  responseCategories,
}: RowFilterCategoriesProps) {
  const { categories, isLoading, isFetched } = responseCategories;
  const { selectedCategory, handleListProductsByCategory } =
    useFetchProductsByCategory({ setIsRefetchLoading });

  return (
    <View className="min-h-[74px]">
      {isLoading && (
        <View className="items-center justify-center">
          <FlatList
            data={Array.from({ length: SKELETON_LENGHT })}
            horizontal
            renderItem={() => <FilterCategorySkeleton />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      )}

      {isFetched && !isLoading && (
        <FlatList
          contentContainerClassName="px-4"
          data={categories}
          horizontal
          keyExtractor={(item, index) => `${item._id}-${index}`}
          refreshing={isLoading}
          renderItem={({ item }) => (
            <FilterCategoryItem
              {...item}
              isActive={selectedCategory === item._id}
              onPress={handleListProductsByCategory}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
