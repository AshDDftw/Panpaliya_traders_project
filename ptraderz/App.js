import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import FormExample from './Apps/select';
import UserSelect from './Apps/user_select';
import BuyerTabs from './Apps/Navigation/Tabs/BuyerTab';
import SellerTabs from './Apps/Navigation/Tabs/SellerTab';
import InvigilatorTabs from './Apps/Navigation/Tabs/InvigilatorTab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
        {/* <Stack.Screen name="InitialScreen" component={FormExample} options={{ headerShown: false }} /> */}
        <Stack.Screen name="UserSelect" component={UserSelect} options={{ headerShown: false }} />
        <Stack.Screen name="BuyerTabs" component={BuyerTabs} options={{ headerShown: false }} />
        <Stack.Screen name="SellerTabs" component={SellerTabs} options={{ headerShown: false }} />
        <Stack.Screen name="InvigilatorTabs" component={InvigilatorTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
