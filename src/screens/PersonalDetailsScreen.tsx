import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Input from '../components/Input'; // Your existing common input component
import Button from '../components/Button'; // Your existing common button component
import DatePicker from '../components/DatePicker'; // New DatePicker component
import Dropdown from '../components/Dropdown'; // New Dropdown component

const PersonalDetailsScreen: React.FC = ({ navigation }: any) => {
  const [fullName, setFullName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [medicareNumber, setMedicareNumber] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [gender, setGender] = useState<string>('');

  const handleSubmit = () => {
    // Submit logic here
    console.log('Full Name:', fullName);
    console.log('Mobile Number:', mobileNumber);
    console.log('Medicare Number:', medicareNumber);
    console.log('Date of Birth:', dateOfBirth?.toLocaleDateString('en-US'));
    console.log('Gender:', gender);
    navigation.navigate('MobileVerification', { mobileNumber });

  };

  // Disable button until all fields are filled
  const isFormValid = fullName && mobileNumber && medicareNumber && dateOfBirth && gender;

  return (
    <KeyboardAvoidingView
      style={styles.keyboardView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled" // Ensures the keyboard does not block interactions
      >
        <Text style={styles.title}>Patient Onboarding</Text>

        <Text style={styles.stepTitle}>Step 2 : Verify personal details</Text>

        <Text style={styles.description}>
          Please enter the following details to complete the onboarding process
        </Text>

        <Input
          label="Full Name"
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={setFullName}
          keyboardType="default"
        />

        <Input
          label="Mobile Number"
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text.replace(/[^0-9]/g, ''))} // Allow only numbers
          keyboardType="numeric"
          maxLength={10}
        />

        <Input
          label="Medicare Number"
          placeholder="Enter Medicare Number"
          value={medicareNumber}
          onChangeText={setMedicareNumber}
          keyboardType="default"
        />

        <DatePicker
          label="Date of Birth"
          value={dateOfBirth}
          onChange={setDateOfBirth}
        />

        <Dropdown
          label="Gender"
          selectedValue={gender}
          onValueChange={setGender}
        />

        <Button
          title="Verify Mobile Number"
          onPress={handleSubmit}
          disabled={!isFormValid} // Disable button if form is incomplete
          style={styles.button} // Add margin to prevent overlap
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContainer: {
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
  dropdown: {
    marginBottom: 20, // Ensure enough space between the dropdown and the button
  },
  button: {
    marginBottom: 40, // Add extra margin at the bottom to avoid overlap
  },
});

export default PersonalDetailsScreen;