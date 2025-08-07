import { View } from 'react-native';
import { Typography } from '../ui';

export default function Header() {
  return (
    <View className="mt-6 flex-col px-6">
      <Typography size={'sm'} weigth={400}>
        bem-vindo(a) ao
      </Typography>
      <Typography size={'2xl'} weigth={700}>
        WAITER
        <Typography size={'2xl'} weigth={400}>
          APP
        </Typography>
      </Typography>
    </View>
  );
}
