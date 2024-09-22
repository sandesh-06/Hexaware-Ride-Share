import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DriverHome, PostRide, RideRequests} from './index'
// Driver pages (placeholders for actual components)
const DriverRides = () => <View><Text>Driver Rides</Text></View>;
const DriverProfile = () => <View><Text>Driver Profile</Text></View>;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Driver Home"
      component={DriverHome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Post Ride"
      component={PostRide}
    //   options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Ride Requests"
      component={RideRequests}
    //   options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const DriverBottomNav = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#07125E',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingVertical: 10,
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        marginTop: 5,
      },
      tabBarIconStyle: {
        size: 25,
      },
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={DashboardStack}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        tabBarLabel: 'Dashboard',
      }}
    />
    <Tab.Screen
      name="Rides"
      component={DriverRides}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="directions-car" color={color} size={size} />,
        tabBarLabel: 'Rides',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={DriverProfile}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="person" color={color} size={size} />,
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);

export default DriverBottomNav;
