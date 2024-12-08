import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import CustomSplash from '@/components/SplashScreen/CustomSplash';
import { useState, useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [timerComplete, setTimerComplete] = useState(false);
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerComplete(true);
    }, 7500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    async function hideSplash() {
      await SplashScreen.hideAsync();
    }
    if (loaded && timerComplete) {
      hideSplash();
      setIsLoading(false);
    }
  }, [loaded, timerComplete]);

  if (!loaded || isLoading) {
    return <CustomSplash/>;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}