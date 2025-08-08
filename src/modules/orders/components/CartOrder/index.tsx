import { FlatList, View } from 'react-native';
import { useCartOrder } from '../../hooks/useCartOrder';
import { CartItem } from './CartItem';

export function CartOrder() {
  const { cartItems } = useCartOrder();

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.product._id}
        renderItem={({ item }) => <CartItem {...item} />}
      />
    </View>
  );
}
