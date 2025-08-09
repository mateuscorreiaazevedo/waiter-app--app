import { View } from 'react-native';
import { Empty, Typography } from '../../../shared';

export function ListProductsMenuEmptyState() {
  return (
    <View className="flex-1 items-center justify-center gap-6">
      <Empty />
      <Typography className="w-3/4 text-center">
        Nenhum produto cadastrado até o momento.
      </Typography>
    </View>
  );
}
