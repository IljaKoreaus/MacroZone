import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="meals" options={{ headerShown: false }} />
  </Stack>);
}
