import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function SellerHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Seller Home</Text>
    </View>
  );
}

function SellerOrdersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Seller Orders</Text>
    </View>
  );
}

export default function SellerTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SellerHomeScreen} />
      <Tab.Screen name="Orders" component={SellerOrdersScreen} />
    </Tab.Navigator>
  );
}
