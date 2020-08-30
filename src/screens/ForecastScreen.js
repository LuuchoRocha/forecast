import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {ScrollView} from 'react-native-gesture-handler';

const CARDINALS = [
  'North',
  'North-northeast',
  'Northeast',
  'East-northeast',
  'East',
  'East-southeast',
  'Southeast',
  'South-Southeast',
  'South',
  'South-southwest',
  'Southwest',
  'West-southwest',
  'West',
  'West-northwest',
  'Northwest',
  'North-northwest',
];

function formatTemperature(t) {
  return (
    (Math.round((t - 273.15) * 10) / 10).toString().replace('.', ',') + ' ºC'
  );
}
function formatWindDirection(w) {
  return CARDINALS[Math.floor(w / 22.5 + 0.5) % 16];
}

export default function ForecastScreen({route, navigation}) {
  const data = JSON.parse(route.params.data);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{data.name}</Text>
          <Image
            style={styles.icon}
            source={{
              uri:
                'http://openweathermap.org/img/wn/' +
                data.weather[0].icon +
                '@4x.png',
            }}
          />
          <Text style={styles.description}>{data.weather[0].description}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Temperature</Text>
          <Text style={styles.value}>{formatTemperature(data.main.temp)}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Feels like</Text>
          <Text style={styles.value}>
            {formatTemperature(data.main.feels_like)}
          </Text>
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
        <View style={styles.field}>
          <Text style={styles.label}>Min Temperature</Text>
          <Text style={styles.value}>
            {formatTemperature(data.main.temp_min)}
          </Text>
        </View>
        <View style={styles.lastField}>
          <Text style={styles.label}>Wind</Text>
          <Text style={styles.value}>
            {formatWindDirection(data.wind.deg)} {data.wind.speed} km/h
          </Text>
        </View>
        <MapView
          scrollEnabled={false}
          zoomEnabled={false}
          rotateEnabled={false}
          pitchEnabled={false}
          toolbarEnabled={false}
          initialRegion={{
            latitude: data.coord.lat,
            longitude: data.coord.lon,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: data.coord.lat,
              longitude: data.coord.lon,
            }}
            title={data.main.name}
          />
        </MapView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#044291',
  },
  header: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 96,
    width: 96,
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 0,
    marginTop: 24,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'uppercase',
    marginBottom: 24,
  },
  field: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    padding: 12,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  lastField: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    padding: 12,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  label: {
    flex: 0,
    color: '#ffffff',
  },
  value: {
    flex: 1,
    color: '#ffffff',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
});
