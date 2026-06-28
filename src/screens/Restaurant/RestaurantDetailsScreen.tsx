import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {useCart} from '../../context/CartContext';

export default function RestaurantDetailsScreen({route, navigation}: any) {
  const {restaurant} = route.params;
  const {addToCart} = useCart();

  const handleAdd = () => {
    addToCart({
      id: restaurant.id,
      name: restaurant.name,
      price: 10,
      quantity: 1,
    });
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: restaurant.image}} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>{restaurant.rating} ⭐</Text>

      <Button title="Add to Cart" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  image: {width: '100%', height: 200, borderRadius: 10},
  name: {fontSize: 22, fontWeight: 'bold', marginVertical: 10},
});