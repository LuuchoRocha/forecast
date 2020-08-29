import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function formatTemperature(f) {
  return (
    (Math.round((f - 273.15) * 10) / 10).toString().replace('.', ',') + ' ºC'
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
        <Text style={styles.value}>{data.main.pressure} hPa</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Humidity</Text>
        <Text style={styles.value}>{data.main.humidity} %</Text>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Max Temperature</Text>
        <Text style={styles.value}>
          {formatTemperature(data.main.temp_max)}
        </Text>
      </View>
      <View style={styles.lastField}>
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
    marginHorizontal: 6,
    padding: 12,
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  lastField: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
    padding: 12,
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  label: {
    flex: 1,
    color: '#ffffff',
    fontSize: 18,
  },
  value: {
    flex: 1,
    color: '#ffffff',
    fontSize: 18,
    textAlign: "right",
    fontWeight: 'bold',
  },
});
