import React from 'react';
import {View, Text, Image, Button, StyleSheet,TouchableOpacity} from 'react-native';
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

      {/* Rating Badge */}
      <View style={styles.ratingBadge}>
        <Text style={styles.ratingText}>⭐ {restaurant.rating}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.name}>{restaurant.name}</Text>

        <Text style={styles.category}>
          🍔 Fast Food • 20-30 min
        </Text>

        <Text style={styles.description}>
          Delicious freshly prepared meals with premium ingredients.
        </Text>

        <View style={styles.bottomRow}>
          <View>
            <Text style={styles.priceLabel}>Starting From</Text>
            <Text style={styles.price}>$12.99</Text>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleAdd}>
            <Text style={styles.buttonText}>+ Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  image: {
    width: '100%',
    height: 260,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  ratingBadge: {
    position: 'absolute',
    top: 220,
    right: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  ratingText: {
    fontWeight: '700',
    color: '#333',
    fontSize: 15,
  },

  content: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },

  category: {
    marginTop: 8,
    color: '#777',
    fontSize: 15,
  },

  description: {
    marginTop: 18,
    color: '#666',
    fontSize: 15,
    lineHeight: 24,
  },

  bottomRow: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  priceLabel: {
    color: '#999',
    fontSize: 13,
  },

  price: {
    marginTop: 4,
    fontSize: 26,
    fontWeight: '700',
    color: '#FF6B00',
  },

  button: {
    backgroundColor: '#FF6B00',
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 14,
    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});