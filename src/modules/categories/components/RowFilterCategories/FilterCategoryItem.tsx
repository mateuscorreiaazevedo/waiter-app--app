import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../../../core';
import type { CategoryModel } from '../../models/Category';

export function FilterCategoryItem(props: CategoryModel) {
  return (
    <TouchableOpacity className="items-center gap-2 px-2 py-4">
      <View className="size-[52px] items-center justify-center rounded-full bg-white">
        <Typography className="text-2xl">{props.icon}</Typography>
      </View>
      <Typography className="text-sm" weigth={600}>
        {props.name}
      </Typography>
    </TouchableOpacity>
  );
}
