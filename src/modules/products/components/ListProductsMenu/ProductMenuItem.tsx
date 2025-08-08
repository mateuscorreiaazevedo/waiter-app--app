import { Image, TouchableOpacity, View } from 'react-native';
import {
  ACTIVE_OPACITY,
  CurrencyHelper,
  PlusCircle,
  Typography,
} from '../../../shared';
import type { Product } from '../../models/Product';

type ProductMenuItemProps = Product;

export function ProductMenuItem({
  name,
  description,
  price,
  imagePath,
}: ProductMenuItemProps) {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} className="flex-row gap-4">
      <Image
        className="aspect-square w-[120px] rounded-lg"
        source={{
          uri: `http://192.168.5.56:9000/uploads/${imagePath}`,
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
          <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
            <PlusCircle />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}
