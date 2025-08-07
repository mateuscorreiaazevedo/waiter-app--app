import { TouchableOpacity, View } from 'react-native';
import { Close, Typography } from '../../../shared';

interface TableModalHeaderProps {
  onClose: () => void;
}

export function TableModalHeader({ onClose }: TableModalHeaderProps) {
  return (
    <View className="h-11 flex-row items-center justify-between">
      <Typography weigth={600}>Informar mesa</Typography>
      <TouchableOpacity onPress={onClose}>
        <Close color="gray700" />
      </TouchableOpacity>
    </View>
  );
}
