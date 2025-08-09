import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '../../../../assets/styles/colors';
import { validateAndroidPlatform } from '../../../shared';

const isAndroid = validateAndroidPlatform();

export function FilterCategorySkeleton() {
  return (
    <View className="px-2 py-4">
      <View
        className="size-[52px] items-center justify-center rounded-full bg-white"
        style={style.rounded}
      >
        <ActivityIndicator color={colors.primary} />
      </View>
    </View>
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
