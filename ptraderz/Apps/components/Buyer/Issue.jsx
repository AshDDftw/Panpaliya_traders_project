// Issue.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Button, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Issue() {
  const [modalVisible, setModalVisible] = useState(false);
  const [orders, setOrders] = useState([]);

  // Dropdown states
  const [openCommodity, setOpenCommodity] = useState(false);
  const [commodity, setCommodity] = useState('');
  const [commodities, setCommodities] = useState([
    { label: 'Wheat', value: 'wheat' },
    { label: 'Rice', value: 'rice' },
    { label: 'Sugar', value: 'sugar' },
    { label: 'Salt', value: 'salt' },
    { label: 'Oil', value: 'oil' }
  ]);

  const [openRequirement, setOpenRequirement] = useState(false);
  const [requirement, setRequirement] = useState('');
  const [requirements, setRequirements] = useState([
    { label: 'Spot Rate', value: 'spot' },
    { label: 'Delivery Rate', value: 'delivery' }
  ]);

  // Other form states
  const [variety, setVariety] = useState('');
  const [moisture, setMoisture] = useState('');
  const [externalParticle, setExternalParticle] = useState('');
  const [dust, setDust] = useState('');
  const [length, setLength] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');

  const handleAddOrder = () => {
    const newOrder = { commodity, variety, moisture, externalParticle, dust, length, location, date, requirement };
    setOrders([...orders, newOrder]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {orders.map((order, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.cardText}>Commodity: {order.commodity}</Text>
            {/* Display other order details or navigate to a detailed view */}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Issue Order</Text>

            <Text>Commodity</Text>
            <DropDownPicker
              open={openCommodity}
              value={commodity}
              items={commodities}
              setOpen={setOpenCommodity}
              setValue={setCommodity}
              setItems={setCommodities}
              containerStyle={styles.dropdown}
              placeholder="Select a commodity"
              dropDownContainerStyle={{ backgroundColor: '#fafafa' }}
            />

            <TextInput
              placeholder="Variety"
              style={styles.input}
              value={variety}
              onChangeText={setVariety}
            />
            <TextInput
              placeholder="Moisture (%)"
              style={styles.input}
              value={moisture}
              onChangeText={setMoisture}
            />
            <TextInput
              placeholder="External Particle"
              style={styles.input}
              value={externalParticle}
              onChangeText={setExternalParticle}
            />
            <TextInput
              placeholder="Dust"
              style={styles.input}
              value={dust}
              onChangeText={setDust}
            />
            <TextInput
              placeholder="Length"
              style={styles.input}
              value={length}
              onChangeText={setLength}
            />
            <TextInput
              placeholder="Location"
              style={styles.input}
              value={location}
              onChangeText={setLocation}
            />
            <TextInput
              placeholder="Date of Delivery"
              style={styles.input}
              value={date}
              onFocus={() => {
                // Handle date picker logic
              }}
              onChangeText={setDate}
            />

            <Text>Requirement</Text>
            <DropDownPicker
              open={openRequirement}
              value={requirement}
              items={requirements}
              setOpen={setOpenRequirement}
              setValue={setRequirement}
              setItems={setRequirements}
              containerStyle={styles.dropdown}
              placeholder="Select requirement"
              dropDownContainerStyle={{ backgroundColor: '#fafafa' }}
            />

            <Button title="Add Order" onPress={handleAddOrder} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scrollView: {
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  cardText: {
    fontSize: 18,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#6200ee',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdown: {
    width: '100%',
    marginBottom: 10,
  }
});
