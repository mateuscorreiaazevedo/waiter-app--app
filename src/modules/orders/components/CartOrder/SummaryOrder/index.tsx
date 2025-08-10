import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Button, CurrencyHelper, Typography } from '../../../../shared';
import { useCreateOrder } from '../../../hooks/useCreateOrder';
import { useOrder } from '../../../hooks/useOrder';
import type { CreateOrderRequestType } from '../../../types/CreateOrderTypes';
import { ConfirmedOrderModal } from '../../ConfirmedOrderModal';

export function SummaryOrder() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { cartItems, onCancelOrder, selectedTable } = useOrder();
  const { onCreateOrder, isPending } = useCreateOrder();

  const totalPrice = useMemo(() => {
    const total = cartItems.reduce((accumulator, item) => {
      const itemTotal = item.product.price * item.quantity;

      return accumulator + itemTotal;
    }, 0);

    return total;
  }, [cartItems]);

  async function handleConfirmOrder() {
    const payload: CreateOrderRequestType = {
      table: selectedTable ?? '',
      products: cartItems.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
      })),
    };

    await onCreateOrder(payload, {
      onSuccess: () => {
        setIsModalVisible(true);
      },
    });
  }

  function handleCloseConfirmedModal() {
    setIsModalVisible(false);
    onCancelOrder();
  }

  return (
    <>
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

        <Button
          disabled={!cartItems.length}
          isLoading={isPending}
          onPress={handleConfirmOrder}
        >
          Confirmar pedido
        </Button>
      </View>
      <ConfirmedOrderModal
        onClose={handleCloseConfirmedModal}
        visible={isModalVisible}
      />
    </>
  );
}
