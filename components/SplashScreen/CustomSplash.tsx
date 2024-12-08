import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function CustomSplash() {
  const animation = React.useRef(null);
  const windowDimensions = Dimensions.get('window');

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        style={[styles.lottie, {
          width: windowDimensions.width,
          height: windowDimensions.height
        }]}
        source={require('../../assets/images/splash.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => {
          SplashScreen.hideAsync();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});