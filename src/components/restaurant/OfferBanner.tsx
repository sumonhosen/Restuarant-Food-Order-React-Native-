

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const OfferBanner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>
        🔥 50% OFF Today
      </Text>

      <Text style={styles.sub}>
        Free Delivery on your first order
      </Text>
    </View>
  );
};

export default OfferBanner;

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#FF6B00',
        borderRadius: 20,
        padding: 20,
        marginTop:-50,
        height: 170,
        marginBottom: 10,  
    },

    title: {
        color: '#fff',
        fontSize: 23,
        marginTop:20,
        fontWeight: '700',
    },

    sub: {
        color: '#fff',
        marginTop: 8,
        fontSize: 21,
    },
});