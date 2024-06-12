import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import LeaderBoard from '../Screen/LeaderBoard';
import MyCourse from '../Screen/MyCourse';
import ProfileScreen from '../Screen/ProfileScreen';
import { FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
//import HomeScreenNavigation from '../Navigation/HomeScreenNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='LeaderBoard'
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='My-Course'
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="book-open" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="supervised-user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
