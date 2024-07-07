import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const groceryItems = [
  { id: '1', image: 'https://via.placeholder.com/100', name: 'rice', category: 'rice' },
  { id: '2', image: 'https://via.placeholder.com/100', name: 'wheat', category: 'wheat' },
  { id: '3', image: 'https://via.placeholder.com/100', name: 'sugar', category: 'sugar' },
  { id: '4', image: 'https://via.placeholder.com/100', name: 'salt', category: 'salt' },
  // { id: '5', image: 'https://via.placeholder.com/100', name: 'Milk', category: 'Milk' },
  // { id: '6', image: 'https://via.placeholder.com/100', name: 'Butter', category: 'Butter' },
  { id: '7', image: 'https://via.placeholder.com/100', name: 'oil', category: 'oil' },
  // { id: '8', image: 'https://via.placeholder.com/100', name: 'Tea', category: 'Tea' },
  // { id: '9', image: 'https://via.placeholder.com/100', name: 'Coffee', category: 'Coffee' },
  // { id: '10', image: 'https://via.placeholder.com/100', name: 'Honey', category: 'Honey' },
  // { id: '11', image: 'https://via.placeholder.com/100', name: 'Chocolates', category: 'Chocolates' },
  // { id: '12', image: 'https://via.placeholder.com/100', name: 'Spices', category: 'Spices' },
  // { id: '13', image: 'https://via.placeholder.com/100', name: 'Flour', category: 'Flour' },
  // { id: '14', image: 'https://via.placeholder.com/100', name: 'Pasta', category: 'Pasta' },
  // { id: '15', image: 'https://via.placeholder.com/100', name: 'Noodles', category: 'Noodles' },
];

export default function Items() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={groceryItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.tile}
            onPress={() => navigation.navigate('Categories', { category: item.category })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
    margin:20,
  },
  listContainer: {
    paddingVertical: 10,
  },
  tile: {
    flex: 1,
    margin: 5,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
    width: width / 3 - 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});
