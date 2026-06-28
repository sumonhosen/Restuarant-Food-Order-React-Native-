import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function CartFooter({total, onCheckout}: any) {
  return (
    <View style={styles.footer}>
      <Text>Total: ${total}</Text>
      <TouchableOpacity style={styles.btn} onPress={onCheckout}>
        <Text style={{color: '#fff'}}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 15,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
  },
});