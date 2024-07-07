import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../components/Buyer/Home';
import Categories from '../../../components/Buyer/home/Categories';
import ItemInfo from '../../../components/Buyer/home/ItemInfo';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Categories" component={Categories} options={({ route }) => ({ title: route.params.category })}/>
      <Stack.Screen name="ItemInfo" component={ItemInfo} options={{ title: 'Item Info' }} />
      
    </Stack.Navigator>
  );
}