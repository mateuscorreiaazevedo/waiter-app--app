import { TouchableOpacity, View } from 'react-native';
import { ACTIVE_OPACITY, Typography } from '../../../shared';

interface OrderHeaderProps {
  onCancelOrder: VoidFunction;
  selectedTable: string;
}

export function OrderHeader({
  onCancelOrder,
  selectedTable,
}: OrderHeaderProps) {
  return (
    <View className="gap-3.5">
      <View className="flex-row items-center justify-between">
        <Typography size={'24px'} weigth={600}>
          Pedido
        </Typography>
        <TouchableOpacity
          activeOpacity={ACTIVE_OPACITY}
          onPress={onCancelOrder}
        >
          <Typography color="primary" size="14px" weigth={600}>
            Cancelar pedido
          </Typography>
        </TouchableOpacity>
      </View>
      <View className="rounded-lg border border-gray300/30 bg-white p-4">
        <Typography color="gray500" size="14px">
          Mesa {selectedTable}
        </Typography>
      </View>
    </View>
  );
}
