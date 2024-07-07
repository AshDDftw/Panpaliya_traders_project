import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const sampleData = {
  rice: [
    { id: '1', image: 'https://via.placeholder.com/100', name: 'Vendor A', price: '120 tk/kg' },
    { id: '2', image: 'https://via.placeholder.com/100', name: 'Vendor B', price: '140 tk/kg' },
  ],
  wheat: [
    { id: '3', image: 'https://via.placeholder.com/100', name: 'Vendor C', price: '160 tk/kg' },
    { id: '4', image: 'https://via.placeholder.com/100', name: 'Vendor D', price: '180 tk/kg' },
  ],
  sugar: [
    { id: '5', image: 'https://via.placeholder.com/100', name: 'Vendor E', price: '200 tk/kg' },
    { id: '6', image: 'https://via.placeholder.com/100', name: 'Vendor F', price: '220 tk/kg' },
  ],
  salt: [
    { id: '7', image: 'https://via.placeholder.com/100', name: 'Vendor G', price: '240 tk/kg' },
    { id: '8', image: 'https://via.placeholder.com/100', name: 'Vendor H', price: '260 tk/kg' },
  ],
  oil: [
    { id: '9', image: 'https://via.placeholder.com/100', name: 'Vendor I', price: '280 tk/kg' },
    { id: '10', image: 'https://via.placeholder.com/100', name: 'Vendor J', price: '300 tk/kg' },
  ],
};

export default function CategoriesScreen() {
  const route = useRoute();
  const { category } = route.params;
  const data = sampleData[category] || [];
  const navigation = useNavigation();

  console.log(category);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ItemInfo', { item })}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFF',
  },
  listContainer: {
    paddingVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 10,
    width: width - 20,
    alignSelf: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  infoContainer: {
    paddingLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
});
