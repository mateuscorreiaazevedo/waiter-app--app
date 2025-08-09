import { Image, View } from 'react-native';
import { setUriImagePath } from '../../../../products/util/setUriImagePathHelper';
import {
  CurrencyHelper,
  MinusCircle,
  PlusCircle,
  Typography,
} from '../../../../shared';
import { useOrder } from '../../../hooks/useOrder';
import type { OrderProduct } from '../../../models/OrderProduct';
import { CartItemButton } from './CartItemButton';

type CartItemProps = OrderProduct;

export function CartItem({ product, quantity }: CartItemProps) {
  const { onAddProduct, onSubAndRemoveProduct } = useOrder();

  return (
    <View className="flex-row gap-3 py-2">
      <Image
        className="h-10 w-12 rounded-md"
        source={{ uri: setUriImagePath(product.imagePath) }}
      />
      <View className="min-w-5">
        <Typography color="gray500" size="14px">
          {quantity}x
        </Typography>
      </View>
      <View className="flex-1 justify-between gap-1">
        <Typography size="14px" weigth={600}>
          {product.name}
        </Typography>
        <Typography color="gray700" size="14px">
          {CurrencyHelper.formatToBRL(product.price * quantity)}
        </Typography>
      </View>
      <View className="flex-row">
        <CartItemButton onPress={() => onSubAndRemoveProduct(product._id)}>
          <MinusCircle />
        </CartItemButton>
        <CartItemButton onPress={() => onAddProduct(product)}>
          <PlusCircle />
        </CartItemButton>
      </View>
    </View>
  );
}
