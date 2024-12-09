import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import CustomSplash from '@/components/SplashScreen/CustomSplash';
import { useState, useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const [loaded] = useFonts({
      Lexend: require('../assets/fonts/Lexend.ttf'),
  });
  const colorScheme = useColorScheme();

  const [timerComplete, setTimerComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerComplete(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded || !timerComplete) {
    return <CustomSplash />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}