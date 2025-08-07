import { SafeAreaView, View } from 'react-native';
import { Button } from '../ui';

type FooterProps = {
  onOpenTableModal: () => void;
  selectedTable: string;
};

export default function Footer({
  onOpenTableModal,
  selectedTable,
}: FooterProps) {
  return (
    <View className="min-h-[110px] bg-gray100 px-6 py-4">
      <SafeAreaView>
        {!selectedTable && (
          <Button onPress={onOpenTableModal}>Novo pedido</Button>
        )}
      </SafeAreaView>
    </View>
  );
}
