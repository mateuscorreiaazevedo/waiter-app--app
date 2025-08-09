import { FlatList, View } from 'react-native';
import { useCartOrder } from '../../hooks/useCartOrder';
import { CartItem } from './CartItem';
import { SummaryOrder } from './SummaryOrder';

export function CartOrder() {
  const { cartItems } = useCartOrder();

  return (
    <View>
      <FlatList
        className="max-h-36"
        data={cartItems}
        keyExtractor={item => item.product._id}
        renderItem={({ item }) => <CartItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
      <SummaryOrder />
    </View>
  );
}
