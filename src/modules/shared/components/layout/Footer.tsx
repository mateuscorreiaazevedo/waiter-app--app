import clsx from 'clsx';
import { SafeAreaView, View } from 'react-native';
import { CartOrder } from '../../../orders';
import { Button } from '../ui';

type FooterProps = {
  onOpenTableModal: () => void;
  selectedTable: string | null;
};

export default function Footer({
  onOpenTableModal,
  selectedTable,
}: FooterProps) {
  return (
    <View
      className={clsx(
        'min-h-[110px] border-gray300/30 border-t bg-white px-6 pb-4',
        !selectedTable && 'pt-4'
      )}
    >
      <SafeAreaView>
        {!selectedTable && (
          <Button onPress={onOpenTableModal}>Novo pedido</Button>
        )}
        {!!selectedTable && <CartOrder />}
      </SafeAreaView>
    </View>
  );
}
