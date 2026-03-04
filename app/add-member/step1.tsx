import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddMemberStep1Screen() {
    const router = useRouter();

    const handleNext = () => {
        router.push('/add-member/step2');
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
                            STEP <Text style={styles.stepHighlight}>1</Text> / 2 <Text style={styles.stepHighlight}>Member Details</Text>
                        </Text>
                    </View>
                </View>

                {/* Progress Bar */}
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBarFill} />
                </View>

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                    {/* Profile Photo Upload */}
                    <View style={styles.profileSection}>
                        <View style={styles.profilePlaceholder}>
                            <Ionicons name="person" size={60} color="#FFFFFF" />
                            <TouchableOpacity style={styles.addPhotoIcon}>
                                <Feather name="image" size={14} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Form Fields */}
                    <View style={styles.formGroup}>
                        <TextInput style={styles.input} placeholder="First Name / Last Name" placeholderTextColor="#6B7280" />
                        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#6B7280" keyboardType="email-address" autoCapitalize="none" />

                        <View style={styles.inputWithIcon}>
                            <TextInput style={styles.flexInput} placeholder="Date of Birth" placeholderTextColor="#6B7280" editable={false} />
                            <Feather name="calendar" size={20} color="#111827" />
                        </View>

                        <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#6B7280" keyboardType="phone-pad" />
                    </View>

                    {/* Gender */}
                    <Text style={styles.sectionLabel}>Gender :</Text>
                    <View style={styles.radioGroupRow}>
                        <TouchableOpacity style={[styles.radioItem, styles.radioItemActive]}>
                            <Text style={styles.radioText}>Male</Text>
                            <View style={[styles.radioCircle, styles.radioCircleActive]}>
                                <View style={styles.radioDot} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radioItem}>
                            <Text style={styles.radioText}>Female</Text>
                            <View style={styles.radioCircle} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.radioItem}>
                            <Text style={styles.radioText}>Others</Text>
                            <View style={styles.radioCircle} />
                        </TouchableOpacity>
                    </View>

                    {/* Upload ID */}
                    <Text style={styles.sectionLabel}>Upload ID :</Text>
                    <Text style={styles.helperText}>Upload a photo of your valid Govt. Id for verification and privacy purpose.</Text>
                    <TouchableOpacity style={styles.uploadBox}>
                        <View style={styles.uploadIconCircle}>
                            <Feather name="upload-cloud" size={24} color="#000" />
                        </View>
                        <Text style={styles.uploadLinkText}>Tap to upload photo</Text>
                        <Text style={styles.uploadSubtext}>PNG, JPG or PDF (max. 800x400 px)</Text>
                    </TouchableOpacity>

                    {/* Training Type */}
                    <Text style={styles.sectionLabel}>Training Type :</Text>
                    <View style={styles.radioGroupRowStretch}>
                        <TouchableOpacity style={styles.radioItemStretch}>
                            <Text style={styles.radioText}>General</Text>
                            <View style={styles.radioCircle} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.radioItemStretch, styles.radioItemActive]}>
                            <Text style={styles.radioText}>Personal</Text>
                            <View style={[styles.radioCircle, styles.radioCircleActive]}>
                                <View style={styles.radioDot} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Membership ID & Batch */}
                    <View style={styles.formGroup}>
                        <TextInput style={styles.input} placeholder="Membership Id" placeholderTextColor="#6B7280" />

                        <View style={styles.inputGroupTopLabeled}>
                            <Text style={styles.inputLabelInset}>Batch / Group</Text>
                            <TextInput style={styles.inputBare} value="No Batch Found" editable={false} />
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
    progressBarFill: { height: 3, backgroundColor: '#08C11A', width: '50%' }, // Half filled
    scrollContent: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 20 },
    profileSection: { alignItems: 'center', marginBottom: 24 },
    profilePlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#D1D5DB', // Gray placeholder
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'visible',
    },
    addPhotoIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    formGroup: { marginBottom: 20, gap: 16 },
    input: {
        height: 56,
        borderWidth: 1,
        borderColor: '#626262', // Darker gray border as per design
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
    flexInput: { flex: 1, fontSize: 16, color: '#111827' },
    sectionLabel: { fontSize: 16, fontWeight: '600', color: '#111827', marginBottom: 12 },
    radioGroupRow: { flexDirection: 'row', gap: 10, marginBottom: 24 },
    radioItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 6,
        paddingHorizontal: 12,
        height: 48,
    },
    radioItemActive: { borderColor: '#08C11A' },
    radioText: { fontSize: 14, color: '#111827' },
    radioCircle: { width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#6B7280', justifyContent: 'center', alignItems: 'center' },
    radioCircleActive: { borderColor: '#08C11A' },
    radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#08C11A' },
    helperText: { fontSize: 13, color: '#6B7280', marginBottom: 16, lineHeight: 18 },
    uploadBox: {
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderStyle: 'dashed',
        borderRadius: 8,
        paddingVertical: 24,
        alignItems: 'center',
        marginBottom: 24,
    },
    uploadIconCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#F3F4F6', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
    uploadLinkText: { fontSize: 14, fontWeight: '600', color: '#3B82F6', marginBottom: 4 }, // Blue link
    uploadSubtext: { fontSize: 12, color: '#6B7280' },
    radioGroupRowStretch: { flexDirection: 'row', gap: 12, marginBottom: 24 },
    radioItemStretch: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 6,
        paddingHorizontal: 16,
        height: 56,
    },
    inputGroupTopLabeled: {
        position: 'relative',
        height: 56,
        borderWidth: 1,
        borderColor: '#626262',
        borderRadius: 6,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    inputLabelInset: {
        position: 'absolute',
        top: -10,
        left: 12,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 4,
        fontSize: 12,
        color: '#6B7280',
    },
    inputBare: { fontSize: 16, color: '#111827' },
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
