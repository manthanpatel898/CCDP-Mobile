import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator'; // Your auth stack
import MainLayout from './MainLayout'; // Layout with NavBar and Dashboard

const Stack = createStackNavigator();

const AppNavigator = () => {
  const isVerified = true; // Hardcoded for testing, bypass verification

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isVerified ? (
        <Stack.Screen name="Main" component={MainLayout} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;