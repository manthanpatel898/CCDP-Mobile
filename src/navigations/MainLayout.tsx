import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard'; // Your dashboard screen
import { Text, View } from 'react-native';
import NavBar from '../navBar/NavBar';

const Tab = createBottomTabNavigator();

const MainLayout = () => {
  return (
    <Tab.Navigator tabBar={(props:any) => <NavBar {...props} />}>
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="History" component={() => <View><Text>History Screen</Text></View>} />
      <Tab.Screen name="Pamphlets" component={() => <View><Text>Pamphlets Screen</Text></View>} />
      <Tab.Screen name="Updates" component={() => <View><Text>Updates Screen</Text></View>} />
      <Tab.Screen name="Profile" component={() => <View><Text>Profile Screen</Text></View>} />
    </Tab.Navigator>
  );
};

export default MainLayout;