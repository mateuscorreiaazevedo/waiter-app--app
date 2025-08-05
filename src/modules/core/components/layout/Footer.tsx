import { SafeAreaView, View } from 'react-native';
import { Typography } from '../ui';

export default function Footer() {
  return (
    <View className="min-h-[110px] bg-primary">
      <SafeAreaView className="flex-1">
        <Typography>Footer</Typography>
      </SafeAreaView>
    </View>
  );
}
