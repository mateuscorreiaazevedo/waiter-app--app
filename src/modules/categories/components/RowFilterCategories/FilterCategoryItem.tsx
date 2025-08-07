import clsx from 'clsx';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../../assets/styles/colors';
import { Typography } from '../../../shared';
import type { CategoryModel } from '../../models/Category';

type FilterCategoryItemProps = CategoryModel & {
  isActive?: boolean;
  onPress?: (categoryId: string) => void;
};

const isAndroid = Platform.OS === 'android';

export function FilterCategoryItem(props: FilterCategoryItemProps) {
  const { _id, icon, name, isActive = false, onPress = () => {} } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={clsx(
        'items-center gap-2 px-2 py-4',
        isActive ? 'opacity-100' : 'opacity-40'
      )}
      onPress={() => onPress(_id)}
    >
      <View
        className="size-[52px] items-center justify-center rounded-full bg-white"
        style={style.rounded}
      >
        <Typography className="text-2xl">{icon}</Typography>
      </View>
      <Typography className="text-sm" weigth={600}>
        {name}
      </Typography>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  rounded: {
    shadowColor: colors.gray500,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: isAndroid ? 1 : 0.15,
    shadowRadius: 1,
  },
});
