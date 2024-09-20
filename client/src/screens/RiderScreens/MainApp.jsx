import React from 'react';
import BottomTabs from './BottomNavigation'; 
import SearchRide from './SearchRide'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="BottomTabs" 
        component={BottomTabs} 
        options={{ headerShown: false }} 
      />
      
      <Stack.Screen 
        name="Search Ride" 
        component={SearchRide} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default MainApp;
