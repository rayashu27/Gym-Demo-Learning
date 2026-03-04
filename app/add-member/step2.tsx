import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddMemberStep2Screen() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/add-member/success');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="#000" />
                    </TouchableOpacity>
                    <View style={styles.headerTitleContainer}>
                        <Text style={styles.headerTitle}>Add Member</Text>
                        <Text style={styles.headerSubtitle}>
                            STEP <Text style={styles.stepHighlight}>2 / 2 Plan Details</Text>
                        </Text>
                    </View>
                </View>

                {/* Progress Bar (Full) */}
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarFill} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                    <View style={styles.formGroup}>
                        <TextInput style={styles.input} placeholder="Select Gym Plan" placeholderTextColor="#6B7280" />

                        <View style={styles.inputWithIcon}>
                            <TextInput style={styles.flexInput} placeholder="Select Joining Date" placeholderTextColor="#6B7280" editable={false} />
                            <Feather name="calendar" size={20} color="#111827" />
                        </View>

                        <View style={styles.inputWithLeftIcon}>
                            <FontAwesome5 name="rupee-sign" size={16} color="#111827" style={styles.leftIcon} />
                            <TextInput style={styles.flexInputWithLeftPadding} placeholder="Paid Amount" placeholderTextColor="#6B7280" keyboardType="numeric" />
                        </View>

                        <View style={styles.inputWithIcon}>
                            <TextInput style={styles.flexInput} placeholder="Select Payment Method" placeholderTextColor="#6B7280" editable={false} />
                            <Feather name="chevron-down" size={20} color="#111827" />
                        </View>
                    </View>

                    <Text style={styles.dueAmountText}>Due Amount: $0</Text>

                    <View style={styles.formGroup}>
                        <TextInput
                            style={styles.textArea}
                            placeholder="Description / Comments"
                            placeholderTextColor="#6B7280"
                            multiline={true}
                            numberOfLines={3}
                            textAlignVertical="top"
                        />

                        <View style={styles.inputWithLeftIcon}>
                            <Feather name="percent" size={18} color="#111827" style={styles.leftIcon} />
                            <TextInput style={styles.flexInputWithLeftPadding} placeholder="Discount" placeholderTextColor="#6B7280" keyboardType="numeric" />
                        </View>
                    </View>

                </ScrollView>

                {/* Footer Actions */}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.backButtonOutline} onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Text style={styles.nextButtonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
    container: { flex: 1 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 8,
    },
    backButton: { width: 40, height: 40, justifyContent: 'center' },
    headerTitleContainer: { flex: 1, alignItems: 'center', paddingRight: 40 },
    headerTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
    headerSubtitle: { fontSize: 13, color: '#9CA3AF', marginTop: 2, fontWeight: '500' },
    stepHighlight: { color: '#08C11A' }, // Green text
    progressBarContainer: { height: 3, backgroundColor: '#E5E7EB', width: '100%' },
    progressBarFill: { height: 3, backgroundColor: '#08C11A', width: '100%' }, // Fully filled
    scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 30 },
    formGroup: { marginBottom: 20, gap: 16 },
    input: {
        height: 56,
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 6,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#111827',
    },
    inputWithIcon: {
        height: 56,
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 6,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputWithLeftIcon: {
        height: 56,
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
    leftIcon: { marginRight: 12 },
    flexInput: { flex: 1, fontSize: 16, color: '#111827' },
    flexInputWithLeftPadding: { flex: 1, fontSize: 16, color: '#111827' },
    dueAmountText: { fontSize: 15, color: '#4B5563', marginBottom: 20, marginLeft: 4 },
    textArea: {
        height: 100,
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 6,
        paddingHorizontal: 16,
        paddingTop: 16,
        fontSize: 16,
        color: '#111827',
    },
    footer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
        backgroundColor: '#FFFFFF',
    },
    backButtonOutline: {
        width: 64,
        height: 56,
        borderWidth: 1,
        borderColor: '#111827',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    nextButton: {
        flex: 1,
        height: 56,
        backgroundColor: '#000000',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', letterSpacing: 1 },
});
