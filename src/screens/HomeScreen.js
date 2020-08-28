import React, { useState, useEffect } from "react";
import { Text, StyleSheet, AsyncStorage, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchInput, CitiesList } from "../components";
import { OpenWeather as API } from "../api";

export default function HomeScreen({ navigation }) {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadSearches() {
    const searches = await AsyncStorage.getItem("searches");
    if (searches) {
      setList(JSON.parse(searches));
    }
  }

  async function saveSearch(city) {
    try {
      let searches = JSON.parse(await AsyncStorage.getItem("searches"));
      if (!searches) {
        searches = [city];
      } else {
        if (searches.includes(city)) {
          searches = searches.filter((item) => item !== city);
        } else {
          if (searches.length == 5) {
            searches.pop();
          }
        }
        searches.unshift(city);
      }
      await AsyncStorage.setItem("searches", JSON.stringify(searches));
      loadSearches();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSearch() {
    try {
      if (query.length > 0) {
        setLoading(true);
        const response = await API.getCurrent(query);
        const jsonResponse = await response.json();
        if (jsonResponse.cod == 200) {
          saveSearch(jsonResponse.name);
          navigation.navigate('Forecast', { data: JSON.stringify(jsonResponse) });
        } else {
          Alert.alert("Not found", "Coudln't find any results for " + query);
        }
      }
    } catch (error) {
      Alert.alert("Error", error.toString());
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSearches();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FORECAST</Text>
      <SearchInput
        value={query}
        autoFocus={true}
        placeholder="Search cities by name..."
        onChangeText={setQuery}
        onSearch={handleSearch}
      />
      <CitiesList data={list} loading={loading} />
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
