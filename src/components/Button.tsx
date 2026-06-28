import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({text, onPress, color = '#333'}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});