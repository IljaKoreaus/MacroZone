import { Text, View, Platform, StyleSheet, ScrollView } from "react-native";
import * as Device from "expo-device";
import { globalStyles } from "../styles/global";
import HomeHeader from "../components/HomeHeader";

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
    </ScrollView>
  );
}
