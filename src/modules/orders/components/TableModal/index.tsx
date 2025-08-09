import { useCallback } from 'react';
import { KeyboardAvoidingView, Modal, View } from 'react-native';
import { validateAndroidPlatform } from '../../../shared';
import { useOrder } from '../../hooks/useOrder';
import { TableModalForm } from './Form';
import { TableModalHeader } from './Header';

export function TableModal() {
  const isAndroid = validateAndroidPlatform();
  const { onCloseTableModal, isModalTableVisible, onSaveTable } = useOrder();

  const handleSave = useCallback(
    (table: string) => {
      onSaveTable(table);
    },
    [onSaveTable]
  );

  return (
    <Modal animationType="slide" transparent visible={isModalTableVisible}>
      <KeyboardAvoidingView
        behavior={isAndroid ? 'height' : 'padding'}
        className="flex-1 items-stretch justify-center bg-black/50 px-6"
      >
        <View className="h-60 gap-7 rounded-lg bg-gray100 p-6">
          <TableModalHeader onClose={onCloseTableModal} />
          <TableModalForm onSave={handleSave} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
