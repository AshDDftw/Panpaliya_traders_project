import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function UserSelect() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select User Role</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BuyerTabs')}>
        <Text style={styles.buttonText}>Buyer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SellerTabs')}>
        <Text style={styles.buttonText}>Seller</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InvigilatorTabs')}>
        <Text style={styles.buttonText}>Invigilator</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4A373', // Brown background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6B8E23', // Olive green
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: 200,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});
