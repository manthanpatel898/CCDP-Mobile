import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button'; // Your common button component

const OnboardSuccessScreen: React.FC = ({ navigation }: any) => {
    const handleGetStarted = () => {
        // Logic for what happens after clicking "Gets Started" (e.g., navigate to home screen)
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Patient Onboarding</Text>
            <View style={styles.content}>
                <Text style={styles.congrats}>Congratulation!</Text>
                <Text style={styles.subtitle}>You onboarded successfully</Text>

                {/* Image */}
                <Image source={require('../../assets/on-board.png')} style={styles.image} />
            </View>
            {/* Button */}
            <Button title="Gets Started" onPress={handleGetStarted} />

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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    congrats: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#555',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain', // Ensure the image doesn't get distorted
        marginBottom: 40,
    },
});

export default OnboardSuccessScreen;