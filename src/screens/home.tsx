import clsx from 'clsx';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { Typograph } from '../components/ui';

export function HomeScreen() {
  const isAndroid = Platform.OS === 'android';

  return (
    <SafeAreaView
      className={clsx(
        'flex-1 bg-white',
        isAndroid && `mt-[${StatusBar.currentHeight}px]`
      )}
    >
      <Typograph>Open up App.tsx to start working on your app!</Typograph>
    </SafeAreaView>
  );
}
