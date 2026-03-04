import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function TransactionSuccessScreen() {
    const router = useRouter();

    const handleDone = () => {
        // Navigate back to the main members dashboard
        router.replace('/(tabs)/members');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar style="dark" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color="#000" />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>

                {/* Animated Checkmark UI with rays/sparkles in background */}
                <View style={styles.badgeContainer}>
                    {/* Decorative background circle mapping rays in design */}
                    <View style={styles.raysBackground} />

                    <View style={styles.checkBadge}>
                        <Feather name="check" size={60} color="#FFF" />
                    </View>
                </View>

                {/* Small Tag */}
                <View style={styles.tagWrap}>
                    <Text style={styles.tagText}>Successfully Activated</Text>
                </View>

                {/* Details */}
                <Text style={styles.amountText}>₹11400</Text>

                <Text style={styles.messageText}>
                    Thank you for investing in a better experience with us.
                </Text>
                <Text style={styles.subMessageText}>
                    The transaction takes less than 10 min.
                </Text>

            </View>

            {/* Footer Actions */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.doneButton} onPress={handleDone} activeOpacity={0.8}>
                    <Text style={styles.doneButtonText}>DONE</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.receiptButton}>
                    <Feather name="file-text" size={18} color="#000" />
                    <Text style={styles.receiptButtonText}>SHARE RECIEPT</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        paddingHorizontal: 16,
        paddingTop: 12,
    },
    backButton: { width: 40, height: 40, justifyContent: 'center' },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 32,
        marginTop: 40,
    },
    badgeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        width: width * 0.8,
        height: width * 0.5,
        position: 'relative',
    },
    raysBackground: {
        position: 'absolute',
        width: width,
        height: width,
        backgroundColor: '#F3FCF6', // Very subtle green background for rays area
        borderRadius: width / 2,
        opacity: 0.5,
        zIndex: 0,
    },
    checkBadge: {
        width: 120,
        height: 120,
        backgroundColor: '#08C11A', // Bright green
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
        // Add scallop/wavy edges effect approximation if desired using shadow
        shadowColor: '#08C11A',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    tagWrap: {
        backgroundColor: '#DCFCE7', // Light green background
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        marginBottom: 24,
    },
    tagText: {
        color: '#059669', // Dark emerald green text
        fontSize: 14,
        fontWeight: '600',
    },
    amountText: {
        fontSize: 36,
        fontWeight: '800',
        color: '#111827',
        marginBottom: 16,
    },
    messageText: {
        fontSize: 16,
        color: '#111827',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 24,
        paddingHorizontal: 10,
    },
    subMessageText: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
    },
    footer: {
        paddingHorizontal: 24,
        paddingBottom: 40,
        paddingTop: 20,
    },
    doneButton: {
        backgroundColor: '#000000',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    doneButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
    },
    receiptButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
    },
    receiptButtonText: {
        color: '#000000',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
        marginLeft: 8,
    },
});
