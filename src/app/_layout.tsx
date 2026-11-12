import { Stack } from "expo-router";
import { colors } from "@/styles/global";

export default function RootLayout() {
  return (<Stack screenOptions={{ headerStyle: {backgroundColor: colors.header }, headerTintColor: '#fff'}}>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="meals" options={{ headerShown: false }} />
    <Stack.Screen name="add-meal" options={{ headerShown: false }}/>
  </Stack>);
}
