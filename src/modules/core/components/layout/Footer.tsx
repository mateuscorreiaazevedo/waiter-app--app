import { SafeAreaView, View } from 'react-native';
import { Button } from '../ui';

export default function Footer() {
  return (
    <View className="min-h-[110px] bg-gray100 px-6 py-4">
      <SafeAreaView>
        <Button>Novo pedido</Button>
      </SafeAreaView>
    </View>
  );
}
