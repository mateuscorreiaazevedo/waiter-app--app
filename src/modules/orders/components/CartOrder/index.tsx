import { FlatList, View } from 'react-native';
import { useOrder } from '../../hooks/useOrder';
import { CartItem } from './CartItem';
import { SummaryOrder } from './SummaryOrder';

export function CartOrder() {
  const { cartItems } = useOrder();

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
