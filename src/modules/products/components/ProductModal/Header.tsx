import { View } from 'react-native';
import { Typography } from '../../../shared';

interface ProductModalHeaderProps {
  name: string;
  description: string;
}

export function ProductModalHeader({
  name,
  description,
}: ProductModalHeaderProps) {
  return (
    <View className="gap-4">
      <Typography size="18px" weigth={600}>
        {name}
      </Typography>
      <Typography color="gray700">{description}</Typography>
    </View>
  );
}
