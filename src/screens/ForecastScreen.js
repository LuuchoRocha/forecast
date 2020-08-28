import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function formatTemperature(f) {
  return Math.round((f - 273.15) * 100) / 100;
}

export default function ForecastScreen({ route, navigation }) {
  const data = JSON.parse(route.params.data);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Weather</Text>
        <Text style={styles.value}>{formatTemperature(data.main.temp)}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#044291",
    justifyContent: "flex-start",
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
    flex: 0,
  },
  field: {
    flex: 0,
    flexDirection: "row",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
    marginRight: 8,
  },
  value: {
    color: "#ffffff",
    fontSize: 24,
    marginLeft: 8,
  },
});
