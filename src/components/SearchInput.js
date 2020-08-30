import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput as RNTextInput,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function SearchInput({
  value,
  autoFocus,
  placeholder,
  onChangeText,
  onSearch,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.inputWrapper}>
        <Ionicons
          name="md-search"
          color="#ffffff"
          size={24}
          style={styles.icon}
        />
        <RNTextInput
          value={value}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.input}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Text style={styles.buttonText}>SEARCH</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputWrapper: {
    flex: 1,
    borderRadius: 2,
    backgroundColor: 'rgba(0, 15, 30, 0.5)',
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  icon: {
    flex: 0,
    marginLeft: 12,
  },
  input: {
    flex: 1,
    fontSize: 18,
    padding: 8,
    color: '#ffffff',
    height: 40,
  },
  button: {
    backgroundColor: 'rgba(0, 15, 30, 0.5)',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    flex: 0,
    marginRight: 16,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 12,
  },
});
