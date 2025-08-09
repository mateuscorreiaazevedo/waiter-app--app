import { useMemo } from 'react';
import { View } from 'react-native';
import { Button, CurrencyHelper, Typography } from '../../../../shared';
import { useCartOrder } from '../../../hooks/useCartOrder';

export function SummaryOrder() {
  const { cartItems } = useCartOrder();

  const totalPrice = useMemo(() => {
    const total = cartItems.reduce((accumulator, item) => {
      const itemTotal = item.product.price * item.quantity;

      return accumulator + itemTotal;
    }, 0);

    return total;
  }, [cartItems]);

  return (
    <View className="flex-row items-center justify-between py-4">
      {!!cartItems.length && (
        <View>
          <Typography color="gray700" size="14px" weigth={500}>
            Total
          </Typography>
          <Typography size="18px" weigth={600}>
            {CurrencyHelper.formatToBRL(totalPrice)}
          </Typography>
        </View>
      )}

      {!cartItems.length && (
        <Typography className="max-w-32" color="gray500">
          Seu carrinho está vazio
        </Typography>
      )}

      <Button disabled={!cartItems.length}>Confirmar pedido</Button>
    </View>
  );
}
