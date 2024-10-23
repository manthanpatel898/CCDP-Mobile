import React, { useEffect, useRef, useState } from 'react';
import { TextInput, View, Text, StyleSheet, Animated } from 'react-native';

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  secureTextEntry?: boolean;
  editable?: boolean;
  style?: any;
  maxLength?: number; // New maxLength prop added
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
  editable = true,
  style,
  maxLength, // Destructuring the maxLength prop
}) => {
  const [isFocused, setIsFocused] = useState(false); // Track if input is focused
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute',
    left: 12,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -10], // Adjust label position (inside input when not focused, above when focused)
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Adjust font size when floating
    }),
    color: isFocused ? '#000' : '#aaa',
    backgroundColor: 'white', // Add a background color to avoid label overlapping the border
    paddingHorizontal: 2, // Add some padding to avoid text touching the border
  };


  return (
    <View style={[styles.container, style]}>
      {/* <Animated.Text style={[labelStyle, style]}>{label}</Animated.Text> */}

      {/* {label && <Text style={styles.label}>{label}</Text>} */}
      <TextInput
        style={[styles.input, style]} // Merge incoming styles with default styles
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        editable={editable}
        maxLength={maxLength} // Pass maxLength to TextInput
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  input: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
});

export default Input;