import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LoginScreen() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSendOtp = () => {
        // Navigate to OTP screen
        router.push('/(auth)/otp');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.mainContent}>
                        <View style={styles.topSection}>
                            {/* Main Title Area */}
                            <Text style={styles.headlineText}>Next-Gen</Text>

                            <View style={styles.headlineRow}>
                                <Text style={styles.headlineText}>GYM </Text>
                                <View style={[styles.circle, styles.purpleCircle]} />
                                <Text style={styles.headlineText}> Management</Text>
                            </View>

                            <View style={styles.headlineRow}>
                                <Text style={styles.headlineText}>Software. </Text>
                                <View style={[styles.circle, styles.orangeCircle]} />
                            </View>
                        </View>

                        <View style={styles.middleSection}>
                            {/* Phone Input */}
                            <View style={styles.inputContainer}>
                                <Text style={styles.prefixText}>+91</Text>
                                <View style={styles.verticalDivider} />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Your Phone Number"
                                    placeholderTextColor="#9CA3AF"
                                    keyboardType="phone-pad"
                                    value={phoneNumber}
                                    onChangeText={setPhoneNumber}
                                    maxLength={10}
                                />
                            </View>

                            {/* Send OTP Button */}
                            <TouchableOpacity style={styles.sendButton} onPress={handleSendOtp} activeOpacity={0.8}>
                                <Text style={styles.sendButtonText}>SEND OTP</Text>
                                <Feather name="arrow-right" size={20} color="#FFFFFF" style={styles.arrowIcon} />
                            </TouchableOpacity>

                            {/* Social Signin */}
                            <View style={styles.socialSection}>
                                <Text style={styles.socialText}>Sign in as</Text>
                                <TouchableOpacity style={styles.googleButton}>
                                    <Image
                                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' }}
                                        style={styles.googleIcon}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Footer Terms */}
                    <View style={styles.footerSection}>
                        <Text style={styles.termsText}>
                            By continuing you confirm that you agree to our Terms of services,
                            Privacy Policy and good behaviour in chat with users (write to
                            your loved ones more often).
                        </Text>
                    </View>
                </ScrollView>
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
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 24,
    },
    mainContent: {
        flex: 1,
        justifyContent: 'center',
    },
    topSection: {
        marginBottom: 40,
        marginTop: 20,
    },
    headlineText: {
        fontSize: 40,
        fontWeight: '800',
        color: '#111827',
        lineHeight: 52,
        letterSpacing: -0.5,
    },
    headlineRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    circle: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginHorizontal: 8,
    },
    purpleCircle: {
        backgroundColor: '#D8B4E2', // Light purple
    },
    orangeCircle: {
        backgroundColor: '#FFDCA8', // Light orange
    },
    middleSection: {
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#059669', // Emerald Green border from design
        borderRadius: 8,
        height: 64,
        paddingHorizontal: 16,
        marginBottom: 24,
    },
    prefixText: {
        fontSize: 18,
        color: '#111827',
        fontWeight: '500',
    },
    verticalDivider: {
        width: 1,
        height: 24,
        backgroundColor: '#D1D5DB',
        marginHorizontal: 12,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: '#111827',
    },
    sendButton: {
        backgroundColor: '#000000',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    sendButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
        marginRight: 8,
    },
    arrowIcon: {
        marginTop: 2,
    },
    socialSection: {
        alignItems: 'center',
    },
    socialText: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 16,
    },
    googleButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    googleIcon: {
        width: 24,
        height: 24,
    },
    footerSection: {
        paddingVertical: 24,
    },
    termsText: {
        fontSize: 12,
        color: '#9CA3AF',
        textAlign: 'center',
        lineHeight: 18,
    },
});
