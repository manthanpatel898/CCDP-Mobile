import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }:any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('AuthNavigator');
    }, 10000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Test */}
      <Image source={require('../../assets/splash.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;