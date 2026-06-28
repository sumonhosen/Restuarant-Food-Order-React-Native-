import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function OrderSuccessScreen({navigation}: any) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.check}>✓</Text>
      </View>

      <Text style={styles.title}>Order Placed Successfully!</Text>

      <Text style={styles.subtitle}>
        Thank you for your order.
      </Text>

      <Text style={styles.subtitle}>
        Your food is being prepared and will arrive soon.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RestaurantList')}>
        <Text style={styles.buttonText}>
          Continue Shopping
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.historyButton}
        onPress={() => navigation.navigate('OrderHistory')}>
        <Text style={styles.historyText}>
          View Order History
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 25,
  },

  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },

  check: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5,
  },

  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 40,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  historyButton: {
    marginTop: 20,
  },

  historyText: {
    color: '#2E7D32',
    fontWeight: 'bold',
    fontSize: 16,
  },
});