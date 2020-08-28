import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { debounce } from "lodash";

export default function DebouncedTextInput({ autoFocus, placeholder, onChange, delay }) {
  const [value, setValue] = useState("");
  const debouncedOnChange = useCallback(debounce(onChange, delay || 200), []);
  const onChangeText = (value) => {
    setValue(value);
    debouncedOnChange(value);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoFocus={autoFocus}
      />
      <Ionicons
        name="md-search"
        size={24}
        color="#044291"
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 2,
    backgroundColor: "rgba(0, 15, 30, 0.5)",
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    flex: 0,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 8,
    color: "#ffffff",
  },
});
