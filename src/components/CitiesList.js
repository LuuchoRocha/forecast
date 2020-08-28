import React from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CitiesList({ data, loading }) {
  function renderItem({ item }) {
    return (
      <TouchableOpacity>
        <Text style={{ flex: 1, color: "#ffffff", fontSize: 16, padding: 16 }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }

  function keyExtractor(item) {
    return item;
  }

  if (loading) {
    return <ActivityIndicator size={96} color="#ffffff" style={styles.loading} />;
  } else {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}


const styles = StyleSheet.create({
  loading: {
    padding: 24,
  }
});