import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  label?: string; // Changed to optional since you might not always have a label
  value: Date | null;
  onChange: (date: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false); // State to show or hide the DateTimePicker

  // Handle date change event
  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    setShowPicker(false); // Close the picker when a date is selected
    if (selectedDate) {
      onChange(selectedDate); // Pass the selected date back to the parent
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the label if it exists */}
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Touchable area that opens the date picker */}
      <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}>
        <Text>{value ? value.toLocaleDateString('en-US') : 'Select Date'}</Text>
      </TouchableOpacity>

      {/* Show DateTimePicker when showPicker is true */}
      {showPicker && (
        <DateTimePicker
          value={value || new Date()} // Show the selected date or default to current date
          mode="date"
          display="default"
          onChange={handleDateChange} // Handle date change
        />
      )}
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
    justifyContent: 'center',
  },
});

export default DatePicker;