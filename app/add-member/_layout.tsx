import { Stack } from 'expo-router';

export default function AddMemberLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="step1" />
            <Stack.Screen name="step2" />
            <Stack.Screen name="success" />
        </Stack>
    );
}
