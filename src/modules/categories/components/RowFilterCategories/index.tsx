import { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { categories } from '../../../../../mocks/categories';
import { FilterCategoryItem } from './FilterCategoryItem';

export function RowFilterCategories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
    </View>
  );
}
