import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const categories = [
  'Pizza',
  'Burger',
  'Sushi',
  'Chinese'
];

const CategoryChip = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((item) => (
        <TouchableOpacity key={item} style={styles.chip}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryChip;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 1,
  },

  chip: {
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    height: 40,        
    justifyContent: 'center', 
    borderRadius: 30,
    marginBottom:5,
    marginTop:10,
    marginRight: 5,
    elevation: 3,
  },

  text: {
    fontSize: 16,  
    marginTop: 4,
    fontWeight: '600',
    color: '#333',
  },
});