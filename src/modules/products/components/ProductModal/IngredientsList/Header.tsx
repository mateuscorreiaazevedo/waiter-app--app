import { View } from 'react-native';
import { Typography } from '../../../../shared';

export function ProductModalIngredientsListHeader() {
  return (
    <View className="mb-4">
      <Typography color={'gray700'} weigth={600}>
        Ingredientes
      </Typography>
    </View>
  );
}
