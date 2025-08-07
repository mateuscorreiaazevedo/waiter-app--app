import { useCallback } from 'react';
import { KeyboardAvoidingView, Modal, View } from 'react-native';
import { validateAndroidPlatform } from '../../../shared';
import { TableModalForm } from './Form';
import { TableModalHeader } from './Header';

type TableModalProps = {
  visible?: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
};

export function TableModal({
  visible = false,
  onClose,
  onSave,
}: TableModalProps) {
  const isAndroid = validateAndroidPlatform();

  const handleSave = useCallback(
    (table: string) => {
      onSave(table);
      onClose();
    },
    [onClose, onSave]
  );

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <KeyboardAvoidingView
        behavior={isAndroid ? 'height' : 'padding'}
        className="flex-1 items-stretch justify-center bg-black/50 px-6"
      >
        <View className="h-60 gap-7 rounded-lg bg-gray100 p-6">
          <TableModalHeader onClose={onClose} />
          <TableModalForm onSave={handleSave} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
