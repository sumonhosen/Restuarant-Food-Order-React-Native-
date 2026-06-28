
import React, {useEffect, useRef} from 'react';
import {Animated, View, Text, ActivityIndicator,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen({navigation}: any) {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
    const run = async () => {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
        }).start();

        const token = await AsyncStorage.getItem('userToken');

        setTimeout(() => {
        if (token) {
            navigation.reset({
            index: 0,
            routes: [{name: 'RestaurantList'}],
            });
        } else {
            navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
            });
        }
        }, 1500);
    };

    run();
    }, []);


  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: fadeAnim, alignItems: 'center'}}>
        
        {/* Logo */}
        <Text style={styles.logo}>🚀</Text>

        {/* App Name */}
        <Text style={styles.title}>My Awesome App</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Fast • Secure • Modern Experience
        </Text>

        {/* Loader */}
        <ActivityIndicator
          size="large"
          color="#ffffff"
          style={{marginTop: 25}}
        />

        <Text style={styles.loadingText}>Loading...</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 70,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 8,
    textAlign: 'center',
  },

  loadingText: {
    marginTop: 10,
    color: '#cbd5e1',
    fontSize: 12,
  },
});