import { View } from 'react-native';
import { Typography } from '../ui';

export default function Header() {
  return (
    <View className="mt-6 flex-col px-6">
      <Typography className="text-sm" weigth={400}>
        bem-vindo(a) ao
      </Typography>
      <Typography className="text-[24px]" weigth={700}>
        WAITER
        <Typography className="text-[24px]" weigth={400}>
          APP
        </Typography>
      </Typography>
    </View>
  );
}
