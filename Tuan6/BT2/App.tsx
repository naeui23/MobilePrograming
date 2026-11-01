import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './screens/productScreens';
import ColorScreen from './screens/colorScreens';
import { RootStackParamList } from './types';
import { PhoneProvider } from './PhoneContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <PhoneProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Product"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Color" component={ColorScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PhoneProvider>
  );
}