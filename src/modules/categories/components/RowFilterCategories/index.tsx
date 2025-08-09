import { useCallback, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { colors } from '../../../../assets/styles/colors';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import { FilterCategoryItem } from './FilterCategoryItem';

export function RowFilterCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { categories, isLoading, isFetched } = useFetchCategories();

  const handleSelectCategory = useCallback((categoryId: string) => {
    setSelectedCategory(prev => {
      const newPrev = prev;

      if (newPrev === categoryId) {
        return null;
      }

      return categoryId;
    });
  }, []);

  return (
    <View className="min-h-[74px]">
      {isLoading && (
        <View className="items-center justify-center">
          <ActivityIndicator color={colors.primary} />
        </View>
      )}

      {isFetched && (
        <FlatList
          contentContainerClassName="px-4"
          data={categories}
          horizontal
          keyExtractor={(item, index) => `${item._id}-${index}`}
          renderItem={({ item }) => (
            <FilterCategoryItem
              {...item}
              isActive={selectedCategory === item._id}
              onPress={handleSelectCategory}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </View>
  );
}
