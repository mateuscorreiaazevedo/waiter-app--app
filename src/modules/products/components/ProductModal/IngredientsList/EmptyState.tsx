import { View } from 'react-native';
import { Typography } from '../../../../shared';

export function ProductModalIngredientsListEmptyState() {
  return (
    <View className="items-center">
      <Typography color={'gray700'} size={'14px'}>
        Este produto não possui ingredientes
      </Typography>
    </View>
  );
}
