// BottomNav.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './Home';

const Tab = createBottomTabNavigator();

const HomeScreen = () => <Home/>;
const RidesScreen = () => <View><Text>Rides</Text></View>;
const PaymentsScreen = () => <View><Text>Payments</Text></View>;
const HelpScreen = () => <View><Text>Help</Text></View>;

const BottomTabs = () => (
  <Tab.Navigator
  screenOptions={{
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Icon name="home" color={color} size={size} />
    ),
    tabBarActiveTintColor: '#2E45FA', // Set the active icon color
    tabBarInactiveTintColor: 'black', // Set the inactive icon color
    tabBarStyle: {
      height: 60, // Example to set a custom height
    },
    tabBarIconStyle: {
      size: 25, // Default size for all icons
    },
  }}
>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Rides"
      component={RidesScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="car" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Payments"
      component={PaymentsScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="credit-card" color={color} size={size} />,
      }}
    />
    <Tab.Screen
      name="Help"
      component={HelpScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="question-circle" color={color} size={size} />,
      }}
    />
  </Tab.Navigator>
);


export default BottomTabs;
