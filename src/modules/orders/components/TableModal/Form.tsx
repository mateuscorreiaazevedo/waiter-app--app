import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button } from '../../../shared';

type TableModalFormProps = {
  onSave: (table: string) => void;
};

export function TableModalForm({ onSave }: TableModalFormProps) {
  const [tableStr, setTableStr] = useState('');

  return (
    <View className="flex-1 gap-4">
      <TextInput
        className="rounded-lg border border-gray500/50 p-4 placeholder:text-gray700"
        keyboardType="number-pad"
        onChangeText={setTableStr}
        placeholder="Número da mesa"
        value={tableStr}
      />
      <Button disabled={tableStr.length === 0} onPress={() => onSave(tableStr)}>
        Salvar
      </Button>
    </View>
  );
}
