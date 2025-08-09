import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import '../assets/styles/globals.css';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from '../screens/home';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { OrderProvider } from '../modules/orders';
import { QueryProvider } from '../modules/shared';

preventAutoHideAsync();

export function App() {
  const [loaded, error] = useFonts({
    inter400: Inter_400Regular,
    inter500: Inter_500Medium,
    inter600: Inter_600SemiBold,
    inter700: Inter_700Bold,
  });

  useEffect(() => {
    const isFontLoaded = loaded || error;

    if (isFontLoaded) {
      hideAsync();
    }
  }, [loaded, error]);

  if (!(loaded || error)) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryProvider>
        <OrderProvider>
          <HomeScreen />
        </OrderProvider>
        <StatusBar style="auto" />
      </QueryProvider>
    </SafeAreaProvider>
  );
}
