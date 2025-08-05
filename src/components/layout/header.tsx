import { View } from 'react-native';
import { Typograph } from '../ui';

export default function Header() {
  return (
    <View className="mt-6 flex-col px-6">
      <Typograph className="font-inter400 text-sm">bem-vindo(a) ao</Typograph>
      <Typograph className="font-inter700 text-2xl">
        WAITER<Typograph className="font-inter400">APP</Typograph>
      </Typograph>
    </View>
  );
}
