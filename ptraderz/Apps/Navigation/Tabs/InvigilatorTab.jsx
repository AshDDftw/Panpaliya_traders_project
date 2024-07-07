import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

function InvigilatorHomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Invigilator Home</Text>
    </View>
  );
}

function InvigilatorTasksScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Invigilator Tasks</Text>
    </View>
  );
}

export default function InvigilatorTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={InvigilatorHomeScreen} />
      <Tab.Screen name="Tasks" component={InvigilatorTasksScreen} />
    </Tab.Navigator>
  );
}
