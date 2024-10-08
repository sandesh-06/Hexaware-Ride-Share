import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './Home';
import SearchRide from './SearchRide';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="HomeScreen" 
      component={Home} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Search Ride" 
      component={SearchRide} 
    />
  </Stack.Navigator>
);

const RidesScreen = () => <View><Text>Rides</Text></View>;
const ProfileScreen = () => <View><Text>Profile</Text></View>;

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#2E45FA', 
      tabBarInactiveTintColor: 'black', 
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
      name="Home"
      component={HomeStack}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        tabBarLabel: 'Dashboard',
      }}
    />
    <Tab.Screen
      name="Rides"
      component={RidesScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="directions-car" color={color} size={size} />,
        tabBarLabel: 'Rides',
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarIcon: ({ color, size }) => <Icon name="person" color={color} size={size} />,
        tabBarLabel: 'Profile',
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
