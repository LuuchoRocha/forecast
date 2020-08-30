import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ForecastScreen} from '../screens';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Forecast" component={ForecastScreen} />
    </Stack.Navigator>
  );
}
