import React from 'react';
import {BottomTabs, Feedback, PaymentSummary, RideDetails, RideResults, SearchRide, TripDetails} from './index'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RiderMainApp = () => {
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
        // options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Ride Results" 
        component={RideResults} 
        // options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Ride Details" 
        component={RideDetails} 
        // options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Trip Details" 
        component={TripDetails} 
        // options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Payment Summary" 
        component={PaymentSummary} 
        // options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Feedback" 
        component={Feedback} 
        // options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default RiderMainApp;
