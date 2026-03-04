import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddTagScreen() {
    const router = useRouter();
    const [inputText, setInputText] = useState('');
    const [tags, setTags] = useState([
        'GYM',
        'Zumba Fitness',
        'Dance Studio',
        'Personal Fitness',
        'Protein House'
    ]);

    const handleAddTag = () => {
        if (inputText.trim().length > 0 && !tags.includes(inputText.trim())) {
            setTags([...tags, inputText.trim()]);
            setInputText('');
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleDone = () => {
        // Navigate to the main app dashboard
        router.replace('/(tabs)');
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

                    <Text style={styles.title}>Share the category that{'\n'}best describes your{'\n'}business!</Text>

                    <Text style={styles.subtitle}>
                        Add Tag <Text style={styles.subtitleMin}>(min.1)</Text>
                    </Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Search Tags"
                            placeholderTextColor="#9CA3AF"
                            value={inputText}
                            onChangeText={setInputText}
                            onSubmitEditing={handleAddTag}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={handleAddTag}>
                            <Feather name="plus" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView contentContainerStyle={styles.tagsContainer} bounces={false}>
                        {tags.map((tag) => (
                            <View key={tag} style={styles.tagItem}>
                                <Text style={styles.tagText}>{tag}</Text>
                                <TouchableOpacity onPress={() => handleRemoveTag(tag)} style={styles.closeIconBox}>
                                    <Feather name="x" size={14} color="#FFF" />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <View style={styles.bottomSection}>
                    <TouchableOpacity
                        style={[styles.doneButton, tags.length === 0 && styles.doneButtonDisabled]}
                        onPress={handleDone}
                        activeOpacity={0.8}
                        disabled={tags.length === 0}
                    >
                        <Text style={styles.doneButtonText}>DONE</Text>
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
        flex: 1,
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: '800',
        color: '#0F172A',
        lineHeight: 40,
        letterSpacing: -0.5,
        marginBottom: 24,
    },
    subtitle: {
        fontSize: 16,
        color: '#0F172A',
        marginBottom: 8,
    },
    subtitleMin: {
        color: '#9CA3AF',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#4ADE80', // Light green border
        borderRadius: 8,
        height: 56,
        paddingHorizontal: 16,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#0F172A',
    },
    addButton: {
        width: 32,
        height: 32,
        backgroundColor: '#F3F4F6',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12,
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        paddingBottom: 20,
    },
    tagItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4ADE80', // Vibrant green background matching design
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    tagText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        marginRight: 8,
    },
    closeIconBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSection: {
        paddingBottom: 40,
    },
    doneButton: {
        backgroundColor: '#000000',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    doneButtonDisabled: {
        backgroundColor: '#9CA3AF',
    },
    doneButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 1,
    },
});
