import { SafeAreaView, View } from 'react-native';
import { Typograph } from '../ui';

export default function Footer() {
  return (
    <View className="min-h-[110px] bg-primary">
      <SafeAreaView className="flex-1">
        <Typograph>Footer</Typograph>
      </SafeAreaView>
    </View>
  );
}
