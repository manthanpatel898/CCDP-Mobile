import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

// Use the correct type for country codes from the PhoneInput package
interface PhoneNumberInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  defaultCode?: any; // Fixing the type
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  label,
  value,
  onChangeText,
  defaultCode = 'US', // Set default country code (e.g., 'IN' for India)
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <PhoneInput
        defaultValue={value}
        defaultCode={defaultCode}
        layout="first"
        containerStyle={[styles.inputContainer, isFocused && styles.focusedInput]}
        textContainerStyle={styles.textContainer}
        textInputStyle={styles.textInput}
        codeTextStyle={styles.codeText}
        onChangeFormattedText={(text) => onChangeText(text)}
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
  inputContainer: {
    backgroundColor: '#F8F9FA',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    height: 60,
  },
  focusedInput: {
    borderColor: '#000',
  },
  textContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    paddingVertical: 0,
  },
  textInput: {
    fontSize: 16,
    paddingVertical: 10,
  },
  codeText: {
    fontSize: 16,
    paddingHorizontal: 5,
  },
});

export default PhoneNumberInput;