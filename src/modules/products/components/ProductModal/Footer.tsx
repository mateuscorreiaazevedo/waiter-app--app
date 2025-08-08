import { SafeAreaView, View } from 'react-native';
import { Button, CurrencyHelper, Typography } from '../../../shared';

interface ProductModalFooterProps {
  price: number;
  onAddToCart: VoidFunction;
}

export function ProductModalFooter({
  price,
  onAddToCart,
}: ProductModalFooterProps) {
  return (
    <SafeAreaView className="flex-row items-center bg-white">
      <View className="flex-1 px-6 py-4">
        <Typography color="gray700" weigth={500}>
          Preço
        </Typography>
        <Typography size="18px" weigth={600}>
          {CurrencyHelper.formatToBRL(price)}
        </Typography>
      </View>
      <Button className="mr-6" onPress={onAddToCart}>
        Adicionar ao pedido
      </Button>
    </SafeAreaView>
  );
}
