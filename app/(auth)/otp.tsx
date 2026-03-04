import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function OTPScreen() {
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<Array<TextInput | null>>([]);

    const handleOtpChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Auto focus next input
        if (text.length !== 0 && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        router.push('/(auth)/otp-success');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.topSection}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="#000" />
                    </TouchableOpacity>

                    <Text style={styles.title}>OTP Verification</Text>
                    <Text style={styles.subtitle}>
                        Please enter the 6-digit code send to you at{'\n'}
                        <Text style={styles.phoneText}>+91 6353525835</Text>
                    </Text>

                    <Text style={styles.resendText}>
                        Resend OTP in <Text style={styles.timerText}>00:29</Text>
                    </Text>

                    <View style={styles.otpContainer}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={[
                                    styles.otpInput,
                                    digit ? styles.otpInputActive : styles.otpInputInactive
                                ]}
                                maxLength={1}
                                keyboardType="numeric"
                                value={digit}
                                onChangeText={(text) => handleOtpChange(text, index)}
                                onKeyPress={(e) => handleKeyPress(e, index)}
                                ref={(ref) => { inputRefs.current[index] = ref; }}
                            />
                        ))}
                    </View>
                </View>

                <View style={styles.bottomSection}>
                    <TouchableOpacity style={styles.verifyButton} onPress={handleVerify} activeOpacity={0.8}>
                        <Text style={styles.verifyButtonText}>VERIFY</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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
        paddingHorizontal: 24,
        justifyContent: 'space-between',
    },
    topSection: {
        paddingTop: 16,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#0F172A',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 14,
        color: '#64748B',
        lineHeight: 20,
        marginBottom: 24,
    },
    phoneText: {
        fontWeight: '700',
        color: '#0F172A',
    },
    resendText: {
        fontSize: 14,
        color: '#9CA3AF',
        marginBottom: 24,
    },
    timerText: {
        fontWeight: '700',
        color: '#000',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    otpInput: {
        width: 48,
        height: 56,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
    },
    otpInputInactive: {
        borderColor: '#E5E7EB',
        color: '#000',
    },
    otpInputActive: {
        borderColor: '#020617', // Dark navy outline when filled/active based on design
        color: '#000',
    },
    bottomSection: {
        paddingBottom: 40,
    },
    verifyButton: {
        backgroundColor: '#000000',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    verifyButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
    },
});
