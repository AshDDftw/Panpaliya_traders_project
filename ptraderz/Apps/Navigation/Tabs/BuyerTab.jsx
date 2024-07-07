import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { HomeStack } from '../Stacks/Buyer/HomeStack';
import Profile from '../../components/Buyer/Profile';
import Issue from '../../components/Buyer/Issue';

const Tab = createBottomTabNavigator();


export default function BuyerTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Issue" component={Issue}/>
    </Tab.Navigator>
  );
}
