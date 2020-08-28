import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DebouncedTextInput } from "../components";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FORECAST</Text>
      <DebouncedTextInput
        autoFocus={true}
        placeholder="Search cities by name..."
        delay={1000}
        onChange={(val) => {
          console.log(val);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#044291",
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
});
