import { View } from 'react-native';
import { Typography } from '../../../../shared';
import type { IngredientModel } from '../../../models/Ingredient';

export function IngredientItem({ icon, name }: IngredientModel) {
  return (
    <View className="flex-row gap-4 rounded-lg border border-gray300/30 p-4">
      <Typography>{icon}</Typography>
      <Typography color="gray700" size="14px">
        {name}
      </Typography>
    </View>
  );
}
