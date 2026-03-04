import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function MembersScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('All Members');

    const handleAddMember = () => {
        router.push('/add-member/step1');
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Green Header Section */}
            <View style={styles.headerBackground}>
                <SafeAreaView>
                    <View style={styles.headerTop}>
                        <TouchableOpacity style={styles.menuIcon}>
                            <Feather name="menu" size={24} color="#FFF" />
                        </TouchableOpacity>

                        <View style={styles.headerTitleContainer}>
                            <Text style={styles.businessName}>Business 1</Text>
                            <Text style={styles.businessLocation}>Bhubaneswar, Odisha, India</Text>
                        </View>

                        <TouchableOpacity style={styles.bellIcon}>
                            <Feather name="bell" size={24} color="#FFF" />
                            <View style={styles.badge} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>

            {/* Overlapping Search Bar */}
            <View style={styles.searchContainer}>
                <Feather name="search" size={20} color="#000" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search location"
                    placeholderTextColor="#6B7280"
                />
            </View>

            <View style={styles.content}>
                {/* Horizontal Filters */}
                <View style={styles.filterSection}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
                        {['All Members', 'Active', 'Expired'].map((tab) => (
                            <TouchableOpacity
                                key={tab}
                                onPress={() => setActiveTab(tab)}
                                style={[styles.filterChip, activeTab === tab ? styles.filterChipActive : styles.filterChipInactive]}
                            >
                                <Text style={activeTab === tab ? styles.filterChipTextActive : styles.filterChipTextInactive}>
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <TouchableOpacity style={styles.filterSettingsBtn}>
                        <Ionicons name="options-outline" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Empty State */}
                <View style={styles.emptyStateContainer}>
                    <View style={styles.emptyStateImagePlaceholder}>
                        {/* Visual representation of the question marks boxes from design */}
                        <View style={[styles.emptyBox, { transform: [{ translateX: -20 }, { translateY: 0 }] }]}>
                            <View style={styles.questionMarkBox}><Text style={styles.questionMark}>?</Text></View>
                            <View style={styles.linesCol}>
                                <View style={styles.lineLong} />
                                <View style={styles.lineShort} />
                            </View>
                        </View>
                        <View style={[styles.emptyBox, { transform: [{ translateX: 20 }, { translateY: -10 }] }]}>
                            <View style={styles.questionMarkBox}><Text style={styles.questionMark}>?</Text></View>
                            <View style={styles.linesCol}>
                                <View style={styles.lineLong} />
                                <View style={styles.lineShort} />
                            </View>
                        </View>
                        <View style={[styles.emptyBox, { transform: [{ translateX: -10 }, { translateY: -20 }] }]}>
                            <View style={styles.questionMarkBox}><Text style={styles.questionMark}>?</Text></View>
                            <View style={styles.linesCol}>
                                <View style={styles.lineLong} />
                                <View style={styles.lineShort} />
                            </View>
                        </View>
                    </View>

                    <Text style={styles.emptyTitle}>No Members!</Text>
                    <Text style={styles.emptySubtitle}>Add Someone to view here</Text>
                </View>
            </View>

            {/* Floating Action Button */}
            <TouchableOpacity style={styles.fab} onPress={handleAddMember} activeOpacity={0.8}>
                <Feather name="plus" size={32} color="#08C11A" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    headerBackground: {
        backgroundColor: '#088F52', // Darker standard green as per design
        paddingBottom: 40,
    },
    headerTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 40 : 10,
    },
    menuIcon: {
        padding: 4,
    },
    headerTitleContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    businessName: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700',
    },
    businessLocation: {
        color: '#D1FAE5', // Light green-tinted white
        fontSize: 13,
        marginTop: 2,
    },
    bellIcon: {
        padding: 4,
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 8,
        height: 8,
        backgroundColor: '#EF4444', // Red dot for notification
        borderRadius: 4,
    },
    searchContainer: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginTop: -28, // Overlaps the green header exactly as in design
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 56,
        borderRadius: 28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
        zIndex: 10,
    },
    searchIcon: {
        marginRight: 12,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#111827',
    },
    content: {
        flex: 1,
    },
    filterSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 24,
        marginBottom: 20,
    },
    filterScroll: {
        paddingRight: 10,
        gap: 12,
    },
    filterChip: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
    },
    filterChipActive: {
        backgroundColor: '#088F52',
    },
    filterChipInactive: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    filterChipTextActive: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 13,
    },
    filterChipTextInactive: {
        color: '#4B5563',
        fontWeight: '500',
        fontSize: 13,
    },
    filterSettingsBtn: {
        width: 40,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginLeft: 10,
    },
    emptyStateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 80, // Space for FAB
    },
    emptyStateImagePlaceholder: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
        marginBottom: 20,
    },
    emptyBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        width: 140,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    questionMarkBox: {
        width: 24,
        height: 24,
        backgroundColor: '#111827', // Dark box with white ?
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginRight: 12,
    },
    questionMark: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    linesCol: {
        flex: 1,
        gap: 6,
    },
    lineLong: {
        height: 4,
        backgroundColor: '#E5E7EB',
        width: '80%',
        borderRadius: 2,
    },
    lineShort: {
        height: 4,
        backgroundColor: '#E5E7EB',
        width: '40%',
        borderRadius: 2,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 8,
    },
    emptySubtitle: {
        fontSize: 14,
        color: '#9CA3AF',
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 6,
        zIndex: 20,
    },
});
