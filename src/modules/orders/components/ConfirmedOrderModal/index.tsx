import { Modal, TouchableOpacity, View } from 'react-native';
import { ACTIVE_OPACITY, CheckCircle, Typography } from '../../../shared';

interface ConfirmedOrderModalProps {
  onClose: () => void;
  visible: boolean;
}

export function ConfirmedOrderModal({
  onClose,
  visible,
}: ConfirmedOrderModalProps) {
  return (
    <Modal
      animationType="slide"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <View className="flex-1 items-center justify-center bg-primary">
        <View className="w-48 items-center justify-center gap-1.5">
          <CheckCircle />
          <Typography color={'white'} size={'18px'} weigth={600}>
            Pedido confirmado
          </Typography>
          <Typography className="text-center" color={'muted'}>
            O pedido já entrou para a fila de produção!
          </Typography>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            className="mt-2 rounded-full bg-white px-6 py-1"
            onPress={onClose}
          >
            <Typography color={'primary'} weigth={600}>
              Ok
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
