import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Button from '../components/Button'; // Use your existing button component

const Dashboard = () => {
  const Onboarding = () => {

  }

  const Assessment = () => {

  }

  const Screening = () => {

  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
        <TouchableOpacity style={styles.quickChat}>
          <Text style={styles.quickChatText}>Quick Chat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Image source={require('../../assets/patient-onboarding.png')} style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.heading}>Patient Onboarding</Text>
          <Text style={styles.subText}>
            Start your journey with us and help us to know more about your health history
          </Text>
          <Button title="Plan your visit" onPress={Onboarding}/>
        </View>
      </View>

      <View style={styles.section}>
        <Image source={require('../../assets/qol-assessment.png')} style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.heading}>QoL Assessment</Text>
          <Text style={styles.subText}>
            Measures well-being, informs treatment, improves care, assesses progress.
          </Text>
          <Button title="Start your assessment here" onPress={Assessment}/>
        </View>
      </View>

      <View style={styles.section}>
        <Image source={require('../../assets/distress-screening.png')} style={styles.icon} />
        <View style={styles.content}>
          <Text style={styles.heading}>Distress Screening</Text>
          <Text style={styles.subText}>
            Identify mental issues, guide treatments, improve well-being, and functioning.
          </Text>
          <Button title="Start your assessment here" onPress={Screening}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  quickChat: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
  },
  quickChatText: {
    fontSize: 14,
    color: '#000',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});

export default Dashboard;