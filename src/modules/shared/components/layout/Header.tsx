import clsx from 'clsx';
import { View } from 'react-native';
import { OrderHeader, useOrder } from '../../../orders';
import { Typography } from '../ui';

export default function Header() {
  const { selectedTable, onCancelOrder } = useOrder();

  return (
    <View
      className={clsx('mt-6 flex-col px-6', selectedTable ? 'mb-5' : 'mb-8')}
    >
      {!selectedTable && (
        <>
          <Typography size={'16px'} weigth={400}>
            bem-vindo(a) ao
          </Typography>
          <Typography size={'24px'} weigth={700}>
            WAITER
            <Typography size={'24px'} weigth={400}>
              APP
            </Typography>
          </Typography>
        </>
      )}
      {!!selectedTable && (
        <OrderHeader
          onCancelOrder={onCancelOrder}
          selectedTable={selectedTable}
        />
      )}
    </View>
  );
}
