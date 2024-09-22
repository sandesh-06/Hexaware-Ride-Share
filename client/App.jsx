import React from 'react';

import LoginScreen from './src/screens/LoginScreen';
import {RiderMainApp} from './src/screens/RiderScreens/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { DriverMainApp } from './src/screens/DriverScreens';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rider"
          component={RiderMainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Driver"
          component={DriverMainApp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
