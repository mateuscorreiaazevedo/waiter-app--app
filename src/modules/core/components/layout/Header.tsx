import { View } from 'react-native';
import { Typography } from '../ui';

export default function Header() {
  return (
    <View className="mt-6 flex-col px-6">
      <Typography className="font-inter400 text-sm">bem-vindo(a) ao</Typography>
      <Typography className="font-inter700 text-2xl">
        WAITER<Typography className="font-inter400">APP</Typography>
      </Typography>
    </View>
  );
}
