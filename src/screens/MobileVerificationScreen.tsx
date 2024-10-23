import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Button from '../components/Button'; // Your common button component
import Input from '../components/Input';

const MobileVerificationScreen: React.FC = ({ navigation, route }: any) => {
  const { mobileNumber } = route.params; // Retrieve mobile number passed from PersonalDetailsScreen
  const [otp, setOtp] = useState<string>(''); // Track OTP input
  const [otpSent, setOtpSent] = useState<boolean>(false); // Track if OTP is sent

  // Automatically send OTP when screen loads
  useEffect(() => {
    sendOtp();
  }, []);

  const sendOtp = () => {
    console.log('OTP sent to:', mobileNumber);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    console.log('Entered OTP:', otp);
    navigation.navigate('OnboardSuccess');
    // Add OTP verification logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Patient Onboarding</Text>
      <Text style={styles.stepTitle}>Step 2: Mobile number verification</Text>
      <Text style={styles.description}>
        Please verify your mobile number{'\n'}
        You may get an OTP code to your registered mobile number
      </Text>

      {/* Mobile number input (read-only) */}
      <Input
        label="Mobile Number"
        value={mobileNumber}
        editable={false} // Mobile number is not editable
      />

      {/* OTP input */}
      <Input
        label="OTP Code"
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="numeric"
        maxLength={4} // Limit OTP to 4 digits
      />

      {/* Resend OTP */}
      {otpSent && (
        <TouchableOpacity onPress={sendOtp}>
          <Text style={styles.resendOtp}>Resend OTP</Text>
        </TouchableOpacity>
      )}

      {/* Buttons */}
      <Button title="Submit" onPress={handleVerifyOtp} disabled={otp.length !== 4} />
      <Button title="← Back" onPress={() => navigation.goBack()} style={styles.backButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20, // Space from the top for status bar
    paddingHorizontal: 20,
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
  resendOtp: {
    color: '#192655',
    textDecorationLine: 'underline',
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  backButton: {
    marginTop: 10,
  },
});

export default MobileVerificationScreen;