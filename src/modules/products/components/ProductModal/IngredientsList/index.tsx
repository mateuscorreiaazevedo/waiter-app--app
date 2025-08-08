import { FlatList, View } from 'react-native';
import type { Ingredient } from '../../../models/Ingredient';
import { ProductModalIngredientsListEmptyState } from './EmptyState';
import { ProductModalIngredientsListHeader } from './Header';
import { IngredientItem } from './IngredientItem';

interface ProductModalIngredientsListProps {
  ingredients?: Ingredient[];
}

export function ProductModalIngredientsList({
  ingredients,
}: ProductModalIngredientsListProps) {
  return (
    <View className="flex-1">
      <ProductModalIngredientsListHeader />
      <FlatList
        contentContainerClassName="gap-1"
        data={ingredients}
        keyExtractor={item => item._id}
        ListEmptyComponent={ProductModalIngredientsListEmptyState}
        renderItem={({ item }) => <IngredientItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
