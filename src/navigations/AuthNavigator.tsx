import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/MobileVerificationScreen';
import HospitalCodeScreen from '../screens/HospitalCodeScreen';
import PersonalDetailsScreen from '../screens/PersonalDetailsScreen';
import MobileVerificationScreen from '../screens/MobileVerificationScreen';
import OnboardSuccessScreen from '../screens/OnboardSuccessScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="MobileVerification" component={MobileVerificationScreen} />
    <Stack.Screen name="HospitalCode" component={HospitalCodeScreen} />
    <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
    <Stack.Screen name="OnboardSuccess" component={OnboardSuccessScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;