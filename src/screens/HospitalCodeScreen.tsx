import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input'; // Your existing common input component
import Button from '../components/Button'; // Updated common button component

const HospitalCodeScreen = ({ navigation }: any) => {
  const [hospitalCode, setHospitalCode] = useState(''); // Track the input for the hospital code

  const handleSubmit = () => {
    // Handle the hospital code submission logic here
    console.log('Submitted hospital code:', hospitalCode);
    navigation.navigate('PersonalDetails');
  };
  const handleHospitalCodeChange = (value: string) => {
    // Only allow numeric input
    const numericValue = value.replace(/[^0-9]/g, '');
    setHospitalCode(numericValue);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Patient Onboarding</Text>

      {/* Step Title */}
      <Text style={styles.stepTitle}>Step 1 : Connect with hospital</Text>

      {/* Description */}
      <Text style={styles.description}>
        Please enter the hospital code to connect with the hospital
      </Text>

      {/* Hospital Code Input */}
      <Input
        label="Hospital code"
        placeholder="Enter hospital code"
        value={hospitalCode}
        onChangeText={handleHospitalCodeChange}
        keyboardType="numeric"
        maxLength={6} // Only 4 digits allowed
      />

      {/* Submit Button */}
      <Button
        title="Submit"
        onPress={handleSubmit}
        disabled={!hospitalCode} // Disable the button if the input is empty
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  stepTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'left',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
    marginBottom: 20,
  },
});

export default HospitalCodeScreen;