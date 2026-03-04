import { Stack } from 'expo-router';

export default function AuthLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="otp" />
            <Stack.Screen name="otp-success" />
            <Stack.Screen name="business-name" />
            <Stack.Screen name="add-tag" />
        </Stack>
    );
}
