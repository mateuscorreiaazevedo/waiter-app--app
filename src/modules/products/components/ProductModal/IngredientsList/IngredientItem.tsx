import { View } from 'react-native';
import { Typography } from '../../../../shared';
import type { Ingredient } from '../../../models/Ingredient';

export function IngredientItem({ icon, name }: Ingredient) {
  return (
    <View className="flex-row gap-4 rounded-lg border border-gray300/30 p-4">
      <Typography>{icon}</Typography>
      <Typography color="gray700" size="14px">
        {name}
      </Typography>
    </View>
  );
}
