import { FlatList, View } from 'react-native';
import { categories } from '../../../../../mocks/categories';
import { FilterCategoryItem } from './FilterCategoryItem';

export function RowFilterCategories() {
  return (
    <View className="mt-8 min-h-[74px]">
      <FlatList
        contentContainerClassName="px-4"
        data={categories}
        horizontal
        keyExtractor={(item, index) => `${item._id}-${index}`}
        renderItem={({ item }) => <FilterCategoryItem {...item} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
