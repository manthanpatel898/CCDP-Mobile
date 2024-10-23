import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '../hooks/useNavigation'; // Import the custom hook

const NavBar = () => {
  const navigation = useNavigation(); // Use the custom hook

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/HomeIcon.png')} style={styles.icon} />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('History')}>
        <Image source={require('../../assets/HistoryIcon.png')} style={styles.icon} />
        <Text style={styles.label}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Pamphlets')}>
        <Image source={require('../../assets/PamphletsIcon.png')} style={styles.icon} />
        <Text style={styles.label}>Pamphlets</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Updates')}>
        <Image source={require('../../assets/UpdatesIcon.png')} style={styles.icon} />
        <Text style={styles.label}>Updates</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../../assets/ProfileIcon.png')} style={styles.icon} />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});

export default NavBar;