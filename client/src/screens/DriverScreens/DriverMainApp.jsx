import React from 'react';
import {DriverBottomNav, DriverTripDetails, RiderDetails} from './index'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DriverMainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="BottomTabs" 
        component={DriverBottomNav} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Rider Details" 
        component={RiderDetails} 
        // options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Trip Details" 
        component={DriverTripDetails} 
        // options={{ headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
};

export default DriverMainApp;
