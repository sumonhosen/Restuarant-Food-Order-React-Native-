import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

const orders = [
  {
    id: '1',
    restaurant: 'Pizza Palace',
    item: 'Chicken Pizza',
    total: 850,
    status: 'Delivered',
    date: '24 June 2026',
    image: 'https://picsum.photos/200',
  },
  {
    id: '2',
    restaurant: 'Burger House',
    item: 'Cheese Burger',
    total: 450,
    status: 'Delivered',
    date: '20 June 2026',
    image: 'https://picsum.photos/201',
  },
  {
    id: '3',
    restaurant: 'KFC',
    item: 'Chicken Bucket',
    total: 1250,
    status: 'Cancelled',
    date: '18 June 2026',
    image: 'https://picsum.photos/202',
  },
];

export default function OrderHistoryScreen() {
  const renderItem = ({item}: any) => (
    <View style={styles.card}>
      <Image
        source={{uri: item.image}}
        style={styles.image}
      />

      <View style={{flex: 1}}>
        <Text style={styles.restaurant}>
          {item.restaurant}
        </Text>

        <Text>{item.item}</Text>

        <Text style={styles.date}>
          {item.date}
        </Text>

        <View style={styles.row}>
          <Text style={styles.price}>
            ৳ {item.total}
          </Text>

          <Text
            style={[
              styles.status,
              {
                color:
                  item.status === 'Delivered'
                    ? 'green'
                    : 'red',
              },
            ]}>
            {item.status}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Order History
      </Text>

      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 30}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 12,
    padding: 12,
    elevation: 3,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },

  restaurant: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  date: {
    color: '#777',
    marginVertical: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  price: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  status: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});