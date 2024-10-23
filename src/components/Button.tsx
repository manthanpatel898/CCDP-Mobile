import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
  disabled?: boolean;  // New prop for disabling the button
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]} // Apply disabled styles if the button is disabled
      onPress={disabled ? undefined : onPress} // Prevent button from being pressed when disabled
      activeOpacity={disabled ? 1 : 0.7} // Disable press opacity when disabled
    >
      <Text style={[styles.buttonText, disabled && styles.disabledButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#192655',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc', // Light gray color when disabled
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#888', // Lighter text color when disabled
  },
});

export default Button;