import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {useCart} from '../../context/CartContext';

export default function CheckoutScreen({navigation}: any) {
  const {cart, clearCart} = useCart();

  const [address, setAddress] = useState(
    'House #12, Road #05, Dhaka',
  );

  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const subtotal = cart.reduce(
    (sum: number, item: any) => sum + item.price * item.quantity,
    0,
  );

  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  const placeOrder = () => {
    if (!address.trim()) {
      Alert.alert('Address Required', 'Please enter your delivery address.');
      return;
    }

    clearCart();

    navigation.replace('OrderSuccess');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>

      {/* Delivery Address */}
      <View style={styles.card}>
        <Text style={styles.title}>Delivery Address</Text>

        <TextInput
          value={address}
          onChangeText={setAddress}
          multiline
          style={styles.input}
          placeholder="Enter delivery address"
        />
      </View>

      {/* Payment */}
      <View style={styles.card}>
        <Text style={styles.title}>Payment Method</Text>

        <TouchableOpacity
          style={[
            styles.option,
            paymentMethod === 'Cash' && styles.selected,
          ]}
          onPress={() => setPaymentMethod('Cash')}>
          <Text>Cash on Delivery</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            paymentMethod === 'Card' && styles.selected,
          ]}
          onPress={() => setPaymentMethod('Card')}>
          <Text>Credit / Debit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            paymentMethod === 'Bkash' && styles.selected,
          ]}
          onPress={() => setPaymentMethod('Bkash')}>
          <Text>bKash</Text>
        </TouchableOpacity>
      </View>

      {/* Order Summary */}
      <View style={styles.card}>
        <Text style={styles.title}>Order Summary</Text>

        {cart.map((item: any) => (
          <View key={item.id} style={styles.row}>
            <Text>
              {item.name} × {item.quantity}
            </Text>

            <Text>৳ {item.price * item.quantity}</Text>
          </View>
        ))}

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text>Subtotal</Text>
          <Text>৳ {subtotal}</Text>
        </View>

        <View style={styles.row}>
          <Text>Delivery Fee</Text>
          <Text>৳ {deliveryFee}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>৳ {total}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={placeOrder}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>

      <View style={{height: 30}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 20,
  },

  card: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    minHeight: 70,
    textAlignVertical: 'top',
  },

  option: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginTop: 10,
  },

  selected: {
    borderColor: '#2E7D32',
    backgroundColor: '#E8F5E9',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 10,
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  button: {
    backgroundColor: '#2E7D32',
    marginHorizontal: 15,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});