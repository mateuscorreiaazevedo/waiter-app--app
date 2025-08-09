import { FlatList, View } from 'react-native';
import type { IngredientModel } from '../../../models/Ingredient';
import { ProductModalIngredientsListHeader } from './Header';
import { IngredientItem } from './IngredientItem';

interface ProductModalIngredientsListProps {
  ingredients?: IngredientModel[];
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
        renderItem={({ item }) => <IngredientItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
