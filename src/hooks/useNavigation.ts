// src/hooks/useNavigation.ts
import { useNavigation as useReactNavigation } from '@react-navigation/native';
import { TypedNavigationProp } from '../navigations/navigationTypes';

// Create a typed version of useNavigation
export const useNavigation = () => useReactNavigation<TypedNavigationProp>();