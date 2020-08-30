import React from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

export default function CitiesList({data, loading, onPress}) {
  function renderItem({item}) {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <Text style={{flex: 1, color: '#ffffff', fontSize: 16, padding: 16}}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }

  function keyExtractor(item) {
    return item;
  }

  if (loading) {
    return (
      <ActivityIndicator size={96} color="#ffffff" style={styles.loading} />
    );
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
  },
});
