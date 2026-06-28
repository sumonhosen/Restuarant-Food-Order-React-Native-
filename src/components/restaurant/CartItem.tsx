import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function CartItem({item, onRemove}: any) {
  return (
    <View style={styles.row}>
      <Text>{item.name}</Text>
      <Text>x{item.quantity}</Text>

      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Text style={styles.remove}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8},
  remove: {color: 'red'},
});