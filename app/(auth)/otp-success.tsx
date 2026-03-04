import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function OTPSuccessScreen() {
    const router = useRouter();

    useEffect(() => {
        // Navigate automatically to the next setup step after 2 seconds
        const timer = setTimeout(() => {
            router.push('/(auth)/business-name');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <View style={styles.container}>

                {/* Animated Checkmark UI (Concentric Rings) */}
                <View style={styles.ringOuter}>
                    <View style={styles.ringMiddle}>
                        <View style={styles.ringInner}>
                            <Feather name="check" size={54} color="#FFF" />
                        </View>
                    </View>
                </View>

                <Text style={styles.successText}>Registered Successfully</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ringOuter: {
        width: width * 0.65,
        height: width * 0.65,
        borderRadius: (width * 0.65) / 2,
        backgroundColor: '#F3FCF6', // Very light green
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    ringMiddle: {
        width: width * 0.45,
        height: width * 0.45,
        borderRadius: (width * 0.45) / 2,
        backgroundColor: '#D1F4DE', // Light green
        justifyContent: 'center',
        alignItems: 'center',
    },
    ringInner: {
        width: width * 0.28,
        height: width * 0.28,
        borderRadius: (width * 0.28) / 2,
        backgroundColor: '#08C11A', // Vibrant green
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#08C11A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    successText: {
        fontSize: 22,
        fontWeight: '700',
        color: '#111827',
    },
});
