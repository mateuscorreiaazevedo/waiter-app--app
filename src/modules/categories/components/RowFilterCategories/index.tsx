import { FlatList, View } from 'react-native';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import { useFetchProductsByCategory } from '../../hooks/useFetchProductsByCategory';
import { FilterCategoryItem } from './FilterCategoryItem';
import { FilterCategorySkeleton } from './FilterCategorySkeleton';

const SKELETON_LENGHT = 8;

export function RowFilterCategories() {
  const { categories, isLoading, isFetched } = useFetchCategories();
  const { selectedCategory, handleListProductsByCategory } =
    useFetchProductsByCategory();

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
