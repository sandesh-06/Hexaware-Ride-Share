import {View, Text} from 'react-native';
import React from 'react';
import BottomNav from './src/screens/RiderScreens/BottomNavigation';

import {LoginScreen, BottomTabs, SearchRide} from './src/screens/RiderScreens/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login">
        <Stack.Screen name="Rider Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Rider" component={BottomTabs}/>
        <Stack.Screen name="Search Ride" component={SearchRide}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
