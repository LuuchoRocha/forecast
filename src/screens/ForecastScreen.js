import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function formatTemperature(f) {
  return (
    (Math.round((f - 273.15) * 100) / 100).toString().replace('.', ',') + 'º'
  );
}

export default function ForecastScreen({route, navigation}) {
  const data = JSON.parse(route.params.data);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.field}>
        <Text style={styles.label}>Temperature</Text>
        <Text style={styles.value}>{formatTemperature(data.main.temp)}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Pressure</Text>
        <Text style={styles.value}>{data.main.pressure}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Humidity</Text>
        <Text style={styles.value}>{data.main.humidity}</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Max Temperature</Text>
        <Text style={styles.value}>
          {formatTemperature(data.main.temp_max)}
        </Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Min Temperature</Text>
        <Text style={styles.value}>
          {formatTemperature(data.main.temp_min)}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#044291',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 8,
    flex: 0,
  },
  field: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    flexDirection: "row"
  },
  label: {
    flex: 1,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  value: {
    flex: 1,
    color: '#ffffff',
    fontSize: 24,
    textAlign: "right",
  },
});
