// src/navigation/navigationTypes.ts
import { NavigationProp } from '@react-navigation/native';

// Define the type for your navigation stack
export type RootStackParamList = {
  Home: undefined;
  History: undefined;
  Pamphlets: undefined;
  Updates: undefined;
  Profile: undefined;
};

// Create a typed version of useNavigation
export type TypedNavigationProp = NavigationProp<RootStackParamList>;