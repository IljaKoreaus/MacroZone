import { Stack } from "expo-router";
import { colors } from "@/styles/global";
import { MEALS_KEY, Meal, getMeals } from "@/storage/meals";
import AsyncStorage from "@react-native-async-storage/async-storage";

// CLEAR LOCAL STORAGE BEFORE OPENING APP
// MADE FOR TESTING
AsyncStorage.clear();

export default function RootLayout() {
  return (<Stack screenOptions={ { headerShown: false } }>
    <Stack.Screen name='(tabs)'/>
  </Stack>);
}
