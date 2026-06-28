import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

type Props = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  error?: string;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onSubmitEditing?: () => void;
};

export default function FormInput({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  keyboardType = 'default',
  secureTextEntry = false,
  onSubmitEditing,
}: Props) {
  return (
    <View style={{marginBottom: 10}}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={[styles.input, error && styles.errorBorder]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {marginBottom: 5, fontWeight: '600'},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 10,
  },
  errorBorder: {
    borderColor: 'red',
    borderWidth: 1.5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});