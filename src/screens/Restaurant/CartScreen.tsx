import React from 'react';
import {View,Text, FlatList,StyleSheet} from 'react-native';
import {useCart} from '../../context/CartContext';
import CartItem from '../../components/restaurant/CartItem';
import CartFooter from '../../components/restaurant/CartFooter';

export default function CartScreen({navigation}: any) {
  const {cart, removeFromCart} = useCart();

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>🛒 My Cart</Text>
          <Text style={styles.subtitle}>
            {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
          </Text>
        </View>

        {/* Cart List */}
        <FlatList
          data={cart}
          keyExtractor={i => i.id}
          renderItem={({item}) => (
            <CartItem item={item} onRemove={removeFromCart} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>🛒</Text>
              <Text style={styles.emptyTitle}>Your cart is empty</Text>
              <Text style={styles.emptyText}>
                Add some delicious food to get started.
              </Text>
            </View>
          }
        />

        {/* Footer */}
        <CartFooter
          total={total}
          onCheckout={() => navigation.navigate('Checkout')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB',
  },

  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 15,
    color: '#777',
  },

  listContent: {
    padding: 16,
    paddingBottom: 120, // CartFooter-এর জন্য space
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },

  emptyIcon: {
    fontSize: 60,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginTop: 15,
  },

  emptyText: {
    fontSize: 15,
    color: '#888',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});