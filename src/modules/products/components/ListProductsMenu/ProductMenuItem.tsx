import { Image, TouchableOpacity, View } from 'react-native';
import { useOrder } from '../../../orders';
import {
  ACTIVE_OPACITY,
  CurrencyHelper,
  PlusCircle,
  Typography,
} from '../../../shared';
import type { Product } from '../../models/Product';
import { setUriImagePath } from '../../util/setUriImagePathHelper';

type ProductMenuItemProps = Product & {
  onOpenModalVisible: VoidFunction;
};

export function ProductMenuItem(product: ProductMenuItemProps) {
  const { name, description, price, imagePath, onOpenModalVisible } = product;
  const { onAddProduct, selectedTable, onOpenTableModal } = useOrder();

  function handleAddProductToOrder() {
    onAddProduct(product);

    if (!selectedTable) {
      onOpenTableModal();
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={ACTIVE_OPACITY}
      className="flex-row gap-4"
      onPress={onOpenModalVisible}
    >
      <Image
        className="aspect-square w-[120px] rounded-lg"
        source={{
          uri: setUriImagePath(imagePath),
        }}
      />
      <View className="flex-1 gap-2">
        <Typography weigth={700}>{name}</Typography>
        <Typography color={'gray700'} size={'14px'} weigth={400}>
          {description}
        </Typography>

        <View className="flex-row items-center justify-between">
          <Typography weigth={600}>
            {CurrencyHelper.formatToBRL(price)}
          </Typography>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            onPress={handleAddProductToOrder}
          >
            <PlusCircle />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
