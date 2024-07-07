import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';

export default function ItemInfo() {
  const route = useRoute();
  const { item } = route.params;

  return (
    <View style={styles.container}>
      {/* Top image area */}
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      {/* Details area */}
      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.weight}>1 Kg</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>3.0</Text>
          <View style={styles.stars}>
            {Array.from({ length: 5 }, (_, i) => (
              <Icon
                key={i}
                name="star"
                size={20}
                color={i < 3 ? '#FFD700' : '#D3D3D3'}
              />
            ))}
          </View>
        </View>
        <Text style={styles.price}>{item.price}</Text>
        
        {/* Quantity control */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Icon name="remove-outline" size={20} color="#000" />
          </TouchableOpacity>
          <Text style={styles.quantity}>1</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Icon name="add-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Details description */}
        <Text style={styles.details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate enim mauris augue dignissim.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20, // Overlapping the image
    flex: 1,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  weight: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  rating: {
    fontSize: 18,
    marginRight: 10,
    color: '#333',
  },
  stars: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    backgroundColor: '#EEE',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
});
