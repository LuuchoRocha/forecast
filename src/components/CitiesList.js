import React from 'react';
import {
  Alert,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import {OpenWeather as API} from '../api';

export default function CitiesList({data, loading, navigation}) {
  async function handleOnPress(city) {
    try {
      const response = await API.getCurrent(city);
      const jsonResponse = await response.json();
      if (jsonResponse.cod == 200) {
        navigation.navigate('Forecast', {
          data: JSON.stringify(jsonResponse),
        });
      } else {
        Alert.alert('Not found', "Coudln't find any results for " + query);
      }
    } catch (error) {
      Alert.alert('Error', error.toString());
    }
  }

  function renderItem({item}) {
    return (
      <TouchableOpacity onPress={() => handleOnPress(item)}>
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
