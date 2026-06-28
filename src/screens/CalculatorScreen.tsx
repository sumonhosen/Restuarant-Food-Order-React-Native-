import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');

  const press = (value: string) => setInput(input + value);
  const clear = () => setInput('');
  const calculate = () => {
    try {
      // Safe evaluation using Function constructor instead of eval
      const result = new Function('return ' + input)();
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input || '0'}</Text>

      {['789/', '456*', '123-', '0C=+'].map((row, i) => (
        <View key={i} style={styles.row}>
          {row.split('').map((item, j) => {
            const color = item === '/' || item === '*' || item === '-' || item === '+' ? '#ff9500'
              : item === 'C' ? '#ff3b30'
              : item === '=' ? '#34c759'
              : '#333';
            const action = item === 'C' ? clear : item === '=' ? calculate : () => press(item);
            return <Button key={j} text={item} onPress={action} color={color} />;
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    justifyContent: 'flex-end',
    padding: 20,
  },
  display: {
    color: '#fff',
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});