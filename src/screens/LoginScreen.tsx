import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const LoginScreen = ({ navigation }: any) => {
  const [mobileOrEmail, setMobileOrEmail] = useState(''); // Input for mobile or email
  const [otp, setOtp] = useState(''); // OTP input
  const [otpSent, setOtpSent] = useState(false); // OTP sent status
  const [otpEnabled, setOtpEnabled] = useState(false); // Enable OTP input

  const handleSendOtp = () => {
    if (mobileOrEmail) {
      // Logic for sending OTP via mobile or email
      setOtpSent(true);
      setOtpEnabled(true); // Enable OTP input after OTP is sent
    }
  };

  const handleSubmit = () => {
    if (otp.length === 4) {
      // Logic for submitting OTP
      // OTP should be 4 digits
      console.log('OTP submitted:', otp);
      navigation.navigate('HospitalCode'); // Navigate to HospitalCodeScreen
    } else {
      console.log('Please enter a valid 4-digit OTP.');
    }
  };

  const handleResendOtp = () => {
    // Logic for resending OTP
    console.log('OTP resent to:', mobileOrEmail);
  };


  const handleOtpChange = (value: string) => {
    // Only allow numeric input
    const numericValue = value.replace(/[^0-9]/g, '');
    setOtp(numericValue);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Description */}
      <Text style={styles.description}>
        You may get a 4-digit OTP code {'\n'} via SMS or Email.
      </Text>

      {/* Mobile Number or Email Input */}
      <Input
        label="Mobile Number or Email"
        placeholder="Enter Mobile Number or Email"
        value={mobileOrEmail}
        onChangeText={setMobileOrEmail}
        keyboardType="default" // Default since it can accept email as well
        editable={!otpSent} // Disable input once OTP is sent
      />

      {/* OTP Input */}
      <Input
        label="OTP Code"
        placeholder="Enter OTP"
        value={otp}
        onChangeText={handleOtpChange}
        keyboardType="numeric"
        editable={otpEnabled} // Enable OTP input only after OTP is sent
        maxLength={4} // Only 4 digits allowed
      />

      {/* Resend OTP Link */}
      {otpSent && (
        <TouchableOpacity onPress={handleResendOtp}>
          <Text style={styles.resendOtp}>Resend OTP</Text>
        </TouchableOpacity>
      )}

      {/* Submit Button or Send OTP */}
      <Button
        title={otpSent ? 'Submit' : 'Send OTP'}
        onPress={otpSent ? handleSubmit : handleSendOtp}
      />

      {/* Back Button */}
      {/* <Button title="← Back" onPress={() => navigation.goBack()} style={styles.backButton} /> */}
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
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'left',
    marginBottom: 20,
  },
  resendOtp: {
    color: '#192655',
    textDecorationLine: 'underline',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#192655',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default LoginScreen;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import PhoneNumberInput from '../components/PhoneNumberInput'; // Import the PhoneNumberInput component
// import Input from '../components/Input';
// import Button from '../components/Button';

// const LoginScreen = ({ navigation }: any) => {
//   const [mobileOrEmail, setMobileOrEmail] = useState(''); // Input for mobile or email
//   const [otp, setOtp] = useState(''); // OTP input
//   const [otpSent, setOtpSent] = useState(false); // OTP sent status
//   const [otpEnabled, setOtpEnabled] = useState(false); // Enable OTP input

//   const handleSendOtp = () => {
//     if (mobileOrEmail) {
//       // Logic for sending OTP via mobile or email
//       setOtpSent(true);
//       setOtpEnabled(true); // Enable OTP input after OTP is sent
//     }
//   };

//   const handleSubmit = () => {
//     if (otp.length === 4) {
//       // Logic for submitting OTP
//       // OTP should be 4 digits
//       console.log('OTP submitted:', otp);
//       navigation.navigate('HospitalCode'); // Navigate to HospitalCodeScreen
//     } else {
//       console.log('Please enter a valid 4-digit OTP.');
//     }
//   };

//   const handleResendOtp = () => {
//     // Logic for resending OTP
//     console.log('OTP resent to:', mobileOrEmail);
//   };

//   const handleOtpChange = (value: string) => {
//     // Only allow numeric input
//     const numericValue = value.replace(/[^0-9]/g, '');
//     setOtp(numericValue);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Title */}
//       <Text style={styles.title}>Login</Text>

//       {/* Description */}
//       <Text style={styles.description}>
//         You may get a 4-digit OTP code {'\n'} via SMS or Email.
//       </Text>

//       {/* Mobile Number Input using PhoneNumberInput */}
//       <PhoneNumberInput
//         label="Mobile Number"
//         value={mobileOrEmail}
//         onChangeText={setMobileOrEmail}
//         defaultCode="IN" // You can set any default country code
//       />

//       {/* OTP Input */}
//       <Input
//         label="OTP Code"
//         placeholder="Enter OTP"
//         value={otp}
//         onChangeText={handleOtpChange}
//         keyboardType="numeric"
//         editable={otpEnabled} // Enable OTP input only after OTP is sent
//         maxLength={4} // Only 4 digits allowed
//       />

//       {/* Resend OTP Link */}
//       {otpSent && (
//         <TouchableOpacity onPress={handleResendOtp}>
//           <Text style={styles.resendOtp}>Resend OTP</Text>
//         </TouchableOpacity>
//       )}

//       {/* Submit Button or Send OTP */}
//       <Button
//         title={otpSent ? 'Submit' : 'Send OTP'}
//         onPress={otpSent ? handleSubmit : handleSendOtp}
//       />

//       {/* Back Button */}
//       {/* <Button title="← Back" onPress={() => navigation.goBack()} style={styles.backButton} /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'left',
//   },
//   description: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'left',
//     marginBottom: 20,
//   },
//   resendOtp: {
//     color: '#192655',
//     textDecorationLine: 'underline',
//     alignSelf: 'flex-end',
//     marginBottom: 20,
//   },
//   backButton: {
//     backgroundColor: '#192655',
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
// });

// export default LoginScreen;