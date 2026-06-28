import React from 'react';
import {View, FlatList} from 'react-native';
import {useCart} from '../../context/CartContext';
import CartItem from '../../components/restaurant/CartItem';
import CartFooter from '../../components/restaurant/CartFooter';

export default function CartScreen({navigation}: any) {
  const {cart, removeFromCart} = useCart();

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={cart}
        keyExtractor={i => i.id}
        renderItem={({item}) => (
          <CartItem item={item} onRemove={removeFromCart} />
        )}
      />

      <CartFooter
        total={total}
        onCheckout={() => navigation.navigate('Checkout')}
      />
    </View>
  );
}