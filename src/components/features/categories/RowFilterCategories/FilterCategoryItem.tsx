import { TouchableOpacity, View } from 'react-native';
import type { Category } from '../../../../types/features/categories';
import { Typograph } from '../../../ui';

export function FilterCategoryItem(props: Category) {
  return (
    <TouchableOpacity className="items-center gap-2 px-2 py-4">
      <View className="size-[52px] items-center justify-center rounded-full bg-white">
        <Typograph className="text-2xl">{props.icon}</Typograph>
      </View>
      <Typograph className="text-sm" weigth={600}>
        {props.name}
      </Typograph>
    </TouchableOpacity>
  );
}
