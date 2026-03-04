import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function BusinessNameScreen() {
    const router = useRouter();
    const [businessName, setBusinessName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {/* Header - Back Button */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Content Area */}
                <View style={styles.content}>
                    <Text style={styles.title}>Managing your business{'\n'}journey starts here</Text>
                    <Text style={styles.subtitle}>what should we call it?</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Business Name"
                            placeholderTextColor="#8F8F8F"
                            value={businessName}
                            onChangeText={setBusinessName}
                            autoCapitalize="words"
                            editable={!isLoading}
                        />
                    </View>

                    <TouchableOpacity
                        style={[styles.doneButton, (!businessName.trim() || isLoading) && styles.doneButtonDisabled]}
                        activeOpacity={0.8}
                        disabled={!businessName.trim() || isLoading}
                        onPress={() => {
                            if (!businessName.trim()) return;
                            setIsLoading(true);
                            setTimeout(() => {
                                setIsLoading(false);
                                router.push('/(auth)/add-tag');
                            }, 1500);
                        }}
                    >
                        {isLoading ? (
                            <ActivityIndicator color="#FFFFFF" size="small" />
                        ) : (
                            <Text style={styles.doneButtonText}>DONE</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.laterButton}>
                        <Text style={styles.laterButtonText}>Do it Later</Text>
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
        backgroundColor: '#FFFFFF',
    },
    header: {
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 20 : 10,
        paddingBottom: 20,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#0F172A', // Very dark slate/navy as seen in the image
        lineHeight: 36,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#64748B', // Grayish subtitle color
        marginBottom: 8,
    },
    inputContainer: {
        marginBottom: 24,
    },
    input: {
        height: 56,
        borderWidth: 1,
        borderColor: '#CBD5E1', // Light gray border
        borderRadius: 8,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#0F172A',
        backgroundColor: '#FFFFFF',
    },
    doneButton: {
        backgroundColor: '#000000',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    doneButtonDisabled: {
        opacity: 0.7,
    },
    doneButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
    },
    laterButton: {
        paddingVertical: 12,
        alignItems: 'center',
    },
    laterButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
});
