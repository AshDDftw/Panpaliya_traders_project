import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Items from './home/components/Items';

const { width } = Dimensions.get('window');

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <Icon name="menu" size={24} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search Relationship" placeholderTextColor="#AAA" />
          <Icon name="search" size={20} color="#AAA" />
        </View>
        <TouchableOpacity style={styles.cartButton}>
          <Icon name="cart" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <Items/>
      <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={styles.carousel}>
        <Image
          style={styles.carouselImage}
          source={{ uri: 'https://via.placeholder.com/400x200' }}
        />
        <Image
          style={styles.carouselImage}
          source={{ uri: 'https://via.placeholder.com/400x200' }}
        />
        <Image
          style={styles.carouselImage}
          source={{ uri: 'https://via.placeholder.com/400x200' }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginBottom:20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6B8E23', // Olive green
    padding: 10,
  },
  menuButton: {
    marginRight: 10,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 5,
  },
  searchInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#000',
  },
  cartButton: {
    marginLeft: 10,
  },
  quickLinksContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F8F8F8',
  },
  quickLink: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  quickLinkText: {
    fontSize: 12,
    color: '#000',
  },
  carousel: {
    marginTop: 10,
  },
  carouselImage: {
    width: width - 20,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
  },
});
